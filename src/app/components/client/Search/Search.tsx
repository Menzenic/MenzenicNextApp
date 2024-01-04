"use client";

import clsx from "clsx";
import { useState } from "react";

const SearchBar = (props: { className: string; placeholder: string }) => {
	const [inputValue, setInputValue] = useState("");

	return (
		<>
			<div className={clsx("relative", props.className)}>
				<div className="absolute left-1 top-1.5 text-black">
					{/* <FiSearch /> */}
				</div>
				<input
					onChange={(e) => setInputValue(e.target.value)}
					value={inputValue}
					placeholder={props.placeholder ?? "Search"}
					className={`pl-6 min-w-[10.063rem] h-[1.875rem] text-black rounded-lg search-input ${props.className}`}
				/>
			</div>
		</>
	);
};

export default SearchBar;
