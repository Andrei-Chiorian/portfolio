import { Fade, Flip } from "react-awesome-reveal";
import { useTheme } from "../../../../contexts/themeContext";
import { StylesAbout } from "./styleAbout";
import { useMemo } from "react";




const About = () => {

    const currentYear = new Date().getFullYear();
    const yearsWorking = currentYear - 2022
    const yearsExperience = currentYear - 2020
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
                                            trabajando
                                        </span>
                                    </div>
                                </div>
                                <div className="numbers project">
                                    <div className="wrapper">
                                        <h3 style={{ display: 'flex' }}>
                                            {yearsExperience}
                                        </h3>
                                        <span className="name">
                                            Años de
                                            <br />
                                            experiencia
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
                                        Soy un Desarrollador
                                    </span>
                                </Flip>
                                <Fade
                                    direction="up"
                                    style={{ display: "inline-block" }}
                                    duration={800}
                                    triggerOnce
                                >
                                    <h3 className="titles">
                                       Capaz de convertir café en código y errores en soluciones
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
                                        Me especializo en crear <strong>aplicaciones web</strong> que no solo funcionan, sino que también hacen sonreír. Trabajo principalmente con <strong>React</strong> y <strong>Python</strong>, entre otras tecnologías, para construir desde <strong>interfaces de usuario intuitivas</strong> que te enamoran, hasta <strong>backends robustos</strong> que soportan cualquier locura que se te ocurra.
                                    </p>
                                    <br />
                                    <p>
                                        Si necesitas a alguien que pueda escribir <strong>código limpio</strong>, <strong>depurar errores</strong> con la misma calma con la que un ninja corta el aire, y que no se asuste ante una pila de tareas por hacer, estás en el lugar correcto.
                                    </p>
                                    <br />
                                    <p>
                                        Cuando no estoy <strong>solucionando problemas complejos</strong> o creando funciones geniales, probablemente estoy añadiendo más café a mi taza o tratando de entender cómo se rompió algo que funcionaba hace cinco minutos.
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