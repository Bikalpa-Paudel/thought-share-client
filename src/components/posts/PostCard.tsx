import { post } from "@/global";
import React from "react";
import { BiDownvote, BiUpvote } from "react-icons/bi";
import { GoComment } from "react-icons/go";

function PostCard({ post, key }: { post: post; key?: string }) {
  return (
    <div className="flex flex-col gap-2" key={key}>
      <div className="flex items-center gap-2">
        {/* <img
                src={post.user.avatar}
                alt="avatar"
                className="h-10 w-10 rounded-full"
                /> */}
        <p>{post.user.username}</p>
      </div>
      <h1 className="text-2xl font-semibold">{post.title}</h1>
      <p>{post.content}</p>
      <div className="flex justify-between">
        <div className="flex gap-2 items-center text-xl bg-[#dcdcdc] px-2 py-1 rounded-md">
          <BiUpvote className="cursor-pointer" />
          {`${post.votes}`}
          <BiDownvote className="cursor-pointer" />
        </div>
        <div className="flex gap-2 items-center text-xl bg-[#dcdcdc] px-2 py-1 rounded-md">
          <GoComment className="cursor-pointer" />
          {`${post.comments.length}`}
        </div>
      </div>
    </div>
  );
}

export default PostCard;
