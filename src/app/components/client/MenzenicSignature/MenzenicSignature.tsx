import { MenzenicFullLogoBlock } from 'public/Images'
import React from 'react'
import clsx from "clsx";
// import { useNavigate } from "react-router-dom";
import { useRouter } from "next/navigation";
// import { MenzenicFullLogoBlock } from "/../../../public/Images"
function menzenicSignature() {
   
    // const router = useRouter();
    // const handleClick = () => {
        // navigate("/about-us");
    // };

  return (
    <>
    <div className='p-8 text-center min-h-[365px]'>
    {/* <div>menzenicSignature</div> */}

    < MenzenicFullLogoBlock className="w-full text-center mt-[3.44rem]" />
    <p className=" text-lg sm:text-xl font-bold mt-12 px-1 sm:px-20">
                Menzenic is more than a collection of products, here we believe
                it is a celebration to be a modern man in today's world. We are
                here to inspire and empower you on your journey towards becoming
                the best version of yourself by taking care of all your intimate
                (hygiene) needs.
            </p>

            <button
                className=
                    "border border-black rounded-md px-8 py-2 mt-6 
                    bg-[#0D0A0A] text-white
                    transition-all duration-200 hover:bg-white hover:text-black  text-center"
                
                // onClick={handleClick}
                // onClick={() => router.push("/products")}
            >
                More About Us
            </button>
            </div>

            </>







  )
}

export default menzenicSignature