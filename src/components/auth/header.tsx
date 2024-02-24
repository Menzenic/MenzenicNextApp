import { cn } from "@/lib/utils";

export const Header = (props: { label: string }) => {
	return (
		<div
			className={cn(
				"flex flex-col items-center justify-center w-full gap-y-4 text-black"
			)}
		>
			<h1 className={cn("text-3xl font-semibold")}>Auth</h1>
			<p className="text-sm text-muted-foreground">{props.label}</p>
		</div>
	);
};
