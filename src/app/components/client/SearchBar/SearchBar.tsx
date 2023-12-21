"use client";
import { useState } from "react";
import clsx from "clsx";

const SearchBar = (props: {
    className: string,
    placeholder: string
}) => {
    const [inputValue, setInputValue] = useState("");

    return (
        <div className={clsx("relative", props.className)}>
            <div className="absolute left-1 top-1.5 text-black">
                <FiSearch />
            </div>
            <input
                onChange={(e) => setInputValue(e.target.value)}
                value={inputValue}
                placeholder={props.placeholder ?? "Search"}
                className={`pl-6 min-w-[10.063rem] h-[1.875rem] text-black search-input ${props.inputClassName}`}
            />
        </div>
    );
};

export default SearchBar;