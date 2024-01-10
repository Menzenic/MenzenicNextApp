// import React from 'react'

export default function Footer() {
  return (
    //    <div>Footer</div>
    <div className="mx-7">
      <h1 className="text-white mx-9 text-4xl"> Contact Us</h1>

      <div className="grid lg:grid-cols-2 text-white mx-9 mt-3">
        {/* <div className=" "> */}
        <div className="grid lg:grid-cols-2">
          <div>
            <h3>Visit Us</h3>
            <br />
            <p>2972 Westheimer Rd.</p>
            <p>Santa Ana, Illinois 85486</p>
            <br />

            <input
              className=" h-12 px-4 mr-0 sm:mr-2 box-border bg-gray-100 border border-black rounded-xl"
              type="text"
              placeholder="Email"
            />
          </div>

          <div>
            <h3>Connect</h3>
            <br />
            <p>contact@menzenic.com</p>
            <p>+915654623164</p>
            <br />

            <button className="rounded-xl px-8 py-3 mt-4 sm:mt-0 w-full sm:w-36 h-12 text-white bg-black border border-black text-bold cursor-pointer">
              Subscibe
            </button>
          </div>
        </div>

        <div className=" text-white text-center text-4xl place-content-center ">
          MENZENIC
        </div>
      </div>
      {/* </div> */}
    </div>
  );
}
