import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    posts:[],
    isLoading:false,
    error:null,
    selectedPost:null
}

const PostsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setPosts: (state, action) => {
        state.posts = action.payload
    },
    setLoading:(state, action) => {
        state.isLoading = action.payload
    },
    setError: (state, action) => {
        state.error = action.payload
    },
    setSelectedPost:(state, action) => {
      state.selectedPost = action.payload
    }
  },
});

export const {setPosts, setLoading, setError, setSelectedPost} = PostsSlice.actions;
export default PostsSlice.reducer;
