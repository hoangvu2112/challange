import React from 'react';
import '../styles/TestimonialsSection.css';
import leftArrow from '../logo/leftArrow.svg'; // Adjust the path if necessary
import rightArrow from '../logo/rightArrow.svg'; // Adjust the path if necessary
import ZoomerrLogo from '../logo/ZoomerrLogo.svg';
import ShellsLogo from '../logo/ShellsLogo.svg';
import ArtVenueLogo from '../logo/ArtVenueLogo.svg';

const testimonials = [
    {
        company: "Zoomerr",
        text: "Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor.",
        name: "Hellen Jummy",
        title: "Team Lead",
        image: `${process.env.PUBLIC_URL}/img/profile1.svg`,
        logo: ZoomerrLogo
    },
    {
        company: "SHELLS",
        text: "Aliquet ridiculus mi porta habitant vulputate rhoncus, mattis amet enim. Sit purus venenatis velit semper lectus sed ornare quam nulla.",
        name: "Hellena John",
        title: "Co-founder",
        image: `${process.env.PUBLIC_URL}/img/profile2.`,
        logo: ShellsLogo
    },
    {
        company: "ArtVenue",
        text: "A eget sed posuere dui risus habitasse mauris. Venenatis aliquet id ultrices a lacus. Pretium vehicula pretium posuere justo sed lorem cursus.",
        name: "David Oshodi",
        title: "Manager",
        image: `${process.env.PUBLIC_URL}/img/profile3.jpg`,
        logo: ArtVenueLogo
    }
];

const TestimonialsSection = () => {
    return (
        <div className="testimonials-section">
            <h2>Our partners. Our Friends.<br />They love us.</h2>
            <p>Sem malesuada sed lectus id nunc mattis est eget tincidunt.</p>
            <div className="testimonials">
                {testimonials.map((testimonial, index) => (
                    <div className="testimonial" key={index}>
                        <div className="testimonial-content">
                            <img src={testimonial.logo} alt={`${testimonial.company} logo`} className="company-logo" />
                            <h3>{testimonial.company}</h3>
                            <p>{testimonial.text}</p>
                            <div className="testimonial-author">
                                <img src={testimonial.image} alt={testimonial.name} />
                                <div>
                                    <h4>{testimonial.name}</h4>
                                    <p>{testimonial.title}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="pagination">
                <button className="pagination-button prev-button">
                    <img src={leftArrow} alt="Previous" />
                    <span>Prev</span>
                </button>
                <button className="pagination-button next-button">
                    <span>Next</span>
                    <img src={rightArrow} alt="Next" />
                </button>
            </div>
        </div>
    );
};

export default TestimonialsSection;
