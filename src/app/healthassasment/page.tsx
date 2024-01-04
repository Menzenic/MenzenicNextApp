export default function Healthassasment() {
    return (
        <div className="h-screen relative pt-32">
           {/* HealthAssasment Himanshu---------- */}
           <div  className="absolute top-[10rem] left-[4.875rem] z-10 w-full">
            <div className="mb-10 text-left leading-10 w-[80%] md:w-[70%]">
                  <p className="text-white font-bold w-full text-sm lg:text-3xl ">Ready to priorities your Intimate well-being?</p>
                  <p className="text-white lg:text-2xl mt-5 w-[70%] lg:leading-8">Complete our health assessment in just a few minutes
							and gain valuable insights to optimise your Intimate
							health and lead a happier, healthier life.</p>

                            <div className="mt-5 text-2xl text-white">
									Sign up for an exclusive set of problems
									based on your issue
									<br />
									{/* <Button
										className="text-sm text-black mt-3 !w-[12.5rem]"
										title={"Continue to sign up"}
										onClick={() => navigate("/auth")}
									/> */}
                                    <button className="rounded-xl h-17 w-30 text-center  px-8 py-3 mt-6 sm:mt-0 w-full sm:w-36 h-12 text-white bg-black border border-black text-bold hover:text-black hover:bg-white cursor-pointer " >Signup</button>
								</div>
                                <div className="mt-5 text-2xl text-white">
                                    Continue without signing up <br />

                                    <button className="rounded-xl  h-17 w-40 text-center px-8 py-3 mt-9 sm:mt-0  sm:w-36 h-12 text-white bg-black border border-black text-bold hover:text-black hover:bg-white cursor-pointer flex ">Start</button>

                                </div>
            </div>

           </div>
        </div>
    )
}