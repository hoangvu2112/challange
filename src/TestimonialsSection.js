import React from 'react';
import './TestimonialsSection.css';
import leftArrow from './logo/leftArrow.svg'; // Adjust the path if necessary
import rightArrow from './logo/rightArrow.svg'; // Adjust the path if necessary
import ZoomerrLogo from './logo/ZoomerrLogo.svg';
import ShellsLogo from './logo/ShellsLogo.svg';
import ArtVenueLogo from './logo/ArtVenueLogo.svg';

const testimonials = [
    {
        company: "Zoomerr",
        text: "Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor.",
        name: "Hellen Jummy",
        title: "Team Lead",
        image: "https://s3-alpha-sig.figma.com/img/558c/b79e/f83fbd49cdf87134bb331c6a7d3a9eaa?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kce3~wnKruq4ITaLZwU742hbS2F80fpYPGbmWbyTscmStlc0-w3pXnGdOrGU6tSbaEe81twyIsXSaFIaLt1vYuZ599jYY8g0-iYOl-q8bO1tobClzMjf~GBVYTc893hBzUiAdmYUOd7i4o9KN1GcltHIoJvJ4LQq0xFX1oYbAJu53W8tgHDDLPJZIP5Ra7WXDWJM8V4tyDxjFdnniSjPf9BZYuhHRB9Z3iFU4vQ-11oETn3kPeZynWQGs1w2R8m78joInr-ibP60cgY3RO08prGMKnqvdqnNjicMsYzori7eSJP-ZmmVnI5wuFhr25eQgViLIJVZDMQ1wMPVfGbnAg__",
        logo: ZoomerrLogo
    },
    {
        company: "SHELLS",
        text: "Aliquet ridiculus mi porta habitant vulputate rhoncus, mattis amet enim. Sit purus venenatis velit semper lectus sed ornare quam nulla.",
        name: "Hellena John",
        title: "Co-founder",
        image: "https://s3-alpha-sig.figma.com/img/4968/5ac7/b81e766e223bcb38bd406643740bb4b1?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UG3ioqb-qa3oaE2vlFZ2apJWf5JMJnkjX-k7NavTYLZgmC6l3sPu8fwHoBju582nCsRKzXj1ubzvS-NLgVMDoMOrTMKHZPLCQOFdnWMwOQzh0p~EWDfWjUQ4MWWKBOisxrFN3RJ-W5AFZnkuk9cCtCNY1cTlX3UWWOx3c5N53SacVESwfy06fTUTl2e3jI13ECfSI5sOr6BoNv673gg8QrSdqD8vXt4lK6KAAR-Lv0VEyzDS~tnF3PvyAQ4J59UOYvIR2B2roZHgq5QXWVX7Hrg9aMTVihid6Wpa1osgRqobbW2KX9g2j1FHRondEBvpt3NluL3pYAEEsB6j0vMzdQ__",
        logo: ShellsLogo
    },
    {
        company: "ArtVenue",
        text: "A eget sed posuere dui risus habitasse mauris. Venenatis aliquet id ultrices a lacus. Pretium vehicula pretium posuere justo sed lorem cursus.",
        name: "David Oshodi",
        title: "Manager",
        image: "https://s3-alpha-sig.figma.com/img/845c/0a7e/76a09dd9880480e7c59f7385cde7161f?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SKBSkwl4J79lwG4VJtEi0kQiIsdIJgOECD1cQ1cbj8PaOwvecZNsVoaQObSpC3lJONAx~wh81ibTFrszQGV-hoFSHj0oqGuxDZSlHypSOwXh2O-z6D~OkH5FjB3Eywp55wtB~g-qt43T2qvBMamjcFGc2rQl48AdAKcrLoHm9PUT25rzA0k5AKTp8nJoxC1nfv7hsCEIgtbOT9~NkBBCK408uSDB9NfjQ6sZwn7lok70oL0bz~LCAOU1Q~Eobj6O2zs3925AMXgF~QSkXUwgZ~Mi0GXZLtnQMCqJOqA68d~6zdTCie1XQRNhINLvL0t95M82ucpvt3OJ4iIXcIC~cw__",
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
