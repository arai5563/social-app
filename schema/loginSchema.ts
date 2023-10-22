import * as Yup from 'yup';

export const loginSchema = Yup.object({
  email: Yup.string()
    .email('Field Should Contain a Valid E-Mail')
    .max(255)
    .required('Please Enter Your Email'),
  password: Yup.string()
    .required('Password Is Required')
    .matches(/^\S*$/, 'Password Cannot Contain Spaces'),
});

export const signupSchema = Yup.object({
  // username: Yup.string()
  //   .required('Username Is Required'),
  email: Yup.string()
    .email('Field Should Contain a Valid E-Mail')
    .max(255)
    .required('Please Enter Your Email'),
  password: Yup.string()
    .required('Password Is Required')
    .matches(/^\S*$/, 'Password Cannot Contain Spaces'),
});
