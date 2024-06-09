"use client";
import { getPosts } from "@/services/(api)/post";
import { useQuery } from "react-query";
import { BiUpvote, BiDownvote } from "react-icons/bi";
import { GoComment } from "react-icons/go";
import PostCard from "./PostCard";

function GetPost() {
  const { data, isLoading, isError } = useQuery("posts", getPosts);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (isError) {
    return <div>Error</div>;
  }
  return (
    <section className="w-full px-5 border-b py-2">
      {data?.length ? (
        data.map((post) => <PostCard post={post} key={post._id} />)
      ) : (
        <p>No posts</p>
      )}
    </section>
  );
}

export default GetPost;
