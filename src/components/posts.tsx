import axios from "axios";
import React, { useEffect, useState } from "react";
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
    "https://jsonplaceholder.typicode.com/posts?_limit=10"
  );

  const handlePostClick = (postId: number) => {
    navigate(`/posts/${postId}`);
  };

  return (
    <div className="grid grid-cols-3 gap-4 place-items-start">
      {PostItem?.map((post) => {
        return (
          <div key={post.id} onClick={() => handlePostClick(post.id)}>
            <Post title={post.title} body={post.body} />
          </div>
        );
      })}
      <Routes>
        <Route path="/posts/:postId" element={<CommentList />} />
      </Routes>
    </div>
  );
}
