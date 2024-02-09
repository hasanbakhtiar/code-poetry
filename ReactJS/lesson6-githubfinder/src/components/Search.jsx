import React from 'react'

const Search = () => {
  return (
    <div className='container d-flex justify-content-center my-5'>
      <div className="col-6">
        <div className="input-group mb-3">
          <input type="text" className="form-control" placeholder="Enter username" />
          <button className="btn btn-dark" type="button" >Search</button>
        </div>
      </div>
    </div>
  )
}

export default Search