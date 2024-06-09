import PostNav from "@/components/navigation/postNav";
import GetPost from "@/components/posts/GetPost";
import React from "react";

function page() {
  return (
    <main className="flex flex-col items-center w-1/2">
      <PostNav />
      <GetPost />
    </main>
  );
}

export default page;
