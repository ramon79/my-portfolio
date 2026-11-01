
import React from 'react';

const sectionStyle = {
    padding: '2rem',
    textAlign: 'center',
};  

const headingStyle = {
    fontSize: '2.5rem',
    marginBottom: '1rem',
};  

const textStyle = {
    fontSize: '1.2rem',
    color: '#555',
};


export default function Home() {
    return (
        <section style={sectionStyle}>
            <h1 style={headingStyle}>
                Welcome to My Portfolio
            </h1>
            <p style={textStyle}>Explore my projects and learn more about me!</p>
        </section>
    );
}   