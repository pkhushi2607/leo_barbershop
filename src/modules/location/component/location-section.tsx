import { siteConfig } from "@/src/config/site";
import { locationData } from "../data/location";

export function LocationSection() {
    const { address, hours } = locationData;
    const fullAddress = [address.street, address.city, address.province, address.postalCode]
        .filter(Boolean).join(", ");
    const googleMapsUrl = fullAddress
        ? `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(`Leo's Barbershop, ${fullAddress}`)}`
        : "#";
    const mapEmbedUrl = fullAddress
        ? `https://www.google.com/maps?q=${encodeURIComponent(`Leo's Barbershop, ${fullAddress}`)}&output=embed`
        : "";

    return (
        <section id="location">
            <div className="container contact-grid">
                <div className="contact-card">
                    <div className="eyebrow">Contact</div>
                    <h2>Visit Leo&apos;s</h2>
                    <p><strong>{siteConfig.name}</strong><br />{address.street}<br />{address.city}, {address.province} {address.postalCode}</p>
                    <p><strong>Phone:</strong> <a href={`tel:${siteConfig.contact.phone}`}>{siteConfig.contact.phone}</a></p>
                    <div className="opening-hours">
                        <strong>Hours</strong>
                        <dl>
                            {hours.map((entry) => (
                                <div key={entry.day}><dt>{entry.day}</dt><dd>{entry.hours}</dd></div>
                            ))}
                        </dl>
                    </div>
                    <a className="text-link" href={googleMapsUrl} target="_blank" rel="noopener noreferrer" aria-label="Get directions to Leo's Barbershop">Get Directions ↗</a>
                </div>
                <div className="map">
                    {mapEmbedUrl && <iframe src={mapEmbedUrl} title="Leo's Barbershop location on Google Maps" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />}
                    <a className="btn outline" href={googleMapsUrl} target="_blank" rel="noopener noreferrer" aria-label="Get directions to Leo's Barbershop">Open in Google Maps ↗</a>
                </div>
            </div>
        </section>
    );
}
