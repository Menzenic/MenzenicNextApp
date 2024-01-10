import Link from "next/link";
// import SearchBar from "../SearchBar/SearchBar";

const NavBar = () => {
	return (
		<div className="bg-slate-950 text-white w-full h-14 flex justify-between px-5">
			<div className=" text-2xl font-bold ">
				<Link href="/home">
					{" "}
					<p className="cursor-pointer text-center  ">
						{/* <Image src="Images\png\MENZENIC-NAV (1).png" /> */}
					</p>{" "}
				</Link>
			</div>

			<div className="md:flex justify-between text-center font-semibold gap-2">
				<Link href="/home">
					{" "}
					<p className="cursor-pointer mx-[10]">Home</p>{" "}
				</Link>
				<Link href="/products">
					{" "}
					<p className="cursor-pointer mx-[10]">Products</p>{" "}
				</Link>
				<Link href={"/about"}>
					{" "}
					<p className="cursor-pointer mx-[10]">About us</p>{" "}
				</Link>
				<Link href={"/health-assesment"}>
					<p>Health Assesment </p>{" "}
				</Link>
				<Link href="/blogs">
					{" "}
					<p className="cursor-pointer mx-[10]">Blogs</p>{" "}
				</Link>
			</div>

			<div className=" items-center rounded-lg mt-3">
				{/* <Search /> */}
			</div>

			<div className="text-xl flex justify-between text-center font-semibold gap-3">
				<Link href={"login"}>
					<p className="cursor-pointer mx-[10]">Login</p>
				</Link>
				<Link href="/signup">
					<p className="cursor-pointer mx-[10]">SignUp</p>
				</Link>
			</div>
		</div>
	);
};

export default NavBar;
