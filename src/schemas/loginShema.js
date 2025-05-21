import * as Yup from 'yup'

export const loginSchema = Yup.object({
  email: Yup.string().email("Email Invalid").required("Please enter email"),
  password: Yup.string().min(6,({path,value}) => `${path} character must be at least 6 now just only ${value.length}`).required("Please enter password"),
  day: Yup.number().typeError("Must be number").min(1, "Must be 1-31").max(31, "Must be 1-31"),
  age: Yup.number().typeError("Must be number").min(11,({path,value})=>`${path} must be more than 11 now just only ${value}`)
  
})
// date: Yup.date().transform(function (value, originalValue) {
//   if (this.isType(value)) {
//     return value;
//   }
//   const result = parse(originalValue, "dd.MM.yyyy", new Date());
//   return result;
// })
// .typeError("please enter a valid date").required("Please enter date").min("21-05-1925", "Date is too early"),