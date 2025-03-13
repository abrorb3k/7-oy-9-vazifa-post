// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import PostCard from "./PostCard";
// import { setSelectedPost } from "../redux/postSlice";

// function Posts() {
//   const { posts, isLoading, error } = useSelector((state) => state.posts);
//   const dispatch = useDispatch()
//   if (isLoading) {
//     return (
//       <div className="text-center text-4xl mt-10">
//         <i className="fa fa-circle-notch fa-spin"></i>
//       </div>
//     );
//   }
//   if (error) {
//     return (
//       <div className="text-center text-xl mt-10 flex justify-center items-center gap-2">
//         <i className="fa fa-circle-exclamation text-red-300 text-2xl"></i>
//         <p className="text-3xl text-gray-300">
//           Something went wrong! Please try later.
//         </p>
//       </div>
//     );
//   }
//   return (
//     <div className="">
//       <div className="grid grid-cols-6 gap-7 mt-9 ">
//         {posts && posts.map((p) => <PostCard key={p.id} post={p} />)}
//       </div>
//       {/* modal */}
//       {setSelectedPost != null && (
//         <div className="fixed user-modal top-0 left-0 right-0 bottom-0 z-10 bg-black/60 flex justify-center items-center">
//           <button onClick={() => dispatch(setSelectedPost(null))} className="absolute top-3 text-white right-5 cursor-pointer">
//             <i className="fa fa-close fa-2x"></i>
//           </button>
//           <div className="rounded-2xl bg-white">
//             {isLoading ? (
//               <div className="w-[100px] aspect-square text-gray-400 flex items-center justify-center">
//               <i className="fa fa-circle-notch fa-spin"></i>
//             </div>
//             ) : 
//             <PostCard post={{title:"hjcvjdvjh", id:posts.id}}/>
//             }
            
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Posts;



import React from "react";
import { useDispatch, useSelector } from "react-redux";
import PostCard from "./PostCard";
import { setSelectedPost } from "../redux/postSlice";

function Posts() {
  const { posts, isLoading, error, selectedPost } = useSelector(
    (state) => state.posts
  );
  const dispatch = useDispatch();

  if (isLoading) {
    return (
      <div className="text-center text-4xl mt-10">
        <i className="fa fa-circle-notch fa-spin"></i>
      </div>
    );
  }
  if (error) {
    return (
      <div className="text-center text-xl mt-10 flex justify-center items-center gap-2">
        <i className="fa fa-circle-exclamation text-red-300 text-2xl"></i>
        <p className="text-3xl text-gray-300">
          Something went wrong! Please try later.
        </p>
      </div>
    );
  }

  return (
    <div>
      <div className="grid grid-cols-6 gap-7 mt-9">
        {posts &&
          posts.map((p) => (
            <div key={p.id} onClick={() => dispatch(setSelectedPost(p))}>
              <PostCard post={p} />
            </div>
          ))}
      </div>

      {/* Modal */}
      {selectedPost && (
        <div className="fixed top-0 left-0 right-0 bottom-0 z-10 bg-black/60 flex justify-center items-center">
          <button
            onClick={() => dispatch(setSelectedPost(null))}
            className="absolute top-3 text-white right-5 cursor-pointer"
          >
            <i className="fa fa-close fa-2x"></i>
          </button>
          <div className="rounded-2xl bg-white p-5">
            <PostCard post={selectedPost} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Posts;
