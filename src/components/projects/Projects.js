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
                                            description={singleProject.description} 
                                            id={singleProject.id}
                                            key={singleProject.key}
                                            demo={singleProject.demo}
                                            repo={singleProject.repo}
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