import { useEffect, useId, useRef, useState } from "react";
import { StylesTextAreaInput } from "./stylesTextAreaInput";
import { useTheme } from "../../../contexts/themeContext";





function TextAreaInput(props) {

    const currentTheme = useTheme().theme()

    const [inputFocused, setInputFocused] = useState(false);
    const textAreaRef = useRef(null);

    const uId = useId();



    //* -hasValue y -hasConfirmValue se usan para comprobar si el input contiene algun valor, dependiendo si tiene o no se cabiaran el color del border a rojo o verde segun la validación.

    const [hasValue, setHasValue] = useState(false);

    
    //* Contiene los estilos del contenedor y el label en funcion de si le llega o no la prop
    const containerStyle = {
        width: props.width || '100%',
        marginBottom: props.margin || '4px',
        ...props.containerStyles
    };

    const labelStyle = {
        backgroundColor: props.background || 'white',
        color: props.labelColor || 'grey'
    };

    

    

    //* -isMatch comprueba si el input tiene valor y ademas si le llega un match para cambiar los estilos segun el estado de la validacion
    const isMatch = (aim) => {
        if (hasValue) {
            if (props.match !== undefined) {
                if (aim === "input") {
                    return props.match ? 'match-input' : 'not-match-input'
                }
                if (aim === "label") {
                    return props.match ? 'match-label' : 'not-match-label'
                }

            }
            return 'default-match'
        }
    }



    useEffect(() => {               
        if (textAreaRef?.current?.value?.length > 0) {
            setHasValue(true)
        }
                     
    }, [textAreaRef])


    const handleHasValue = (value) => {             
        return value.length > 0 ? setHasValue(true) : setHasValue(false);
    }
 
    
    useEffect(()=> {
        if (props.reset) {
            textAreaRef.current.value = ''
            setHasValue(false)           
        }
    }, [props.reset])

    return (
        <StylesTextAreaInput theme={currentTheme}>
            <div className="formInput-container" style={containerStyle}>

                <textarea name={props.name || 'default'+ Math.floor(Math.random() * 90) + 10} id={ props.id || uId } placeholder=" " className={isMatch('input') + " " + props.inputClass + " form-input-input-own"}
                onChange={props.onChange 
                ? (e) => {
                    props.onChange(e.target.value);
                    handleHasValue(e.target.value);
                }
                :  (e) => handleHasValue(e.target.value)
                }                
                ref={textAreaRef}
                defaultValue={props.defaultV}
                onFocus={() => setInputFocused(true)} 
                onBlur={() => setInputFocused(false)}
                maxLength={props.maxLength}
                />

                <label htmlFor={ props.id || uId } style={labelStyle} className={`${hasValue ? 'hasValue' : '' } ${isMatch('label')} ${props.labelClass} form-input-label-own`}>
                    {props.required && <span style={{color: 'red'}}>*</span>}{props.label ? props.label : "Default label"}
                </label>                          
            </div>          
        </StylesTextAreaInput>

    

    )
}

export default TextAreaInput;