import { cn } from "@/lib";
import { GeneralSans_SemiBold, GeneralSans_Meduim, GeneralSans_Regular } from "@/lib/font";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import { SquareArrowOutUpRight } from "lucide-react";

export default function Page() {
	return (
		<>
			<div className="lg:flex m-auto lg:items-center lg:text-center lg:justify-center w-full h-screen">
				<div>
					<div>
						<h1 className={cn("lg:text-7xl lg:w-[60%] m-auto lg:leading-[4.8rem]", GeneralSans_Meduim.className)}>save much more on deployment &nbsp;bills</h1>
						<p className={cn("py-8 text-xl lg:w-[47%] m-auto", GeneralSans_Regular.className)}>
							A cloud deployment server developed by{" "}
							<Link
								href="https://curlback.com"
								target="_blank">
								<u>curlback</u>&nbsp;
								<SquareArrowOutUpRight className="inline-flex w-4" />
							</Link>{" "}
							for{" "}
							<Link
								href="https://hynitr.com"
								target="_blank">
								<u>hynitr</u>&nbsp;
								<SquareArrowOutUpRight className="inline-flex w-4" />
							</Link>{" "}
							projects. Powered by{" "}
							<Link
								href="https://usedothost.com"
								target="_blank">
								<u>dothost</u>&nbsp;
								<SquareArrowOutUpRight className="inline-flex w-4" />
							</Link>{" "}
							and{" "}
							<Link
								href="https://coolify.io"
								target="_blank">
								<u>coolify</u>&nbsp;
								<SquareArrowOutUpRight className="inline-flex w-4" />
							</Link>{" "}
						</p>
					</div>

					<div className="m-auto mt-4 text-center">
						<Button
							as={Link}
							href=""
							className={cn("me-5 px-10 py-6", GeneralSans_Meduim.className)}>
							Access Dashboard
						</Button>
						<Button
							as={Link}
							href=""
							className={cn("ms-5 px-10 bg-primary text-secondary py-6", GeneralSans_Meduim.className)}>
							Get Deploy Access
						</Button>
					</div>
				</div>
			</div>
		</>
	);
}
