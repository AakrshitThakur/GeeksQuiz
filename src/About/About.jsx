import "./About.css";
import AboutContainer from "./AboutContainer";

export default function About({ DarkTheme }) {
    return (
        <section id="About">
            <AboutContainer DarkTheme={DarkTheme} />
        </section>
    );

}