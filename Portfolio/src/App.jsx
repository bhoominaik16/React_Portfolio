
import Navbar from "./Components/Navbar"
import {Routes, Route} from 'react-router-dom'
import Home from "./Pages/Home"
import About from "./Pages/About"
import Projects from "./Pages/Projects"
import Contact from "./Pages/Contact"
import Footer from "./Components/Footer"


function App() {

  return (
    <>
    <div className="md:min-h-[100vh]">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Pages/Home" element={<Home/>}/>
          <Route path="/Pages/About" element={<About/>}/>
          <Route path="/Pages/Projects" element={<Projects/>}/>
          <Route path="/Pages/Contact" element={<Contact/>}/>
        </Routes>
        <Footer/>
    </div>
    </>
  )
}

export default App
