import React from 'react'
import { Link } from 'react-router-dom'

const CardStyle = {
    border: '1px solid #ccc',
    borderRadius: '8px',        
    padding: '1rem',
    margin: '1rem',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.2s',
}   

const linkStyle = {
    textDecoration: 'none',
    color: '#007BFF',
    fontWeight: 'bold',
}

const titleStyle = {
    fontSize: '1.5rem',
    marginBottom: '0.5rem',
}   

const descriptionStyle = {
    fontSize: '1rem',
    color: '#555',
    marginBottom: '1rem',
}   


export default function ProjectCard(props) {
    const {project} = props;

    return (
        <div style={CardStyle}>
            <h2 style={titleStyle}>{project.name}</h2>
            <p style={descriptionStyle}> {project.description} </p>
            <Link to={`/projects/${project.id}`} style={linkStyle}>View Details</Link>
        </div>
    );
}