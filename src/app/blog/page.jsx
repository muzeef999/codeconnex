import Image from "next/image";
import Link from "next/link";
import React from "react";
import style from "../blog/style.module.css";
import iamge from "../asserts/blog.jpg";
import { Container } from "react-bootstrap";
import Appbar from "@/compoents/Appbar";

const Blogs = async () => {
  return (
    <div>
      <Appbar />
    <div className="container-fluid">
 <Image src={iamge} className="blog_image"/>
    </div>
    </div>
  );
};

export default Blogs;
