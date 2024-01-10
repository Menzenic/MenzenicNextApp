"use client";

import Image from "next/image";
import Link from "next/link";
import Search from "../Search/Search";

const NavBar = () => {
	return (
		<div className="w-full h-[100px] bg-transparent">
			<Link href={"/"}>
				<div className="relative h-[20px] w-[180px] mt-7 ml-8">
					<Image src={"/mainLogo.png"} alt="Menzenic" fill />
				</div>
			</Link>
		</div>
	);
};

export default NavBar;
