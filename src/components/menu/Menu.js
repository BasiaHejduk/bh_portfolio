import "./Menu.scss";
import {scroller} from "react-scroll";

const Menu = () => {

    const handleOnClickMenu = (where) => {
        scroller.scrollTo(where);
    }

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