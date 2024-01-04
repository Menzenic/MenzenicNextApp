import { useState } from "react";

const Input = (props: { type: string; id: string; placeholder: string }) => {
	const [value, setValue] = useState<any>();

	return (
		<input
			className="p-4 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
			type={props.type}
			id={props.id}
			value={value}
			onChange={(e) => setValue(e.target.value)}
			placeholder={props.placeholder}
		/>
	);
};

export default Input;
