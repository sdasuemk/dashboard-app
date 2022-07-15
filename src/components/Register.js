import React, {useState} from 'react'
import './css/Register.css'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

function Register() {

  /* const history = useHistory() // Accessing the history instance created by React */
  const navigate = useNavigate();

  const [user, setUser] = useState({

    name:'',
    email:'',
    password:''

  })

  const handleChange = (e) =>{
    const {name,value}=e.target
    setUser({
      ...user,
      [name]: value
    })
  }

  const handleRegister = () =>{
    const {name,email,password} = user
    if(name && email && password){
      axios.post("http://localhost:4000/Register", user)
      .then((res)=>{
        console.log(res)
      })
    }
    else{
      alert('Invalid Input')
    }
  }

  return (
    <div className='Register'>
      {console.log(user)}

    <h1>Register</h1>

    <label className="label">Name:</label> 
    <input type='text' name='name' value={user.name} placeholder='Enter your full name' onChange={handleChange}/>

    <label className="label">Email:</label> 
    <input type='text' name='email' value={user.email} placeholder='Enter your email' onChange={handleChange}/>

    <label className="label">Password:</label>
    <input type='password' name='password' value={user.password} placeholder='Enter the password' onChange={handleChange}/>

    <input type='submit' className='btn' onClick={handleRegister}/>

    <p>Already have an account? <span onClick={()=>navigate('/login')}>Login</span></p>

    </div>
  )
}

export default Register