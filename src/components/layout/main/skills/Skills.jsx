import { Fade } from "react-awesome-reveal";
import { useTheme } from "../../../../contexts/themeContext";
import { StylesSkills } from "./styleSkills";



const Skills = () => {
    const currentTheme = useTheme().theme();

    return (
        <StylesSkills theme={currentTheme}>
            <div className="container">
                <div className="skills-main-title titles">
                    <span>Habilidades</span>
                    <h3>Dominio de lenguajes y frameworks como JavaScript, Python, PHP.</h3>
                    <p></p>
                </div>
            </div>
            <div className="brush_1">
                <Fade
                    direction="left"
                    style={{ display: "inline-block" }}
                    duration={1000}
                    triggerOnce
                >
                    <img src="/img/5.png" alt="decorator" />
                </Fade>
            </div>

            <div className="brush_2">
                <img src="/img/6.png" alt="decorator" />
            </div>

        </StylesSkills>
    )
}

export default Skills;