"use client";

import { useState } from "react";

const Input = (props: {
	label: string;
	name: string;
	type: React.HTMLInputTypeAttribute;
	placeholder: string;
}) => {
	const [value, setValue] = useState<any>();

	return (
		<>
			<label className="text-white text-xl" htmlFor={props.name}>
				{props.label}
			</label>
			<input
				name={props.name}
				className="p-4 w-full  border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
				type={props.type}
				value={value}
				onChange={(e) => setValue(e.target.value)}
				placeholder={props.placeholder}
			/>
		</>
	);
};

export default Input;
