import Image from 'next/image'

export default function Product() {
  return (
    <div className="min-h-[700px] flex justify-between items-center bg-slate-950">
  <div className="pl-20 text-sm lg:text-2xl text-white h-[300px] flex flex-col justify-between">
      <p className="text-4xl font-bold pl-2  text-white ">Claims</p>
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

  <div className="grid-auto-flow: row mt-20">
               <Image
                src='/Header_HRS.png'
                width={500}
                height={500}
               />
  </div>
    </div>
  )
}
