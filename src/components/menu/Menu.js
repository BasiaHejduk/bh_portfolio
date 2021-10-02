import { useEffect, useRef} from "react";
import {scroller} from "react-scroll";
import gsap from "gsap";
import "./Menu.scss";

const Menu = () => {
    const menuWrapper = useRef(null);
    const menuListWrapper = useRef(null);

    useEffect(() => {
        const menu = menuWrapper.current;
        const menuItems = [
            {
                element: menuListWrapper.current.children[0],
                class: ".home"
            },
            {
                element: menuListWrapper.current.children[1],
                class: ".about"
            },
            {
                element: menuListWrapper.current.children[2],
                class: ".projects"
            },
            {
                element: menuListWrapper.current.children[3],
                class: ".contact"
            }
        ];
        
        const tlMenu = gsap.timeline({defaults: {ease: "power3.inOut"}});
        gsap.set(menu, {autoAlpha:0});
        tlMenu.fromTo(menu, {rotationX: 45, transformOrigin: "0% -50% 50%"}, {duration: 2, delay: 3.5, rotationX: 0, autoAlpha: 1});

        const changeMenuColor = () => {
            const tlMenuColor = gsap.timeline({defaults: {ease: "power3.inOut"}});
            if (window.scrollY > 50) {
                tlMenuColor.to(menu, {duration: 0.5, backgroundColor: "rgb(33, 53, 62)"});
            } else if (window.scrollY < 50) {
                tlMenuColor.to(menu, {duration: 0.5, backgroundColor: "transparent"});
            }
        };

        const highlightMenuItem = (entries, element) => {
            const tlItem = gsap.timeline({defaults: {ease: "power3.inOut"}});
            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    tlItem  
                        .add("start")
                        .fromTo(element, {rotationX: 360}, {duration: 1, rotationX: 0})
                        .to(element, {duration: 1, fontWeight: "500"}, "start")
                } else if (!entry.isIntersecting) {
                    tlItem.to(element, {duration: 1, fontWeight: "300"})
                }
            })
        };

        menuItems.forEach(item => {
            let options = {
                root: null,
                rootMargin: "-50%",
            };
            let observer = new IntersectionObserver((entries) => highlightMenuItem(entries, item.element), options);
            observer.observe(document.querySelector(item.class));
        });

        document.addEventListener("scroll", changeMenuColor);
    },[]);

    const handleOnClickMenu = (where) => {
        scroller.scrollTo(where);
    };

    return (
        <div ref={menuWrapper} className="menu">
            <ul ref={menuListWrapper} className="menu__list">
                <li id="home-item" className="menu__item" onClick={()=> handleOnClickMenu("home")}>HOME</li>
                <li id="about-item" className="menu__item" onClick={()=> handleOnClickMenu("about")}>ABOUT</li>
                <li id="projects-item" className="menu__item" onClick={()=> handleOnClickMenu("projects")}>PROJECTS</li>
                <li id="contact-item" className="menu__item" onClick={()=> handleOnClickMenu("contact")}>CONTACT</li>
            </ul>
        </div>
    )
};

export default Menu;