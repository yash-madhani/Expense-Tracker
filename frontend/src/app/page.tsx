'use client';
import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    axios.get("/api/v1/expenses/getall")
    .then((response) => {
      setData(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
  });

  return (
    <div className="bg-gray-200 p-4">
      {
        data.map((item, index) => {
          return (
            <div key={index} className="bg-white p-2 mb-4 flex">
              <p className="text-xl font-bold px-2">Title: {item.title} </p>
              <p className="text-lg px-2">Amount: {item.amount} </p>
              <p className="text-lg px-2">Category: {item.category}</p>
            </div>
          )
        })
      }
    </div>
  );
}
