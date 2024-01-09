"use client";
import React from "react";
import clsx from "clsx";
import Image from "next/image";

const TestimonialCard = (props : any) => {
    return (
        <div
            className={clsx(
                "min-h-[20.188rem] w-[17.813rem] sm:w-[33.813rem] shadow-xl flex flex-col",
                props.testimonialBg
            )}
        >
            {props.rating && (
                <div className="mt-10 w-full justify-center text-center text-2xl">
                    {props.rating}
                </div>
            )}
            {props.description && (
                <div className="w-full mt-7 px-4 flex justify-center">
                    <p className="w-[26.938rem] max-h-[4.5rem] overflow-auto">
                        {props.description}
                    </p>
                </div>
            )}
            {props.name && (
                <p className="mt-7 w-full flex justify-end pr-8 sm:pr-16">
                    {props.name}
                </p>
            )}
            <div className="flex w-full justify-center mt-6 px-4 sm:px-20">
                <div className="border border-[#CECECE] w-full"></div>
            </div>
            <div className="w-full flex pl-4 sm:pl-16 my-5">
                {props.productImage && (
                    <Image 
                        src={props.productImage}
                        alt={props.productName}
                        className="h-[3.125rem] w-[2rem] text-white rounded-md"
                    />
                )}
                {props.productName && (
                    <div className="ml-3 flex items-center">
                        {props.productName}
                    </div>
                )}
            </div>
        </div>
    );
};

export default TestimonialCard;
