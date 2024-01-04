"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
// import {axios} from "axios";

export default function Signpage() {
	const [user, setUser] = React.useState({
		email: "",
		password: "",
		name: "",
	});

	const onSignup = async () => {};
	return (
		<div className="flex flex-col items-center justify-center  min-h-screen py-2">
			<h1 className="text-4xl mb-4">Get Started Now</h1> <hr />
			<label htmlFor="name">Unsername</label>
			<input
				className="p-4 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
				type="text"
				id="name"
				value={user.name}
				onChange={() => setUser({ ...user, name: e.target.value })}
				placeholder="name"
			/>
			<label htmlFor="name">Email</label>
			<input
				className="p-4 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
				type="text"
				id="email"
				value={user.email}
				onChange={() => setUser({ ...user, email: e.target.value })}
				placeholder="email"
			/>
			<label htmlFor="name">Password</label>
			<input
				className="p-4 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
				type="password"
				id="password"
				value={user.password}
				onChange={() => setUser({ ...user, password: e.target.value })}
				placeholder="password"
			/>
			<button
				className="p-4 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
				onClick={onSignup}
			>
				Signup here
			</button>
			<Link href="/login"> Visit login</Link>
		</div>
	);
}
