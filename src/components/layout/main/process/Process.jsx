import { Fade } from "react-awesome-reveal";
import { Development, Evaluation, Idea } from "../../../../constants/icons.jsx";
import { useTheme } from "../../../../contexts/themeContext";
import { StylesProcess } from "./styleProcess";


const Process = () => {
    const currentTheme = useTheme().theme();

    return (
        <StylesProcess theme={currentTheme}>
            <div className="container">
                <div className="list">
                    <ul>
                        <Fade
                            style={{ display: "inline-block" }}
                            duration={1000}
                            triggerOnce
                        >
                            <li>
                                <div className="list-inner">
                                    <div className="icon">
                                        <span>
                                            <img className="brush" src="/img/3.png" alt="" />
                                            <Idea />
                                        </span>
                                    </div>
                                    <div className="title">
                                        <h3 className="titles">
                                            Planificación
                                        </h3>
                                    </div>
                                    <div className="text">
                                        <p>
                                            Antes de programar, es vital planificar detalladamente: define objetivos claros, analiza requisitos y diseña un esquema. Esto asegura un desarrollo eficiente y minimiza errores
                                        </p>
                                    </div>
                                </div>
                            </li>
                        </Fade>
                        <Fade
                            style={{ display: "inline-block" }}
                            duration={1000}
                            triggerOnce
                        >
                            <li>
                                <div className="list-inner">
                                    <div className="icon">
                                        <span>
                                            <img className="brush" src="/img/1.png" alt="" />
                                            <Development />
                                        </span>
                                    </div>
                                    <div className="title">
                                        <h3 className="titles">
                                            Desarrollo
                                        </h3>
                                    </div>
                                    <div className="text">
                                        <p>
                                            Durante el desarrollo, implementa el código siguiendo el diseño planeado, realiza pruebas continuas y ajusta según los resultados. Mantén una documentación clara para facilitar el mantenimiento y futuras mejoras
                                        </p>
                                    </div>
                                </div>
                            </li>
                        </Fade>

                        <Fade
                            style={{ display: "inline-block" }}
                            duration={1000}
                            triggerOnce
                        >
                            <li>
                                <div className="list-inner">
                                    <div className="icon">
                                        <span>
                                            <img className="brush" src="/img/2.png" alt="" />
                                            <Evaluation />
                                        </span>
                                    </div>
                                    <div className="title">
                                        <h3 className="titles">
                                            Evaluación
                                        </h3>
                                    </div>
                                    <div className="text">
                                        <p>
                                            La evaluación asegura que el producto cumple con los requisitos. Realiza pruebas exhaustivas, revisa el rendimiento y ajusta según el feedback para garantizar la calidad final
                                        </p>
                                    </div>
                                </div>
                            </li>
                        </Fade>

                    </ul>
                </div>
            </div>

        </StylesProcess>
    )
}

export default Process;