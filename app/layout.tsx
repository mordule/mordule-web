import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { MaxWidthWrapper, ThemeProvider, cn } from "@/lib";
import { GoogleTagManager, GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import { NavFooter } from "@/views";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: {
		default: "Mordule - Save more on deployment bills",
		template: "%s",
	},
	description: "Mordule is a powerful cloud management platform that helps businesses optimize their cloud infrastructure and save on deployment costs",
	twitter: {
		card: "summary_large_image",
	},
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
		<html
			lang="en"
			suppressHydrationWarning>
			<GoogleTagManager gtmId="GTM-PCLTNXKQ" />
			<GoogleAnalytics gaId="G-6CZK0S66G3" />
			<body className={cn("container min-h-screen bg-background max-w-screen-2xl m-auto home font-san antialiased", inter.className)}>
				<ThemeProvider
					attribute="class"
					defaultTheme="dark"
					enableSystem
					disableTransitionOnChange>
					<MaxWidthWrapper>
						{children}
						<NavFooter />
					</MaxWidthWrapper>
				</ThemeProvider>
			</body>
		</html>
	);
}
