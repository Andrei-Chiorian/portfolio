import { useTheme } from "../../../../contexts/themeContext";
import { StylesTestimonials } from "./styleTestimonials";
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import { useState } from "react";


const Testimonials = () => {
    const currentTheme = useTheme().theme();
    const [swiperRef, setSwiperRef] = useState(null);

    const goToSlide = (index) => {
        if (swiperRef) swiperRef.slideTo(index);
    };

    return (
        <StylesTestimonials theme={currentTheme}>
            <div className="testi-main-title">
                <span>Testimonios</span>
                <h3 className="titles">Lo que dicen de mi</h3>
                <p>Opiniones de compañeros, clientes y mentores sobre mi trabajo</p>

            </div>
            <div className="list-wrapper">
                <div className="total">
                    <div className="in">
                        <Swiper
                            onSwiper={setSwiperRef}
                            spaceBetween={50}
                            slidesPerView={1}
                            className="swiper"
                            pagination={{ clickable: true }}
                            modules={[Pagination]}
                        >
                            <SwiperSlide>
                                <div className="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="Layer_1" x="0px" y="0px" width="200px" height="200px" viewBox="796 698 200 200" enableBackground="new 796 698 200 200" className="svg replaced-svg"><g><path d="M885.208,749.739v-40.948C836.019,708.791,796,748.81,796,798v89.209h89.208V798h-48.26   C836.948,771.39,858.598,749.739,885.208,749.739z"></path><path d="M996,749.739v-40.948c-49.19,0-89.209,40.019-89.209,89.209v89.209H996V798h-48.26   C947.74,771.39,969.39,749.739,996,749.739z"></path></g></svg>
                                </div>
                                <div className="text">
                                    <p className="readonly">
                                        Trabajar con Andrei Chiorian fue una experiencia muy positiva durante el desarrollo de una aplicación de gestión deportiva. Andrei tiene una buena comprensión de las tecnologías que utilizamos, como React, Python y MySQL, y demostró ser consistente en su trabajo tanto en el front-end como en el back-end. Es un profesional que sabe adaptarse a las necesidades del proyecto y siempre estuvo dispuesto a colaborar y a ofrecer su ayuda cuando fue necesario. Su enfoque práctico y su capacidad para encontrar soluciones efectivas fueron un aporte importante al proyecto. Estoy seguro de que Andrei será un recurso valioso en cualquier equipo con el que trabaje.
                                    </p>
                                </div>
                                <div className="short">
                                    <div className="image">
                                        <div className="main" style={{ backgroundImage: ' url(/img/edu.jpeg)' }}></div>
                                    </div>
                                    <div className="detail">
                                        <h3 className="titles">Eduardo Neila</h3>
                                        <span>Desarrollador de software</span>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="Layer_1" x="0px" y="0px" width="200px" height="200px" viewBox="796 698 200 200" enableBackground="new 796 698 200 200" className="svg replaced-svg"><g><path d="M885.208,749.739v-40.948C836.019,708.791,796,748.81,796,798v89.209h89.208V798h-48.26   C836.948,771.39,858.598,749.739,885.208,749.739z"></path><path d="M996,749.739v-40.948c-49.19,0-89.209,40.019-89.209,89.209v89.209H996V798h-48.26   C947.74,771.39,969.39,749.739,996,749.739z"></path></g></svg>
                                </div>
                                <div className="text">
                                    <p className="readonly">
                                        Tuve la oportunidad de trabajar bajo la supervisión de Andrei durante mis FCT, y puedo afirmar sin duda que su habilidad técnica es excepcional. No solo domina tanto el front-end como el back-end, sino que también tiene una capacidad única para explicar conceptos complejos de manera clara y accesible. Su enfoque meticuloso y su dedicación al detalle aseguran que cada proyecto en el que trabaja cumpla con los más altos estándares. Además, su actitud colaborativa y disposición para ayudar a otros lo convierten en un líder natural dentro del equipo. Cualquiera que tenga la oportunidad de trabajar con Andrei será testigo de su compromiso y pasión por la excelencia en el desarrollo de software.
                                    </p>
                                </div>
                                <div className="short">
                                    <div className="image">
                                        <div className="main" style={{ backgroundImage: ' url(/img/jaime.png)' }}></div>
                                    </div>
                                    <div className="detail">
                                        <h3 className="titles">Jaime Martín</h3>
                                        <span>Desarrollador de aplicaciones web</span>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="Layer_1" x="0px" y="0px" width="200px" height="200px" viewBox="796 698 200 200" enableBackground="new 796 698 200 200" className="svg replaced-svg"><g><path d="M885.208,749.739v-40.948C836.019,708.791,796,748.81,796,798v89.209h89.208V798h-48.26   C836.948,771.39,858.598,749.739,885.208,749.739z"></path><path d="M996,749.739v-40.948c-49.19,0-89.209,40.019-89.209,89.209v89.209H996V798h-48.26   C947.74,771.39,969.39,749.739,996,749.739z"></path></g></svg>
                                </div>
                                <div className="text">
                                    <p className="readonly">
                                        Trabajé con Andrei en el proyecto de una aplicación sobre gestión deportiva y es un programador excepcional. No solo posee un buen conocimiento en Python y en React sino que también destaca por su capacidad para resolver problemas complejos de manera rápida y eficiente.
                                        Es alguien en quien confiar, con un objetivo claro y demuestra tener altas capacidades para todo lo que se le oponga y un buen compañero al que en el caso de pedir ayuda no dudará en dártela, haciendo que te impulse y te dé ánimos para seguir adelante.
                                    </p>
                                </div>
                                <div className="short">
                                    <div className="image">
                                        <div className="main" style={{ backgroundImage: ' url(/img/juanqui.png)' }}></div>
                                    </div>
                                    <div className="detail">
                                        <h3 className="titles">Juan Carlos Barriga</h3>
                                        <span>Desarrollador de aplicaciones web</span>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="Layer_1" x="0px" y="0px" width="200px" height="200px" viewBox="796 698 200 200" enableBackground="new 796 698 200 200" className="svg replaced-svg"><g><path d="M885.208,749.739v-40.948C836.019,708.791,796,748.81,796,798v89.209h89.208V798h-48.26   C836.948,771.39,858.598,749.739,885.208,749.739z"></path><path d="M996,749.739v-40.948c-49.19,0-89.209,40.019-89.209,89.209v89.209H996V798h-48.26   C947.74,771.39,969.39,749.739,996,749.739z"></path></g></svg>
                                </div>
                                <div className="text">
                                    <p className="readonly">
                                        Trabajé con Andrei en el proyecto de una aplicación sobre gestión deportiva y es un programador excepcional. No solo posee un buen conocimiento en Python y en React sino que también destaca por su capacidad para resolver problemas complejos de manera rápida y eficiente.
                                        Es alguien en quien confiar, con un objetivo claro y demuestra tener altas capacidades para todo lo que se le oponga y un buen compañero al que en el caso de pedir ayuda no dudará en dártela, haciendo que te impulse y te dé ánimos para seguir adelante.
                                    </p>
                                </div>
                                <div className="short">
                                    <div className="image">
                                        <div className="main" style={{ backgroundImage: ' url(/img/rober.png)' }}></div>
                                    </div>
                                    <div className="detail">
                                        <h3 className="titles">Roberto Berrendo </h3>
                                        <span>Desarrollador web junior</span>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <div className="left-details">
                        <div className="det-image one" style={{ backgroundImage: 'url(/img/random.jpg)' }}>

                        </div>
                        <div className="det-image two" style={{ backgroundImage: 'url(/img/random2.jpg)' }}>

                        </div>
                        <div className="det-image three" style={{ backgroundImage: 'url(/img/edu.jpeg)' }} onClick={() => goToSlide(0)}>

                        </div>
                        <div className="det-image four" style={{ backgroundImage: 'url(/img/juanqui.png)' }} onClick={() => goToSlide(2)}>

                        </div>
                        <span className="square green"></span>
                        <span className="square yellow"></span>
                        <span className="square border"></span>
                    </div>
                    <div className="right-details">
                        <div className="det-image one" style={{ backgroundImage: 'url(/img/random3.jpg)' }}>

                        </div>
                        <div className="det-image two" style={{ backgroundImage: 'url(/img/jaime.png)' }} onClick={() => goToSlide(1)}>

                        </div>
                        <div className="det-image three" style={{ backgroundImage: 'url(/img/rober.png)' }} onClick={() => goToSlide(3)}>

                        </div>
                        <span className="square purple"></span>
                        <span className="square yellow"></span>
                        <span className="square border"></span>
                    </div>
                </div>
            </div>
            <div className="brush_1">
                <img src="/img/9.png" alt="" />
            </div>
            <div className="brush_2">
                <img src="/img/10.png" alt="" />
            </div>

        </StylesTestimonials>
    )
}

export default Testimonials;