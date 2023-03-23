import axios from "axios";
import React, { useEffect, useState } from "react";
import Post from "./post";

interface PostsType {
  body: string;
  id: number;
  title: string;
  userId: number;
}

interface CommentProp {
    body: string,
    email: string,
    id: number,
    name: string,
    postId: number
}

export default function Posts() {
  const [data, setData] = useState<PostsType[]>([]);
  const [comments, setComments] = useState<CommentProp[]>([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts?_limit=10")
      .then((response) => {
        setData(response.data);
        console.log(response.data);

        const postId = response.data[0].id;
        axios
          .get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
          .then((response) => {
            setComments(response.data);
            console.log(response.data);
          })
          .catch((error) => {
            console.error(error);
          });
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="grid grid-cols-3 gap-4 place-items-start">
      {data.map((item) => {
        return <Post title={item.title} body={item.body} />;
      })}
    </div>
  );
}
