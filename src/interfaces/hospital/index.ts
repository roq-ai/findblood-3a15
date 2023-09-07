import { BloodBankInterface } from 'interfaces/blood-bank';
import { BloodRequestInterface } from 'interfaces/blood-request';
import { StaffMemberInterface } from 'interfaces/staff-member';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface HospitalInterface {
  id?: string;
  description?: string;
  address?: string;
  city?: string;
  state?: string;
  zip_code?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  blood_bank?: BloodBankInterface[];
  blood_request?: BloodRequestInterface[];
  staff_member?: StaffMemberInterface[];
  user?: UserInterface;
  _count?: {
    blood_bank?: number;
    blood_request?: number;
    staff_member?: number;
  };
}

export interface HospitalGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  address?: string;
  city?: string;
  state?: string;
  zip_code?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
