import {Routes, Route} from 'react-router-dom'
import About from './pages/About'
import Contact from './pages/Contact'
import Projects from './pages/Projects'
import Resume from './pages/resume/Resume'
import NavBar from './partials/NavBar'
import Footer from './partials/Footer'

function App() {
  return (
    <>
    <div>
      <NavBar />
      <div className='route-container'>
      <Routes>
        <Route path='/' element={<About />}/>
        <Route path='/projects' element={<Projects />}/>
        <Route path='/resume' element={<Resume />}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      </div>
    </div>
    <Footer />
    </>
  );
}

export default App;
