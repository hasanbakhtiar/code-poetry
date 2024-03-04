import React from 'react'

const ForgotPassword = () => {
  return (
    <>
      <h1 className='my-5 text-center'>Forgot Password</h1>
      <div className="d-flex align-items-center justify-content-center flex-column">
        <div className="col-6">
          <form>
            <div className="mb-3">
              <label  className="form-label">Email</label>
              <input type="email" className="form-control"  />
            </div>
            <button type="submit" className="btn btn-primary">Send</button>
          </form>
        </div>
      </div>

    </>

  )
}

export default ForgotPassword