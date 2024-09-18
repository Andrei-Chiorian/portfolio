// import About from "../../components/layout/main/about/About";
// import HomeComp from "../../components/layout/main/home/Home.comp";
// import Process from "../../components/layout/main/process/Process";
// import Projects from "../../components/layout/main/projects/Projects";
import Skills from "../../components/layout/main/skills/Skills.jsx";
import Testimonials from "../../components/layout/main/testimonials/Testimonials.jsx";
import { StylesHome } from "./stylesHome"
import { lazy } from 'react';

const About = lazy(() => import('../../components/layout/main/about/About'));

const HomeComp = lazy(() => import('../../components/layout/main/home/Home.comp'));

const Process = lazy(() => import('../../components/layout/main/process/Process'));

const Projects = lazy(() => import('../../components/layout/main/projects/Projects.jsx'));

const Home = () => {


    return (
        <StylesHome>

            <section className="home-section" id="home">
                <HomeComp />               
            </section>

            <section className="process-section" id="process">
                <Process />
            </section>

            <section>
                <About />
            </section>

            <section>
                <Projects />
            </section>

            <section>
                <Skills />
            </section>

            <section id="testimonials">
                <Testimonials />
            </section>



        </StylesHome>
    )
}

export default Home;