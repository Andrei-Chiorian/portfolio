import { useTheme } from "../../../../contexts/themeContext";
import { StylesLocation } from "./stylesLocation"
import { icon } from '../../../../constants/icons'
import { toast } from 'sonner'
import { useState } from "react";
import Modal from "../../../global/modal/Modal";
import LocationMaps from "../modalsContent/LocationMaps.modal";


const Location = (props) => {

    const currentTheme = useTheme().theme();
    const [showLocation, setShowLocation] = useState(false)
    const email1 = 'achiorian23@yahoo.com'
    const email2 = 'contacto@andreiwebdevelopment.es'


    const changeState = () => {
        props.setShowInfoEnding(false)
        props.setShowInfoContact(false)
        props.setShowInfoLocation(!props.showInfoLocation)
        
    }

    const handleCopy = (e) => {
        console.log(e.currentTarget.id)
        navigator.clipboard
            .writeText(e.currentTarget.id)
            .then(() => {
                toast.success('Correo electrónico copiado al portapapeles');
            })
            .catch((error) => {
                toast.error("Error al copiar el email: ");
            });
    };

  

    return (
        <StylesLocation theme={currentTheme}>           
            <div className="footer-section-header">
                <div className="title-container mobile-position-location" onClick={() => changeState()}>
                    <div className="titles">
                    UBICACIÓN
                    </div>
                    <icon.arrowDown size={18} className={`footer-section-arrow ${props.showInfoLocation ? "footer-section-arrow-up" : ''}`}/>
                </div>
                <hr className="separator" />
            </div>
            <div className={`footer-location-data-container ${props.showInfoLocation ? 'container-expanded' : 'container-closed'}`}>

                <div className="footer-location-group">
                    <button className="footer-location-button" onClick={() => setShowLocation(true)}>
                        <div className="footer-location-data">
                            <div className="footer-location-icon">
                                <icon.location size={26} />
                            </div>
                            <span className="footer-location-text">San Pascual, Madrid, España</span>
                        </div>
                    </button>
                </div>
                <div className="footer-location-group">
                    <a href="mailto:achiorian23@yahoo.com">
                        <div className="footer-location-data">
                            <div className="footer-location-icon">
                                <icon.email size={26} />
                            </div>
                            <span className="footer-location-text">{email1}</span>
                        </div>
                    </a>
                    <button id={email1} className="clipboard-button-footer" onClick={(e) => handleCopy(e)}>
                        <icon.clipboard size={18} style={{ color: currentTheme.text }} />
                    </button>
                </div>

                <div className="footer-location-group">
                    <a href="mailto:contacto@andreiwebdevelopment.es">
                        <div className="footer-location-data">
                            <div className="footer-location-icon">
                                <icon.email size={26} />
                            </div>
                            <span className="footer-location-text">{email2}</span>
                        </div>
                    </a>
                    <button id={email2} className="clipboard-button-footer" onClick={handleCopy}>
                        <icon.clipboard size={18} style={{ color: currentTheme.text }} />
                    </button>
                </div>

            </div>



            {
                showLocation && <div className="modals">
                    <Modal
                        handleClose={() => setShowLocation(false)}
                        component={
                            () => <LocationMaps
                                handleClose={() => setShowLocation(false)}
                            />
                        }
                    />
                </div>
            }
        </StylesLocation>
    )
}

export default Location;