import { useState } from "react";
import HomeSectionWrapper from "./HomeSectionWrapper";
import { testimonialData } from "./constants/constants";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Testimonials = () => {
    const [activeSlider, setActiveSlider] = useState(1);

    return (
        <HomeSectionWrapper 
        title="TESTIMONIALS" 
        subTitle="Discover the stories of our delighted customers - thousands and counting!"
    >
        <section className="testimonials-section">
            <div className="slider">
                <button  className="slider-btn btn-left">
                    <FaArrowLeft />
                </button>
                {testimonialData.map(testimonial => (
                    activeSlider === testimonial.id && (
                        <div key={testimonial.id} className="testimonial-card">
                            <h3 className="testimonial-title">{testimonial.title}</h3>
                            <div className="underline"></div>
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
                <button className="slider-btn btn-right">
                    <FaArrowRight />
                </button>
            </div>
        </section>
    </HomeSectionWrapper>
);
};


export default Testimonials;
