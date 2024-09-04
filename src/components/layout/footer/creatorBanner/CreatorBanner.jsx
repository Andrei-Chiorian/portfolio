import { useTheme } from "../../../../contexts/themeContext";
import { StylesCreatorBanner } from "./stylesCreatorBanner";

const CreatorBanner = () => {

    const currentTheme = useTheme().theme();
    const currentYear = new Date().getFullYear();

    return(
        <StylesCreatorBanner theme={currentTheme}>
            Desarrollado por <a href="https://www.linkedin.com/in/andrei-chiorian-web-development/"><span>Andrei Chiorian</span></a> | © {currentYear} 
        </StylesCreatorBanner>
    )
}

export default CreatorBanner;