import React, { useState, useEffect } from 'react'
import NavItem from './NavItem'
import { faUser, faGraduationCap, faPencil, faGem, faSuitcase, faPaperPlane, faComment } from '@fortawesome/free-solid-svg-icons'

const Navigation = () => {
    const [currentActive, setCurrentActive] = useState(0)

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        element.scrollIntoView({ behavior: "smooth" });
        switch (sectionId) {
            case "About":
                setCurrentActive(0)
                break
            case "Education":
                setCurrentActive(1)
                break
            case "Experience":
                setCurrentActive(2)
                break
            case "Skills":
                setCurrentActive(3)
                break
            case "Portfolio":
                setCurrentActive(4)
                break
            case "Contact":
                setCurrentActive(5)
                break
            case "Feedback":
                setCurrentActive(6)
                break
            default:
                break;
        }
    };

    useEffect(() => {
        const sections = ['About', 'Education', 'Experience', 'Skills', 'Portfolio', 'Contact', 'Feedback'];
        const handleScroll = () => {
            const scrollPosition = window.scrollY;

            sections.forEach(section => {
                const sectionElement = document.getElementById(section);

                if (sectionElement) {
                    const sectionTop = sectionElement.offsetTop;
                    const sectionBottom = sectionTop + sectionElement.offsetHeight;
                    
                    const sectionAlt = sectionElement.offsetTop - (sectionElement.offsetHeight/2);
                    // Calculate the center 50 pixels of the section
                    const sectionCenter = (sectionTop + sectionBottom) / 2;

                    // Check if the scroll position is within the center 50 pixels
                    if ((scrollPosition >= 100 && scrollPosition >= sectionAlt) || (scrollPosition < 100 && scrollPosition >= sectionCenter)) {
                        switch (section) {
                            case "About":
                                setCurrentActive(0)
                                break
                            case "Education":
                                setCurrentActive(1)
                                break
                            case "Experience":
                                setCurrentActive(2)
                                break
                            case "Skills":
                                setCurrentActive(3)
                                break
                            case "Portfolio":
                                setCurrentActive(4)
                                break
                            case "Contact":
                                setCurrentActive(5)
                                break
                            case "Feedback":
                                setCurrentActive(6)
                                break
                            default:
                                break;
                        }
                    }
                }
            });
        };

        // Attach scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Remove event listener on unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className='nav'>
            <NavItem icon={faUser} text="About Me" onClick={() => scrollToSection("About")} active={currentActive === 0} />
            <NavItem icon={faGraduationCap} text="Education" onClick={() => scrollToSection("Education")} active={currentActive === 1} />
            <NavItem icon={faPencil} text="Experience" onClick={() => scrollToSection("Experience")} active={currentActive === 2} />
            <NavItem icon={faGem} text="Skills" onClick={() => scrollToSection("Skills")} active={currentActive === 3} />
            <NavItem icon={faSuitcase} text="Portfolio" onClick={() => scrollToSection("Portfolio")} active={currentActive === 4} />
            <NavItem icon={faPaperPlane} text="Contacts" onClick={() => scrollToSection("Contact")} active={currentActive === 5} />
            <NavItem icon={faComment} text="Feedback" onClick={() => scrollToSection("Feedback")} active={currentActive === 6} />
        </div>
    )
}

export default Navigation