
// export const validate=values=>{ 
//     let errors = {};
//     if(!values.userName) {
//         errors.userName = "user name is required";
//     }

//     if(!values.email){
//         errors.email = "email is required";
//     }

//     if(!values.password){
//         errors.password = "password is required";
//     }

//     return errors;
// }
import * as yup from 'yup';
export const registerSchema=yup.object  ({
    userName:yup.string().required("username is required").min(3,"must be at least 3 char").max(30,"max is 30 characters"),
    email:yup.string().required("email is required").email(),
    password:yup.string().required("password is required").min(3,"must be at least 3 char").max(30,"max is 30 characters")
  })

export const loginSchema=yup.object({
  email:yup.string().required("email is required").email(),
  password:yup.string().required("password is required").min(3,"must be at least 3 char").max(30,"max is 30 characters")
})


export const sendCodeSchema=yup.object({
  email:yup.string().required("email is required").email(),
})

export const forgotPasswordSchema=yup.object  ({
  code:yup.string().required("code is required").length(4,"4 characters"),
  email:yup.string().required("email is required").email(),
  password:yup.string().required("password is required").min(3,"must be at least 3 char").max(30,"max is 30 characters")
})