import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import "./About.scss";

const About = () => {
    const technologiesIconsWrapper = useRef(null);
    const aboutWrapper = useRef(null);
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        const aboutText = aboutWrapper.current.children[0];
        const aboutImg = aboutWrapper.current.children[1];

        gsap.fromTo(aboutText, {
            autoAlpha: 0,
            y: "+=50"
            },
            {
            scrollTrigger: {
                trigger: aboutText,
                start: "top bottom",
                toggleActions: "restart none restart none"
            },
            y: "-=50",
            autoAlpha: 1,
            duration: 1,
        });
        gsap.fromTo(aboutImg, {
            autoAlpha: 0,
            y: "+=50"
            },
            {
            scrollTrigger: {
                trigger: aboutImg,
                start: "top bottom",
                toggleActions: "restart none restart none"
            },
            y: "-=50",
            autoAlpha: 1,
            duration: 1,
        });

        const technologiesIcons = technologiesIconsWrapper.current.children;
        gsap.fromTo(technologiesIcons, {
            autoAlpha: 0,
            y: "-=50"
            },
            {
            scrollTrigger: {
                trigger: technologiesIconsWrapper.current,
                start: "top bottom",
                toggleActions: "restart none restart none"
            },
            y: "+=50",
            autoAlpha: 1,
            duration: 1,
            stagger: 0.1
        });
    }, [])

    return (
        <div className="about" name="about">
            <div className="wrapper">
                <p className="about__title">ABOUT</p>
                <div ref={aboutWrapper} className="about__grid">
                    <div className="about__text">
                        <p className="about__description">Begginer programmer - ambitious and persistently working towards her goals.</p>
                        <p className="about__quote">
                            "Programming allows me to express my analytical and logical thinking skills as well as showcase my 
                            creativity and designs. I am a quick learner and keen to learn new things. Therefore, I am confident 
                            that with the right environment, I will quickly further develop my skills and be an asset for your 
                            team and organisation."
                        </p>
                    </div>
                    <div className="about__image"></div>
                </div>
                <div className="about__technologies">
                    <p className="about__technologies-title">TECHNOLOGIES:</p>
                    <div ref={technologiesIconsWrapper} className="about__technologies-grid">
                        <div className="about__technologies-icon about__technologies-icon--html" >
                            <p className="about__technologies-p">HTML5</p>
                        </div>
                        <div className="about__technologies-icon about__technologies-icon--css" >
                            <p className="about__technologies-p">CSS3</p>
                        </div>
                        <div className="about__technologies-icon about__technologies-icon--js" >
                            <p className="about__technologies-p">JAVASCRIPT</p>
                        </div>
                        <div className="about__technologies-icon about__technologies-icon--sass" >
                            <p className="about__technologies-p">SASS</p>
                        </div>
                        <div className="about__technologies-icon about__technologies-icon--rwd" >
                            <p className="about__technologies-p">RWD</p>
                        </div>
                        <div className="about__technologies-icon about__technologies-icon--react" >
                            <p className="about__technologies-p">REACT</p>
                        </div>
                        <div className="about__technologies-icon about__technologies-icon--git" >
                            <p className="about__technologies-p">GIT</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default About;