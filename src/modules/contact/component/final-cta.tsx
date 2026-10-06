import { siteConfig } from "@/src/config/site";

export function FinalCTA() {
    return (
        <section id="booking">
            <div className="container">
                <div className="booking">
                    <div className="eyebrow">Online booking</div>
                    <h2>Book your next cut</h2>
                    <p>Choose your service, barber, date, and time through our secure online booking page.</p>
                    <div className="actions booking-actions">
                        <a className="btn" href="https://leosbarbershopwindsor.setmore.com/book">Book Online Now</a>
                        <a className="btn outline" href={`tel:${siteConfig.contact.phone}`}>Call the Shop</a>
                    </div>
                </div>
            </div>
        </section>
    );
}
