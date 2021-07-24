import "./Projects.scss";
import { contentProjects } from "./contentProjects";
import SingleProject from "./SingleProject";

const Projects = () => {
    return (
        <div className="projects" name="projects">
            <div className="wrapper">
                <p className="projects__title">PROJEKTY</p>
                <div className="projects__grid">
                    {
                        contentProjects.map((singleProject) => {
                            return <SingleProject 
                                            name={singleProject.name} 
                                            id={singleProject.id}
                                            key={singleProject.key}
                                    ></SingleProject>
                        })
                    }
                </div>
            </div>
        </div>
    )
};

export default Projects;