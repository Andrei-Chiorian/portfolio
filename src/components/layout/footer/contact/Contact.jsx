
import { useState } from "react";
import { useTheme } from "../../../../contexts/themeContext";
import FormInput from "../../../global/formInput/FormInput";
import TextAreaInput from "../../../global/textAreaInput/TextAreaInput";
import { StylesContact } from "./stylesContact";
import { icon } from '../../../../constants/icons'
import { EMAIL_REGEX, MSG_REGEX } from "../../../../constants/regex";
import { toast } from 'sonner'


const Contact = (props) => {

    const currentTheme = useTheme().theme();

    const [data, setData] = useState({
        email: '',
        message: '',
    })

    const [matchData, setMatchData] = useState({
        email: false,
        message: false,
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

        const newMatchData = { ...matchData };
        email.match(EMAIL_REGEX) ? newMatchData.email = true : newMatchData.email = false
        setMatchData(newMatchData);
    }

    const handleChangeMsg = (msg) => {
        const newData = { ...data };
        newData.message = message;
        setData(newData);

        const newMatchData = { ...matchData };
        msg.match(MSG_REGEX) ? newMatchData.message = true : newMatchData.message = false
        setMatchData(newMatchData);
    }

    const handleSubmit = (e) => {
        e.preventDefault();     
        const form = e.target;
        const formData = new FormData(form);
        
        if (Object.values(matchData).every(value => value === true)) {
            
            fetch("/", {
                method: "POST",
                body: formData,
            })
                .then(response => {
                    if (response.ok) {
                        toast.success('Te respondere en breve');
                        form.reset();
                        setData({
                            email: '',
                            message: '',
                        });
                    } else {
                        toast.error('Hubo un error al enviar mensaje');
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                    toast.error('Hubo un error al enviar mensaje');
                });
        } else {
            if (!matchData.email) {
                toast.error('Correo electrónico incorrecto');
            }
            if (!matchData.message) {
                toast.error('Mensaje con minimo 10 caracteres');
            }           
        }
    };

    return (
        <StylesContact theme={currentTheme}>
            <form name="contact" method="POST" id="contact" onSubmit={handleSubmit}>
                <div className="footer-section-header">
                    <div className="title-container mobile-position-contact" onClick={() => changeState()}>
                        <div className="titles">
                            CONTACTO
                        </div>
                        <icon.arrowDown size={18} className={`footer-section-arrow ${props.showInfoContact ? "footer-section-arrow-up" : ''}`} />
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
                        containerStyles={{ marginTop: '6px' }}
                        match={matchData.email}
                    />
                    <TextAreaInput
                        key={'input-contact-msg'}
                        id="message"
                        name="message"
                        margin={'0px'}
                        background={currentTheme.inputLabels}
                        label={'Mensaje'}
                        labelColor={currentTheme.inputLabelsColor}
                        defaultV={data.message}
                        onChange={handleChangeMsg}
                        maxLength={'1000'}
                        inputClass={'footer-contact-inputs'}
                        match={matchData.message}
                        placeholder="Minimo 10 caracteres"
                    />
                    <button type="submit" className="success-button">
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