import clsx from "clsx";
import Image, { StaticImageData } from "next/image";

const AnimatedFlipCard = (props: {
	imageSrc: string;
	text: string;
	alt: string;
}) => {
	return (
		<div
			style={{
				boxShadow: "19px 14px 77px 0px rgba(0, 0, 0, 0.11)",
			}}
			className="w-[297px] min-h-[350px] relative rounded-[19px] pb-10 pt-28 px-3 text-black text-lg text-center"
		>
			<div className="flex justify-center items-center absolute left-1/2 -translate-x-1/2 -top-20 bg-black h-[164px] w-[164px] rounded-full">
				<Image
					src={props.imageSrc}
					alt={props.alt}
					width={70}
					height={70}
				/>
			</div>
			<p>{props.text}</p>
		</div>
	);
};

export default AnimatedFlipCard;
