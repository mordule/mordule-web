import Link from "next/link";

const NavFooter = () => {
	const currentYear = new Date().getFullYear();

	return (
		<div className="fixed bottom-0 items-center text-sm pb-4 m-auto justify-center">
			<Link
				target="_blank"
				href="https://mordule.com">
				&copy; mordule from curlback {currentYear}{" "}
			</Link>
		</div>
	);
};

export default NavFooter;
