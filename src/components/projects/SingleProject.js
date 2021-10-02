import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import "./Projects.scss";

const SingleProject = ({name, id, link, tech}) => {
    const [infoVisibility, setInfoVisibility] = useState(false);
    const projectWrapper = useRef(null);
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        const project = projectWrapper.current;
        gsap.fromTo(project, {
            autoAlpha: 0,
            x: "+=20"
            },
            {
            scrollTrigger: {
                trigger: project,
                start: "top bottom",
                toggleActions: "restart none restart none"
            },
            x: "-=20",
            autoAlpha: 1,
            duration: 1,
        });
    }, [])

    return (
        <div ref={projectWrapper} className={`projects__single projects__single--${id}`}
            onMouseMove={()=>setInfoVisibility(true)} onMouseLeave={()=>setInfoVisibility(false)}>
            <div className="projects__cover"
                style={{visibility: infoVisibility ? "visible" : "hidden"}}>
                <div className="projects__info">
                    <p className="projects__name">{name}</p>
                    <a className="projects__link" href={link} target="_blank" rel="noreferrer">MORE</a>
                </div>
                <p className="projects__technologies">{tech}</p>
            </div>
        </div>
    )
};

export default SingleProject;