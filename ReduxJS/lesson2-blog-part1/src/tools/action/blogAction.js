export const addBlog = ({title,desc,img})=> ({
    type:"ADD_BLOG",
    blogdata:{
        id:crypto.randomUUID(),
        title,
        img,
        desc
    }
  })