import { cn } from "@/lib";
import { GeneralSans_SemiBold, GeneralSans_Meduim } from "@/lib/font";

export default function Page() {
	return (
		<div className="flex items-center justify-center h-screen">
			<div>
				<h1 className={cn("text-5xl text-center", GeneralSans_Meduim.className)}>Save much more on deployment bills</h1>
			</div>
		</div>
	);
}
