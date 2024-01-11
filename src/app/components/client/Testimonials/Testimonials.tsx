"use client";
import React, { useEffect, useState } from "react";
import {
	CarouselProvider,
	Slider,
	Slide,
	ButtonBack,
	ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

import testimonialData from "../../../../utils/testimonialData";
import TestimonialCard from "../TestimonialCard/TestimonialCard";
import { RightSliderArrow, LeftSliderArrow } from "public/icons";
import Heading from "@/components/server/Heading";

// import "../components/Testimonials/Testimonials.css";
// import "../utils/styles/styles.css";

const Testimonials = () => {
	const [slidesVisible, setSlidesVisible] = useState(4);

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth < 768) {
				setSlidesVisible(1);
			} else {
				setSlidesVisible(2);
			}
		};

		window.addEventListener("resize", handleResize);
		handleResize();

		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<section className="flex flex-col items-center pt-16 pb-5 bg-white">
			<Heading title="Testimonial" />
			<div className="w-full mt-14">
				<CarouselProvider
					className="relative h-[450px]"
					naturalSlideHeight={50}
					naturalSlideWidth={50}
					visibleSlides={slidesVisible}
					totalSlides={6}
				>
					<Slider className="w-full sm:pr-10 pl-12 sm:pl-24">
						{testimonialData.map((testimonial, idx) => (
							<Slide index={idx} key={idx}>
								{" "}
								{/* Added a unique key prop */}
								<TestimonialCard
									rating={testimonial.rating}
									description={
										"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
									}
									name={testimonial.name}
									productImage={testimonial.productImage}
									productName={testimonial.productName}
								/>
							</Slide>
						))}
					</Slider>
					<ButtonBack className="absolute top-[9rem] left-5">
						<LeftSliderArrow />
					</ButtonBack>
					<ButtonNext className="absolute top-[9rem] right-5">
						<RightSliderArrow />
					</ButtonNext>
				</CarouselProvider>
			</div>
		</section>
	);
};

export default Testimonials;
