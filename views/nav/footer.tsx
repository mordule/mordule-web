import Link from "next/link";

const NavFooter = () => {
	const currentYear = new Date().getFullYear();

	return (
		<div className="fixed bottom-0 items-end text-sm pb-4 m-auto justify-end">
			<Link
				target="_blank"
				href="https://mordule.com"
				className="text-xs">
				&copy; mordule from curlback {currentYear}{" "}
			</Link>
		</div>
	);
};

export default NavFooter;
