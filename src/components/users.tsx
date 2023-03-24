import React, { useState, useEffect } from "react";
import axios from "axios";
import { User } from "./user";
import { UseFetch } from "../hooks/useFetch";
import { useNavigate } from "react-router-dom";

interface UserProps {
  name: string;
  id: number;
}

export function Users() {
  const { data: userDate } = UseFetch<UserProps[]>(
    "https://jsonplaceholder.typicode.com/users"
  );

  const navigate = useNavigate();

  const handleSelectedUser = (userId: number) => {
    navigate(`/users/${userId}`);
  };

  return (
    <div className="absolute right-0 border-l border-slate-400 h-screen top-0 bottom-0 flex flex-col pl-8 items-start gap-4 text-zinc-900">
      {userDate?.map((item) => {
        return (
          <div key={item.id} onClick={() => handleSelectedUser(item.id)}>
            <User name={item.name} />
          </div>
        );
      })}
    </div>
  );
}
