import { useEffect, useState } from "react";
import { useTheme } from "../../../contexts/themeContext";
import { StylesHeader } from "./stylesHeader"
import Menu from "./menu/Menu";



const Header = () => {

    const currentTheme = useTheme().theme();
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <StylesHeader theme={currentTheme} >
            <div className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
                <div className="header-container">
                    <div className="header-items">
                        <div className="header-logo">
                            <a href="#">
                                <img src="./img/logo-new.png" alt="Logo" style={{height: '70px'}}/>                              
                            </a>
                        </div>
                        <div className="header-menu">
                            <Menu></Menu>
                        </div>                                              
                    </div>
                </div>
            </div>
            
        </StylesHeader>
    )
}

export default Header;