import {useState,useRef} from 'react'
import { loginSchema2 } from '../schemas/loginShema2'
import { yupToFormErrors } from '../utils/yupToFormErrors'

export default function SignupForm() {

  const styles = {
    divInput:"flex gap-2",
    input:"border-1 rounded-lg p-2",
    textError:"text-red-500 font-medium",
    bg:"border-2 rounded-lg shadow-lg flex flex-col justify-center text-center p-6 bg-black"
  }
  
  const [form,setForm] = useState({
    username: "",
    nickname: "",
    password: "",
    confirmPassword: "",
    age:undefined,
    tel:"",
    terms:false
  })

  const refs ={
    username: useRef(null),
    nickname: useRef(null),
    password: useRef(null),
    confirmPassword: useRef(null),
    age: useRef(null),
    tel: useRef(null),
    terms:useRef(null)
  }
  
  const [errors,setErrors] = useState({
  
  
  })
  
  const handleChange = (e) => {
  // setForm({...form,[e.target.name]:e.target.value})
  const {name,type,value,checked} = e.target;
  setForm((prev)=>({...prev,[name]: type === "checkbox" ? checked : value}))

  }
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try{ 
      await loginSchema2.validate(form,{abortEarly:false})
      const isFormValid = await schema.isValid(form);
      
      if (isFormValid) {
        console.log("Valid Form!");
      } else {
        console.log("Invalid Form!");
      }
      
      alert("Success")
      setErrors({})

    }catch(err){
      console.log(err.inner)
      const errorObj = yupToFormErrors(err,refs)
      setErrors(errorObj)
    }
  }

  return (
    
    <>
    <div className={styles.bg}>
    <p className="text-2xl font-bold pb-10">CC 20</p>
    <form className="space-y-2" onSubmit={handleSubmit}>
      <div className={styles.divInput}>
        <label>User Name :</label>
        <input 
        className={styles.input} 
        type="name" 
        name="username" 
        value={form.username}
        onChange={handleChange}
        placeholder='Enter username'
        ref={refs.username}
        />
        <p className={styles.textError}>{errors.username}</p>
      </div>
      <div className={styles.divInput}>
        <label>Nick Name :</label>
        <input 
        className={styles.input} 
        type="name" 
        name="nickname" 
        value={form.nickname}
        onChange={handleChange}
        placeholder='Enter Nickname'
        ref={refs.nickname}
        />
        <p className={styles.textError}>{errors.nickname}</p>
      </div>
      <div className={styles.divInput}> 
        <label>Password :</label>
        <input 
        className={styles.input} 
        type="password" 
        name="password"
        value={form.password}
        onChange={handleChange}
        placeholder='Enter password'
        ref={refs.password}
        />
        <p className={styles.textError}>{errors.password}</p>
      </div>
      <div className={styles.divInput}> 
        <label>Confirm Password :</label>
        <input 
        className={styles.input} 
        type="password" 
        name="confirmPassword"
        value={form.confirmPassword}
        onChange={handleChange}
        placeholder='Enter Confirm Password'
        ref={refs.confirmPassword}
        />
        <p className={styles.textError}>{errors.confirmPassword}</p>
      </div>
      <div className={styles.divInput}> 
        <label>Age :</label>
        <input 
        className={styles.input} 
        type="number" 
        name="age"
        value={form.age}
        onChange={handleChange}
        placeholder='Enter Age'
        ref={refs.age}
        />
        <p className={styles.textError}>{errors.age}</p>
      </div>
      <div className={styles.divInput}> 
        <label>Tel :</label>
        <input 
        className={styles.input} 
        type="tel" 
        name="tel"
        value={form.tel}
        onChange={handleChange}
        placeholder='Enter Tel'
        ref={refs.tel}
        />
        <p className={styles.textError}>{errors.tel}</p>
      </div>
      <div className={styles.divInput}> 
        <label>Terms :</label>
        <input 
        className={styles.checkbox} 
        type="checkbox" 
        name="terms"
        checked={form.terms}
        onChange={handleChange}
        ref={refs.terms}
        />
        <p className={styles.textError}>{errors.terms}</p>
      </div>
      <button type="submit">Member</button>
    </form>
    </div>
    </>

  )
}


