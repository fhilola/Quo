
import './App.css'
import Hero from './components/hero/Hero'
import Navbar from './components/navbar/Navbar'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
     <Navbar/>
     <Hero/>
    </BrowserRouter>
  )
}

export default App
