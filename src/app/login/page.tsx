import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
// import {axios} from "axios";

export default function Loginnpage() {
  async function handleSubmit(formdata: FormData) {
    "use server";

    const email = formdata.getAll("email");
    const password = formdata.getAll("password");

    console.log("email:", email, password);

    const res = await fetch("/api/login-user", {
      method: "POST",
      body: JSON.stringify(formdata)
    })

    
  }

  return (
    <div className="py-9 px-20 ">
      <h1 className="text-4xl text-white">Welcome back!</h1> <br />
      <p className="text-xl text-white">
        Enter your Credentials to access your account
      </p>{" "}
      <br />
      <form action={handleSubmit} className="grid lg:grid-cols-2">
        <div className="">
          <div>
            <label className="text-white text-xl" htmlFor="username">
              Email
            </label>
            <br />
            <input
              name="email"
              className="p-4 w-full  border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
              type="text"
              id="email"
              // value={user.email}
              // onChange={() => setUser({ ...user, email: e.target.value })}
              placeholder="email"
            />
          </div>

          <div>
            <label className="text-white text-xl" htmlFor="username">
              Password
            </label>
            <br />
            <input
              name="password"
              className="p-4 w-full border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
              type="password"
              id="password"
              // value={user.password}
              // onChange={() => setUser({ ...user, password: e.target.value })}
              placeholder="password"
            />
          </div>
          <button
            className="p-4 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
            type="submit"
            // onClick={onLogin}
          >
            Login here
          </button>
          <Link href="/signup"> Visit signup</Link>
        </div>

        <div>Image</div>
      </form>
    </div>
  );
}
