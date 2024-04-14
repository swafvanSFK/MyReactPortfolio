import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import About from './pages/About';
import Resume from './pages/Resume';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Header from './components/Navbar';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/resume' element={<Resume/>} />
            <Route path='/services' element={<Services/>} />
            <Route path='/contact' element={<Contact/>} />
          </Routes>
        <About/>
        <Resume/>
        <Services/>
        <Contact/>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
