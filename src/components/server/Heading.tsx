import clsx from "clsx";

export default function Heading(props: { title: string; className?: string }) {
	return (
		<h2
			className={clsx(
				"text-[44px] text-black font-bold",
				props.className
			)}
		>
			{props.title}
		</h2>
	);
}
