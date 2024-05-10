import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { MaxWidthWrapper, ThemeProvider, cn } from "@/lib";
import { GoogleTagManager, GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import { NavFooter, Header } from "@/views";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: {
		default: "Mordule - Save more on deployment bills",
		template: "%s",
	},
	description: "Mordule is a powerful cloud management platform that helps businesses optimize their cloud infrastructure and save on deployment costs",
	robots: {
		index: true,
		follow: true,
		nocache: false,
		googleBot: {
			index: true,
			follow: true,
			noimageindex: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	twitter: {
		card: "summary_large_image",
	},
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
			<body className={cn("bg-background min-h-screen max-w-screen-2xl m-auto antialiased", inter.className)}>
				<ThemeProvider
					attribute="class"
					defaultTheme="light"
					enableSystem
					disableTransitionOnChange>
					<MaxWidthWrapper>{children}</MaxWidthWrapper>
					<NavFooter />
				</ThemeProvider>
			</body>
		</html>
	);
}
