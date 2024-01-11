import Image from "next/image";

import React from "react";
import clsx from "clsx";

import Heading from "@/components/server/Heading";

import "./ProductQuality.css";

const ProductQuality = () => {
	return (
		<div className="section-background-image bg-contain sm:bg-cover min-h-[458px] py-16 text-center relative">
			<div className={clsx("w-full mx-auto px-4")}>
				<Heading title="Our Brand Promises" className="text-white" />
				<div className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-20">
					{/* Icon 1 */}
					<div className="flex flex-col items-center">
						<Image
							src={"/icons/rabbit.svg"}
							alt="Rabbit"
							width={99}
							height={119}
						/>
						<p className="mt-3 text-2xl text-white">
							No animal testing
						</p>
					</div>

					{/* Icon 2 */}
					<div className="flex flex-col items-center">
						<Image
							src={"/icons/triangle.svg"}
							alt="Non toxic image"
							width={99}
							height={117}
						/>
						<p className="mt-3 text-2xl text-white">Non Toxic</p>
					</div>

					{/* Icon 3 */}
					<div className="flex flex-col items-center">
						<Image
							src={"/icons/earth.svg"}
							alt="earth icon"
							width={88}
							height={114}
						/>
						<p className="mt-3 text-2xl text-white">
							Environment Friendly
						</p>
					</div>

					{/* Icon 4 */}
					<div className="flex flex-col items-center">
						<Image
							src={"/icons/hand.svg"}
							alt="Hand icon"
							width={107}
							height={114}
						/>
						<span className="mt-3 text-2xl text-white">
							100% Natural
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductQuality;
