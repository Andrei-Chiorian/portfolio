import { Bounce, Fade, Flip, JackInTheBox, Roll } from "react-awesome-reveal";
import { useTheme } from "../../../../contexts/themeContext";
import { StylesSkills } from "./styleSkills";
import { Arduino, Flask, Javascript, Laravel, MongoDb, MySql, Php, Python, React } from "../../../../constants/icons.jsx";
import { AttentionSeeker } from 'react-awesome-reveal';


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
                <div className="skills-main-title" id="skills">
                    <span>Habilidades</span>
                    <h3 className="titles">Tecnologias con las que he trabajado</h3>
                    <p>Dominio de lenguajes y frameworks como JavaScript, Python, React.js</p>
                </div>
                <div className="skills-list">
                    <ul>
                        <Roll
                            direction="left"
                            duration={800}
                            cascade
                            triggerOnce
                        >
                            <li>
                                <div className="list-inner" onMouseMove={(e) => handleMouseMove(e)} onMouseLeave={(e) => handleMouseLeave(e)} onMouseEnter={(e) => handleMouseEnter(e)} id="list-inner-1">
                                    <div className="title-container">
                                        <span className="icon">
                                            <Javascript />
                                        </span>
                                        <div className="title titles">
                                            <h3>JavaScript</h3>
                                        </div>
                                    </div>
                                    <div className="text">
                                        <strong>JavaScript avanzado</strong>, incluyendo manejo de <strong>asincronía con Promises y async/await</strong>, manipulación avanzada del DOM, uso de patrones de diseño, programación <strong>orientada a objetos y funcional</strong>, <strong>gestión de estado</strong>, y optimización del rendimiento. He trabajado con frameworks y bibliotecas como <strong>React</strong>,  <strong>Redux</strong> y <strong>Saga</strong> integrando APIs y utilizando herramientas como Webpack, Babel y ESLint para un desarrollo eficiente y escalable.
                                    </div>
                                </div>
                            </li>
                        </Roll>

                        <Fade
                            direction="right"
                            duration={800}
                            cascade
                            triggerOnce
                        >
                            <li>
                                <div className="list-inner" onMouseMove={(e) => handleMouseMove(e)} onMouseLeave={(e) => handleMouseLeave(e)} onMouseEnter={(e) => handleMouseEnter(e)} id="list-inner-2">
                                    <div className="title-container">
                                        <span className="icon">
                                            <React />
                                        </span>
                                        <div className="title titles"><h3>React.js</h3></div>
                                    </div>
                                    <div className="text"><strong>Experiencia avanzada en React.js</strong>, dominando el manejo del estado con <strong>Redux</strong> y <strong>Context API</strong>, optimización del rendimiento con <strong>memoización</strong> y <strong>lazy loading</strong>, y desarrollo de componentes reutilizables. He implementado patrones avanzados como <strong>HOCs</strong> y <strong>Render Props</strong>, y utilizado herramientas como <strong>React Router</strong> y <strong>React Query</strong>. Además, he trabajado con <strong>React Native</strong> para crear aplicaciones móviles eficientes y escalables, integrando APIs, utilizando librerías como <strong>React Navigation</strong>, y manejando almacenamiento local y notificaciones push.</div>
                                </div>
                            </li>
                        </Fade>


                        <Roll
                            direction="left"
                            duration={800}
                            cascade
                            triggerOnce
                        >
                            <li>
                                <div className="list-inner" id="list-inner-3" onMouseMove={(e) => handleMouseMove(e)} onMouseLeave={(e) => handleMouseLeave(e)} onMouseEnter={(e) => handleMouseEnter(e)}>
                                    <div className="title-container">
                                        <span className="icon">
                                            <Python />
                                        </span>
                                        <div className="title titles"><h3>Python</h3></div>
                                    </div>
                                    <div className="text">Experiencia en desarrollo backend utilizando frameworks como <strong>Flask</strong>. Manejo conceptos avanzados como <strong>programación orientada a objetos</strong>, manejo de excepciones, concurrencia con <strong>hilos y asyncio</strong>, y <strong>optimización de rendimiento</strong>. He trabajado con integración de <strong>APIs REST</strong>, bases de datos SQL y NoSQL, y he utilizado bibliotecas como <strong>Pandas</strong>, <strong>NumPy</strong>, y herramientas para testing como <strong>pytest</strong>. También tengo experiencia en automatización de tareas y desarrollo de scripts eficientes para diferentes aplicaciones.</div>
                                </div>
                            </li>
                        </Roll>



                        <Fade
                            direction="right"
                            duration={800}
                            cascade
                            triggerOnce
                        >

                            <li>
                                <div className="list-inner" id="list-inner-4" onMouseMove={(e) => handleMouseMove(e)} onMouseLeave={(e) => handleMouseLeave(e)} onMouseEnter={(e) => handleMouseEnter(e)}>
                                    <div className="title-container">
                                        <span className="icon">
                                            <Flask />
                                        </span>
                                        <div className="title titles"><h3>Flask</h3></div>
                                    </div>
                                    <div className="text">Tengo experiencia en Flask, habiendo desarrollado aplicaciones web <strong>RESTful</strong> escalables y seguras. Manejo patrones de diseño como <strong>Blueprint</strong> para modularidad, gestión de sesiones y autenticación con <strong>JWT</strong>, y <strong>middleware</strong> personalizado. He trabajado con bases de datos MySql, integración de APIs, y he optimizado el rendimiento con técnicas de <strong>caching</strong>. Además, he implementado testing completo con <strong>pytest</strong> y he seguido prácticas de despliegue en entornos de producción utilizando <strong>AWS</strong>.</div>
                                </div>
                            </li>

                        </Fade>



                        <Roll
                            direction="left"
                            duration={800}
                            cascade
                            triggerOnce
                        >
                            <li>
                                <div className="list-inner" id="list-inner-5" onMouseMove={(e) => handleMouseMove(e)} onMouseLeave={(e) => handleMouseLeave(e)} onMouseEnter={(e) => handleMouseEnter(e)}>
                                    <div className="title-container">
                                        <span className="icon">
                                            <Php />
                                        </span>
                                        <div className="title titles"><h3>PHP 8</h3></div>
                                    </div>
                                    <div className="text"><strong>Nivel intermedio en PHP</strong>, con experiencia en desarrollo de aplicaciones web utilizando frameworks como <strong>Laravel</strong>. Manejo conceptos como <strong>programación orientada a objetos</strong>, patrones de diseño (<strong>MVC</strong>), y técnicas de seguridad como sanitización de entradas y <strong>protección CSRF</strong>. He trabajado con integración de bases de datos SQL (MySQL), desarrollo de APIs <strong>RESTful</strong>, y optimización de consultas. Además, domino herramientas de testing como <strong>PHPUnit</strong> y he gestionado despliegues en entornos de producción, incluyendo configuración de servidores.</div>
                                </div>
                            </li>
                        </Roll>



                        <Fade
                            direction="right"
                            duration={800}
                            cascade
                            triggerOnce
                        >

                            <li>
                                <div className="list-inner" id="list-inner-6" onMouseMove={(e) => handleMouseMove(e)} onMouseLeave={(e) => handleMouseLeave(e)} onMouseEnter={(e) => handleMouseEnter(e)}>
                                    <div className="title-container">
                                        <span className="icon">
                                            <Laravel />
                                        </span>
                                        <div className="title titles"><h3>Laravel 10</h3></div>
                                    </div>
                                    <div className="text"><strong>Experiencia intermedia en Laravel</strong>, desarrollando aplicaciones web escalables y seguras. Manejo profundamente el <strong>sistema de enrutamiento</strong>, el <strong>ORM Eloquent</strong> para la gestión de bases de datos, y la implementación de políticas de autorización y autenticación. Además, tengo experiencia en el uso de <strong>Artisan</strong> para tareas de línea de comandos, pruebas con <strong>PHPUnit</strong>.</div>
                                </div>
                            </li>
                        </Fade>



                        <Roll
                            direction="left"
                            duration={800}
                            cascade
                            triggerOnce
                        >

                            <li>
                                <div className="list-inner" id="list-inner-7" onMouseMove={(e) => handleMouseMove(e)} onMouseLeave={(e) => handleMouseLeave(e)} onMouseEnter={(e) => handleMouseEnter(e)}>
                                    <div className="title-container">
                                        <span className="icon">
                                            <MySql />
                                        </span>
                                        <div className="title titles"><h3>MySql</h3></div>
                                    </div>
                                    <div className="text">Experiencia en MySQL, incluyendo el diseño y la optimización de <strong>esquemas de bases de datos complejas</strong>. Manejo la creación y gestión de <strong>índices</strong>, optimización de consultas, y el uso avanzado de <strong>joins</strong> y <strong>subconsultas</strong>. He trabajado con <strong>triggers</strong>, y vistas para mejorar la eficiencia y la integridad de los datos. Además, tengo experiencia en la configuración y administración de MySQL en <strong>entornos de producción</strong>, incluyendo la gestión de backups, replicación, y tuning del rendimiento.</div>
                                </div>
                            </li>
                        </Roll>



                        <Fade
                            direction="right"
                            duration={800}
                            cascade
                            triggerOnce
                        >

                            <li>
                                <div className="list-inner" id="list-inner-8" onMouseMove={(e) => handleMouseMove(e)} onMouseLeave={(e) => handleMouseLeave(e)} onMouseEnter={(e) => handleMouseEnter(e)}>
                                    <div className="title-container">
                                        <span className="icon">
                                            <Arduino />
                                        </span>
                                        <div className="title titles"><h3>Arduino(c++)</h3></div>
                                    </div>
                                    <div className="text">Experiencia en Arduino desarrollando proyectos complejos con microcontroladores para aplicaciones específicas. Manejo la programación en <strong>C/C++</strong> para optimizar el rendimiento del hardware, integración de <strong>sensores y actuadores</strong>, y comunicación entre módulos a través de protocolos como <strong>I2C</strong>, <strong>SPI</strong> y <strong>UART</strong>. He implementado soluciones para control de sistemas en <strong>tiempo real</strong>, automatización de tareas y <strong>monitoreo de datos</strong>. Además, tengo experiencia en el <strong>diseño de circuitos electrónicos</strong>, depuración de problemas de hardware y desarrollo de interfaces para la interacción con usuarios.</div>
                                </div>
                            </li>
                        </Fade>



                        <Roll
                            direction="left"
                            duration={800}
                            cascade
                            triggerOnce
                        >
                            <li>
                                <div className="list-inner" id="list-inner-9" onMouseMove={(e) => handleMouseMove(e)} onMouseLeave={(e) => handleMouseLeave(e)} onMouseEnter={(e) => handleMouseEnter(e)}>
                                    <div className="title-container">
                                        <span className="icon">
                                            <MongoDb />
                                        </span>
                                        <div className="title titles"><h3>MongoDb</h3></div>
                                    </div>
                                    <div className="text">Experiencia intermedia en MongoDB, trabajando con bases de datos NoSQL para manejar datos no <strong>estructurados</strong> y <strong>semi-estructurados</strong>. Manejo la creación y gestión de <strong>colecciones</strong> y <strong>documentos</strong>, así como la consulta y agregación de datos utilizando el framework de agregación de MongoDB. He implementado operaciones <strong>CRUD</strong> y trabajado con <strong>índices</strong> para optimizar el rendimiento de las consultas.</div>
                                </div>
                            </li>
                        </Roll>


                    </ul>
                    <AttentionSeeker effect="rubberBand">
                        <div className="button">
                            <a className="anchor" href="#contact">
                                <span>¿Puedo encajar en tu proyecto?</span>
                            </a>
                        </div>
                    </AttentionSeeker>

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