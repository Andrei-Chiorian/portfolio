import { useEffect, useState } from "react";
import { useTheme } from "../../../../contexts/themeContext";
import { StylesMenu } from "./stylesMenu";

const Menu = () => {
    const currentTheme = useTheme().theme();
    const [activeSection, setActiveSection] = useState('');



    useEffect(() => {
        const ids = ['home', 'about', 'projects', 'skills', 'testimonials', 'contact'];
        const sections = ids.map(id => document.getElementById(id));

        const options = {
            rootMargin: '0px',
            threshold: 0.4
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, options);

        sections.forEach(section => observer.observe(section));

        const handleScroll = () => {
            if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
                setActiveSection('contact');
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            sections.forEach(section => observer.unobserve(section));
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const inputField = document.querySelector('#email');
        setTimeout(() => {
            if (activeSection === 'contact' && inputField) {
                inputField.focus();
                console.log(inputField)
            }
        }, 700);
    }, [activeSection]);


    return (
        <StylesMenu theme={currentTheme}>
            <ul>
                <li><a href="#home" className={`titles ${activeSection === 'home' ? 'active-section' : ''}`}>Home</a></li>
                <li><a href="#about" className={`titles ${activeSection === 'about' ? 'active-section' : ''}`}>Sobre mi</a></li>
                <li><a href="#projects" className={`titles ${activeSection === 'projects' ? 'active-section' : ''}`}>Proyectos</a></li>
                <li><a href="#skills" className={`titles ${activeSection === 'skills' ? 'active-section' : ''}`}>Habilidades</a></li>
                <li><a href="#testimonials" className={`titles ${activeSection === 'testimonials' ? 'active-section' : ''}`}>Testimonios</a></li>
                <li className="menu-item"><a href="#contact" className={`titles ${activeSection === 'contact' ? 'active-section' : ''}`}>Contacto</a></li>
                <li className="download-cv">
                    <a href="./doc/CV_Andrei-Chiorian.pdf" download>
                        <span className="titles">Descargar CV</span>
                    </a>
                </li>
            </ul>
        </StylesMenu>
    );
};

export default Menu;
