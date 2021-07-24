import gsap from "gsap";
import { useEffect, useState } from "react";
import "./MobileMenu.scss";
import { scroller } from "react-scroll";

const MobileMenu = () => {
    const [mobileMenu, setMobileMenu] = useState(false);

    useEffect(() => {

        document.addEventListener("scroll", changeMenuColor);

    },[]);


    const changeMenuColor = () => {
        const menu = document.querySelector(".mobile-menu");
        const tl = gsap.timeline({defaults: {ease: "power3.inOut"}});
        if (window.scrollY > 50) {
            tl.to(menu, {duration: 0.5, backgroundColor: "rgb(33, 53, 62)"});
        } else if (window.scrollY < 50) {
            tl.to(menu, {duration: 0.5, backgroundColor: "transparent"});
        }
    };

    const animateHamburger = () => {
        const hamburger = document.querySelectorAll(".mobile-menu__hamburger-item");
        const tl = gsap.timeline({defaults: {ease: "power3.inOut"}});
        if (!mobileMenu) {
            gsap.set([...hamburger], {autoAlpha:1});
            tl
                .add("start")
                .to(hamburger[1], {duration: 1, autoAlpha: 0}, "start")
                .to(hamburger[0], {duration: 1, rotation: 34, transformOrigin:"left top"}, "start")
                .to(hamburger[2], {duration: 1, rotation: -34, transformOrigin:"left top"}, "start")
        } else if (mobileMenu) {
            gsap.set([...hamburger], {autoAlpha:1});
            tl
                .add("start")
                .fromTo(hamburger[1], {autoAlpha:0}, {duration: 1, autoAlpha: 1}, "start")
                .to(hamburger[0], {duration: 1, rotation: 0, transformOrigin:"left top"}, "start")
                .to(hamburger[2], {duration: 1, rotation: 0, transformOrigin:"left top"}, "start")
        }
    };

    const showNavigation = () => {
        const navigation = document.querySelector(".mobile-menu__navigation");
        const tl = gsap.timeline({defaults: {ease: "power3.inOut"}});
        if (!mobileMenu) {
            gsap.set(navigation, {autoAlpha: 0});
            tl.to(navigation, {duration: 1, y:"+=50vh", autoAlpha: 1});
            // tl.fromTo(navigation, {y:"-=50vh"}, {duration:1, y: "+=50vh", autoAlpha: 1})
        } else if (mobileMenu) {
            tl.to(navigation, {duration: 0.5, y:"-=50vh", autoAlpha: 1});
            // tl.fromTo(navigation, {autoAlpha: 1}, {duration: 1, y: "-=600", autoAlpha: 0})
            // tl.to(navigation, {duration: 0.25, y: "+=600"})
        }
    };

    const handleOnClickMobileMenu = (where) => {
        scroller.scrollTo(where);
        setMobileMenu(prevState => !prevState);
        animateHamburger();
    }

    return (
        <>
        <div className="mobile-menu">
             <div className="mobile-menu__hamburger"
                    onClick={()=> {setMobileMenu(prevState => !prevState); animateHamburger(); showNavigation()}}>
                <div className="mobile-menu__hamburger-item"></div>
                <div className="mobile-menu__hamburger-item"></div>
                <div className="mobile-menu__hamburger-item"></div>
            </div>
        </div>

        <div className="mobile-menu__navigation">
            <ul className="mobile-menu__list">
                <li className="mobile-menu__item" onClick={()=> {handleOnClickMobileMenu("home"); showNavigation()}}>HOME</li>
                <li className="mobile-menu__item" onClick={()=> {handleOnClickMobileMenu("about"); showNavigation()}}>O MNIE</li>
                <li className="mobile-menu__item" onClick={()=> {handleOnClickMobileMenu("projects"); showNavigation()}}>PROJEKTY</li>
                <li className="mobile-menu__item" onClick={()=> {handleOnClickMobileMenu("contact"); showNavigation()}}>KONTAKT</li>
            </ul>
        </div>
        </>
    )
};

export default MobileMenu;