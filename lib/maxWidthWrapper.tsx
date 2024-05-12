"use client";

import { ReactNode } from "react";
import { cn } from "@/lib";
import { NextUIProvider } from "@nextui-org/react";
import { InternetStatus } from "react-check-internet-status";

const MaxWidthWrapper = ({ className, children }: { className?: string; children: ReactNode }) => {
	return (
		<main className={cn("container px-7", className)}>
			<NextUIProvider>{children}</NextUIProvider>
			<InternetStatus
				position="bottom-right"
				onlineMessage="Internet Restored 🚀"
				offlineMessage="No/Bad Internet Connection 😭"
			/>
		</main>
	);
};

export default MaxWidthWrapper;
