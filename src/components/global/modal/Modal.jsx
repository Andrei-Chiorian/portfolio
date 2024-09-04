import { icon } from '../../../constants/icons'
import { useEffect, useState } from "react";
import { useTheme } from "../../../contexts/themeContext";
import { ModalStyles } from './modalStyles';


const Modal = (props) => {
    const [close, setClose] = useState(false)
    const handleClose = props.handleClose

    //*? uso del contexto del tema
    const currentTheme = useTheme().theme()
   
    useEffect(() => {
        if(close){
            props.handleClose
        }
    }, [close])


    return (
        <ModalStyles theme={currentTheme}>
            <div className="modal__header">
                <div className="cross__close" onClick={handleClose}>
                    <icon.iconCloseModal />
                </div>

                <div className="modal__body">
                    <props.component
                        setClose={()=>setClose(true)}
                    />
                </div>
            </div>

        </ModalStyles>
    )
}

export default Modal;
