import type { Metadata } from "next";
import { Inter, } from "next/font/google";
import NavigationSideBar from "./navigation_side_bar";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Dashboard",
    description: "Dashboard for Syncony",
};

export const dynamic = 'error';

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <body className={`${inter.className} flex flex-row w-screen h-screen bg-cloud
        dark:bg-cloud-dark`}>
            {/* sidebar */}
            <NavigationSideBar />

            {/* main content */}
            <main className="flex-1 h-screen bg-white/80 dark:bg-black/50 overflow-y-auto">
                {children}
            </main>
        </body>
    );
}
