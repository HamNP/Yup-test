import * as Yup from 'yup'

export const loginSchema2 = Yup.object({
  username: Yup.string().min(3,"At least 3").required("Please enter Username"),
  nickname: Yup.string().min(3,({path,value}) => `${path} character must be at least 6 now just only ${value.length}`).max(10,"Must not be more than 10 characters").required("Please enter nickname"),
  password: Yup.string().min(6,({path,value}) => `${path} character must be at least 6 now just only ${value.length}`).required("Please enter password"),
  confirmPassword: Yup.string().oneOf([Yup.ref("password")]).required("Please enter Confirm Password"),
  age: Yup.number().typeError("Must be number").min(13,({path,value})=>`${path} must be more than 13 now just only ${value}`).required("Please enter age"),
  tel: Yup.string().matches(/^\d{10}$/,"Invalid phone number").required("Please enter age"),
  terms: Yup.boolean().oneOf([true], "Please Accept condition")
  
})
// date: Yup.date().transform(function (value, originalValue) {
//   if (this.isType(value)) {
//     return value;
//   }
//   const result = parse(originalValue, "dd.MM.yyyy", new Date());
//   return result;
// })
// .typeError("please enter a valid date").required("Please enter date").min("21-05-1925", "Date is too early"),