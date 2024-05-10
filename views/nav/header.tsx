import Image from "next/image";
import { ModeToggle } from "@/lib";

const Header = () => {
	return (
		<nav className="flex">
			<Image
				src="/images/logo.png"
				alt="mordule"
				width={57}
				height={57}
				className="h-auto w-7"
			/>
			<ModeToggle />
		</nav>
	);
};

export default Header;
