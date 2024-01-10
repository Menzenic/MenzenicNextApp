"use client";

import { ChatBotQuestions } from "@/utils/constants";
import clsx from "clsx";
import { useState } from "react";

type SexualHealthSectionType<T> = {
	title: string;
	options: T extends Record<any, string>
		? {
				[K in keyof T]: T[K];
		  }
		: JSX.Element;
	onClick: (val: string) => void;
};

export const useGenericState = <T,>(initialState: T) => {
	const [state, setState] = useState<T>(initialState);

	const updateState = (
		partialState: Partial<T> | ((prev: T) => Partial<T>)
	) => {
		setState((prev) => {
			if (typeof partialState === "function") {
				// If partialState is a function, execute it with the previous state
				const result = (partialState as (prev: T) => Partial<T>)(prev);
				return { ...prev, ...result };
			}

			// If partialState is an object, update the state as usual
			return { ...prev, ...partialState };
		});
	};

	return [state, updateState] as const;
};

const SexualHealthSection = (
	props: SexualHealthSectionType<{ [k: string]: string }>
) => {
	const [ans, setAns] = useState<string>();
	const quiz = ChatBotQuestions.sexualHealthQuiz;
	const quizLen = ChatBotQuestions.sexualHealthQuiz.length;
	console.log("lenOfQuiz:", quiz);
	const arr = [];

	let x = 0;
	const showMore = () => {
		arr.push(quiz[x]);
		x++;
	};

	return (
		<div className={clsx("w-full flex flex-col")}>
			<ChatBubble
				title={props.title}
				options={props.options}
				onClick={(val: string) => {
					setAns(val);
					showMore();
				}}
			/>
			<div className="h-[50px] flex justify-end">
				{ans && <p className="py-2 px-3 bg-gray-500">{ans}</p>}
			</div>
		</div>
	);
};

const ChatBubble = (
	props: SexualHealthSectionType<{ [key: string]: string }>
) => {
	const [selected, setSelected] = useGenericState<{ [key: string]: boolean }>(
		{}
	);
	// const handleOptionClick = (val: string) => {
	// 	setSelected((prev) => {
	// 		if (typeof prev === "function") {
	// 			// If prev is a function, execute it with an empty object and cast the result
	// 			const result = (
	// 				prev as (prev: { [key: string]: boolean }) => {
	// 					[key: string]: boolean;
	// 				}
	// 			)({});
	// 			return result;
	// 		}

	// 		// If prev is an object, update the state as usual
	// 		const updatedState: { [key: string]: boolean } = {
	// 			...Object.fromEntries(
	// 				Object.keys(prev).map((key) => [key, false])
	// 			),
	// 			[val]: true,
	// 		};
	// 		return updatedState;
	// 	});

	// };

	const handleOptionClick = (option: string, val: string) => {
		setSelected((prev) => ({
			...Object.fromEntries(Object.keys(prev).map((key) => [key, false])),
			[val]: true,
		}));
		props.onClick(option);
	};

	const disablePointerEvents = Object.values(selected).some((val) => val);

	return (
		<div
			className={clsx(
				"min-w-[100px] max-w-max flex flex-col items-start min-h-20 border border-white bg-white",
				disablePointerEvents && "pointer-events-none"
			)}
		>
			<p>{props.title}</p>
			{Object.keys(props.options).map((val, idx) => {
				return (
					<p
						className={clsx(
							"hover:bg-gray-500 cursor-pointer min-w-[300px] py-2 px-3",
							selected[val] === true && "bg-gray-500"
						)}
						key={idx}
						onClick={() =>
							handleOptionClick(props.options[val], val)
						}
					>
						- {props.options[val]}
					</p>
				);
			})}
		</div>
	);
};

export default SexualHealthSection;
