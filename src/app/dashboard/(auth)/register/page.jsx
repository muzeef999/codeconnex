"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";
import style from "../../dashboard.module.css";

export default function SignupPage() {
  const router = useRouter();
  const [user, setUser] = React.useState({
    email: "",
    password: "",
    name: "",
  });

  
  const [buttonDisabled, setButtonDisabled] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const onSignup = async () => {
    console.log(user);
    try {
      setLoading(true);
      const response = await axios.post("http://localhost:3000/api/auth/register", user);
      console.log("Signup success", response.data);
      router.push("/dashboard/login");
    } catch (error) {
      console.log("Signup failed", error.message);

      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (
      user.email.length > 0 &&
      user.password.length > 0 &&
      user.name.length > 0
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <div className={style.inputwrapper}>
      <center>
        <h1>{loading ? "Processing" : "Signup"}</h1>

        <input
          className={style.userInput}
          id="username"
          type="text"
          value={user.username}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
          placeholder="username"
        />
        <input
          className={style.userInput}
          id="email"
          type="text"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          placeholder="email"
        />

        <input
          className={style.userInput}
          id="password"
          type="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          placeholder="password"
        />
        <button onClick={onSignup} className={style.loginbutton}>
          {buttonDisabled ? "No signup" : "Signup"}
        </button>
        <br />
        <br />
        <Link href="/dashboard/login">Visit login page</Link>
      </center>
    </div>
  );
}
