import { useState, useEffect } from "react";
import HomeSectionWrapper from "./HomeSectionWrapper";
import { testimonialData } from "./constants/constants";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Testimonials = () => {
    const [activeIndex, setActiveIndex] = useState(0);


    const nextSlide = () => {
        setActiveIndex(prev => (prev === testimonialData.length - 1 ? 0 : prev + 1));
    };

    const previousSlide = () => {
        setActiveIndex(prev => (prev === 0 ? testimonialData.length - 1 : prev - 1));
    };

    useEffect(() => {
        const interval = setInterval(() => nextSlide(),8000);
        return () => clearInterval(interval);
    }, []);
     console.log(activeIndex)

    return (
        <HomeSectionWrapper
            title="TESTIMONIALS"
            subTitle="Discover the stories of our delighted customers - thousands and counting!"
        >
            <section className="section-testimonials">
                <div className="slider">
                    <button className="slider-btn btn-left" onClick={previousSlide}>
                        <FaArrowLeft />
                    </button>
                    <div className="slider-wrapper">
                        {testimonialData.map((testimonial, index) => (
                            <div
                                key={testimonial.id}
                                className="testimonial-card"
                                style={{ transform: `translateX(${100 * (index - activeIndex)}%)` }}
                            >
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
                        ))}
                    </div>
                    <button className="slider-btn btn-right" onClick={nextSlide}>
                        <FaArrowRight />
                    </button>
                </div>
            </section>
        </HomeSectionWrapper>
    );
};

export default Testimonials;
