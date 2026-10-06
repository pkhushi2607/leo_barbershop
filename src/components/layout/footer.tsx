import { siteConfig } from "@/src/config/site";
import Link from "next/link";

const navigation = [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Work", href: "#gallery" },
    { label: "Reviews", href: "#reviews" },
    { label: "Location", href: "#location" },
];

export function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="footer-inner">
                    <span>© {new Date().getFullYear()} <Link href="/">{siteConfig.name}</Link></span>
                    <span>Feel Fresh · Look Great</span>
                </div>
                <div className="footer-links">
                    <nav aria-label="Footer navigation">
                        {navigation.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
                    </nav>
                    <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Follow Leo's Barbershop on Instagram">Instagram ↗</a>
                    <a href={`tel:${siteConfig.contact.phone}`}>{siteConfig.contact.phone}</a>
                    <a href="https://jeet7122.github.io" target="_blank" rel="noopener noreferrer">Designed and Developed by Jeet Thakkar</a>
                </div>
            </div>
        </footer>
    );
}
