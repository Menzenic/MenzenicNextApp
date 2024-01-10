"use client";

import Link from "next/link";
import React from "react";
import { Input } from "@/components/client";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/utils/firebase";
import { loginUser } from "@/utils/utils";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/lib/store";

export default function Loginnpage() {
	const dispatch = useDispatch<AppDispatch>();

	async function handleSubmit(formdata: FormData) {
		// "use server";
		// const email = formdata.getAll("email").toString();
		// const password = formdata.getAll("password").toString();
		// console.log("email, password::", email, password);
		// let result = null,
		// 	error = null;
		// try {
		// 	result = await signInWithEmailAndPassword(auth, email, password);
		// 	console.log("result:", result);
		// } catch (e) {
		// 	error = e;
		// 	console.log("error:", error);
		// }
		// const res = await signInWithEmailPass(email, password);
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
					<Input
						label="Email"
						name="email"
						placeholder="email"
						type="email"
					/>

					<Input
						label="Password"
						name="password"
						placeholder="password"
						type="password"
					/>
					<button
						className="p-4 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
						type="submit"
						// onClick={onLogin}2
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
