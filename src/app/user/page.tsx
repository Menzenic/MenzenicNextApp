import { UserInfo } from "@/components/user/user-info";

export default async function UserPage() {
	// TODO fetch from db and update the fields

	// TODO on starting to type show button and allow update

	return (
		<form className="w-full h-full flex flex-col items-center">
			<div className="flex justify-center gap-14 mb-10">
				<UserInfo inputField="Manish" title="Name" />
				<UserInfo inputField="" title="Email" />
			</div>
			<div className="flex justify-center gap-14 mb-8">
				<UserInfo inputField="" title="Date of Birth" />
				<UserInfo inputField="" title="Phone" />
			</div>
			<div className="flex flex-col mb-10">
				<p className="text-base font-bold mb-2 w-full flex justify-start">
					Address
				</p>
				<div className="w-full flex justify-between gap-14">
					<UserInfo inputField="" title="House/ Flat number" />
					<UserInfo inputField="" title="Apartment" />
				</div>
			</div>
			<div className="flex justify-center gap-14">
				<UserInfo inputField="" title="Landmark" />
				<UserInfo inputField="" title="Pin Code" />
			</div>
		</form>
	);
}
