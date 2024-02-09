import React from 'react'
import SingleUser from './SingleUser'

const Users = ({senddata}) => {
  return (
    <div className='container'>
        <div className="row g-5">
            {senddata.map(item=>(

           <SingleUser 
                img={item.avatar_url}
                title={item.login}
                url={item.html_url}
                node_id={item.node_id}
           />
            ))}
        </div>
    </div>
  )
}

export default Users