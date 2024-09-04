import { useTheme } from "../../../../contexts/themeContext";
import { StylesEndingText } from "./stylesEndingText"
import { icon } from '../../../../constants/icons'
import { useState } from "react";


const EndingText = (props) => {

    const currentTheme = useTheme().theme();
    
    const changeState = () => {
        props.setShowInfoLocation(false)
        props.setShowInfoContact(false)
        props.setShowInfoEnding(!props.showInfoEnding)        
    }

    return (
        <StylesEndingText theme={currentTheme}>
            <div className="footer-section-header">
                <div className="title-container mobile-position-endingInfo" onClick={() => changeState()}>
                    <div className="titles">
                        INFORMACIÓN
                    </div>
                    <icon.arrowDown size={18} className={`footer-section-arrow ${props.showInfoEnding ? "footer-section-arrow-up" : ''}`}/>
                </div>
                <hr className="separator" />
            </div>
           

            <div className={`endingInfo-info-container ${props.showInfoEnding ? 'container-expanded' : 'container-closed'}`}>
                <p>
                    Gracias por visitar mi rincón. Este portafolio ha sido desarrollado con React.js y utiliza varias bibliotecas, como React Awesome Reveal para animaciones, Styled Components para la gestión de estilos, y Sonner para notificaciones. Si te interesa explorar el código, te invito a echar un vistazo a mi repositorio en GitHub.
                </p>
                <div className="endingText-icons-container">
                    <a href="https://github.com/Andrei-Chiorian" target="blank">
                        <div className="endingText-icon">
                            <div className="gitHub-icon-container">
                                <icon.gitHub size={25} id="gitHub-icon" />
                            </div>
                            <span>GitHub</span>
                        </div>
                    </a>
                    <a href="https://www.linkedin.com/in/andrei-chiorian-web-development/" target="blank">
                        <div className="endingText-icon">
                            <div className="linkedIn-icon-container">
                                <icon.linkedIn size={25} id="linkedIn-icon" />
                            </div>

                            <span>LinkedIn</span>
                        </div>
                    </a>
                    <a href="https://wa.me/+34636021791" target="blank">
                        <div className="endingText-icon whatsApp-span">
                            <div className="whatsApp-icon-container">
                                <icon.whatsApp size={25} id="whatsApp-icon" />
                            </div>
                            <span className="whatsApp-span">WhatsApp</span>
                        </div>
                    </a>
                </div>
            </div>

        </StylesEndingText>
    )
}

export default EndingText;