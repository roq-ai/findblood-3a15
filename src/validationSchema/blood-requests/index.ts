import * as yup from 'yup';

export const bloodRequestValidationSchema = yup.object().shape({
  requester_name: yup.string().required(),
  blood_type: yup.string().required(),
  quantity: yup.number().integer().required(),
  status: yup.string().required(),
  user_id: yup.string().nullable().required(),
  hospital_id: yup.string().nullable().required(),
});
