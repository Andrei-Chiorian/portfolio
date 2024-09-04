import { useEffect, useId, useRef, useState } from "react";
import { StylesFormInput } from "./stylesFormInput";
import { useTheme } from "../../../contexts/themeContext";


//* PROPS

//*  Todos las props son opcionales
//* 
//*     -id         -- Para identificar el input
//*     -width      -- Ancho del contenedor padre 'formInput-container'
//*     -background -- Fondo del label para tapar el borde del input 
//*     -label      -- Es el texto del label 
//*     -margin     -- Para especificar un margin bottom para separar los inputs si hubiera mas de uno
//*     -onChange   -- Es la funcion que ejecuta cuando cambia el valor del input
//*     -match      -- La prop match si recibe un booleano en funcion de si es true o false cambia el borde de color 
//*                    para resaltar las validaciones. Si no recibe nada simplemente no tiene en cuenta las validaciones 
//*                    y mantiene el borde neutro.



function FormInput({ id, width, margin, background, labelColor, inputClass, containerStyles, labelClass, onChange, label, match, type, eye, eyeColor, confirm, confirmLabel, confirmOnChange, confirmMatch , defaultV, defaultChangeV, marginConfirm, validationText, partialValidation, reset, required, name}) {

    const currentTheme = useTheme().theme()

    const [inputFocused, setInputFocused] = useState(false);
    const inputRef = useRef(null);
    const checkInputRef = useRef(null)
    //* En caso de que no se proporcione un id se generara uno unico.    
    const uId = useId();

    const cUId = useId();

    //* -hasValue y -hasConfirmValue se usan para comprobar si el input contiene algun valor, dependiendo si tiene o no se cabiaran el color del border a rojo o verde segun la validación.

    const [hasValue, setHasValue] = useState(false);

    const [hasConfirmValue, setHasConfirmValue] = useState(false);

    //* -passVisibility se usa como toggle para mostrar u ocultar la contraseña.
    const [passVisibility, setPassVisibility] = useState(false);

    //* Contiene los estilos del contenedor y el label en funcion de si le llega o no la prop
    const containerStyle = {
        width: width || '100%',
        marginBottom: margin || '4px',
        ...containerStyles
    };

    const confirmContainerStyle = {
        width: width || '100%',
        marginBottom: marginConfirm || margin || '4px'
    };

    const labelStyle = {
        backgroundColor: background || 'white',
        color: labelColor || 'grey'
    };

    const validationStyle = {
        marginBottom: parseInt(margin.replace(/\D/g, '')) + 2 + 'px' || '4px'
    }

    

    //* -isMatch comprueba si el input tiene valor y ademas si le llega un match para cambiar los estilos segun el estado de la validacion
    const isMatch = (aim) => {
        if (hasValue) {
            if (match !== undefined) {
                if (aim === "input") {
                    return match ? 'match-input' : 'not-match-input'
                }
                if (aim === "label") {
                    return match ? 'match-label' : 'not-match-label'
                }

            }
            return 'default-match'
        }
    }



    const isMatchConfirm = (aim) => {
        if (hasConfirmValue) {
            if (confirmMatch !== undefined) {
                if (aim === "input") {
                    return confirmMatch ? 'match-input' : 'not-match-input'
                }
                if (aim === "label") {
                    return confirmMatch ? 'match-label' : 'not-match-label'
                }

            }
            return 'default-match'
        }
    }

    //* -isEyeVisible comprueba si el type del input es de tipo password y eye esta a true o false para mostar un svg u otro.
    const isEyeVisible = () => {
        if (type === 'password') {
            if (eye === true) {
                if (passVisibility === true) {

                    return icons.eyeClosed(handleEyeToggle)
                }

                return icons.eyeOpen(handleEyeToggle)
            }
        }
    }

    useEffect(() => {               
        if (inputRef?.current?.value?.length > 0) {
            setHasValue(true)
        }
        if (checkInputRef?.current?.value?.length > 0) {
            setHasConfirmValue(true)
        }               
    }, [inputRef, checkInputRef])


    const handleHasValue = (value) => {             
        return value.length > 0 ? setHasValue(true) : setHasValue(false);
    }

    const handleHasConfirmValue = (value) => {        
        return value.length > 0 ? setHasConfirmValue(true) : setHasConfirmValue(false);
    }

    const handleEyeToggle = () => {
        if (passVisibility === true) {
            setPassVisibility(false)
        } else {
            setPassVisibility(true)
        }
    }


    //* En funcion de si llega true en el parametro confirm
    const isConfirm = () => {
        if (confirm !== undefined && type === 'password') {
            return true
        }
    }

    const infoSvg = () => {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="grey" style={{width: '15px'}}>
                <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
            </svg>
        )
    }


    const checkSvg = () => {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="green" style={{width: '15px'}}>
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
            </svg>

        )
    }

    const showPartialValidation = () => {        
        if (validationText) {                     
            return (
                <>           
                    <div className="formInput-text-validation-container" style={validationStyle}>                    
                        <div className="formInput-text-validation">
                            {partialValidation?.upperLower ? checkSvg() : infoSvg()}{validationText?.upperLower}
                        </div>
                        <div className="formInput-text-validation">
                            {partialValidation?.numericCharacter ? checkSvg() : infoSvg()}{validationText?.numericCharacter}
                        </div>
                        <div className="formInput-text-validation">
                            {partialValidation?.specialCharacter ? checkSvg() : infoSvg()}{validationText?.specialCharacter}
                        </div>
                        <div className="formInput-text-validation">
                            {partialValidation?.minCharacter ? checkSvg() : infoSvg()}{validationText?.minCharacter}
                        </div>                
                    </div>
                </>
               
            )
        }
    }

   
    const icons = {
        eyeOpen: () => {
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 24 24" fill="none" className="input-eye" onClick={() => handleEyeToggle()}>
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 8.25C9.92893 8.25 8.25 9.92893 8.25 12C8.25 14.0711 9.92893 15.75 12 15.75C14.0711 15.75 15.75 14.0711 15.75 12C15.75 9.92893 14.0711 8.25 12 8.25ZM9.75 12C9.75 10.7574 10.7574 9.75 12 9.75C13.2426 9.75 14.25 10.7574 14.25 12C14.25 13.2426 13.2426 14.25 12 14.25C10.7574 14.25 9.75 13.2426 9.75 12Z" fill={eyeColor || "#858585"} />
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 3.25C7.48587 3.25 4.44529 5.9542 2.68057 8.24686L2.64874 8.2882C2.24964 8.80653 1.88206 9.28392 1.63269 9.8484C1.36564 10.4529 1.25 11.1117 1.25 12C1.25 12.8883 1.36564 13.5471 1.63269 14.1516C1.88206 14.7161 2.24964 15.1935 2.64875 15.7118L2.68057 15.7531C4.44529 18.0458 7.48587 20.75 12 20.75C16.5141 20.75 19.5547 18.0458 21.3194 15.7531L21.3512 15.7118C21.7504 15.1935 22.1179 14.7161 22.3673 14.1516C22.6344 13.5471 22.75 12.8883 22.75 12C22.75 11.1117 22.6344 10.4529 22.3673 9.8484C22.1179 9.28391 21.7504 8.80652 21.3512 8.28818L21.3194 8.24686C19.5547 5.9542 16.5141 3.25 12 3.25ZM3.86922 9.1618C5.49864 7.04492 8.15036 4.75 12 4.75C15.8496 4.75 18.5014 7.04492 20.1308 9.1618C20.5694 9.73159 20.8263 10.0721 20.9952 10.4545C21.1532 10.812 21.25 11.2489 21.25 12C21.25 12.7511 21.1532 13.188 20.9952 13.5455C20.8263 13.9279 20.5694 14.2684 20.1308 14.8382C18.5014 16.9551 15.8496 19.25 12 19.25C8.15036 19.25 5.49864 16.9551 3.86922 14.8382C3.43064 14.2684 3.17374 13.9279 3.00476 13.5455C2.84684 13.188 2.75 12.7511 2.75 12C2.75 11.2489 2.84684 10.812 3.00476 10.4545C3.17374 10.0721 3.43063 9.73159 3.86922 9.1618Z" fill={eyeColor || "#858585"} />
                </svg>
            )
        },
        eyeClosed: () => {
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 24 24" fill="none" onClick={() => handleEyeToggle()} className="input-eye">
                    <path fillRule="evenodd" clipRule="evenodd" d="M22.2954 6.31083C22.6761 6.474 22.8524 6.91491 22.6893 7.29563L21.9999 7.00019C22.6893 7.29563 22.6894 7.29546 22.6893 7.29563L22.6886 7.29731L22.6875 7.2998L22.6843 7.30716L22.6736 7.33123C22.6646 7.35137 22.6518 7.37958 22.6352 7.41527C22.6019 7.48662 22.5533 7.58794 22.4888 7.71435C22.3599 7.967 22.1675 8.32087 21.9084 8.73666C21.4828 9.4197 20.8724 10.2778 20.0619 11.1304L21.0303 12.0987C21.3231 12.3916 21.3231 12.8665 21.0303 13.1594C20.7374 13.4523 20.2625 13.4523 19.9696 13.1594L18.969 12.1588C18.3093 12.7115 17.5528 13.2302 16.695 13.6564L17.6286 15.0912C17.8545 15.4383 17.7562 15.9029 17.409 16.1288C17.0618 16.3547 16.5972 16.2564 16.3713 15.9092L15.2821 14.2353C14.5028 14.4898 13.659 14.6628 12.7499 14.7248V16.5002C12.7499 16.9144 12.4141 17.2502 11.9999 17.2502C11.5857 17.2502 11.2499 16.9144 11.2499 16.5002V14.7248C10.3689 14.6647 9.54909 14.5004 8.78982 14.2586L7.71575 15.9093C7.48984 16.2565 7.02526 16.3548 6.67807 16.1289C6.33089 15.903 6.23257 15.4384 6.45847 15.0912L7.37089 13.689C6.5065 13.2668 5.74381 12.7504 5.07842 12.1984L4.11744 13.1594C3.82455 13.4523 3.34968 13.4523 3.05678 13.1594C2.76389 12.8665 2.76389 12.3917 3.05678 12.0988L3.98055 11.175C3.15599 10.3153 2.53525 9.44675 2.10277 8.75486C1.83984 8.33423 1.6446 7.97584 1.51388 7.71988C1.44848 7.59182 1.3991 7.48914 1.36537 7.41683C1.3485 7.38067 1.33553 7.35207 1.32641 7.33167L1.31562 7.30729L1.31238 7.29984L1.31129 7.29733L1.31088 7.29638C1.31081 7.2962 1.31056 7.29563 1.99992 7.00019L1.31088 7.29638C1.14772 6.91565 1.32376 6.474 1.70448 6.31083C2.08489 6.1478 2.52539 6.32374 2.68888 6.70381C2.68882 6.70368 2.68894 6.70394 2.68888 6.70381L2.68983 6.706L2.69591 6.71972C2.7018 6.73291 2.7114 6.7541 2.72472 6.78267C2.75139 6.83983 2.79296 6.92644 2.84976 7.03767C2.96345 7.26029 3.13762 7.58046 3.37472 7.95979C3.85033 8.72067 4.57157 9.70728 5.55561 10.6218C6.42151 11.4265 7.48259 12.1678 8.75165 12.656C9.70614 13.0232 10.7854 13.2502 11.9999 13.2502C13.2416 13.2502 14.342 13.013 15.3124 12.631C16.5738 12.1345 17.6277 11.3884 18.4866 10.5822C19.4562 9.67216 20.1668 8.69535 20.6354 7.9434C20.869 7.5685 21.0405 7.25246 21.1525 7.03286C21.2085 6.92315 21.2494 6.83776 21.2757 6.78144C21.2888 6.75328 21.2983 6.73242 21.3041 6.71943L21.31 6.70595L21.3106 6.70475C21.3105 6.70485 21.3106 6.70466 21.3106 6.70475M22.2954 6.31083C21.9147 6.14771 21.4738 6.32423 21.3106 6.70475L22.2954 6.31083ZM2.68888 6.70381C2.68882 6.70368 2.68894 6.70394 2.68888 6.70381V6.70381Z" fill={eyeColor || "#858585"} />
                </svg>
            )
        },
    }


    useEffect(()=> {
        if (reset) {
            inputRef.current.value = ''
            setHasValue(false)
            if (isConfirm()) {
                checkInputRef.current.value = ''
                setHasConfirmValue(false)
            }
            
        }
    }, [reset])

    return (
        <StylesFormInput theme={currentTheme}>
            <div className="formInput-container" style={containerStyle}>

                <input type={passVisibility ? 'text' : type} id={ id || uId } placeholder=" " className={isMatch('input') + " " + inputClass + " form-input-input-own"}
                onChange={onChange 
                ? (e) => {
                    onChange(e.target.value);
                    handleHasValue(e.target.value);
                }
                :  (e) => handleHasValue(e.target.value)
                }                
                ref={inputRef}
                defaultValue={defaultV}
                onFocus={() => setInputFocused(true)} 
                onBlur={() => setInputFocused(false)}
                name={name || 'default'+ Math.floor(Math.random() * 90) + 10}
                />

                <label htmlFor={ id || uId } style={labelStyle} className={`${hasValue ? 'hasValue' : '' } ${isMatch('label')} ${labelClass} form-input-label-own`}>
                    {required && <span style={{color: 'red'}}>*</span>}{label ? label : "Default label"}
                </label>

                {
                    isEyeVisible()
                    
                }            
            </div>
            {
                inputFocused && showPartialValidation()
                
            }
            {
                isConfirm() 
                &&
                <div className="formInput-container" style={confirmContainerStyle}>

                    <input type={passVisibility ? 'text' : type} id={id || cUId} placeholder=" " className={isMatchConfirm('input') + " " + inputClass + " form-input-input-own form-input-check-input"}
                        onChange={confirmOnChange
                            ? (e) => {
                                confirmOnChange(e.target.value);
                                handleHasConfirmValue(e.target.value);
                            }
                            : (e) => handleHasConfirmValue(e.target.value)
                        }
                        ref={checkInputRef}
                        defaultValue={defaultChangeV}                                                 
                        />

                    <label htmlFor={id || uId} style={labelStyle} className={`${hasConfirmValue ? 'hasValue' : ''} ${isMatchConfirm('label')} form-input-label-own`}>
                        {required && <span style={{color: 'red'}}>*</span>}{confirmLabel ? confirmLabel : "Default label"}
                    </label>
                </div> 
            }
        </StylesFormInput>

    

    )
}

export default FormInput;