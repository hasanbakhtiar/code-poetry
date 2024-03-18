const blog = [];

export const blogReducer = (state = blog, action) => {
    switch (action.type) {
        case "ADD_BLOG":
            return [...state,action.blogdata]
        case "REMOVE_BLOG":
                return state.filter(({id})=>{
                    return id !== action.id
                })
        default:
            return state;
    }
}