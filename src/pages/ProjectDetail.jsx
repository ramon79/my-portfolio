
import { Link, useParams } from 'react-router-dom';
import projectsData from '../data/projects.json';

const detailStyle = {
    padding: '2rem',
    maxWidth: '800px',
    margin: '0 auto',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
};

const titleStyle = {
    fontSize: '2rem',
    marginBottom: '1rem',
};

const descriptionStyle = {
    fontSize: '1.2rem',
    marginBottom: '1.5rem',
};

const linkStyle = {
    display: 'inline-block',
    padding: '10px 16px',
    backgroundColor: '#007bff',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '5px',
    marginRight: '15px',
};

const backLinkStyle = {
    color: '#007bff',
    textDecoration: 'none',
};

export default function ProjectDetail() {
    const { id } = useParams();

    const project = projectsData.find(
        (p) => p.id === Number(id)
    );

    if (!project) {
        return <div>프로젝트를 찾을 수 없습니다.</div>;
    }

    return (
        <div style={detailStyle}>
            <h1 style={titleStyle}>{project.name}</h1>

            <p style={descriptionStyle}>
                {project.description}
            </p>

            <a
                href={project.link}
                style={linkStyle}
                target="_blank"
                rel="noopener noreferrer"
            >
                Visit Project
            </a>

            <Link to="/projects" style={backLinkStyle}>
                Back to Projects
            </Link>
        </div>
    );
}
