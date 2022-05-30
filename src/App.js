import {Route,Routes} from 'react-router';
import Home from './pages/home';
import Contact from './pages/contact';
import Projects from './pages/project';
import MainNavigation from './components/layouts/MainNavigation';
import About from './pages/about';

function App() {
  return (
    <div className="App">
      <MainNavigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
