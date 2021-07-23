import "./About.scss";

const About = () => {
    return (
        <div className="about" name="about">
            <p className="about__title">O MNIE</p>
            <div className="about__grid">
                <div className="about__text">
                    <p className="about__description">Początkująca programistka – ambitna i wytrwale dążąca do obranego celu.</p>
                    <p className="about__quote">„Programowanie pozwala mi łączyć naturalne zdolności analitycznego i logicznego myślenia z kreatywnością oraz zmysłem estetycznym. Wierzę, że uda mi się trafić do środowiska, które umożliwi mi dalszy rozwój oraz szybkie osiągnięcie odpowiedniego poziomu umiejętności przynoszących profity dla zespołu oraz całej organizacji.”</p>
                </div>
                <div className="about__image"></div>
            </div>
            <div className="about__technologies">
                <p className="about__technologies-title">TECHNOLOGIE:</p>
                <div className="about__technologies-icons">
                    <div className="about__technologies-icon about__technologies-icon--html">HTML5</div>
                    <div className="about__technologies-icon about__technologies-icon--css">CSS</div>
                    <div className="about__technologies-icon about__technologies-icon--sass">SASS</div>
                    <div className="about__technologies-icon about__technologies-icon--rwd">RWD</div>
                    <div className="about__technologies-icon about__technologies-icon--js">JAVA SCRIPT</div>
                    <div className="about__technologies-icon about__technologies-icon--react">REACT</div>
                    <div className="about__technologies-icon about__technologies-icon--git">GIT</div>
                </div>
            </div>
        </div>
    )
};

export default About;