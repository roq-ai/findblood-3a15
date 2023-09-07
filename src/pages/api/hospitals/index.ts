import type { NextApiRequest, NextApiResponse } from 'next';
import { roqClient } from 'server/roq';
import { prisma } from 'server/db';
import {
  authorizationValidationMiddleware,
  errorHandlerMiddleware,
  notificationHandlerMiddleware,
} from 'server/middlewares';
import { hospitalValidationSchema } from 'validationSchema/hospitals';
import { convertQueryToPrismaUtil, getOrderByOptions, parseQueryParams } from 'server/utils';
import { getServerSession } from '@roq/nextjs';
import { GetManyQueryOptions } from 'interfaces';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { roqUserId, user } = await getServerSession(req);
  switch (req.method) {
    case 'GET':
      return getHospitals();
    case 'POST':
      return createHospital();
    default:
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  async function getHospitals() {
    const {
      limit: _limit,
      offset: _offset,
      order,
      ...query
    } = parseQueryParams(req.query) as Partial<GetManyQueryOptions>;
    const limit = parseInt(_limit as string, 10) || 20;
    const offset = parseInt(_offset as string, 10) || 0;
    const response = await prisma.hospital
      .withAuthorization({
        roqUserId,
        tenantId: user.tenantId,
        roles: user.roles,
      })
      .findManyPaginated({
        ...convertQueryToPrismaUtil(query, 'hospital'),
        take: limit,
        skip: offset,
        ...(order?.length && {
          orderBy: getOrderByOptions(order),
        }),
      });
    return res.status(200).json(response);
  }

  async function createHospital() {
    await hospitalValidationSchema.validate(req.body);
    const body = { ...req.body };
    if (body?.blood_bank?.length > 0) {
      const create_blood_bank = body.blood_bank;
      body.blood_bank = {
        create: create_blood_bank,
      };
    } else {
      delete body.blood_bank;
    }
    if (body?.blood_request?.length > 0) {
      const create_blood_request = body.blood_request;
      body.blood_request = {
        create: create_blood_request,
      };
    } else {
      delete body.blood_request;
    }
    if (body?.staff_member?.length > 0) {
      const create_staff_member = body.staff_member;
      body.staff_member = {
        create: create_staff_member,
      };
    } else {
      delete body.staff_member;
    }
    const data = await prisma.hospital.create({
      data: body,
    });
    await notificationHandlerMiddleware(req, data.id);
    return res.status(200).json(data);
  }
}

export default function apiHandler(req: NextApiRequest, res: NextApiResponse) {
  return errorHandlerMiddleware(authorizationValidationMiddleware(handler))(req, res);
}
