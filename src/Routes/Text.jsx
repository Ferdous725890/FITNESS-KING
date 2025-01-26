import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

const Test = () => {
  const { data: classes = [], isLoading } = useQuery({
    queryKey: ["classes"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:1000/users");
      console.log(res.data, "all class");
      return res.data;
    },
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center ">
        <div className="text-teal-400 text-xl font-semibold">Loading...</div>
      </div>
    );
  }

  return (
    <div className="pt-56">
      <h1 className="text-center text-red-700 text-2xl font-bold">


insert  your all data




      </h1>
     
    </div>
  );
};

export default Test;
