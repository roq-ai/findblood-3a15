import { UserInterface } from 'interfaces/user';
import { HospitalInterface } from 'interfaces/hospital';
import { GetQueryInterface } from 'interfaces';

export interface BloodRequestInterface {
  id?: string;
  requester_name: string;
  blood_type: string;
  quantity: number;
  status: string;
  user_id: string;
  hospital_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  hospital?: HospitalInterface;
  _count?: {};
}

export interface BloodRequestGetQueryInterface extends GetQueryInterface {
  id?: string;
  requester_name?: string;
  blood_type?: string;
  status?: string;
  user_id?: string;
  hospital_id?: string;
}
