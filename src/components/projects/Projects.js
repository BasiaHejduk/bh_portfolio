import { contentProjects } from "./contentProjects";
import SingleProject from "./SingleProject";
import "./Projects.scss";

const Projects = () => {
    return (
        <div className="projects" name="projects">
            <div className="wrapper">
                <p className="projects__title">PROJECTS</p>
                <div className="projects__grid">
                    {
                        contentProjects.map((singleProject) => {
                            return <SingleProject 
                                            name={singleProject.name} 
                                            id={singleProject.id}
                                            key={singleProject.key}
                                            link={singleProject.link}
                                            details={singleProject.details}
                                            tech={singleProject.tech}
                                    ></SingleProject>
                        })
                    }
                </div>
            </div>
        </div>
    )
};

export default Projects;