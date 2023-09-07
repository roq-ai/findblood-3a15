import * as yup from 'yup';

export const bloodBankValidationSchema = yup.object().shape({
  blood_type: yup.string().required(),
  quantity: yup.number().integer().required(),
  hospital_id: yup.string().nullable().required(),
});
