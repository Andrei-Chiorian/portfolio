import { Fade } from "react-awesome-reveal";
import { StylesProjects } from "./styleProjects";
import { useTheme } from "../../../../contexts/themeContext";
import { useMemo, useState } from "react";



const Projects = () => {
    const currentTheme = useTheme().theme();
    const [isHovered1, setIsHovered1] = useState(false);
    const [isHovered2, setIsHovered2] = useState(false);
    const [isHovered3, setIsHovered3] = useState(false);

    const meImg1 = useMemo(() => 'img/sia.jpeg', []);
    const meImg2 = useMemo(() => 'img/mokshabook.png', []);
    const meImg3 = useMemo(() => 'img/roommates.png', []);
    const meImg4 = useMemo(() => 'img/shopping.png', []);
    const meImg5 = useMemo(() => 'img/terrarium.jpg', []);
    const meImg6 = useMemo(() => 'img/cloudlib.png', []);

    const [groupSelected, setGroupSelected] = useState('all')


    return (
        <StylesProjects theme={currentTheme}>
            <div className="container" id="projects">
                <div className="main-title">
                    <span>Proyectos</span>
                    <h3 className="titles">Algunos de mis trabajos</h3>
                    <p>
                        Descubre los proyectos en los que he puesto pasión, creatividad y líneas de código.
                    </p>
                </div>
                <div className="filter">
                    <ul>
                        <li><div className={`c-pointer titles ${groupSelected == 'all' ? 'current' : ''}`} onClick={() => setGroupSelected('all')}>All</div></li>
                        <li><div className={`c-pointer titles ${groupSelected == 'react' ? 'current' : ''}`} onClick={() => setGroupSelected('react')}>React</div></li>
                        <li><div className={`c-pointer titles ${groupSelected == 'reactNative' ? 'current' : ''}`} onClick={() => setGroupSelected('reactNative')}>React Native</div></li>
                        <li><div className={`c-pointer titles ${groupSelected == 'python' ? 'current' : ''}`} onClick={() => setGroupSelected('python')}>Python</div></li>
                        <li><div className={`c-pointer titles ${groupSelected == 'php' ? 'current' : ''}`} onClick={() => setGroupSelected('php')}>Php</div></li>
                        <li><div className={`c-pointer titles ${groupSelected == 'arduino' ? 'current' : ''}`} onClick={() => setGroupSelected('arduino')}>Arduino</div></li>
                    </ul>
                </div>


                <div className="projects-list">

                    <div className={`flex-container`}>
                        
                        <div className="c1">
                            <figure className={`c1-1 ${isHovered1 ? 'hover-effect' : ''} ${groupSelected == 'all' || groupSelected == 'react' || groupSelected == 'python' ? '' : 'figure-not-visible'}`}>
                                <img src={meImg1} alt="Imagen Sphere" />
                                <div className="capa">
                                    <a href="https://github.com/Andrei-Chiorian/cloudLib" target="_blank">
                                        <h3 className="text-center">Sphere</h3>
                                        <p>Sphere es un proyecto creado desde cero para Sport Innovation Academy. Se trata de una aplicación web para la gestión de clubes deportivos y asociaciones. Mi papel en este proyecto abarcó desde el estudio de los requisitos y el planteamiento del funcionamiento de la aplicación, hasta el diseño de la base de datos y el desarrollo completo. Trabajamos siguiendo una metodología ágil, organizando el trabajo en sprints de dos semanas mediante Jira. La aplicación cuenta con un frontend desarrollado en React.js y una API REST construida con Python y Flask. Para la gestión de datos, utilizamos MySQL como base de datos.</p>
                                        <span>Pulsa otra vez</span>
                                    </a>
                                </div>
                            </figure>

                            <figure className={`c1-2 ${groupSelected == 'all' || groupSelected == 'php' ? '' : 'figure-not-visible'}`} onMouseEnter={() => setIsHovered1(true)} onMouseLeave={() => setIsHovered1(false)}>
                                <img src={meImg2} alt="Imagen MokshaBook" />
                                <div className="capa">
                                    <a href="https://github.com/Andrei-Chiorian/Mokshabook" target="_blank" >
                                        <h3>MokshaBook</h3>
                                        <p>Este proyecto, desarrollado con gran ilusión, es una red social que permite a los usuarios subir fotos, seguir a otros, dar likes y comentar en publicaciones. Implementado utilizando PHP y el framework Laravel 10, y con MySQL para la gestión de la base de datos, refleja el progreso significativo alcanzado en el desarrollo web. La aplicación está diseñada para ofrecer una experiencia intuitiva y dinámica, inspirada en las principales redes sociales.</p>
                                        <span>Pulsa otra vez</span>
                                    </a>
                                </div>
                            </figure>
                        </div>
                        <div className="c2">
                            <figure className={`c2-1 ${groupSelected == 'all' || groupSelected == 'reactNative' || groupSelected == 'python' ? '' : 'figure-not-visible'}`} onMouseEnter={() => setIsHovered2(true)} onMouseLeave={() => setIsHovered2(false)}>
                                <img src={meImg3} alt="Imagen RoomMates" />
                                <div className="capa">
                                    <a href="https://github.com/fumooworking" target="_blank">
                                        <h3>RoomMates</h3>
                                        <p>Aplicación de Gestión de Inquilinos en Colaboración con Eduardo Neila. Actualmente en desarrollo, esta aplicación está diseñada para facilitar la gestión de inquilinos, permitiendo el registro de pagos, la división de gastos entre los miembros, la gestión de tareas comunes y la conexión entre diferentes hogares. Desarrollada con React Native para el frontend, Python Flask para la API REST, y MySQL como gestor de bases de datos, ofrece una solución integral y eficiente para la administración compartida de viviendas.</p>
                                        <span>Pulsa otra vez</span>
                                    </a>
                                </div>
                            </figure>

                            <figure className={`c2-2 ${isHovered2 ? 'hover-effect' : ''} ${groupSelected == 'all' || groupSelected == 'react' ? '' : 'figure-not-visible'}`}>
                                <img src={meImg4} alt="Imagen ShopppingCart" />
                                <div className="capa">
                                    <a href="https://github.com/Andrei-Chiorian/react-andrei" target="_blank" >
                                        <h3>ShopppingCart</h3>
                                        <p>Este pequeño proyecto, desarrollado como parte de un tutorial, incluye un carrito de compra funcional donde los usuarios pueden añadir, quitar y modificar los artículos. Además, cuenta con un sistema de gestión de usuarios que permite realizar operaciones CRUD básicas. Implementado en React, este proyecto ofrece una visión práctica de la gestión de estados y operaciones en una aplicación web.</p>
                                        <span>Pulsa otra vez</span>
                                    </a>
                                </div>
                            </figure>
                        </div>

                        <div className="c3">
                            <figure className={`c3-1 ${isHovered3 ? 'hover-effect' : ''} ${groupSelected == 'all' || groupSelected == 'arduino' ? '' : 'figure-not-visible'}`}>
                                <img src={meImg5} alt="Imagen Terrarium Control" />
                                <div className="capa">
                                    <a href="https://github.com/Andrei-Chiorian/terrarium_control" target="_blank" >
                                        <h3>Terrarium Control</h3>
                                        <p>Este proyecto resultó muy satisfactorio, ya que permite a mi serpiente vivir en un entorno óptimo de manera automática. Desarrollado en C++ utilizando el editor de Arduino, el sistema controla la temperatura del terrario y simula los ciclos de amanecer y atardecer. Esta solución técnica mejora el bienestar de mi mascota al proporcionar un entorno adecuado de forma precisa y eficiente.</p>
                                        <span>Pulsa otra vez</span>
                                    </a>
                                </div>
                            </figure>

                            <figure className={`c3-2 ${groupSelected == 'all' || groupSelected == 'php' ? '' : 'figure-not-visible'}`} onMouseEnter={() => setIsHovered3(true)} onMouseLeave={() => setIsHovered3(false)}>
                                <img src={meImg6} alt="Imagen CloudLib" />
                                <div className="capa">
                                    <a href="https://github.com/Andrei-Chiorian/cloudLib" target="_blank" >
                                        <h3>CloudLib</h3>
                                        <p>Este proyecto, desarrollado como trabajo de fin de grado en el FP Grado Superior en Desarrollo de Aplicaciones Web, consiste en un sistema para gestionar una biblioteca física, ya sea en casa o en otro lugar. La aplicación permite registrar los libros y gestionar los préstamos realizados a familiares. Implementado con PHP, Laravel 10 y MySQL como gestor de bases de datos, el sistema ofrece una solución práctica y eficiente para la administración de colecciones de libros y sus préstamos.</p>
                                        <span>Pulsa otra vez</span>
                                    </a>
                                </div>
                            </figure>
                        </div>
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
                    <img src="/img/5.png" alt="decorator" />
                </Fade>
            </div>

            <div className="brush_2">
                <img src="/img/6.png" alt="decorator" />
            </div>
        </StylesProjects>
    )
}

export default Projects;