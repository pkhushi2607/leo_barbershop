export function AboutSection() {
    return (
        <section id="about">
            <div className="container about">
                <div className="logo-panel" role="img" aria-label="Leo's Barber Shop logo" />
                <div>
                    <div className="eyebrow">The Leo&apos;s experience</div>
                    <h2>Luxury look. Comfortable atmosphere.</h2>
                    <p>Leo&apos;s Barber Shop was created with a simple idea — great barbering should be personal, precise, and built around the person sitting in the chair.</p>
                    <p>Every cut is approached with attention to detail, an understanding of individual style, and the goal of making sure you leave feeling confident in your look.</p>
                    <div className="points">
                        <div>✓ Clean premium environment</div>
                        <div>✓ Skilled modern fades</div>
                        <div>✓ Walk-ins and appointments</div>
                        <div>✓ Friendly reliable service</div>
                    </div>
                    <a className="btn" href="#services">Explore the Services</a>
                </div>
            </div>
        </section>
    );
}
