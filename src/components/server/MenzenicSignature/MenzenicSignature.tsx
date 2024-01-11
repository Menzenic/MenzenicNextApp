import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

import "./style.css";

const MenzenicSignature = () => {
	return (
		<div className="py-14 text-center flex flex-col items-center bg-white background">
			<Image
				src={"/icons/mainLogoBlack.svg"}
				alt="Menzenic"
				width={369}
				height={48}
			/>
			<p className="w-[70%] text-xl text-black font-bold mt-12">
				Menzenic is more than a collection of products, here we believe
				it is a celebration to be a modern man in today&apos;s world. We
				are here to inspire and empower you on your journey towards
				becoming the best version of yourself by taking care of all your
				intimate (hygiene) needs.
			</p>
			<Link
				href={"/about"}
				className={clsx(
					"border border-black rounded-md px-8 py-2 mt-6",
					"bg-[#0D0A0A] text-white",
					"transition-all duration-200 hover:bg-white hover:text-black"
				)}
			>
				More About Us
			</Link>
		</div>
	);
};

export default MenzenicSignature;
