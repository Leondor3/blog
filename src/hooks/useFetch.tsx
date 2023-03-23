import axios from "axios";
import React, { useState, useEffect } from "react";

export function UseFetch<T = unknown>(url: string) {
  const [data, setData] = useState<T | null>(null);

  useEffect(() => {
    axios.get(url).then((response) => {
      setData(response.data);
    });
  }, []);

  return { data };
}
