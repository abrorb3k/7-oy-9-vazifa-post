import React from 'react'
import Posts from './Posts';

const Home = () => {
  return (
    <div>
      <div className="container ">
        <h1 className="text-4xl border-b-2 border-gray-500 mx-auto text-center py-5">
          Posts
        </h1>
        <Posts />
      </div>
    </div>
  );
}

export default Home