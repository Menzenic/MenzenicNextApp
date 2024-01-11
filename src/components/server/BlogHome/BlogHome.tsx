import Image from "next/image";
import Heading from "../Heading";
import Link from "next/link";

export default function BlogHome() {
	return (
		<div className="section-background-image py-11 px-7 flex flex-col items-center">
			<Heading title="Blogs" className="text-white" />
			<div className="flex w-full justify-center gap-7 mt-12">
				<BlogItem
					imageSrc="/blog1.png"
					title="Taking care of men’s intimate hygiene"
					urlLink=""
				/>
				<BlogItem
					imageSrc="/blog1.png"
					title="Taking care of men’s intimate hygiene"
					urlLink=""
				/>
				<BlogItem
					imageSrc="/blog1.png"
					title="Taking care of men’s intimate hygiene"
					urlLink=""
				/>
				<BlogItem
					imageSrc="/blog1.png"
					title="Taking care of men’s intimate hygiene"
					urlLink=""
				/>
			</div>
		</div>
	);
}

const BlogItem = (props: {
	imageSrc: string;
	title: string;
	urlLink: string;
}) => {
	return (
		<div className="flex flex-col items-start">
			<Image
				src={props.imageSrc}
				alt={props.title}
				width={286}
				height={284}
			/>
			<p className="mt-8 text-xl font-bold">{props.title}</p>
			<Link href={props.urlLink} className="underline text-xl">
				Read more
			</Link>
		</div>
	);
};
