import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const navigate = useNavigate();
  const loginSubmit =e=>{
    e.preventDefault();
      if (!email || !password) {
          alert('please, fill the input');
      }else{
        if (email===localStorage.getItem('email') && password===localStorage.getItem('password')) {
          localStorage.setItem('login','true');
          location.assign('/products')
        }else{
          alert('email or password is wrong!');
        }
      }
  }
  
  return (
    <>
      <h1 className='my-5 text-center'>Login</h1>
      <div className="d-flex align-items-center justify-content-center flex-column">
        <div className="col-6">
          <form onSubmit={loginSubmit}>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input onChange={e=>setEmail(e.target.value)} type="email" className="form-control" />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input onChange={e=>setPassword(e.target.value)} type="password" className="form-control" />
            </div>

            <button type="submit" className="btn btn-primary">Login</button>
          </form>
          <p className='my-4'><Link to="/register">Create new account</Link></p>
          <p><Link to="/forgotpassword">Forgot your password?</Link></p>
        </div>
      </div>

    </>

  )
}

export default Login