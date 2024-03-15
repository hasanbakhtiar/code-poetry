const blog = [];

export const blogReducer = (state = blog, action) => {
    switch (action.type) {
        case "ADD_BLOG":
            return [...state,action.blogdata]
        default:
            return state;
    }
}