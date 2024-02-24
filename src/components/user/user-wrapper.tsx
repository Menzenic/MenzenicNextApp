"use client";

import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const UserWrapper = () => {
	const pathname = usePathname();

	return (
		<div className="flex h-full justify-start items-center">
			<div className="w-[282px] flex flex-col items-center text-white">
				<div className="text-center">
					<Image
						src="/user.svg"
						alt="user.svg"
						width={148}
						height={148}
					/>
					<p className="text-xl font-bold mt-4">User 1</p>
					<p className="text-base mt-1">user@user.com</p>
				</div>
				<div className="flex flex-col mt-16 text-center text-xl">
					<Link
						href={"/user"}
						className={clsx(
							"hover:font-bold",
							pathname === "/user" && "font-bold"
						)}
					>
						Personal Information
					</Link>
					<Link
						href={"/user/order-history"}
						className={clsx(
							"mt-10 hover:font-bold",
							pathname === "/user/order-history" && "font-bold"
						)}
					>
						Order history
					</Link>
					<Link
						href={"/user/wishlist"}
						className={clsx(
							"mt-10 hover:font-bold",
							pathname === "/user/wishlist" && "font-bold"
						)}
					>
						Wishlist
					</Link>
				</div>
			</div>
			<div className="h-full w-px bg-white ml-20" />
		</div>
	);
};
