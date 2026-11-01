import React from 'react'
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

export default function About() {
  return (
    <section style={sectionStyle}>
      <h1 style={headingStyle}>About Me</h1>
      <p style={textStyle}  >
        Hello! I'm a passionate web developer with experience in building dynamic and responsive web applications. I enjoy learning new technologies and improving my skills.
      </p>
    </section>
  )
}