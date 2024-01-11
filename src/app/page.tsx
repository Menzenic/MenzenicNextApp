import {
	BlogHome,
	FeaturedProducts,
	HampersCombo,
	Header,
	MenzenicSignature,
	ProductQuality,
	WhyIntimateCare,
} from "@/components/server";
import { Testimonials } from "@/components/client";

export default function Home() {
	return (
		<main>
			<Header />
			<FeaturedProducts />
			<ProductQuality />
			<WhyIntimateCare />
			<HampersCombo />
			<Testimonials />
			<BlogHome />
			<MenzenicSignature />
		</main>
	);
}
