import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as Dialog from "@radix-ui/react-dialog";
import axios from "axios";
import { LoadingSpinner } from "../utils/Loading";

interface UserDateProps {
  name: string;
  postId: number;
  id: number;
}

export function UserDate() {
  const [loading, setLoading] = useState(false);
  const [userDate, setUserDate] = useState<UserDateProps>(null);
  const navigate = useNavigate();

  const { userId } = useParams<{ userId: string }>();

  useEffect(() => {
    setTimeout(() => {
      const fetchUserId = async () => {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/users/${userId}`
        );
        setUserDate(response.data);
        setLoading(false);
      };
      fetchUserId();
    }, 2000);
    setLoading(true);
  }, [userId]);

  return (
    <div className="flex flex-col items-start justify-start">
      <button
        className="bg-blue-600 p-2 rounded-md mt-2"
        onClick={() => navigate("/")}
      >
        <span className="text-white">To Back</span>
      </button>

      {!userDate ? (
        <LoadingSpinner />
      ) : (
        <React.Fragment>
          <h1>{userDate.name}</h1>
        </React.Fragment>
      )}
    </div>
  );
}
