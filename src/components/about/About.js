import "./About.scss";

const About = () => {
    return (
        <div className="about" name="about">
            <div className="wrapper">
                <p className="about__title">O MNIE</p>
                <div className="about__grid">
                    <div className="about__text">
                        <p className="about__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <p className="about__quote">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."</p>
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