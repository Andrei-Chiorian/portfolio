import { useEffect, useState } from "react";
import { useTheme } from "../../../../contexts/themeContext";
import { StylesMenu } from "./stylesMenu";

const Menu = () => {
    const currentTheme = useTheme().theme();
    const [activeSection, setActiveSection] = useState('');



    useEffect(() => {
        const sections = document.querySelectorAll('section');
        console.log(sections)
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
        <StylesMenu theme={currentTheme}>
            <ul>
                <li><a href="#home" className={activeSection === 'home' ? 'active-section' : ''}>Home</a></li>
                <li><a href="#about" className={activeSection === 'about' ? 'active-section' : ''}>Sobre mi</a></li>
                <li><a href="#projects" className={activeSection === 'projects' ? 'active-section' : ''}>Proyectos</a></li>
                <li><a href="#skills" className={activeSection === 'skills' ? 'active-section' : ''}>Habilidades</a></li>
                <li><a href="#testimonials" className={activeSection === 'testimonials' ? 'active-section' : ''}>Testimonios</a></li>
                <li className="download-cv">
                    <a href="./doc/CV_Andrei-Chiorian.pdf" download>
                        <span>Descargar CV</span>
                    </a>
                </li>
            </ul>
        </StylesMenu>
    );
};

export default Menu;
