import React from 'react';

const PostCard = ({post}) => {
    return (
       <div className="border rounded-md border-blue-700" >
                   <h2 className="text-center text-2xl">Post Cart</h2>
                   <div className='relative w-full h-52 object--contain'>
                   <h1 className="text-center text-2xl my-5">{post.title}</h1>
                   <hr></hr>
                   <p>{post.body}</p>
                      
                   </div>
               </div>
    );
};

export default PostCard;