import React from 'react'

const SingleUser = ({img,title,url,node_id}) => {
  return (


    <div className="col-12 col-sm-6 col-md-3">
                 <div className="card" >
                <img src={img} className="card-img-top" alt={title} />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{node_id}</p>
                    <a href={url} target='_blank' className="btn btn-dark">Go profile</a>
                </div>
                </div>  
    </div>
             

  )
}

export default SingleUser