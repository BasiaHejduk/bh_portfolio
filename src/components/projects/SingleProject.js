import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import "./Projects.scss";

const SingleProject = ({name, description, id, demo, repo, tech}) => {
    const projectWrapper = useRef(null);
    const technologiesWrapper = useRef(null);
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        const project = projectWrapper.current;
        gsap.fromTo(project, {
            autoAlpha: 0,
            y: "+=30"
            },
            {
            scrollTrigger: {
                trigger: project,
                start: "top bottom",
                toggleActions: "restart none restart none"
            },
            y: "-=30",
            autoAlpha: 1,
            duration: 1,
        });
    }, [])

    const changeColor = () => {
        const technologies = technologiesWrapper.current.children;
        gsap.to(technologies, {
            color: "white",
            duration: 1,
            stagger: 0.1
        })
    }
    const returnColor = () => {
        const technologies = technologiesWrapper.current.children;
        gsap.to(technologies, {
            color: "rgb(147, 149, 153)", 
            duration: 1,
            stagger: 0.1
        })
    }

    return (        
        <div ref={projectWrapper} className={`projects__single projects__single--${id}`}
            onMouseEnter={changeColor} onMouseLeave={returnColor}>
            <div className="projects__cover">
                <div className="projects__info">
                    <p className="projects__name">{name}</p>
                    <p className="projects__description">{description}</p>
                    <div className="projects__links-wrapper">
                        <a className="projects__link" href={demo} target="_blank" rel="noreferrer">DEMO
                            <div className="projects__link-icon projects__link-icon--demo"></div>
                        </a>
                        <a className="projects__link" href={repo} target="_blank" rel="noreferrer">REPO
                            <div className="projects__link-icon projects__link-icon--repo"></div>
                        </a>
                    </div>
                </div>
                <ul ref={technologiesWrapper} className="projects__technologies">
                    {
                        tech.map((singleTech, i) => {
                            return <li key={i} className="projects__single-tech">{`<${singleTech}>`}</li>
                        })
                    }
                </ul>
            </div>
        </div>
    )
};

export default SingleProject;