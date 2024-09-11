import { useEffect, useState } from "react";
import { useTheme } from "../../../../contexts/themeContext";
import { StylesMobileMenu } from "./stylesMobileMenu";
import { forwardRef } from "react";


const MobileMenu = forwardRef((props, ref) => {

    const currentTheme = useTheme().theme();
    const [activeSection, setActiveSection] = useState('');



    useEffect(() => {

        const ids = ['home', 'about', 'projects', 'skills', 'testimonials'];
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

        return () => {
            sections.forEach(section => observer.unobserve(section));
        };
    }, []);

    return (
        <StylesMobileMenu theme={currentTheme} ref={ref}>
            <div className="dropdown-menu">
                <div className="dropdown-inner">
                    <ul className="anchor_nav">
                        <li className="menu-item"><a href="#home" className={`titles ${activeSection === 'home' ? 'active-section' : ''}`}>Home</a></li>
                        <li className="menu-item"><a href="#about" className={`titles ${activeSection === 'about' ? 'active-section' : ''}`}>Sobre mi</a></li>
                        <li className="menu-item"><a href="#projects" className={`titles ${activeSection === 'projects' ? 'active-section' : ''}`}>Proyectos</a></li>
                        <li className="menu-item"><a href="#skills" className={`titles ${activeSection === 'skills' ? 'active-section' : ''}`}>Habilidades</a></li>
                        <li className="menu-item"><a href="#testimonials" className={`titles ${activeSection === 'testimonials' ? 'active-section' : ''}`}>Testimonios</a></li>
                        <li className="menu-item"><a href="#contact" className={`titles ${activeSection === 'contact' ? 'active-section' : ''}`}>Contacto</a></li>
                        <li className="download-cv">
                            <a href="./doc/CV_Andrei-Chiorian.pdf" download>
                                <span className="titles">Descargar CV</span>
                            </a>
                        </li>
                    </ul>
                </div>

            </div>

        </StylesMobileMenu>
    )
})

export default MobileMenu;