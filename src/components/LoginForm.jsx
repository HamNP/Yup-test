import {useState} from 'react'
import { loginSchema } from '../schemas/loginShema'
import { yupToFormErrors } from '../utils/yupToFormErrors'

export default function LoginForm() {


  const styles = {
    divInput:"flex gap-2",
    input:"border-1 rounded-lg",
    textError:"text-red-500 font-medium",
    checkbox:"color-black"

  }
  
  const [form,setForm] = useState({
    email: "",
    password: "",
    day:"",
    age:undefined
  })
  
  const [errors,setErrors] = useState({
  
  
  })
  
  const handleChange = (e) => {
  setForm({...form,[e.target.name]:e.target.value})
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try{ 
      await loginSchema.validate(form,{abortEarly:false})
      alert("Success")
      setErrors({})
    }catch(err){
      console.log(err.inner)
      const errorObj = yupToFormErrors(err)
     setErrors(errorObj)
    }
  }
  
  
  return (
    <>
    <p className="text-2xl font-bold pb-10">CC 20</p>
    <form className="space-y-2" onSubmit={handleSubmit}>
      <div className={styles.divInput}>
        <label>Email :</label>
        <input 
        className={styles.input} 
        type="email" 
        name="email" 
        value={form.email}
        onChange={handleChange}
        placeholder='Enter email'
        />
        <p className={styles.textError}>{errors.email}</p>
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
        />
        <p className={styles.textError}>{errors.password}</p>
      </div>
      <div className={styles.divInput}> 
        <label>Day :</label>
        <input 
        className={styles.input} 
        type="number" 
        name="day"
        value={form.day}
        onChange={handleChange}
        placeholder='day'
        />
        <p className={styles.textError}>{errors.day}</p>
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
        />
        <p className={styles.textError}>{errors.age}</p>
      </div>
      <button type="submit">Member</button>
    </form>
    </>
  )


}






