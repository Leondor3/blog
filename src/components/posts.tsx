import axios from "axios";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  useNavigate,
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { UseFetch } from "../hooks/useFetch";
import { CommentList } from "./CommentList";
import Post from "./post";

interface PostsType {
  body: string;
  id: number;
  title: string;
  userId: number;
}

export default function Posts() {
  const navigate = useNavigate();
  const { data: PostItem } = UseFetch<PostsType[]>(
    "https://jsonplaceholder.typicode.com/posts"
  );

  const handlePostClick = (postId: number) => {
    navigate(`/posts/${postId}`);
  };

  return (
    <div className="grid grid-cols-3 gap-4 place-items-start max-lg:grid-cols-2 max-sm:grid-cols-1 max-w-[1230px]">
      {PostItem?.map((post) => {
        return (
          <div key={post.id} onClick={() => handlePostClick(post.id)}>
            <Post title={post.title} body={post.body} />
          </div>
        );
      })}
    </div>
  );
}
