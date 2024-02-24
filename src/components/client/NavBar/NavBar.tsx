"use client";

import Image from "next/image";
import Link from "next/link";
import SearchBar from "./SearchBar";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const NavBar = () => {
	const pathname = usePathname();

	return (
		<div className="w-full h-[100px] bg-transparent flex justify-between items-center pl-8 pr-7">
			<Link href={"/"}>
				<Image
					width={180}
					height={20}
					src={"/mainLogo.png"}
					alt="Menzenic"
				/>
			</Link>
			<div className="w-[500px] flex justify-between whitespace-nowrap font-semibold">
				<Link
					className={clsx(
						"w-[50px] hover:font-bold hover:underline underline-offset-4",
						pathname === "/" && "font-bold underline"
					)}
					href={"/"}
				>
					Home
				</Link>
				<Link
					className={clsx(
						"w-[80px] hover:font-bold hover:underline underline-offset-4",
						pathname === "/products" && "font-bold underline"
					)}
					href={"/products"}
				>
					Products
				</Link>
				<Link
					className={clsx(
						"w-[80px] hover:font-bold hover:underline underline-offset-4",
						pathname === "/about-us" && "font-bold underline"
					)}
					href={"/about-us"}
				>
					About us
				</Link>
				<Link
					className={clsx(
						"w-[150px] hover:font-bold hover:underline underline-offset-4",
						pathname === "/health-assessment" &&
							"font-bold underline"
					)}
					href={"/health-assessment"}
				>
					Health Assessment
				</Link>
				<Link
					className={clsx(
						"w-[50px] hover:font-bold hover:underline underline-offset-4",
						pathname === "/blogs" && "font-bold underline"
					)}
					href={"/blogs"}
				>
					Blogs
				</Link>
			</div>

			<div className="flex">
				<SearchBar />

				<Link href={"/user"}>
					<Image
						src={"/icons/profile.svg"}
						alt="profile"
						width={34}
						height={34}
						className="ml-4"
					/>
				</Link>
				<Link href={"/user/order-history"}>
					<Image
						src={"/icons/cart.svg"}
						alt="cart"
						width={30}
						height={30}
						className="ml-4"
					/>
				</Link>
				<Link href={"/user/wishlist"}>
					<Image
						src={"/icons/wishlist.svg"}
						alt="wishlist"
						width={32}
						height={32}
						className="ml-4"
					/>
				</Link>
			</div>
		</div>
	);
};

export default NavBar;
