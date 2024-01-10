import clsx from "clsx";
import { Footer, Header, WhyIntimateCare } from "../components/server";
import ProductQuality from "@/components/server/ProductQuality/ProductQuality";

export default function Home() {
	return (
		<main className="">
			<Header />
			<WhyIntimateCare />
			<ProductQuality />
			{/* <MenzenicSignature /> */}
			{/* <Footer/> */}
		</main>
	);
}
