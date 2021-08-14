import { useEffect} from "react";
import {scroller} from "react-scroll";
import gsap from "gsap";
import "./Menu.scss";

const Menu = () => {

    useEffect(() => {

        document.addEventListener("scroll", changeMenuColor);

        const menu = document.querySelector(".menu");
        const tl = gsap.timeline({defaults: {ease: "power3.inOut"}});
        gsap.set(menu, {autoAlpha:0});
        tl.fromTo(menu, {rotationX: 45, transformOrigin: "0% -50% 50%"}, {duration: 2, delay: 4, rotationX: 0, autoAlpha: 1})

        let options = {
            root: null,
            rootMargin: "-50%",
        };

        const highlightMenuItem = (entries, ob, element) => {
            const tl = gsap.timeline({defaults: {ease: "power3.inOut"}});
            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    tl  
                        .add("start")
                        .fromTo(element, {rotationX: 360}, {duration: 1, rotationX: 0})
                        .to(element, {duration: 1, fontWeight: "500"}, "start")
                } else if (!entry.isIntersecting) {
                    tl.to(element, {duration: 1, fontWeight: "300"})
                }
            })
        };

        const homeItem = document.querySelector("#home-item")
        let observerHome = new IntersectionObserver((entries, ob) => highlightMenuItem(entries, ob, homeItem), options);
        observerHome.observe(document.querySelector(".home"))

        const aboutItem = document.querySelector("#about-item")
        let observerAbout = new IntersectionObserver((entries, ob) => highlightMenuItem(entries, ob, aboutItem), options);
        observerAbout.observe(document.querySelector(".about"))

        const projectsItem = document.querySelector("#projects-item")
        let observerProjects = new IntersectionObserver((entries, ob) => highlightMenuItem(entries, ob, projectsItem), options);
        observerProjects.observe(document.querySelector(".projects"))

        const contactItem = document.querySelector("#contact-item")
        let observerContact = new IntersectionObserver((entries, ob) => highlightMenuItem(entries, ob, contactItem), options);
        observerContact.observe(document.querySelector(".contact"))

    },[]);

    const changeMenuColor = () => {
        const menu = document.querySelector(".menu");
        const tl = gsap.timeline({defaults: {ease: "power3.inOut"}});
        if (window.scrollY > 50) {
            tl.to(menu, {duration: 0.5, backgroundColor: "rgb(33, 53, 62)"});
        } else if (window.scrollY < 50) {
            tl.to(menu, {duration: 0.5, backgroundColor: "transparent"});
        }
    };

    const handleOnClickMenu = (where) => {
        scroller.scrollTo(where);
    };

    return (
        <div className="menu">
            <ul className="menu__list">
                <li id="home-item" className="menu__item" onClick={()=> handleOnClickMenu("home")}>HOME</li>
                <li id="about-item" className="menu__item" onClick={()=> handleOnClickMenu("about")}>ABOUT</li>
                <li id="projects-item" className="menu__item" onClick={()=> handleOnClickMenu("projects")}>PROJECTS</li>
                <li id="contact-item" className="menu__item" onClick={()=> handleOnClickMenu("contact")}>CONTACT</li>
            </ul>
        </div>
    )
};

export default Menu;