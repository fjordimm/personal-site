import type { Metadata } from "next";
import { Mukta, Aleo } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import personalBackground from "./res/images/personal_background.png";

const fontMukta = Mukta({
    variable: "--font-mukta",
    weight: ["200", "300", "400", "500", "600", "700", "800"],
    subsets: ["latin"],
    display: "swap"
});

const fontAleo = Aleo({
    variable: "--font-aleo",
    subsets: ["latin"],
    display: "swap"
});

export const metadata: Metadata = {
    title: "Temporary Title",
    description: "Temporary description",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${fontMukta.variable} ${fontAleo.variable} antialiased`}>
                <main className="relative h-screen overflow-x-hidden bg-beige-main">
                    <img className="absolute inset-0 w-full h-full object-cover" src={personalBackground.src}></img>
                    <div className="relative z-100 flex flex-col min-h-screen max-h-screen">
                        <Navbar></Navbar>
                        <div className="grow max-h-screen overflow-x-hidden flex flex-row justify-center inset-shadow-top px-30">
                            <div className="grow max-h-screen min-w-[1000px] flex flex-row justify-center bg-content-inner-overlay outset-shadow-sides">
                                <div className="grow max-w-screen overflow-y-auto px-15 py-7 flex flex-col items-stretch">
                                    {children}
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </body>
        </html>
    );
}
