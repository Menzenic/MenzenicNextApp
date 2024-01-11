import clsx from "clsx";
import Image from "next/image";

const SearchBar = (props: { className?: string; placeholder?: string }) => {
	return (
		<div className={clsx("relative", props.className)}>
			<div className="absolute left-1 top-1.5 text-black">
				<Image
					src={"/icons/search.svg"}
					alt="Search"
					width={16}
					height={16}
				/>
			</div>
			<input
				placeholder={props.placeholder ?? "Search"}
				className={clsx(
					"pl-6 w-[148px] h-[30px] text-black outline-none rounded-[4px] placeholder:text-black",
					props.className
				)}
				style={{
					background:
						"linear-gradient(270deg, #F9F9F9 -29.27%, rgba(249, 249, 249, 0.00) 191.25%)",
				}}
			/>
		</div>
	);
};

export default SearchBar;
