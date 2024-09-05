import About from "../../components/layout/main/about/About";
import HomeComp from "../../components/layout/main/home/Home.comp";
import Process from "../../components/layout/main/process/Process";
import Projects from "../../components/layout/main/projects/Projects";
import { StylesHome } from "./stylesHome"



const Home = () => {


    return (
        <StylesHome>
            <section className="home-section" id="home">
                <HomeComp />
            </section>

            <section className="process-section" id="process">
                <Process />
            </section>

            <section id="about">
                <About />
            </section>

            <section id="projects">
               <Projects/>
            </section>

            <section id="education">
              
            </section>

            <section id="experience">
              
            </section>

            <section id="skills">
              
            </section>

            <section id="testimonials">
               
            </section>



        </StylesHome>
    )
}

export default Home;