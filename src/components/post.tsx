import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Post({ ...props }) {
  return (
    <div className="mt-12 w-full">
      <div className="">
        <h1 className="text-3xl font-bold mb-2">{props.title}</h1>
        <p className="text-1xl leading-tight ">{props.body}</p>
      </div>
    </div>
  );
}
