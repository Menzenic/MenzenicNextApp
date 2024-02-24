"use client";

import { useState } from "react";

export const UserInfo = (props: { title: string; inputField: string }) => {
	const [val, setVal] = useState(props.inputField);

	return (
		<div className="flex flex-col items-start text-white">
			<p className="text-base font-bold mb-2">{props.title}</p>
			<input
				value={val}
				onChange={(e) => setVal(e.target.value)}
				className="outline-none w-[312px] h-[52px] rounded-[3px] bg-transparent border border-white px-5"
			/>
		</div>
	);
};
