import { useEffect, useState, useRef } from "react";
import { scroller } from "react-scroll";
import gsap from "gsap";
import "./MobileMenu.scss";

const MobileMenu = () => {
    const [mobileMenu, setMobileMenu] = useState(false);
    const mobileMenuWrapper = useRef(null);
    const hamburgerWrapper = useRef(null);
    const navigationWrapper = useRef(null);

    useEffect(() => {
        const mobileMenuBar = mobileMenuWrapper.current;
        const tl = gsap.timeline({defaults: {ease: "power3.inOut"}});
        gsap.set(mobileMenuBar, {autoAlpha:0});
        tl.fromTo(mobileMenuBar, {rotationX: 60, transformOrigin: "0% -50% 50%"}, {duration: 1.5, delay: 3.5, rotationX: 0, autoAlpha: 1});

        const changeMenuColor = () => {
            const tl = gsap.timeline({defaults: {ease: "power3.inOut"}});
            if (window.scrollY > 50) {
                tl.to(mobileMenuBar, {duration: 0.5, backgroundColor: "rgb(33, 53, 62)"});
            } else if (window.scrollY < 50) {
                tl.to(mobileMenuBar, {duration: 0.5, backgroundColor: "transparent"});
            }
        };

        document.addEventListener("scroll", changeMenuColor);
    },[]);

    const animateHamburger = () => {
        const hamburger = hamburgerWrapper.current.children;
        const tl = gsap.timeline({defaults: {ease: "power3.inOut"}});
        if (!mobileMenu) {
            tl
                .add("start")
                .to(hamburger[1], {duration: 1, autoAlpha: 0}, "start")
                .to(hamburger[0], {duration: 1, rotation: 34, transformOrigin:"left top"}, "start")
                .to(hamburger[2], {duration: 1, rotation: -34, transformOrigin:"left top"}, "start")
        } else if (mobileMenu) {
            tl
                .add("start")
                .fromTo(hamburger[1], {autoAlpha:0}, {duration: 1, autoAlpha: 1}, "start")
                .to(hamburger[0], {duration: 1, rotation: 0, transformOrigin:"left top"}, "start")
                .to(hamburger[2], {duration: 1, rotation: 0, transformOrigin:"left top"}, "start")
        }
    };

    const toggleNavigation = () => {
        const navigation = navigationWrapper.current;
        const tl = gsap.timeline({defaults: {ease: "power3.inOut"}});
        if (!mobileMenu) {
            gsap.set(navigation, {autoAlpha: 0});
            tl.to(navigation, {duration: 1, y:"+=50vh", autoAlpha: 1});
        } else if (mobileMenu) {
            tl.to(navigation, {duration: 0.5, y:"-=50vh", autoAlpha: 1});
        }
    };

    const handleOnClickMobileMenu = (where) => {
        scroller.scrollTo(where);
        setMobileMenu(prevState => !prevState);
        animateHamburger();
    }

    return (
        <>
            <div ref={mobileMenuWrapper} className="mobile-menu">
                <div ref={hamburgerWrapper} className="mobile-menu__hamburger"
                    onClick={()=> {setMobileMenu(prevState => !prevState); animateHamburger(); toggleNavigation()}}>
                    <div className="mobile-menu__hamburger-item"></div>
                    <div className="mobile-menu__hamburger-item"></div>
                    <div className="mobile-menu__hamburger-item"></div>
                </div>
            </div>
            <div ref={navigationWrapper} className="mobile-menu__navigation">
                <ul className="mobile-menu__list">
                    <li className="mobile-menu__item" 
                        onClick={()=> {handleOnClickMobileMenu("home"); toggleNavigation()}}>HOME
                    </li>
                    <li className="mobile-menu__item" 
                        onClick={()=> {handleOnClickMobileMenu("about"); toggleNavigation()}}>ABOUT
                    </li>
                    <li className="mobile-menu__item" 
                        onClick={()=> {handleOnClickMobileMenu("projects"); toggleNavigation()}}>PROJECTS
                    </li>
                    <li className="mobile-menu__item" 
                        onClick={()=> {handleOnClickMobileMenu("contact"); toggleNavigation()}}>CONTACT
                    </li>
                </ul>
            </div>
        </>
    )
};

export default MobileMenu;