import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as Dialog from "@radix-ui/react-dialog";
import axios from "axios";

interface UserDateProps {
  name: string;
  postId: number;
  id: number;
}

export function UserDate() {
  const [userDate, setUserDate] = useState<UserDateProps[]>([]);

  const { userId } = useParams<{ userId: string }>();

  useEffect(() => {
    const fetchUserId = async () => {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${userId}`
      );
      setUserDate(response.data);
    };
    fetchUserId();
  }, [userId]);

  return (
    <div>
      {userDate?.map((date) => {
        return (
          <div>
            <span>Usuario clicado foi o: {date.id}</span>
            <h1>{date.name}</h1>;
          </div>
        );
      })}
    </div>
  );
}
