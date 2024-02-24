import { UserWrapper } from "@/components/user/user-wrapper";

export default function UserLayout(props: { children: React.ReactNode }) {
	return (
		<div
			className="w-full h-[700px] flex items-center px-20 py-20"
			style={{
				background:
					"linear-gradient(180deg, #000 -23.2%, rgba(41, 41, 41, 0.46) 108.85%, rgba(164, 164, 164, 0.00) 225.36%)",
			}}
		>
			<UserWrapper />
			{props.children}
		</div>
	);
}
