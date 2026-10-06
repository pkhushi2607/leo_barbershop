import { services } from "../data/services";

const icons: Record<string, string> = {
    Haircut: "💈", "Haircut Zero Fade": "💈", "Hair Colour": "🎨",
    "Beard Trim & Line Up": "✂️", "Beard Colour": "🎨", Wax: "♨️",
    Threading: "✂️", "Full Service": "🔥💯", Facial: "♨️", Shampoo: "🫧", "Kids Haircut": "👦",
};

export function ServicesSection() {
    return (
        <section id="services">
            <div className="container">
                <div className="section-head">
                    <div className="eyebrow">Our services</div>
                    <h2>Premium grooming services</h2>
                    <p>Choose the service that fits your style and enjoy a premium barbershop experience from start to finish.</p>
                </div>
                <div className="services">
                    {services.map((service) => {
                        const className = `card${service.name === "Full Service" ? " featured" : ""}`;
                        const content = (
                            <>
                                <div className="icon" aria-hidden="true">{icons[service.name]}</div>
                                <div className="service-copy">
                                    <h3>{service.name}</h3>
                                    <p className="meta">{service.description}</p>
                                    <p className="meta service-duration">{service.duration}</p>
                                </div>
                                <div className="price"><span className="currency">CAD </span>{service.price.replace("CAD ", "")}</div>
                            </>
                        );
                        return service.bookLink ? (
                            <a className={className} href={service.bookLink} target="_blank" rel="noopener noreferrer" aria-label={`Book ${service.name} — ${service.price}`} key={service.name}>{content}</a>
                        ) : (
                            <div className={className} key={service.name}>{content}</div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
