"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { siteConfig } from "@/src/config/site";
import { locationData } from "@/src/modules/location/data/location";

const navigation = [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Work", href: "#gallery" },
    { label: "Reviews", href: "#reviews" },
    { label: "Location", href: "#location" },
];

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const closeOnEscape = (event: KeyboardEvent) => {
            if (event.key === "Escape") setIsMenuOpen(false);
        };
        window.addEventListener("keydown", closeOnEscape);
        return () => window.removeEventListener("keydown", closeOnEscape);
    }, []);

    return (
        <>
            <div className="topbar">
                <div className="container">
                    <span>📍 {locationData.address.street}, Windsor, ON</span>
                    <span>Walk-ins welcome · Appointments available</span>
                </div>
            </div>
            <header>
                <div className="container">
                    <nav aria-label="Main navigation">
                        <Link className="logo-wrap" href="/" aria-label={`${siteConfig.name} home`}>
                            <Image src="/images/template/brand-logo.jpg" alt="Leo's Barber Shop logo" width={78} height={78} preload />
                            <div>
                                <div className="brand-title">LEO&apos;S BARBER SHOP</div>
                                <div className="brand-sub">FEEL FRESH · LOOK GREAT</div>
                            </div>
                        </Link>
                        <div className="menu">
                            {navigation.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
                            <a className="btn outline" href="https://leosbarbershopwindsor.setmore.com/book" aria-label="Book Appointment"><span className="booking-label-full">Book Appointment</span><span className="booking-label-short" aria-hidden="true">Book Now</span></a>
                        </div>
                    </nav>
                    <button className="mobile-menu-toggle" type="button" aria-controls="mobile-navigation" aria-expanded={isMenuOpen} onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? "Close menu −" : "Explore the shop +"}
                    </button>
                    <div id="mobile-navigation" className="mobile-navigation" hidden={!isMenuOpen}>
                        <nav aria-label="Mobile navigation">
                            {navigation.map((item) => <a key={item.href} href={item.href} onClick={() => setIsMenuOpen(false)}>{item.label}</a>)}
                            <a className="btn" href="https://leosbarbershopwindsor.setmore.com/book" onClick={() => setIsMenuOpen(false)}>Book Now</a>
                        </nav>
                    </div>
                </div>
            </header>
        </>
    );
}
