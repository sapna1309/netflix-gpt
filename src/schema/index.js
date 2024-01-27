import * as Yup from 'yup';

export const signUpSchema = Yup.object({
    name:Yup.string().min(4).max(30).required('Please enter your name'),
    email:Yup.string().email().required('Please enter your email'),
    password:Yup.string().min(6).max(20).required('Please enter your password'),
    confirm_password:Yup.string().required().oneOf([Yup.ref('password'), null],"Password must match"),
})

export const signInSchema = Yup.object({
    email:Yup.string().email().required('Please enter your email'),
    password:Yup.string().min(6).max(20).required('Please enter your password'),
})