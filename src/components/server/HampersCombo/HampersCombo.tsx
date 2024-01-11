// import React from 'react'
import Heading from "@/components/server/Heading";
import Image from "next/image";

const HampersCombo = () => {
	return (
		<section className="flex flex-col items-center pt-12 pb-20 px-20 section-background-image">
			<Heading title="Hampers & Combos" className="text-white" />
			<div className="justify-center flex gap-9 mt-11">
				<HamperItem imageSrc="/hamper.png" alt="Hamper1" />
				<HamperItem imageSrc="/hamper.png" alt="Hamper1" />
				<HamperItem imageSrc="/hamper.png" alt="Hamper1" />
			</div>
		</section>
	);
};

const HamperItem = (props: { imageSrc: string; alt: string }) => {
	return (
		<div
			className="h-96 w-[342px] flex items-center justify-center rounded-[19px] border border-white"
			style={{
				boxShadow: "19px 14px 77px 0px rgba(0, 0, 0, 0.11)",
			}}
		>
			<Image
				src={props.imageSrc}
				alt={props.alt}
				width={296}
				height={344}
			/>
		</div>
	);
};

export default HampersCombo;
