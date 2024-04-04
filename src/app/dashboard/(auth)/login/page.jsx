"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";
import style from "../../dashboard.module.css";

export default function LoginPage() {
  const router = useRouter();
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });
  const [buttonDisabled, setButtonDisabled] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const onLogin = async () => {
    try {
      setLoading(true);
      const response = await axios.post("http://localhost:3000/api/auth/Login", user);
      console.log("Login success", response.data);
      toast.success("Login success");
      router.push("/dashboard");
    } catch (error) {
      console.log("Login failed", error.message);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <div className={style.inputwrapper}>
      <center>
        <h1>{loading ? "Processing" : "Login"}</h1>

        <input
          className={style.userInput}
          id="email"
          type="text"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          placeholder="email"
        />
        <br />

        <input
          className={style.userInput}
          id="password"
          type="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          placeholder="password"
        />
        <br />
        <button onClick={onLogin} className={style.loginbutton}>
          Login here
        </button>
        <br />
        <br />
        <Link href="/dashboard/register">Visit Signup page</Link>
      </center>
    </div>
  );
}
