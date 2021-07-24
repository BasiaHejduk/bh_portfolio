import "./About.scss";

const About = () => {
    return (
        <div className="about" name="about">
            <div className="wrapper">
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
                    <div className="about__technologies-grid">
                        <div className="about__technologies-icon about__technologies-icon--html"></div>
                        <div className="about__technologies-icon about__technologies-icon--css"></div>
                        <div className="about__technologies-icon about__technologies-icon--js"></div>
                        <div className="about__technologies-icon about__technologies-icon--sass"></div>
                        <div className="about__technologies-icon about__technologies-icon--rwd"></div>
                        <div className="about__technologies-icon about__technologies-icon--react"></div>
                        <div className="about__technologies-icon about__technologies-icon--git"></div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default About;