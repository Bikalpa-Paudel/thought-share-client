import Link from "next/link";
import React from "react";
import { FaRegUserCircle } from "react-icons/fa";

function PostNav() {
  return (
    <div className="bg-white py-2 px-4 w-full flex items-center gap-2">
      <FaRegUserCircle size={30} />
      <Link
        href="/create"
        className="bg-[#efefef] w-full border p-2 transition-all hover:border-[#1373bc] rounded-md cursor-text"
      >
        <p className="text-[#b5b2b2]">create post</p>
      </Link>
    </div>
  );
}

export default PostNav;
