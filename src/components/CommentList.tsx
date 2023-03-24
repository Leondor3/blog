import { useNavigate, useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";

interface CommentProp {
  body: string;
  email: string;
  id: number;
  name: string;
  postId: number;
}

export function CommentList() {
  const navigate = useNavigate();
  const { postId } = useParams<{ postId: string }>();
  const [comments, setComments] = useState<CommentProp[]>([]);

  useEffect(() => {
    const fetchComment = async () => {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
      );
      setComments(response.data);
    };
    fetchComment();
  }, [postId]);

  return (
    <div>
      <button
        className="flex gap-2 items-center justify-center outline-none border-blue-600 mt-2 bg-blue-600 p-2 rounded-lg"
        onClick={() => navigate(-1)}
      >
        <svg
          width="22"
          height="22"
          fill="#fff"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M19 11.001H7.14l3.63-4.36a1.001 1.001 0 0 0-1.54-1.28l-5 6a1.184 1.184 0 0 0-.09.15c0 .05 0 .08-.07.13a1 1 0 0 0-.07.36 1 1 0 0 0 .07.36c0 .05 0 .08.07.13.026.052.056.103.09.15l5 6a1 1 0 0 0 1.41.13 1 1 0 0 0 .13-1.41l-3.63-4.36H19a1 1 0 0 0 0-2Z"></path>
        </svg>
        <span className="text-white font-bold">Voltar</span>
      </button>
      {comments.map((comment) => {
        return (
          <div key={comment.id}>
            <h3>{comment.name}</h3>
          </div>
        );
      })}
    </div>
  );
}
