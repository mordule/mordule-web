import { cn } from "@/lib/utils";
import { GeneralSans_SemiBold } from "@/lib/font";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Page() {
	return (
		<div>
			<div className="items-center grid m-auto lg:justify-center w-full h-full">
				<div className="py-5 w-full m-auto">
					<Card className="shadow-2xl rounded-2xl lg:w-[31rem] lg:p-5 p-2">
						<CardHeader className="text-start mb-5">
							<CardTitle className={cn("text-3xl text-primary", GeneralSans_SemiBold.className)}>Welcome Back</CardTitle>
							<CardDescription className={cn("bg-idLightBlue text-sm text-muted-foreground font-normal", GeneralSans_SemiBold.className)}>Login to your dashboard</CardDescription>
						</CardHeader>
					</Card>
				</div>
			</div>
		</div>
	);
}
