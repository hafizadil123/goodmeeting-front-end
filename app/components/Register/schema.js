import * as Yup from 'yup';
export const SignupSchema = Yup.object().shape({
  fullName: Yup.string().required('Required'),
  password: Yup.string()
    .min(6, 'Password too short!')
    .max(10, 'Password should less than 10 digits')
    .required('Required'),
  email: Yup.string()
    .email('Invalid email Address')
    .required('Required'),
  confirmPassword: Yup.string()
    .required('Required')
    .when('password', {
      is: val => !!(val && val.length > 0),
      then: Yup.string().oneOf(
        [Yup.ref('password')],
        'Both password need to be the same',
      ),
    }),
});
export const phoneNumberMask = [
  '(',
  /[1-9]/,
  /\d/,
  /\d/,
  ')',
  ' ',
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  '-',
  /\d/,
  /\d/,
  /\d/,
];
export const LoginShema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email Address')
    .required('Required'),
  password: Yup.string().required('Required'),
});
