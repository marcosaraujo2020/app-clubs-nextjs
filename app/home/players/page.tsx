"use client";

import api from '@/service/api';
import { useEffect, useState } from "react";


export default function Page() {
  const [data, setData] = useState(null);

  useEffect(() => {
    api.get("/players") // Substitua por um endpoint real
      .then((response) => setData(response.data))
      .catch((error) => console.error(error));
  }, []);

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
