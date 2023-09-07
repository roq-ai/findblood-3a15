import { HospitalInterface } from 'interfaces/hospital';
import { GetQueryInterface } from 'interfaces';

export interface BloodBankInterface {
  id?: string;
  blood_type: string;
  quantity: number;
  hospital_id: string;
  created_at?: any;
  updated_at?: any;

  hospital?: HospitalInterface;
  _count?: {};
}

export interface BloodBankGetQueryInterface extends GetQueryInterface {
  id?: string;
  blood_type?: string;
  hospital_id?: string;
}
