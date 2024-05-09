import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { GoogleTagManager, GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Mordule",
	description: "Save more on deployment bills",
};

export const viewport: Viewport = {
	themeColor: "#000",
	width: "device-width",
	initialScale: 1,
	maximumScale: 1,
	userScalable: false,
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<GoogleTagManager gtmId="GTM-PT7G5R5D" />
			<GoogleAnalytics gaId="G-6CZK0S66G3" />
			<body className={inter.className}>{children}</body>
		</html>
	);
}
