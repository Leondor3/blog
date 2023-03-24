import React, { useState, useEffect } from "react";
import axios from "axios";
import { User } from "./user";
import { useFetch } from "../hooks/useFetch";
import { useNavigate } from "react-router-dom";

interface UserProps {
  name: string;
  id: number;
}

export function Users() {
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);
  const navigate = useNavigate();

  const { data: userDate, isLoading } = useFetch<UserProps[]>(
    "https://jsonplaceholder.typicode.com/users"
  );

  const handleSelectedUser = (userId: number) => {
    setSelectedUserId(userId);
    navigate(`/users/${userId}`);
  };

  return (
    <div className="absolute right-0  w-54 h-screen top-0 bottom-0 flex flex-col pl-8 items-start gap-4 text-zinc-900">
      <span className="font-bold">Usuarios:</span>
      {userDate?.map((item) => {
        const isActive = item.id === selectedUserId;
        return (
          <div key={item.id} onClick={() => handleSelectedUser(item.id)}>
            <User name={item.name} isActive={isActive} />
          </div>
        );
      })}
    </div>
  );
}
