import Link from "next/link";

const NavFooter = () => {
	const currentYear = new Date().getFullYear();

	return (
		<div className="container flex px-7 lg:px-14 fixed bottom-0 text-sm pb-4 m-auto justify-between">
			<Link
				target="_blank"
				href="https://mordule.com"
				className="text-xs">
				&copy; mordule {currentYear}{" "}
			</Link>

			<Link
				target="_blank"
				href="https://status.mordule.com"
				className="text-xs">
				View Network Status
			</Link>
		</div>
	);
};

export default NavFooter;
