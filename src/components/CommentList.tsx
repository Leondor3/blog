import React, { useState, useEffect } from "react";
import axios from "axios";

interface CommentProp {
  body: string;
  email: string;
  id: number;
  name: string;
  postId: number;
}

type CommentListProps = {
  postId: number;
};

export function CommentList({ postId }: CommentListProps) {
  const [comments, setComments] = useState<CommentProp[]>([]);

  useEffect(() => {
    const fetchComment = async () => {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts/${postId}/comments"
      );
      setComments(response.data);
    };
    fetchComment();
  }, [postId]);

  return (
    <div>
      {comments.map((comment) => {
        return (
          <div key={comment.id}>
            <h2>Comentário do post {postId}</h2>
            <h3>{comment.name}</h3>
          </div>
        );
      })}
    </div>
  );
}
