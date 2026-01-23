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
                <main className="relative h-screen bg-beige-main overflow-x-hidden">
                    <img className="absolute inset-0 w-full h-full object-cover" src={personalBackground.src}></img>
                    <div className="relative z-100 flex flex-col min-h-screen">
                        <Navbar></Navbar>
                        <div className="grow inset-shadow-top flex flex-row justify-center overflow-hidden px-30">
                            <div className="grow bg-content-inner-overlay min-w-[1000px] outset-shadow-sides flex flex-row justify-center">
                                <div className="grow max-w-screen mx-15 my-7 p-1">
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
