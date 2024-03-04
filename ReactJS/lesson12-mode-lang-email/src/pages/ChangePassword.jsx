import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom'

const ChangePassword = () => {
    const [oldpassword,setOldpassword] = useState("");
    const [password,setPassword] = useState("");
    const [againPassword,setAgainPassword] = useState("");
    const navigate = useNavigate();

    const ChangePasswordSubmit =e=>{
        e.preventDefault();

        if (!password || !againPassword || !oldpassword) {
            alert("please, fill input");
        }else{
            if (oldpassword === localStorage.getItem('password')) {
                if ((password === againPassword)) {
                    localStorage.setItem('password',password);
                    location.assign('/account')
                }else{
                            alert('password is different!');
                }
            }else{
                alert('wrong password!')
            }
                
        }
        
        

    }
    
  return (
    <>
      <h1 className='my-5 text-center'>ChangePassword</h1>
      <div className="d-flex align-items-center justify-content-center flex-column">
        <div className="col-6">
          <form onSubmit={ChangePasswordSubmit}>
          <div className="mb-3">
              <label  className="form-label">Current password</label>
              <input  onChange={e=>setOldpassword(e.target.value)} type="password" className="form-control"  />
            </div>
            <div className="mb-3">
              <label  className="form-label">New password</label>
              <input  onChange={e=>setPassword(e.target.value)} type="password" className="form-control"  />
            </div>
            <div className="mb-3">
              <label  className="form-label">Again passsword</label>
              <input  onChange={e=>setAgainPassword(e.target.value)} type="password" className="form-control"  />
            </div>
        
            <button type="submit" className="btn btn-primary">Change</button>
          </form>
    
        </div>
      </div>

    </>

  )
}

export default ChangePassword