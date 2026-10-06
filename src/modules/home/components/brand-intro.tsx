const benefits = [
    { icon: "♜", title: "Premium Service", text: "Top quality service every time." },
    { icon: "✂", title: "Expert Barbers", text: "Skilled professionals you can trust." },
    { icon: "◫", title: "Quality Products", text: "We use only the best products." },
    { icon: "◇", title: "Customer Care", text: "Your satisfaction is our priority." },
];

export function BrandIntro() {
    return (
        <section className="experience-wrap" aria-label="The Leo's Barber Shop experience">
            <div className="container">
                <div className="experience-cta">
                    <div className="experience-copy">
                        <div className="experience-kicker">Feel Fresh. Look Great.</div>
                        <h2>IT&apos;S MORE THAN A HAIRCUT.<span>IT&apos;S AN EXPERIENCE.</span></h2>
                        <a className="btn outline" href="https://leosbarbershopwindsor.setmore.com/book">▣ &nbsp; BOOK YOUR APPOINTMENT</a>
                    </div>
                </div>
                <div className="experience-benefits">
                    {benefits.map((benefit) => (
                        <div className="experience-benefit" key={benefit.title}>
                            <div className="benefit-icon" aria-hidden="true">{benefit.icon}</div>
                            <h3>{benefit.title}</h3>
                            <p>{benefit.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
