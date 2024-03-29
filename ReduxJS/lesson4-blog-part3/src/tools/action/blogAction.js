export const addBlog = ({title,desc,img})=> ({
    type:"ADD_BLOG",
    blogdata:{
        id:crypto.randomUUID(),
        title,
        img,
        desc
    }
  })


  export const editBlog = (id,update)=>({
    type:"EDIT_BLOG",
    id,
    update
  })
  

  export const removeBlog = ({id})=>({
    type:"REMOVE_BLOG",
    id
  })