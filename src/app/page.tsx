import clsx from "clsx";
import { Footer, Header, WhyIntimateCare } from "./components/server";
import ProductQuality from "./components/server/ProductQuality/ProductQuality";
import { MenzenicSignature } from "./components/client";
import  { HampersCombo} from "./components/server"
import {FeaturedProducts} from "./components/client"
import { Testimonials } from "./components/client";
// import {blogs} from "./blogs"

export default function Home() {
	return (
		<main className="">
			<Header />
			<FeaturedProducts/>
			<ProductQuality />
			<WhyIntimateCare />
			<HampersCombo/>
			<Testimonials/>
			{/* <blogs/> */}
			<MenzenicSignature />
			<Footer/>
		</main>
	);
}
