import React, { useState } from 'react'

const Search = ({sendkeyword}) => {
  const [keyword,setKeyword] = useState("");
  const formSubmit = (e)=>{
        e.preventDefault();
        sendkeyword(keyword);
        setKeyword("");
  }
  
  return (
    <form onSubmit={formSubmit} className='container d-flex justify-content-center my-5'>
      <div className="col-6">
        <div className="input-group mb-3">
          <input value={keyword} onChange={e=>setKeyword(e.target.value)} type="text" className="form-control" placeholder="Enter username" />
          <button className="btn btn-dark" type="submit" >Search</button>
        </div>
      </div>
    </form>
  )
}

export default Search