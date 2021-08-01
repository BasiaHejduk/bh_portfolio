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