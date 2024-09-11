import { Fade } from "react-awesome-reveal";
import { useTheme } from "../../../../contexts/themeContext";
import { StylesSkills } from "./styleSkills";
import { Arduino, Flask, Javascript, Laravel, MongoDb, MySql, Php, Python, React } from "../../../../constants/icons.jsx";
import { useCallback, useState } from "react";



const Skills = () => {
    const currentTheme = useTheme().theme();

    const tiltEffectSettings = {
        max: 13,
        perspective: 1000
    }

    const handleMouseEnter = (e) => {
        const { left, top, width, height } = e.target.getBoundingClientRect();
        e.target.dataset.elementPosition = JSON.stringify({ left, top, width, height });
    };


    const handleMouseMove = (e) => {
        const elementId = e.currentTarget.id;

        const elementPosition = JSON.parse(e.target.dataset.elementPosition || '{}');
        const { left, top, width, height } = elementPosition;

        const xCenter = left + width / 2;
        const yCenter = top + height / 2;

        const x = e.clientX - xCenter;
        const y = e.clientY - yCenter;

        const rotateX = (tiltEffectSettings.max * y / (height / 2)).toFixed(2);
        const rotateY = (tiltEffectSettings.max * x / (width / 2)).toFixed(2);

        const card = document.querySelector(`#${elementId}`)
        card.style.transform = `perspective(${tiltEffectSettings.perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`

    };

    const handleMouseLeave = (e) => {
        const elementId = e.currentTarget.id;

        const card = document.querySelector(`#${elementId}`)
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)'

    };


    return (
        <StylesSkills theme={currentTheme}>
            <div className="container">
                <div className="skills-main-title titles" id="skills">
                    <span>Habilidades</span>
                    <h3>Tecnologias con las que he trabajado</h3>
                    <p>Dominio de lenguajes y frameworks como JavaScript, Python, React.js</p>
                </div>
                <div className="skills-list">
                    <ul>
                        <li>
                            <div className="list-inner" onMouseMove={(e) => handleMouseMove(e)} onMouseLeave={(e) => handleMouseLeave(e)} onMouseEnter={(e) => handleMouseEnter(e)} id="list-inner-1">
                                <div className="title-container">
                                    <span className="icon">
                                        <Javascript />
                                    </span>
                                    <div className="title">
                                        <h3>JavaScript</h3>
                                    </div>
                                </div>
                                <div className="text">
                                    JavaScript avanzado, incluyendo manejo de asincronía con Promises y async/await, manipulación avanzada del DOM, uso de patrones de diseño, programación orientada a objetos y funcional, gestión de estado, y optimización del rendimiento. He trabajado con frameworks y bibliotecas como React y Redux, integrando APIs y utilizando herramientas como Webpack, Babel y ESLint para un desarrollo eficiente y escalable.
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="list-inner" onMouseMove={(e) => handleMouseMove(e)} onMouseLeave={(e) => handleMouseLeave(e)} onMouseEnter={(e) => handleMouseEnter(e)} id="list-inner-2">
                                <div className="title-container">
                                    <span className="icon">
                                        <React />
                                    </span>
                                    <div className="title"><h3>React.js</h3></div>
                                </div>
                                <div className="text">Experiencia avanzada en React.js, dominando el manejo del estado con Redux y Context API, optimización del rendimiento con memoización y lazy loading, y desarrollo de componentes reutilizables. He implementado patrones avanzados como HOCs y Render Props, y utilizado herramientas como React Router y React Query. Además, he trabajado con React Native para crear aplicaciones móviles eficientes y escalables, integrando APIs, utilizando librerías como React Navigation, y manejando almacenamiento local y notificaciones push.</div>
                            </div>
                        </li>
                        <li>
                            <div className="list-inner" id="list-inner-3" onMouseMove={(e) => handleMouseMove(e)} onMouseLeave={(e) => handleMouseLeave(e)} onMouseEnter={(e) => handleMouseEnter(e)}>
                                <div className="title-container">
                                    <span className="icon">
                                        <Python />
                                    </span>
                                    <div className="title"><h3>Python</h3></div>
                                </div>
                                <div className="text">Experiencia en desarrollo backend utilizando frameworks como Flask. Manejo conceptos avanzados como programación orientada a objetos, manejo de excepciones, concurrencia con hilos y asyncio, y optimización de rendimiento. He trabajado con integración de APIs REST, bases de datos SQL y NoSQL, y he utilizado bibliotecas como Pandas, NumPy, y herramientas para testing como pytest. También tengo experiencia en automatización de tareas y desarrollo de scripts eficientes para diferentes aplicaciones.</div>
                            </div>
                        </li>
                        <li>
                            <div className="list-inner" id="list-inner-4" onMouseMove={(e) => handleMouseMove(e)} onMouseLeave={(e) => handleMouseLeave(e)} onMouseEnter={(e) => handleMouseEnter(e)}>
                                <div className="title-container">
                                    <span className="icon">
                                        <Flask />
                                    </span>
                                    <div className="title"><h3>Flask</h3></div>
                                </div>
                                <div className="text">Tengo experiencia avanzada en Flask, habiendo desarrollado aplicaciones web RESTful escalables y seguras. Manejo patrones de diseño como Blueprint para modularidad, gestión de sesiones y autenticación con JWT, y middleware personalizado. He trabajado con bases de datos MySql, integración de APIs, y he optimizado el rendimiento con técnicas de caching. Además, he implementado testing completo con pytest y he seguido prácticas de despliegue en entornos de producción utilizando AWS.</div>
                            </div>
                        </li>
                        <li>
                            <div className="list-inner" id="list-inner-5" onMouseMove={(e) => handleMouseMove(e)} onMouseLeave={(e) => handleMouseLeave(e)} onMouseEnter={(e) => handleMouseEnter(e)}>
                                <div className="title-container">
                                    <span className="icon">
                                        <Php />
                                    </span>
                                    <div className="title"><h3>PHP 8</h3></div>
                                </div>
                                <div className="text">Nivel intermedio en PHP, con experiencia en desarrollo de aplicaciones web utilizando frameworks como Laravel. Manejo conceptos como programación orientada a objetos, patrones de diseño (MVC), y técnicas de seguridad como sanitización de entradas y protección CSRF. He trabajado con integración de bases de datos SQL (MySQL), desarrollo de APIs RESTful, y optimización de consultas. Además, domino herramientas de testing como PHPUnit y he gestionado despliegues en entornos de producción, incluyendo configuración de servidores.</div>
                            </div>
                        </li>
                        <li>
                            <div className="list-inner" id="list-inner-6" onMouseMove={(e) => handleMouseMove(e)} onMouseLeave={(e) => handleMouseLeave(e)} onMouseEnter={(e) => handleMouseEnter(e)}>
                                <div className="title-container">
                                    <span className="icon">
                                        <Laravel />
                                    </span>
                                    <div className="title"><h3>Laravel 10</h3></div>
                                </div>
                                <div className="text">Experiencia intermedia en Laravel, desarrollando aplicaciones web escalables y seguras. Manejo profundamente el sistema de enrutamiento, el ORM Eloquent para la gestión de bases de datos, y la implementación de políticas de autorización y autenticación. Además, tengo experiencia en el uso de Artisan para tareas de línea de comandos, pruebas con PHPUnit.</div>
                            </div>
                        </li>
                        <li>
                            <div className="list-inner" id="list-inner-7" onMouseMove={(e) => handleMouseMove(e)} onMouseLeave={(e) => handleMouseLeave(e)} onMouseEnter={(e) => handleMouseEnter(e)}>
                                <div className="title-container">
                                    <span className="icon">
                                        <MySql />
                                    </span>
                                    <div className="title"><h3>MySql</h3></div>
                                </div>
                                <div className="text">Experiencia en MySQL, incluyendo el diseño y la optimización de esquemas de bases de datos complejas. Manejo la creación y gestión de índices, optimización de consultas, y el uso avanzado de joins y subconsultas. He trabajado con triggers, y vistas para mejorar la eficiencia y la integridad de los datos. Además, tengo experiencia en la configuración y administración de MySQL en entornos de producción, incluyendo la gestión de backups, replicación, y tuning del rendimiento.</div>
                            </div>
                        </li>
                        <li>
                            <div className="list-inner" id="list-inner-8" onMouseMove={(e) => handleMouseMove(e)} onMouseLeave={(e) => handleMouseLeave(e)} onMouseEnter={(e) => handleMouseEnter(e)}>
                                <div className="title-container">
                                    <span className="icon">
                                        <Arduino />
                                    </span>
                                    <div className="title"><h3>Arduino(c++)</h3></div>
                                </div>
                                <div className="text">Experiencia en Arduino desarrollando proyectos complejos con microcontroladores para aplicaciones específicas. Manejo la programación en C/C++ para optimizar el rendimiento del hardware, integración de sensores y actuadores, y comunicación entre módulos a través de protocolos como I2C, SPI y UART. He implementado soluciones para control de sistemas en tiempo real, automatización de tareas y monitoreo de datos. Además, tengo experiencia en el diseño de circuitos electrónicos, depuración de problemas de hardware y desarrollo de interfaces para la interacción con usuarios.</div>
                            </div>
                        </li>
                        <li>
                            <div className="list-inner" id="list-inner-9" onMouseMove={(e) => handleMouseMove(e)} onMouseLeave={(e) => handleMouseLeave(e)} onMouseEnter={(e) => handleMouseEnter(e)}>
                                <div className="title-container">
                                    <span className="icon">
                                        <MongoDb />
                                    </span>
                                    <div className="title"><h3>MongoDb</h3></div>
                                </div>
                                <div className="text">Experiencia intermedia en MongoDB, trabajando con bases de datos NoSQL para manejar datos no estructurados y semi-estructurados. Manejo la creación y gestión de colecciones y documentos, así como la consulta y agregación de datos utilizando el framework de agregación de MongoDB. He implementado operaciones CRUD y trabajado con índices para optimizar el rendimiento de las consultas.</div>
                            </div>
                        </li>
                    </ul>
                    <div className="button">
                        <a className="anchor" href="#contact">
                            <span>¿Puedo encajar en tu proyecto?</span>
                        </a>
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
                    <img src="/img/8.png" alt="decorator" />
                </Fade>
            </div>

            <div className="brush_2">
                <img src="/img/7.png" alt="decorator" />
            </div>

        </StylesSkills>
    )
}

export default Skills;