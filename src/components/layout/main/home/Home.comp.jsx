import { StylesHomeComp } from "./stylesHome.comp";
import { useTheme } from "../../../../contexts/themeContext.jsx";
import Atom from "./atom/Atom.jsx";



const HomeComp = () => {
    const currentTheme = useTheme().theme();

    return (
        <StylesHomeComp theme={currentTheme}>
            <div className="background">

            </div>
            <div className="home-info-container">
                <div className="home-info-content">
                    <div className="details">
                        <div className="hello">
                            <h3 className="orangeText">Hola, me llamo</h3>
                        </div>
                        <div className="name">
                            <h3>Andrei Chiorian</h3>
                        </div>
                        <div className="job">
                            <p>
                                Un
                                <span className="greenText"> Full Stack Developer </span>
                                De
                                <span className="purpleText"> Madrid</span>
                            </p>
                        </div>
                        <div className="text">
                            <p>
                                Desarrollador capaz de convertir café en código y errores en soluciones, siempre con una línea de código a la vez.
                            </p>

                        </div>
                        <div className="button"></div>
                    </div>
                    <div className="avatar">
                        <Atom/>
                    </div>

                </div>
            </div>
            <div className="go-down">
                <a className="anchor" href="#about">
                    <svg width="26px" height="100%" viewBox="0 0 247 390" version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <path id="wheel" d="M123.359,79.775l0,72.843" style={{ fill: 'none', stroke: '#fff', strokeWidth: '20px' }} />
                        <path id="mouse" d="M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z" style={{ fill: 'none', stroke: '#fff', strokeWidth: '20px' }} />
                    </svg>
                </a>
            </div>
        </StylesHomeComp>
    )
}

export default HomeComp;