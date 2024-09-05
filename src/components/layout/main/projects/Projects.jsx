import { Fade } from "react-awesome-reveal";
import { StylesProjects } from "./styleProjects";
import { useTheme } from "../../../../contexts/themeContext";
import { useState } from "react";



const Projects = () => {
    const currentTheme = useTheme().theme();
    const [isHovered, setIsHovered] = useState(false);

    return (
        <StylesProjects theme={currentTheme}>
            <div className="container">
                <div className="main-title">
                    <span>Proyectos</span>
                    <h3>Algunos de mis trabajos</h3>
                    <p>
                        Descubre los proyectos en los que he puesto pasión, creatividad y líneas de código.
                    </p>
                </div>
                <div className="filter">
                    <ul>
                        <li><a href="" className="c-pointer current">All</a></li>
                        <li><a href="" className="c-pointer">React</a></li>
                        <li><a href="" className="c-pointer">React Native</a></li>
                        <li><a href="" className="c-pointer">Python</a></li>
                        <li><a href="" className="c-pointer">Php</a></li>
                        <li><a href="" className="c-pointer">Arduino</a></li>
                    </ul>
                </div>


                <div className="projects-list">
                    <Fade
                        direction="up"
                        style={{ display: "inline-block" }}
                        duration={1000}
                        triggerOnce
                        className="fade-projects"
                    >
                        <div className={`flex-container grid-container ${isHovered ? 'hover-effect' : ''}`}>
                            <div className="g1">
                                <figure>
                                    <img src="img/cloudlib.png" alt="Imagen Sphere" className="rounded-3xl shadow-md shadow-white hover:scale-105" />
                                    <div className="capa">
                                        <a href="#" target="_blank" className="rounded-lg">
                                            <h3 className="text-center">Sphere</h3>
                                            <p>Sphere es un proyecto creado desde cero para Sport Innovation Academy. Se trata de una aplicación web para la gestión de clubes deportivos y asociaciones. Mi papel en este proyecto abarcó desde el estudio de los requisitos y el planteamiento del funcionamiento de la aplicación, hasta el diseño de la base de datos y el desarrollo completo. Trabajamos siguiendo una metodología ágil, organizando el trabajo en sprints de dos semanas mediante Jira. La aplicación cuenta con un frontend desarrollado en React.js y una API REST construida con Python y Flask. Para la gestión de datos, utilizamos MySQL como base de datos.</p>
                                            <span>Pulsa otra vez</span>
                                            <div className="flex justify-center items-center p-2">

                                            </div>
                                        </a>
                                    </div>
                                </figure>

                            </div>
                            <div className="g2">
                                <figure onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} >
                                    <img src="img/cloudlib.png" alt="Imagen MokshaBook" className="rounded-3xl shadow-md shadow-white hover:scale-105" />
                                    <div className="capa">
                                        <a href="#" target="_blank" className="rounded-lg">
                                            <h3 className="text-center">MokshaBook</h3>
                                            <p>Este proyecto, desarrollado con gran ilusión, es una red social que permite a los usuarios subir fotos, seguir a otros, dar likes y comentar en publicaciones. Implementado utilizando PHP y el framework Laravel 10, y con MySQL para la gestión de la base de datos, refleja el progreso significativo alcanzado en el desarrollo web. La aplicación está diseñada para ofrecer una experiencia intuitiva y dinámica, inspirada en las principales redes sociales.</p>
                                            <span>Pulsa otra vez</span>
                                            <div className="flex justify-center items-center p-2">

                                            </div>
                                        </a>
                                    </div>
                                </figure>
                            </div>
                            <div className="g3">
                                <figure>
                                    <img src="img/cloudlib.png" alt="Imagen RoomMates" className="rounded-3xl shadow-md shadow-white hover:scale-105" />
                                    <div className="capa">
                                        <a href="#" target="_blank" className="rounded-lg">
                                            <h3 className="text-center">RoomMates</h3>
                                            <p>Aplicación de Gestión de Inquilinos en Colaboración con <a href="https://eduardoneila.es/" target="_blank">Eduardo Neila</a>. Actualmente en desarrollo, esta aplicación está diseñada para facilitar la gestión de inquilinos, permitiendo el registro de pagos, la división de gastos entre los miembros, la gestión de tareas comunes y la conexión entre diferentes hogares. Desarrollada con React Native para el frontend, Python Flask para la API REST, y MySQL como gestor de bases de datos, ofrece una solución integral y eficiente para la administración compartida de viviendas.</p>
                                            <span>Pulsa otra vez</span>
                                            <div className="flex justify-center items-center p-2">

                                            </div>
                                        </a>
                                    </div>
                                </figure>
                            </div>
                            <div className="g4">
                                <figure onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                                    <img src="img/cloudlib.png" alt="Imagen ShopppingCart" className="rounded-3xl shadow-md shadow-white hover:scale-105" />
                                    <div className="capa">
                                        <a href="#" target="_blank" className="rounded-lg">
                                            <h3 className="text-center">ShopppingCart</h3>
                                            <p>Este pequeño proyecto, desarrollado como parte de un tutorial, incluye un carrito de compra funcional donde los usuarios pueden añadir, quitar y modificar los artículos. Además, cuenta con un sistema de gestión de usuarios que permite realizar operaciones CRUD básicas. Implementado en React, este proyecto ofrece una visión práctica de la gestión de estados y operaciones en una aplicación web.</p>
                                            <span>Pulsa otra vez</span>
                                            <div className="flex justify-center items-center p-2">

                                            </div>
                                        </a>
                                    </div>
                                </figure>
                            </div>
                            <div className="g5">
                                <figure>
                                    <img src="img/cloudlib.png" alt="Imagen Terrarium Control" className="rounded-3xl shadow-md shadow-white hover:scale-105" />
                                    <div className="capa">
                                        <a href="#" target="_blank" className="rounded-lg">
                                            <h3 className="text-center">Terrarium Control</h3>
                                            <p>Este proyecto resultó muy satisfactorio, ya que permite a mi serpiente vivir en un entorno óptimo de manera automática. Desarrollado en C++ utilizando el editor de Arduino, el sistema controla la temperatura del terrario y simula los ciclos de amanecer y atardecer. Esta solución técnica mejora el bienestar de mi mascota al proporcionar un entorno adecuado de forma precisa y eficiente.</p>
                                            <span>Pulsa otra vez</span>
                                            <div className="flex justify-center items-center p-2">

                                            </div>
                                        </a>
                                    </div>
                                </figure>
                            </div>
                            <div className="g6">
                                <figure onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                                    <img src="img/cloudlib.png" alt="Imagen CloudLib" className="rounded-3xl shadow-md shadow-white hover:scale-105" />
                                    <div className="capa">
                                        <a href="#" target="_blank" className="rounded-lg">
                                            <h3 className="text-center">CloudLib</h3>
                                            <p>Este proyecto, desarrollado como trabajo de fin de grado en el FP Grado Superior en Desarrollo de Aplicaciones Web, consiste en un sistema para gestionar una biblioteca física, ya sea en casa o en otro lugar. La aplicación permite registrar los libros y gestionar los préstamos realizados a familiares. Implementado con PHP, Laravel 10 y MySQL como gestor de bases de datos, el sistema ofrece una solución práctica y eficiente para la administración de colecciones de libros y sus préstamos.</p>
                                            <span>Pulsa otra vez</span>
                                            <div className="flex justify-center items-center p-2">

                                            </div>
                                        </a>
                                    </div>
                                </figure>
                            </div>
                        </div>
                    </Fade>
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