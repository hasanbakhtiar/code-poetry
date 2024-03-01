import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom'

const Account = () => {
    const [fullname,setFullname] = useState(localStorage.getItem('fullname'));
    const [tel,setTel] = useState(localStorage.getItem('tel'));
    const [email,setEmail] = useState(localStorage.getItem('email'));
    const [password,setPassword] = useState("");
    const [againPassword,setAgainPassword] = useState("");
    const navigate = useNavigate();

    const AccountSubmit =e=>{
        e.preventDefault();

        if (!fullname || !tel || !email) {
            alert("please, fill input");
        }else{
                localStorage.setItem('fullname',fullname);
                localStorage.setItem('email',email);
                localStorage.setItem('tel',tel);
                location.reload();
        }
        
        

    }
    
  return (
    <>
      <h1 className='my-5 text-center'>Account</h1>
      <div className="d-flex align-items-center justify-content-center flex-column">
        <div className="col-6">
          <form onSubmit={AccountSubmit}>
          <div className="mb-3">
              <label  className="form-label">Full Name</label>
              <input value={fullname} onChange={e=>setFullname(e.target.value)} type="text" className="form-control"  />
            </div>
            <div className="mb-3">
              <label  className="form-label">Number</label>
              <input value={tel} onChange={e=>setTel(e.target.value)} type="tel" className="form-control"  />
            </div>
            <div className="mb-3">
              <label  className="form-label">Email</label>
              <input value={email} onChange={e=>setEmail(e.target.value)} type="email" className="form-control"  />
            </div>
        
            <button type="submit" className="btn btn-primary">Change</button>
          </form>
          <br />
          <Link className='btn btn-primary me-4' to="/changepassword">Change passsword</Link>
          <br />
          <Button variant='danger my-4' onClick={()=>{
                            localStorage.removeItem('login');
                            location.assign('/login')
                        }}>Logout</Button>
        </div>
      </div>

    </>

  )
}

export default Account