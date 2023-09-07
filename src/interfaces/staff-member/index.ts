import { UserInterface } from 'interfaces/user';
import { HospitalInterface } from 'interfaces/hospital';
import { GetQueryInterface } from 'interfaces';

export interface StaffMemberInterface {
  id?: string;
  job_title: string;
  department: string;
  user_id: string;
  hospital_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  hospital?: HospitalInterface;
  _count?: {};
}

export interface StaffMemberGetQueryInterface extends GetQueryInterface {
  id?: string;
  job_title?: string;
  department?: string;
  user_id?: string;
  hospital_id?: string;
}
