import { Flask, Javascript, Laravel, Php, Python, React, Tensor } from '../../../../../constants/icons.jsx'
import { StylesAtom } from './stylesAtom';



const Atom = () => {


    return (
        <StylesAtom>
            <div className="image atom">
                <div id="nucleus">
                    <img src="/img/avatar.png" alt="" />
                </div>
                <div className="orbit python">
                    <span className="skills anim_moveBottom">
                        <Python />
                    </span>
                </div>
                <div className="orbit react">
                    <span className="skills anim_moveBottom">
                        <React />
                    </span>
                </div>
                <div className="orbit javascript">
                    <span className="skills anim_moveBottom">
                        <Javascript />
                    </span>
                </div>
                <div className="orbit flask">
                    <span className="skills anim_moveBottom">
                        <Flask />
                    </span>
                </div>
                <div className="orbit tensor">
                    <span className="skills anim_moveBottom">
                        <Tensor />
                    </span>
                </div>
                <div className="orbit php">
                    <span className="skills anim_moveBottom">
                        <Php />
                    </span>
                </div>
                <div className="orbit laravel">
                    <span className="skills anim_moveBottom">
                        <Laravel />
                    </span>

                </div>
            </div>
        </StylesAtom>
    )
}

export default Atom;