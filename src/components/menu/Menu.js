import "./Menu.scss";
import {scroller} from "react-scroll";
import gsap from "gsap";
import { useEffect} from "react";

const Menu = () => {

    useEffect(() => {

        const menu = document.querySelector(".menu");
        const tl = gsap.timeline({defaults: {ease: "power3.inOut"}});
        gsap.set(menu, {autoAlpha:0});
        tl.fromTo(menu, {rotationX: 45, transformOrigin: "0% -50% 50%"}, {duration: 2, delay: 4, rotationX: 0, autoAlpha: 1})

        document.addEventListener("scroll", changeMenuColor);

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
                <li className="menu__item" onClick={()=> handleOnClickMenu("home")}>HOME</li>
                <li className="menu__item" onClick={()=> handleOnClickMenu("about")}>O MNIE</li>
                <li className="menu__item" onClick={()=> handleOnClickMenu("projects")}>PROJEKTY</li>
                <li className="menu__item" onClick={()=> handleOnClickMenu("contact")}>KONTAKT</li>
            </ul>
        </div>
    )
};

export default Menu;