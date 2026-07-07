import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './css/App.css'
import NavBar from './components/NavBar'
import Calculator from './components/Calculator'
import { NavProvider } from './contexts/NavContext.jsx'
function App() {
  
  return (  
    <>
      <NavProvider>
        <header>
          <NavBar />
        </header>
        <main>
          <Calculator />
        </main>
      </NavProvider>
    </>
  )
}

export default App
