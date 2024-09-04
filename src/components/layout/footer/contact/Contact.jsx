
import { useState } from "react";
import { useTheme } from "../../../../contexts/themeContext";
import FormInput from "../../../global/formInput/FormInput";
import TextAreaInput from "../../../global/textAreaInput/TextAreaInput";
import { StylesContact } from "./stylesContact";
import { icon } from '../../../../constants/icons'



const Contact = (props) => {

    const currentTheme = useTheme().theme();

    const [data, setData] = useState({
        email: '',
        message: '',
    })

    const changeState = () => {
        props.setShowInfoEnding(false)
        props.setShowInfoLocation(false)
        props.setShowInfoContact(!props.showInfoContact)
    }

    const handleChangeEmail = (email) => {
        const newData = { ...data };
        newData.email = email;
        setData(newData);
    }

    const handleChangeMsg = (msg) => {
        const newData = { ...data };
        newData.message = message;
        setData(newData);
    }
    return (
        <StylesContact theme={currentTheme}>
            <form name="contact" method="POST">
                <div className="footer-section-header">
                    <div className="title-container mobile-position-contact" onClick={() => changeState()}>
                        <div className="titles">
                            CONTACTO
                        </div>
                        <icon.arrowDown size={18} className={`footer-section-arrow ${props.showInfoContact ? "footer-section-arrow-up" : ''}`}/>
                    </div>
                    <hr className="separator" />
                </div>

                <div className={`contact-inputs-container ${props.showInfoContact ? 'container-expanded' : 'container-closed'}`}>
                    <input type="hidden" name="form-name" value="contact" />
                    <FormInput
                        key={'input-contact-email'}
                        id="email"
                        name="email"
                        margin={'0px'}
                        background={currentTheme.inputLabels}
                        label={'Correo electrónico'}
                        labelColor={currentTheme.inputLabelsColor}
                        defaultV={data.email}
                        onChange={handleChangeEmail}
                        inputClass={'footer-contact-inputs'}
                        containerStyles={{marginTop: '6px'}}
                    />
                    <TextAreaInput
                        key={'input-contact-msg'}
                        id="message"
                        name="message"
                        margin={'0px'}
                        background={currentTheme.inputLabels}
                        label={'Mensaje'}
                        labelColor={currentTheme.inputLabelsColor}
                        defaultV={data.msg}
                        onChange={handleChangeMsg}
                        maxLength={'1000'}
                        inputClass={'footer-contact-inputs'}
                    />
                    <button type="button" className="success-button">
                        <span className="shadow"></span>
                        <span className="edge"></span>
                        <span className="front">
                            Enviar mensaje
                        </span>
                    </button>
                </div>
            </form>

        </StylesContact>
    )
}

export default Contact;