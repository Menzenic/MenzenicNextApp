import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavBar from "../components/client/NavBar/NavBar";
import Search from "../components/client/Search/Search";
import StoreProvider from "@/lib/StoreProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Menzenic",
	description:
		"Official website for menzenic. The ultimate intimate hygiene place for men",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<StoreProvider>
					<NavBar />
					{children}
					{/* <Footer /> */}
				</StoreProvider>
			</body>
		</html>
	);
}
