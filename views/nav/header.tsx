import Image from "next/image";
const Header = () => {
	return (
		<nav className="flex m-auto py-5 items-center">
			<div>
				<Image
					src="/images/logo.png"
					alt="mordule"
					width={57}
					height={57}
					className="h-auto w-7"
				/>
			</div>
		</nav>
	);
};

export default Header;
