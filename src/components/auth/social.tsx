"use client";

import { signIn } from "next-auth/react";
import { FaApple } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";

import { Button } from "@/components/ui/button";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";

export const Social = () => {
	const onClick = (provider: "google" | "apple") => {
		signIn(provider, {
			callbackUrl: DEFAULT_LOGIN_REDIRECT,
		});
	};

	return (
		<div className="w-full gap-x-2 flex items-center">
			<Button
				className="w-full"
				size={"lg"}
				variant={"outline"}
				onClick={() => onClick("google")}
			>
				<FcGoogle className="h-5 w-5" />
			</Button>
			<Button
				className="w-full"
				size={"lg"}
				variant={"outline"}
				onClick={() => onClick("apple")}
			>
				<FaApple className="h-5 w-5" />
			</Button>
		</div>
	);
};
