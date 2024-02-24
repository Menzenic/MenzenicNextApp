import { ProductItem } from "@/components/products/product-item";
import { PRODUCTS } from "@/data/data";
import Image from "next/image";

export default async function Product() {
	return (
		<div
			className="min-h-[700px] flex flex-col items-center bg-black px-8"
			style={{
				background:
					"linear-gradient(180deg, #000 -4.92%, rgba(117, 113, 113, 0.46) 180.98%, rgba(164, 164, 164, 0.00) 225.36%)",
			}}
		>
			<div className="w-full flex justify-between items-center">
				<p className="text-3xl">All products</p>
				<div className="flex gap-2 justify-between">
					<Image
						src={"/icons/filter.svg"}
						alt="filter.svg"
						width={24}
						height={24}
						className="cursor-pointer"
					/>
					{/* TODO in stock from db */}
					<p className="font-bold underline underline-offset-4 cursor-pointer">
						In stock
					</p>

					{/* TODO out of stock from db */}
					<p className="text-opacity-10 font-light cursor-pointer">
						Out of stock
					</p>
				</div>
			</div>
			<div className="w-[1067px] py-14 flex flex-col gap-11">
				{/* TODO: fetch product data from db */}
				{PRODUCTS.map((product) => {
					return (
						<ProductItem
							key={product.id}
							imageSrc={product.imageSrc}
							alt={product.alt}
							productName={product.productName}
							productPrice={product.productPrice}
						/>
					);
				})}
			</div>
		</div>
	);
}
