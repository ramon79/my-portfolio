import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

// Components
import Header from './components/Header'
import Footer from './components/Footer'

// Pages
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import ProjectDetail from './pages/ProjectDetail' 

//contexts

import {ThemeProvider, useTheme} from './contexts/ThemeContext'

function AppContent() { 
  const { themeStyle } = useTheme();  
  const containerStyle = {
  maxWidth: '1200px',
  width: '100%',
  margin: '0 auto',
  padding: '0 1rem',
  boxSizing: 'border-box',
  backgroundColor: '#ffffff',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  borderRadius: '8px',
  flex: 1,
  ...themeStyle
}
  return (  
  <main style={containerStyle}>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/projects' element={<Projects />} />
      <Route path='/projects/:id' element={<ProjectDetail />} />
    </Routes>
  </main>
  )
}

function App() {





  

  return (
    <ThemeProvider> 
      <BrowserRouter>
        <Header />
        <AppContent />        
        <Footer />
      </BrowserRouter>
    </ThemeProvider>   
  )
}

export default App
