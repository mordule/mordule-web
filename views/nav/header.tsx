import Link from "next/link";
import Image from "next/image";
import { ModeToggle } from "@/lib";

const Header = () => {
	return (
		<div className="container flex lg:px-14 fixed top-8 text-sm pb-4 m-auto justify-between">
			<Link href="/">
				<Image
					src="/images/logo.png"
					alt="mordule"
					width={57}
					height={57}
					className="h-auto w-8"
				/>
			</Link>
			<ModeToggle />
		</div>
	);
};

export default Header;
