import clsx from "clsx";
import ProductQuality from "./components/server/ProductQuality/ProductQuality";
import {
	BlogHome,
	Footer,
	Header,
	MenzenicSignature,
	WhyIntimateCare,
} from "@/components/server";
import FeaturedProducts from "./components/client/FeaturedProducts/FeaturedProducts";
import Testimonials from "./components/client/Testimonials/Testimonials";
import HampersCombo from "./components/server/HampersCombo/HampersCombo";
// import {blogs} from "./blogs"

export default function Home() {
	return (
		<main className="">
			<Header />
			<FeaturedProducts />
			<ProductQuality />
			<WhyIntimateCare />
			<HampersCombo />
			<Testimonials />
			<BlogHome />
			<MenzenicSignature />
			<Footer />
		</main>
	);
}
