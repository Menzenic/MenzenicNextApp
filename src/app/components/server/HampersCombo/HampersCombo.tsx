// import React from 'react'
import Image from "next/image"

function HampersCombo() {
  return (
    <>   
     <div className=' text-2xl'>

          <p className="text-center text-5xl mt-9">Hampers && Combo</p>

          <div className=" justify-center flex  mt-9 ">
            <div className=" text-center">
              <Image
               src="/Hampers_combo.png"
               width={200}
               height={200}
              />
            </div>
            <div className=" text-center">
            <Image
               src="/Hampers_combo.png"
               width={200}
               height={200}
               />

            </div>
            <div className="text-center">
            <Image
               src="/Hampers_combo.png"
               width={200}
               height={200}
               />
            </div>


          </div>

     </div>

     </>


  )
}

export default HampersCombo