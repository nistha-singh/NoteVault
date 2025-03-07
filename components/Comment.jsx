import { comments } from "../data";
import React from "react";
import Image from "next/image";
// import profile from "public/images/profile.png"
import star from "public/images/star.svg"
const Comment = () => {
  return (
    <>
    <h1 className="font-poppins font-semibold px-8 text-[2.16rem]  mt-20 text-white mb-6">What Others Have To Say</h1>
      <div className="grid grid-cols-2 px-8 ">
      {comments.map((comment) => (
        <CommentCard
          key={comment.id}
          ratings={comment.ratings}
          imageUrl={comment.imageUrl}
          name={comment.name}
          comment={comment.comment}
        />
        
      ))}
      </div>
    </>
  );
};

const CommentCard = ({ ratings, imageUrl, name, comment }) => {
  return (
    <div className="mr-40 rounded-md hover:bg-[#292929] p-4">
      <div className="flex mb-4">
      <Image src={imageUrl} alt="hy" width={500} height={500} className="h-[4rem] w-16 border-2 border-[#E40000] rounded-full mr-4 self-center"/>
      <h2 className="self-center mr-32">{name}</h2>
      <Image src={star} className="self-center mr-2"/>
      <p className="self-center">{ratings}</p>
      </div>
      <p>{comment}</p>
    </div>
  );
};

export default Comment;