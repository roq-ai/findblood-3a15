import * as yup from 'yup';

export const staffMemberValidationSchema = yup.object().shape({
  job_title: yup.string().required(),
  department: yup.string().required(),
  user_id: yup.string().nullable().required(),
  hospital_id: yup.string().nullable().required(),
});
