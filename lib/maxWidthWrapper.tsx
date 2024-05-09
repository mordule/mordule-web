"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { NextUIProvider } from "@nextui-org/react";
import { InternetStatus } from "react-check-internet-status";

const MaxWidthWrapper = ({ className, children }: { className?: string; children: ReactNode }) => {
	return (
		<main className={cn("w-full max-w-screen-2xl items-center justify-between", className)}>
			<NextUIProvider>{children}</NextUIProvider>
			<InternetStatus
				position="bottom-right"
				onlineMessage="🚀 Online 🚀"
				offlineMessage="❌ Offline ❌"
			/>
		</main>
	);
};

export default MaxWidthWrapper;
