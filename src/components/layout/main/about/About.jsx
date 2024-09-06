import { Fade, Flip, Slide, Zoom } from "react-awesome-reveal";
import { useTheme } from "../../../../contexts/themeContext";
import { StylesAbout } from "./styleAbout";
import { useMemo } from "react";




const About = () => {

    const currentYear = new Date().getFullYear();
    const yearsWorking = currentYear - 2022
    const currentTheme = useTheme().theme();
    const meImg = useMemo(() => '/img/me.png', []);   

    
    
    return (
        <StylesAbout theme={currentTheme}>
            <div className="about" id="about">
                <div className="container">
                    <div className="wrapper">
                        <div className="left">
                            <div className="image">
                                <img src={meImg} alt="image about" />
                                <div className="numbers year">
                                    <div className="wrapper">
                                        <h3>
                                            {yearsWorking}
                                        </h3>
                                        <span className="name">
                                            Años
                                            <br />
                                            Trabajando
                                        </span>
                                    </div>
                                </div>
                                <div className="numbers project">
                                    <div className="wrapper">
                                        <h3 style={{ display: 'flex' }}>
                                            100%
                                        </h3>
                                        <span className="name">
                                            Motivación
                                            <br />
                                            Disciplina
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="right">
                            <div className="title">
                                <Flip
                                    direction="up"
                                    style={{ display: "inline-block" }}
                                    triggerOnce
                                >
                                    <span>
                                        Soy Desarrollador
                                    </span>
                                </Flip>
                                <Fade
                                    direction="up"
                                    style={{ display: "inline-block" }}
                                    duration={800}
                                    triggerOnce
                                >
                                    <h3>
                                        Puedo Escribir Código Tan Rápido Como Tú Cambias De Idea
                                    </h3>
                                </Fade>

                            </div>
                            <Fade
                                direction="up"
                                style={{ display: "inline-block" }}
                                duration={1000}
                                triggerOnce
                            >
                                <div className="text">
                                    <p>
                                        Me especializo en crear aplicaciones web que no solo funcionan, sino que también hacen sonreír. Trabajo principalmente con React y Python, entre otras tecnologías, para construir desde interfaces de usuario intuitivas que te enamoran, hasta backends robustos que soportan cualquier locura que se te ocurra.
                                    </p>
                                    <p>
                                        Si necesitas a alguien que pueda escribir código limpio, depurar errores con la misma calma con la que un ninja corta el aire, y que no se asuste ante una pila de tareas por hacer, estás en el lugar correcto.
                                    </p>
                                    <p>
                                        Cuando no estoy solucionando problemas complejos o creando funciones geniales, probablemente estoy añadiendo más café a mi taza o tratando de entender cómo se rompió algo que funcionaba hace cinco minutos.
                                    </p>

                                </div>
                            </Fade>
                            <Fade
                                direction="right"
                                style={{ display: "inline-block" }}
                                duration={1000}
                                triggerOnce
                            >
                                <div className="button">
                                    <a className="anchor" href="#contact">
                                        <span>¡Vamos a construir algo increíble juntos!</span>
                                    </a>
                                </div>
                            </Fade>

                        </div>
                    </div>
                </div>

                <div className="brush_1">
                    <Fade
                        direction="left"
                        style={{ display: "inline-block" }}
                        duration={1000}
                        triggerOnce
                    >
                        <img src="/img/4.png" alt="decorator" />
                    </Fade>
                </div>

                <div className="brush_2">
                    <img src="/img/13.png" alt="decorator" />
                </div>



            </div>

        </StylesAbout>
    )
}

export default About;