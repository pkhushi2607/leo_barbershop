import Image from "next/image";
import { galleryItems } from "../data/gallery";

export function GallerySection() {
    return (
        <section id="gallery">
            <div className="container">
                <div className="section-head">
                    <div className="eyebrow">The work</div>
                    <h2>Precision you can see.</h2>
                    <p>A collection of the craft, atmosphere, and details that define the Leo&apos;s experience.</p>
                </div>
                <div className="gallery-grid">
                    {galleryItems.map((item) => (
                        <figure className="gallery-photo" key={item.src}>
                            <Image src={item.src} alt={item.alt} fill sizes="(max-width: 700px) 100vw, (max-width: 900px) 50vw, 33vw" />
                        </figure>
                    ))}
                </div>
            </div>
        </section>
    );
}
