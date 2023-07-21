import * as yup from 'yup';

export const contentValidationSchema = yup.object().shape({
  title: yup.string().required(),
  description: yup.string(),
  image: yup.string(),
  video: yup.string(),
  location: yup.string(),
  time: yup.date(),
  is_verified: yup.boolean(),
  organization_id: yup.string().nullable(),
});
