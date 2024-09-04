import { StylesHomeComp } from "./stylesHome.comp";
import { Flask, Javascript, Laravel, Php, Python, React, Tensor } from '../../../../constants/icons.jsx'



const HomeComp = () => {


    return (
        <StylesHomeComp>

            <div className="image atom">

                <div id="nucleus">
                    <img src="/img/avatar.png" alt="" />
                </div>
                <div class="orbit">
                    <div class="electron">
                        <span className="skills python anim_moveBottom">
                            <Python />
                        </span>
                    </div>
                </div>
                <div class="orbit">
                    <div class="electron">
                        <span className="skills react anim_moveBottom">
                            <React />
                        </span>
                    </div>
                </div>
                <div class="orbit">
                    <div class="electron">
                        <span className="skills javascript anim_moveBottom">
                            <Javascript />
                        </span>
                    </div>
                </div>
                <div class="orbit">
                    <div class="electron">
                        <span className="skills flask anim_moveBottom">
                            <Flask />
                        </span>
                    </div>
                </div>
                <div class="orbit">
                    <div class="electron">
                        <span className="skills tensor anim_moveBottom">
                            <Tensor />
                        </span>
                    </div>
                </div>
                <div class="orbit">
                    <div class="electron">
                        <span className="skills php anim_moveBottom">
                            <Php />
                        </span>
                    </div>
                </div>
                <div class="orbit">
                    <div class="electron">
                        <span className="skills laravel anim_moveBottom">
                            <Laravel />
                        </span>
                    </div>
                </div>
            </div>
        </StylesHomeComp>
    )
}

export default HomeComp;