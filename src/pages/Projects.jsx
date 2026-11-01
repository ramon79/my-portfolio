
import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects.json";

const sectionStyle = {
    width: "100%",
    padding: "20px",
    boxSizing: "border-box",
};

const gridStyle = {
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: "50px",
    marginTop: "20px",
    width: "100%",
};

export default function Projects() {
    return (
        <section style={sectionStyle}>
            <h1>Projects</h1>

            <div style={gridStyle}>
                {projects.map((project) => (
                    <ProjectCard
                        key={project.id}
                        project={project}
                    />
                ))}
            </div>
        </section>
    );
}
