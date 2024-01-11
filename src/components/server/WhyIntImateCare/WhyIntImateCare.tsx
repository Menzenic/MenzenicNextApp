import React from "react";
import Image from "next/image";
import clsx from "clsx";

import LikeIcon from "public/icons/LikeIcon";
import SmileIcon from "public/icons/SmileIcon";
import HygieneAndComfortIcon from "public/icons/HygieneAndComfortIcon";
import { AnimatedFlipCard } from "..";
import Heading from "../Heading";

const WhyIntimateCare = () => {
	return (
		<div className="py-16 flex flex-col items-center bg-white">
			<Heading title="Why Intimate Care is Important?" />
			<p className="text-center text-black mt-9 font-normal text-2xl">
				Neglecting intimate hygiene risks infections and discomfort.
				Prioritize it to maintain a <br />
				healthy genital area and overall well-being.
			</p>
			<div className="flex justify-center gap-16 items-center w-full mt-32">
				<AnimatedFlipCard
					imageSrc="/icons/smile.svg"
					alt="Poor hygiene"
					text={
						"Poor intimate hygiene can have lasting health implications, paving the way for the development of grave illnesses if disregarded."
					}
				/>
				<AnimatedFlipCard
					imageSrc="/icons/thumb.svg"
					alt="Thumb"
					text={
						"Opting for the right intimate care products can strengthen your immune system and elevate your sense of confidence."
					}
				/>
				<AnimatedFlipCard
					imageSrc="/icons/heart.svg"
					alt="Heart"
					text={
						"Practising good intimate hygiene not only boosts confidence, reduces discomfort, and prevents infections, but also improves intimacy and supports erectile health."
					}
				/>
			</div>
		</div>
	);
};

export default WhyIntimateCare;
