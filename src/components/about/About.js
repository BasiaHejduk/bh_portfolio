import { useEffect } from "react";
import gsap from "gsap";
import "./About.scss";

const About = () => {

    useEffect(() => {

        const technologiesIcons = document.querySelectorAll(".about__technologies-icon");
        const tl = gsap.timeline({defaults: {ease: "power3.inOut"}});
        const animateIcons = () => {
            tl.fromTo(technologiesIcons, {autoAlpha: 0, y: "-=50"}, {duration: 1, autoAlpha: 1, y: "+=50", stagger: 0.1})
        }
        const touchToAnimate = (entries, ob) => {
            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    animateIcons();
                    ob.unobserve(entry.target);
                }
            })
        };
        let options = {
            root: null,
            rootMargin: "-20px"
        }
        const observerIcons = new IntersectionObserver(touchToAnimate, options);
        observerIcons.observe(document.querySelector(".about__technologies-grid"))

    }, [])

    const showDetails = (e) => {
        const detailToShow = e.target.firstElementChild;
        const tl = gsap.timeline({defaults: {ease: "power3.inOut"}});
        tl.fromTo(detailToShow, {autoAlpha: 0, rotationY: 180}, {duration: 1, autoAlpha: 1, rotationY: 0});
    }
    const hideDetails = (e) => {
        const detailToHide = e.target;
        const tl = gsap.timeline({defaults: {ease: "power3.inOut"}});
        tl
            .add("start")
            .fromTo(detailToHide, {autoAlpha: 1, rotationY: 0}, {duration: 1, autoAlpha: 1, rotationY: 180})
            .to(detailToHide, {duration: 2, autoAlpha: 0}, "start")  
    }

    return (
        <div className="about" name="about">
            <div className="wrapper">
                <p className="about__title">ABOUT</p>
                <div className="about__grid">
                    <div className="about__text">
                        <p className="about__description">Begginer programmer - ambitious and persistently working towards her goals.</p>
                        <p className="about__quote">
                            "Programming allows me to express my analytical and logical thinking skills as well as showcase my creativity and designs. 
                            I am a quick learner and keen to learn new things. Therefore, I am confident that with the right environment, I will quickly
                            further develop my skills and be an asset for your team and organisation."
                        </p>
                    </div>
                    <div className="about__image"></div>
                </div>
                <div className="about__technologies">
                    <p className="about__technologies-title">TECHNOLOGIES:</p>
                    <div className="about__technologies-grid">
                        <div className="about__technologies-icon about__technologies-icon--html" 
                            onMouseEnter={(e)=> showDetails(e)}>
                            <div className="about__technologies-details" 
                                onMouseLeave={(e)=> hideDetails(e)}><span>HTML5</span>
                            </div>
                        </div>
                        <div className="about__technologies-icon about__technologies-icon--css" 
                            onMouseEnter={(e)=> showDetails(e)}>
                            <div className="about__technologies-details"
                                onMouseLeave={(e)=> hideDetails(e)}><span>CSS3</span>
                            </div>
                        </div>
                        <div className="about__technologies-icon about__technologies-icon--js" 
                            onMouseEnter={(e)=> showDetails(e)}>
                            <div className="about__technologies-details"
                                onMouseLeave={(e)=> hideDetails(e)}><span>JAVA <br/>SCRIPT</span>
                            </div>
                        </div>
                        <div className="about__technologies-icon about__technologies-icon--sass" 
                            onMouseEnter={(e)=> showDetails(e)}>
                            <div className="about__technologies-details"
                                onMouseLeave={(e)=> hideDetails(e)}><span>SASS</span>
                            </div>
                        </div>
                        <div className="about__technologies-icon about__technologies-icon--rwd" 
                            onMouseEnter={(e)=> showDetails(e)}>
                            <div className="about__technologies-details"
                                onMouseLeave={(e)=> hideDetails(e)}><span>RWD</span>
                            </div>
                        </div>
                        <div className="about__technologies-icon about__technologies-icon--react" 
                            onMouseEnter={(e)=> showDetails(e)}>
                            <div className="about__technologies-details"
                                onMouseLeave={(e)=> hideDetails(e)}><span>REACT</span>
                            </div>
                        </div>
                        <div className="about__technologies-icon about__technologies-icon--git" 
                            onMouseEnter={(e)=> showDetails(e)}>
                            <div className="about__technologies-details"
                                onMouseLeave={(e)=> hideDetails(e)}><span>GIT</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default About;