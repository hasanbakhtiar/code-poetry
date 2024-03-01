import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Register = () => {
    const [fullname,setFullname] = useState("");
    const [tel,setTel] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [againPassword,setAgainPassword] = useState("");
    const navigate = useNavigate();

    const registerSubmit =e=>{
        e.preventDefault();

        if (!fullname || !tel || !email || !password || !againPassword) {
            alert("please, fill input");
        }else{
            if (password === againPassword) {
                localStorage.setItem('fullname',fullname);
                localStorage.setItem('tel',tel);
                localStorage.setItem('email',email);
                localStorage.setItem('password',password);
                navigate('/login')
            }else{
                alert('password is different!')
            }
        }
        
        

    }
    
  return (
    <>
      <h1 className='my-5 text-center'>Register</h1>
      <div className="d-flex align-items-center justify-content-center flex-column">
        <div className="col-6">
          <form onSubmit={registerSubmit}>
          <div className="mb-3">
              <label  className="form-label">Full Name</label>
              <input onChange={e=>setFullname(e.target.value)} type="text" className="form-control"  />
            </div>
            <div className="mb-3">
              <label  className="form-label">Number</label>
              <input onChange={e=>setTel(e.target.value)} type="tel" className="form-control"  />
            </div>
            <div className="mb-3">
              <label  className="form-label">Email</label>
              <input onChange={e=>setEmail(e.target.value)} type="email" className="form-control"  />
            </div>
            <div className="mb-3">
              <label  className="form-label">Password</label>
              <input onChange={e=>setPassword(e.target.value)} type="password" className="form-control" />
            </div>
            <div className="mb-3">
              <label  className="form-label">Again Password</label>
              <input onChange={e=>setAgainPassword(e.target.value)} type="password" className="form-control" />
            </div>
        
            <button type="submit" className="btn btn-primary">Register</button>
          </form>
          <p className='my-4'><Link to="/login">Do you already have an account?</Link></p>
        </div>
      </div>

    </>

  )
}

export default Register