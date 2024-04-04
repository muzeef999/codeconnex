"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";



const Dashboard = () => {
  const [data, setData] = useState([]);
  const [err, setErr] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const router = useRouter();

  // useEffect(() => {
  //   const getData = async () => {
  //     setLoading(true);
  //     const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
  //       cache: "no-store",
  //     });

  //     if (!res.ok) {
  //       setErr(true);
  //     }

  //     const data = await res.json();

  //     setData(data);
  //     setLoading(false);
  //   };
  //   getData();
  // }, []);

  console.log(data);
 
  const logout = async () => {
         try{
          await  axios.get("http://localhost:3000/api/auth/logout")
          router.push('/dashboard/login')
         }catch (error){
          console.log(error.message)
         }

  }

  return (
    <div>
      <h1>Dashboard</h1>
      <hr/>
      <button onClick={logout} className="">Logout</button>
    </div>

  );
};

export default Dashboard;
