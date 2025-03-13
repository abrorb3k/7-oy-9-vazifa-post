import React from 'react'
import { setSelectedPost } from '../redux/postSlice';
import { useDispatch } from 'react-redux';

const PostCard = (post) => {
    console.log(post);
    
    const dispatch = useDispatch()
    
  return (
      <div onClick={() => dispatch(setSelectedPost(post.id))} className='rounded-3xl px-5 pt-3 text-center w-[170px] cursor-pointer h-[230px] border-2 border-gray-400 hover:-translate-y-2 duration-300 hover:border-gray-900 hover:shadow-xl shadow-gray-400'>
        <h1>{post.post.title}</h1>
        <h3>{post.post.id}</h3>
      </div>
  );
}

export default PostCard
