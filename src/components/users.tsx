import React, { useState, useEffect } from "react";
import axios from "axios";
import { User } from "./user";
import { UseFetch } from "../hooks/useFetch";

interface UserProps {
  name: string;
}

export function Users() {
  const { data: userDate } = UseFetch<UserProps[]>(
    "https://jsonplaceholder.typicode.com/users"
  );
  return (
    <div className="absolute right-0 bg-zinc-900 h-screen top-0 flex flex-col pl-8 items-start gap-4 text-white">
      {userDate?.map((item) => {
        return <User name={item.name} />;
      })}
    </div>
  );
}
