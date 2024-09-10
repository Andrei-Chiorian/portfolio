import { useEffect, useState } from "react";
import { useTheme } from "../../../../contexts/themeContext";
import { StylesMobileMenu } from "./stylesMobileMenu";



const MobileMenu = () => {

    const currentTheme = useTheme().theme();
    const [activeSection, setActiveSection] = useState('');
    


    useEffect(() => {
        const sections = document.querySelectorAll('section');

        const options = {
            rootMargin: '0px',
            threshold: 0.5
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, options);

        sections.forEach(section => observer.observe(section));

        return () => {
            sections.forEach(section => observer.unobserve(section));
        };
    }, []);

    return (
        <StylesMobileMenu theme={currentTheme}>
            <div className="dropdown-menu">
                <div className="dropdown-inner">
                    <ul className="anchor_nav">
                        <li className="menu-item"><a href="#home" className={activeSection === 'home' ? 'active-section' : ''}>Home</a></li>
                        <li className="menu-item"><a href="#about" className={activeSection === 'about' ? 'active-section' : ''}>Sobre mi</a></li>
                        <li className="menu-item"><a href="#projects" className={activeSection === 'projects' ? 'active-section' : ''}>Proyectos</a></li>
                        <li className="menu-item"><a href="#education" className={activeSection === 'education' ? 'active-section' : ''}>Formación</a></li>
                        <li className="menu-item"><a href="#experience" className={activeSection === 'experience' ? 'active-section' : ''}>Experiencia</a></li>
                        <li className="menu-item"><a href="#skills" className={activeSection === 'skills' ? 'active-section' : ''}>Habilidades</a></li>
                        <li className="menu-item"><a href="#testimonials" className={activeSection === 'testimonials' ? 'active-section' : ''}>Testimonios</a></li>
                        <li className="download-cv">
                            <a href="./doc/CV_Andrei-Chiorian.pdf" download>
                                <span>Descargar CV</span>
                            </a>
                        </li>
                    </ul>
                </div>

            </div>

        </StylesMobileMenu>
    )
}

export default MobileMenu;