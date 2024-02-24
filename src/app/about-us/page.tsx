import Image from "next/image";
// import menZenicImage from "../../images/about-us.jpeg";
import "./about.css";

import { Group } from "../../../public/icons";
import { VisionIcon } from "../../../public/icons";

// import { VisionIcon} from "./"

export default function About() {
	return (
		<div className="bg-black">
			{/* <div> */}
			{/* <Group /> */}
			<div className="grid md:grid-cols-2 ">
				{/* <div className=" text-4xl"> */}
				{/* <h1>Imag</h1> */}
				<div className="about-image flex-0 pl-12 pb-14 mr-16 w-4/5 pt-20">
					<Image
						src="/About_MainImage.png"
						width={500}
						height={500}
						alt="Picture of the author"
					/>
				</div>
				{/* </div> */}

				<div className="grid grid-flow-col auto-cols-max pt-20">
					<div className="bg-white-400 w-[600px] pb-20">
						<p className="font-bold text-2xl mb-8 text-white">
							Welcome to our world of intimate care!
						</p>
						<p className="text-lg mb-8 text-white lg:mr-10">
							At Menzenic, we are not frightened to attack the
							taboo and shake up the status quo. We believe that
							taking care of your intimate areas should be as
							pleasurable as it&apos;s essential. That is why we
							have designed a range of intimate care products that
							are as unique as you are.
							<br />
							<br />
							We understand that style isn&apos;t just about what
							you wear or how you groom, it&apos;s about embracing
							a mindset that shows confidence. Our precisely
							curated selection of intimate care products reflects
							our commitment to quality, and timeless appeal. Each
							item in our intimate care roster is designed to
							improve your self-confidence and to make a lasting
							impression. At Menzenic it&apos;s about creating a
							community of like-minded people who value the finer
							things in life. Our brand is a place where you can
							find alleviation, engage in meaningful exchanges,
							and discover new possibilities.
							<br />
							<br />
							With Menzenic&apos;s intimate care range, don&apos;t
							just be better, be the best.
						</p>

						<div className="flex flex-col mt-16 text-xl leading-8 md:flex-row md:mt-16">
							<div className="flex flex-col items-start">
								<div className="flex items-center mb-2">
									<VisionIcon className="text-3xl mr-2" />
									{/* <img src="Images\Pngs\vission.png" alt="" /> */}
									<span className="text-white text-2xl font-bold ml-2">
										Vision
									</span>
								</div>
								<p className="text-white text-left mt-6 text-lg max-w-xs lg:max-w-md md:w-full">
									Our Vision is to help men to be the best
									version of themselves, by taking care of
									their most basic need i.e. their intimate
									well-being.
								</p>
							</div>
							<div className="text-white flex flex-col items-start ml-0 mt-8 sm:mt-0 md:ml-20">
								<div className="flex items-center mb-2">
									{" "}
									{/* <Image
										src="Images\Pngs\mission.png"
										alt=""
									/> */}
									<Group className="text-3xl mr-2" />
									<span className="text-2xl font-bold ml-2 text-white">
										Mission
									</span>
								</div>
								<p className="section-text text-white text-lg text-left mt-6 max-w-xs lg:max-w-md md:w-full">
									To educate men about the importance of their
									intimate hygiene & sexual well-being and to
									remove the stigma and taboo around it.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* </div> */}

			{/* Footer */}
		</div>
	);
}
