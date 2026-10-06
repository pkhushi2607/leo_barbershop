import { siteConfig } from "@/src/config/site";
import { locationData } from "@/src/modules/location/data/location";

export function Hero() {
    const shortHours = (hours: string) => hours.replaceAll(":00", "").replace(" to ", "–");
    return (
        <>
            <section className="hero" id="home">
                <div className="container">
                    <div className="hero-content">
                        <div className="eyebrow">Premium grooming in Windsor</div>
                        <h1>Confidence<br /><span>in every cut.</span></h1>
                        <p>Clean fades, sharp beard work, classic cuts, and a premium experience from the moment you walk in.</p>
                        <div className="actions">
                            <a className="btn" href="https://leosbarbershopwindsor.setmore.com/book">Book Appointment</a>
                            <a className="btn outline" href="#services">Explore Our Services</a>
                        </div>
                        <a className="discover-link" href="#about" aria-label="Scroll to learn more">Discover More ↓</a>
                    </div>
                </div>
            </section>
            <div className="container">
                <div className="info-strip">
                    <div className="info-item"><strong>Call Us</strong><span>{siteConfig.contact.phone}</span></div>
                    <div className="info-item"><strong>Location</strong><span>{locationData.address.street}</span></div>
                    <div className="info-item"><strong>Hours</strong><span>Mon–Sat · {shortHours(locationData.hours[0].hours)}<br />Sun · {shortHours(locationData.hours[6].hours)}</span></div>
                    <div className="info-item"><strong>Google Rating</strong><span aria-label="4.9 out of 5 stars">★★★★★ 4.9</span></div>
                </div>
            </div>
        </>
    );
}
