import Image from "next/image";

export default function Footer() {
	return (
		<footer className="bg-[#F0F0F0] pt-14 pb-8 px-16 text-black flex flex-col items-start">
			<h2 className="font-bold text-5xl"> Contact Us</h2>
			<div className="flex w-full justify-between items-center mt-11">
				<div className="grid grid-cols-2 gap-20">
					<div>
						<p className="font-bold text-2xl">Visit Us</p>
						<p className="text-base mt-4">
							2972 Westheimer Rd.
							<br /> Santa Ana, Illinois 85486
						</p>
					</div>

					<div>
						<p className="font-bold text-2xl">Contact</p>
						<p className="mt-4">
							contact@menzenic.com <br />
							+915654623164
						</p>
					</div>
				</div>
				<Image
					alt="Footer Menzenic"
					src="/icons/mainLogoBlack.svg"
					width={369}
					height={48}
					className="text-white text-center text-4xl"
				/>
			</div>

			<div className="flex mt-11">
				<input
					placeholder="Email"
					type="email"
					className="bg-[#F0F0F0] border border-black w-56 h-12 px-3 outline-none"
				/>
				<button className="bg-black text-white py-3 px-8 ml-2">
					Subscibe
				</button>
			</div>
		</footer>
	);
}
