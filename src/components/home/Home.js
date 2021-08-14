import { useEffect } from "react";
import gsap from "gsap";
import SplitTextJS from 'split-text-js';
import "./Home.scss"

const Home = () => {

    useEffect(() => {

        const home = document.querySelector(".home");
        const headline = document.querySelector(".home__headline");
        const tagline = document.querySelector(".home__tagline");
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
        <div className="home" name="home">
            <p className="home__headline">Front-End Developer</p>
            <p className="home__tagline">Basia Hejduk</p>
        </div>
    )
};

export default Home;