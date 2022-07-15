import React,{useState} from 'react'
import './css/Login.css'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

function Login() {

  /* const history = useHistory() // Accessing the history instance created by React */
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email:'',
    password:''
  })
  const handleChange = (e) =>{
    const {name,value} = e.target
    setUser({
      ...user,
      [name]: value
    })
  }

  const handleLogin = () =>{
    const {email,password} = user
    if(email && password){
      axios.post("http://localhost:4000/login", user)
      .then((res)=>{
        console.log(res)
        console.log(res.data.user)
        console.log(res.data.user.email)
        console.log(res.data.user.name)
        console.log(res.data.user._id)
        
      })
    }
    else{
      alert('email and password can not be empty!')
    }
  }

  return (
    <div className='LoginPage'>
      {console.log(user)}
      <h1>Login</h1>

      <label className="label">Email:</label> 
      <input type='text' name='email' value={user.email} placeholder='Enter your email' onChange={handleChange}/>

      <label className="label">Password:</label>
      <input type='password' name='password' value={user.password} placeholder='Enter the password' onChange={handleChange}/>

      <input type='submit' className='btn' onClick={handleLogin}/>

      <p>You don't have an account? <span onClick={()=>navigate('/Register')}>Register</span> first.</p>

    </div>
  )
}

export default Login