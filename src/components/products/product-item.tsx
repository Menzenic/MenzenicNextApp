"use client";

import Image from "next/image";
import { Button } from "@/components/client";

export const ProductItem = (props: {
	imageSrc: string;
	alt: string;
	productName: string;
	productPrice: string;
}) => {
	return (
		<div
			className="w-full h-[353px] flex relative bg-black rounded-xl"
			style={{
				boxShadow: "18px -3px 84px 0px rgba(102, 102, 102, 0.11)",
			}}
		>
			<Image
				src={props.imageSrc}
				alt={props.alt}
				width={366}
				height={366}
			/>
			<div className="h-full flex flex-col items-start justify-center">
				<p className="text-3xl font-bold">{props.productName}</p>
				<p className="pt-5 pb-9 text-2xl">₹ {props.productPrice}</p>
				<div className="flex gap-6">
					<Button
						onClick={() => console.log(props.productName)}
						title="Add to cart"
					/>
					<Button
						onClick={() => console.log(props.productName)}
						title="Buy now"
					/>
				</div>
			</div>
			<Image
				src={"/icons/emptyHeart.svg"}
				alt="emptyHeart.svg"
				height={32}
				width={32}
				className="absolute right-10 top-10"
			/>
		</div>
	);
};
