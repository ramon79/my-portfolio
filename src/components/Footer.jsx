import React from 'react'

const footerStyle = {
    backgroundColor: '#f5f5f5',
    padding: '1rem',
    textAlign: 'center',
    marginTop: '2rem',
}

const linkStyle = {
    color: '#333', 
    textDecoration: 'underline',
}       

export default function Footer() {
    return (
        <footer style={footerStyle}>
            <p>2025 My Portfolio. All rights reserved.  </p>
            <p>Created with by <a href="https://reactjs.org/" style={{ color: '#333', textDecoration: 'underline' }}>React</a>.</p>
        </footer>   
    )
}   