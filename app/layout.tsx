import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: {
        default: "Leo's Barber Shop",
        template: "%s | Leo's Barber Shop",
    },
    description:
        "Leo's Barber Shop — Feel Fresh. Look Great. Premium barbering with precision, style, and personal service.",
    icons: {
        icon: "/images/logo.png",
        shortcut: "/images/logo.png",
        apple: "/images/logo.png",
    }
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body>{children}</body>
        </html>
    );
}
