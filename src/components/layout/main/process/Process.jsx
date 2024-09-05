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
                        <li>
                            <div className="list-inner">
                                <div className="icon">
                                    <span>
                                        <img className="brush" src="/img/3.png" alt="" />
                                        <Idea/>
                                    </span>
                                </div>
                                <div className="title">
                                    <h3>
                                        Planificación
                                    </h3>
                                </div>
                                <div className="text">
                                    <p>
                                        Most common methods for designing websites that work well on desktop is responsive and adaptive design.
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="list-inner">
                                <div className="icon">
                                    <span>
                                        <img className="brush" src="/img/1.png" alt="" />
                                        <Development />
                                    </span>
                                </div>
                                <div className="title">
                                    <h3>
                                        Desarrollo
                                    </h3>
                                </div>
                                <div className="text">
                                    <p>
                                        Most common methods for designing websites that work well on desktop is responsive and adaptive design.
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="list-inner">
                                <div className="icon">
                                    <span>
                                        <img className="brush" src="/img/2.png" alt="" />
                                        <Evaluation />
                                    </span>
                                </div>
                                <div className="title">
                                    <h3>
                                        Evaluación
                                    </h3>
                                </div>
                                <div className="text">
                                    <p>
                                        Most common methods for designing websites that work well on desktop is responsive and adaptive design.
                                    </p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

        </StylesProcess>
    )
}

export default Process;