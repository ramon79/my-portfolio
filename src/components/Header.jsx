import React from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from '../contexts/ThemeContext'



export default function Header() {
  const { isDarkMode, toggleTheme } = useTheme();

  const headerStyle = {
  backgroundColor: isDarkMode ? '#333' : '#f5f5f5',
  padding: '1rem',
  textAlign: 'center',
}

const linkStyle = {
  color: isDarkMode ? '#fff' : '#333',
  margin: '0 1rem',
  textDecoration: 'none',
}   

const buttonStyle = {
  backgroundColor: isDarkMode ? '#555' : '#007bff',
  color: '#fff',  
  border: 'none',
  padding: '0.5rem 1rem',
  borderRadius: '4px',
  cursor: 'pointer',
}
  return (
    <header style={headerStyle} >
      <nav>
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/about" style={linkStyle}>About</Link>
        <Link to="/projects" style={linkStyle}>Projects</Link>
        <button onClick={toggleTheme} style={buttonStyle}>
          {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        </button>
      </nav>
    </header>
  )
}