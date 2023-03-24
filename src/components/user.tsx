import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as Dialog from "@radix-ui/react-dialog";
import axios from "axios";

interface UserProps {
  name: string;
  isActive: boolean;
}

export function User({ name, isActive }: UserProps) {
  const [isActiveClass, setIsActiveClass] = useState("");

  useEffect(() => {
    if (isActive) {
      setIsActiveClass("text-blue-600");
    } else {
      setIsActiveClass("");
    }
  }, [isActive]);

  console.log("isActive:", isActive);
  return (
    <button className="">
      <span className={`hover:text-blue-600 ${isActiveClass} text-zinc-900`}>
        {name}
      </span>
    </button>
  );
}
