export const addBlog = ({title,desc,img})=> ({
    type:"ADD_BLOG",
    blogdata:{
        id:crypto.randomUUID(),
        title,
        img,
        desc
    }
  })

  export const removeBlog = ({id})=>({
    type:"REMOVE_BLOG",
    id
  })