/* eslint-disable prettier/prettier */
import * as Yup from 'yup';
export const filterSchema = Yup.object().shape({
  from: Yup.string().required('Required'),
  to: Yup.string().required('Required'),
});
