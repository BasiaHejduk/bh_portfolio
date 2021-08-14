import { useEffect, useState } from "react";
import "./Projects.scss";
import { contentProjects } from "./contentProjects";
import gsap from "gsap";

const SingleProject = ({name, id, link, details}) => {
    const [infoVisibility, setInfoVisibility] = useState(false);

    useEffect(() => {

        let options = {
            root: null,
            rootMargin: "-60px"
        };

        const showProject = (entries, ob) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    slideFromBottom(entry.target);
                    ob.unobserve(entry.target);
                }
            })
        };

        let observerProject = new IntersectionObserver((entries, ob) => showProject(entries, ob), options);
        contentProjects.map((singleProject) => {
            return observerProject.observe(document.querySelector(`.projects__single--${singleProject.id}`))
        });

        const slideFromBottom = (elementToAnimate) => {
            gsap.set(elementToAnimate, {autoAlpha: 0});
            const tl = gsap.timeline({defaults: {ease: "power3.inOut"}});
            tl.fromTo(elementToAnimate, {y: "+=20"}, {duration: 1, y: "-=20", autoAlpha: 1})
        }

    }, [])

    return (
        <div className={`projects__single projects__single--${id}`}
            onMouseMove={()=>setInfoVisibility(true)} onMouseLeave={()=>setInfoVisibility(false)}>
            <div className="projects__cover"
                style={{visibility: infoVisibility ? "visible" : "hidden"}}>
                <div className="projects__info">
                    <p className="projects__name">{name}</p>
                    <p className="projects__details">{details}</p>
                    <a className="projects__link" href={link} target="_blank" rel="noreferrer">MORE</a>
                </div>
            </div>
        </div>
    )
};

export default SingleProject;