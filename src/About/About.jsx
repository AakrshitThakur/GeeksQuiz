import "./About.css";
import AboutContainer from "./AboutContainer";

export default function About({ DarkTheme }) {
    return (
        <section id="About" style={{backgroundImage: "url('./ImagesUsed/GridLines.png')"}}>
            <AboutContainer DarkTheme={DarkTheme} />
        </section>
    );

}