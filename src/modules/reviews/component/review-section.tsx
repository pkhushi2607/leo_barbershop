import { reviews } from "../data/reviewData";

const googleWriteReviewUrl =
    "https://www.google.com/maps/place/Leo's+Barbershop/@42.3029401,-82.9969477,17z/data=!4m8!3m7!1s0x883b2b577c12545f:0x3f4bb7d4462016d9!8m2!3d42.3029402!4d-82.9920768!9m1!1b1!16s%2Fg%2F11ql8gm3tk?entry=ttu&g_ep=EgoyMDI2MDkxNi4wIKXMDSoASAFQAw%3D%3D";

export function ReviewsSection() {
    return (
        <section id="reviews">
            <div className="container">
                <div className="section-head">
                    <div className="eyebrow">Customer reviews</div>
                    <h2>Built to earn loyalty</h2>
                </div>
                <div className="reviews">
                    {reviews.map((review) => (
                        <article className="review" key={review.name}>
                            <div className="stars" aria-label={`${review.rating} out of 5 stars`}>{"★".repeat(review.rating)}</div>
                            <p>“{review.text.trim()}”</p>
                            <strong>{review.name}</strong>
                        </article>
                    ))}
                </div>
                <div className="review-actions">
                    <p>Visited Leo&apos;s Barbershop? Share your experience on Google.</p>
                    <a className="btn outline" href={googleWriteReviewUrl} target="_blank" rel="noopener noreferrer">Write a Review</a>
                </div>
            </div>
        </section>
    );
}
