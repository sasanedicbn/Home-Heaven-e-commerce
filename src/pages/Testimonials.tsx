import { useState } from "react";
import HomeSectionWrapper from "./HomeSectionWrapper";
import { testimonialData } from "./constants/constants";

const Testimonials = () => {
    const [activeSlider, setActiveSlider] = useState(1);

    return (
        <HomeSectionWrapper 
            title="TESTIMONIALS" 
            subTitle="Discover the stories of our delighted customers - thousands and counting!"
        >
            <section className="">
                <div className="slider">
                    {testimonialData.map(testimonial => (
                        activeSlider === testimonial.id && (
                            <div key={testimonial.id} className="testimonial-card">
                                <h3 className="testimonial-title">{testimonial.title}</h3>
                                <p className="testimonial-description">{testimonial.description}</p>
                                <img 
                                    src={testimonial.img} 
                                    alt={`Testimonial from ${testimonial.name}`} 
                                    className="testimonial-img" 
                                />
                                <p className="testimonial-name">{testimonial.name}</p>
                                <p className="testimonial-location">{testimonial.location}</p>
                            </div>
                        )
                    ))}
                </div>
            </section>
        </HomeSectionWrapper>
    );
};

export default Testimonials;
