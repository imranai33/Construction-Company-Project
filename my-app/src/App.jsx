import { BrowserRouter, Routes, Route, Form } from 'react-router-dom'
import './App.css'
import Navbar from './components/pages/Navbar'
import Footer from './components/pages/Footer'
import About from './components/pages/About'
import Home from './components/pages/Home'
import Service from './components/pages/Service'
import Overproject from './components/pages/Overproject'
import Contact from './components/pages/Contect'
import Adminpage from './components/Deshbord/Adminpage'
import Accountdetail from './components/Deshbord/Accoundetail'
import Accountedit from './components/Deshbord/Accountedit'




function App() {
 
  return (
    <>
    <BrowserRouter>
      <Navbar/>
          <Routes>
                <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                    <Route path="/service" element={<Service />} />
                      <Route path="/project" element={<Overproject />} />
                      <Route path="/contact" element={<Contact/>} />
                      <Route path="/adminpage" element={<Adminpage />} />
                    <Route path="/accountdetails" element={<Accountdetail />} />
                  <Route path="/accountdetails" element={<Accountdetail />} />
                <Route path="/accountedit" element={<Accountedit />} />
          </Routes>
        <Footer/>  
    </BrowserRouter>
  
    </>
  )
}

export default App
