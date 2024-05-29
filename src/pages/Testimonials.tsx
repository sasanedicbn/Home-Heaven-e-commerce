import HomeSectionWrapper from "./HomeSectionWrapper";
import { testimonialData } from "./constants/constants";

const Testimonials = () => {
    return (
        <HomeSectionWrapper title="TESTIMONIALS" subTitle="Discover the stories of our delighted customers - thousands and counting!">
            <section className="section-testimonials">
                {testimonialData.map(testimonial => (
                    <div key={testimonial.id} className="testimonial-card">
                        <img src={testimonial.img} alt={`Testimonial from ${testimonial.name}`} className="testimonial-img" />
                        <h3 className="testimonial-title">{testimonial.title}</h3>
                        <p className="testimonial-description">{testimonial.description}</p>
                        <p className="testimonial-name">{testimonial.name}</p>
                        <p className="testimonial-location">{testimonial.location}</p>
                    </div>
                ))}
            </section>
        </HomeSectionWrapper>
    );
};

export default Testimonials;