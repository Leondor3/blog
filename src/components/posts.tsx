import axios from "axios";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  useNavigate,
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { CommentList } from "./CommentList";
import Post from "./post";
import { LoadingSpinner } from "../utils/Loading";

interface PostsType {
  body: string;
  id: number;
  title: string;
  userId: number;
}

export default function Posts() {
  const navigate = useNavigate();

  const { data: PostItem, isLoading } = useFetch<PostsType[]>(
    "https://jsonplaceholder.typicode.com/posts"
  );

  const postsFake = [
    {
      id: 1,
      title: "Item 1",
      image: [
        "https://static.wixstatic.com/media/ca76e1_5ef280e6df6a4477ac674cd69b232632~mv2.png/v1/fill/w_454,h_606,q_90/ca76e1_5ef280e6df6a4477ac674cd69b232632~mv2.png",
      ],
    },
    {
      id: 2,
      title: "Item 2",
      image: [
        "https://static.wixstatic.com/media/ca76e1_654185a958174b0484a0707e8d702da2~mv2.png/v1/fill/w_455,h_606,q_90/ca76e1_654185a958174b0484a0707e8d702da2~mv2.png",
      ],
    },
    {
      id: 3,
      title: "Item 3",
      image: [
        "https://static.wixstatic.com/media/ca76e1_abe399c94dbc46bda799fe75196e0dcc~mv2.png/v1/fill/w_454,h_606,fp_0.55_0.36,q_90/ca76e1_abe399c94dbc46bda799fe75196e0dcc~mv2.png ",
      ],
    },
    {
      id: 4,
      title: "Item 4",
      image: [
        "https://static.wixstatic.com/media/ca76e1_0a0f075e820249b7a77e977ad53a7ff2~mv2.png/v1/fill/w_455,h_606,fp_0.52_0.3,q_90/ca76e1_0a0f075e820249b7a77e977ad53a7ff2~mv2.png",
      ],
    },
    {
      id: 5,
      title: "Item 5",
      image: [
        "https://static.wixstatic.com/media/ca76e1_b19a135714d7400e81e6b2147cc19844~mv2.png/v1/fill/w_454,h_606,q_90/ca76e1_b19a135714d7400e81e6b2147cc19844~mv2.png",
      ],
    },
    {
      id: 6,
      title: "Item 6",
      image: [
        "https://static.wixstatic.com/media/ca76e1_654185a958174b0484a0707e8d702da2~mv2.png/v1/fill/w_455,h_606,q_90/ca76e1_654185a958174b0484a0707e8d702da2~mv2.png",
      ],
    },
  ];

  const handlePostClick = (postId: number) => {
    navigate(`/posts/${postId}`);
  };

  if (isLoading) {
    <LoadingSpinner text="Carregando seus posts..." />;
  }

  return (
    <div className="grid grid-cols-3 gap-4 place-items-start max-lg:grid-cols-2 max-sm:grid-cols-1 w-full ">
      {postsFake?.map((post) => {
        return (
          <div
            className="mb-40"
            key={post.id}
            onClick={() => handlePostClick(post.id)}
          >
            <Post image={post.image} />
          </div>
        );
      })}
    </div>
  );
}
