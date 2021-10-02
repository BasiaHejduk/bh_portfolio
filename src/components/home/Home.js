import { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitTextJS from 'split-text-js';
import "./Home.scss"

const Home = () => {
    const homeWrapper = useRef(null);

    useEffect(() => {
        const home = homeWrapper.current;
        const headline = homeWrapper.current.children[0];
        const tagline = homeWrapper.current.children[1];
        const splitHeadline = new SplitTextJS(headline);
        let i;

        const tl = gsap.timeline({defaults: {ease: "power3.inOut"}});
        gsap.set([...splitHeadline.chars, tagline], {autoAlpha:0});
        tl.fromTo(home, {scale: 0.9, y: "-=50", autoAlpha: 0}, {duration: 2, scale: 1, y: "+=50", autoAlpha: 1})
        for (i = 0; i <splitHeadline.chars.length; i++) {
            tl.to(splitHeadline.chars[i], {duration:0.05, autoAlpha: 1})
        }
        tl.fromTo(tagline, {y: "+=50"}, {duration:2, y: "-=50", autoAlpha: 1})
        
    }, []);

    return (
        <div ref={homeWrapper} className="home" name="home">
            <p className="home__headline">Front-End Developer</p>
            <p className="home__tagline">Basia Hejduk</p>
        </div>
    )
};

export default Home;