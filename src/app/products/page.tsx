// import React from 'react'
// import {HairRemovalSprayPng} from "./public/"
import {HairRemovalSprayPng} from "public/Images"

export default function Product() {
  return (
    <div className="grid grid-cols-2 gap-4">
  
  <div className="">
      <p className="text-4xl font-bold pl-7 mt-20 text-white ">Claims</p>
            <p className="text-2xl font-bold pl-7 mt-2 text-white">
			    &#x2022; The best product in the hair removal space - if
				you don’t believe us, try it out for yourself.
			</p><br />
            <p className="text-2xl font-bold pl-7 text-white mt-2">&#x2022; Saves you time, removes hair in just 5 mins.</p><br />
					<p className="text-2xl font-bold   text-white pl-7 mt-2">
						&#x2022; No side effects, applicable on all skin types.
					</p><br />
					<p className="text-2xl font-bold pl-7 text-white mt-2">[One Product, honed to perfection]</p><br />
  </div>

  <div className="grid-auto-flow: row">
          {/* <img src={HairRemovalSprayPng} alt="" /> */}
          <img src="Images\png\HairRemovalSprayBgRem.08913c67c6d9439a37b1.png" alt="" />
  </div>
    </div>
  )
}
