import Heading from "@/components/server/Heading";
import Image from "next/image";

const FeaturedProducts = () => {
	return (
		<div className="bg-white pt-12 pb-14">
			<div className="flex w-full justify-center">
				<Heading title="Featured products" />
			</div>
			<div className="flex flex-wrap justify-center gap-10 mt-24">
				<FeaturedProductItem title="Product 1" rate="599" />
				<FeaturedProductItem title="Product 2" rate="599" />
				<FeaturedProductItem title="Product 3" rate="599" />
				<FeaturedProductItem title="Product 4" rate="599" />
			</div>
		</div>
	);
};

const FeaturedProductItem = (props: { title: string; rate: string }) => {
	return (
		<div
			className="flex flex-col items-center text-black pt-4 px-3 pb-6"
			style={{
				boxShadow: "19px 14px 77px 0px rgba(0, 0, 0, 0.11)",
			}}
		>
			<Image
				alt="Featured Products"
				className="rounded-lg"
				src="/Feature_image_Liq.png"
				width={82}
				height={126}
			/>
			<p className="mt-3 text-2xl">{props.title}</p>
			<div className="mt-2 text-xl">{props.rate}</div>
			<div className="flex justify-between mt-3 text-sm">
				<button className="border border-black text-black py-2 px-4 rounded mr-1">
					Add to Cart
				</button>
				<button className="bg-black border border-black text-white py-2 px-4 rounded">
					Buy Now
				</button>
			</div>
		</div>
	);
};

export default FeaturedProducts;
