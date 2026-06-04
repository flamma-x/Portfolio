import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import RecentWork from './components/RecentWork';
import Services from './components/Services';
import AllProjects from './components/AllProjects';
import Footer from './components/Footer';
import ProjectOverview from './components/ProjectOverview';
import Menu from './components/Menu';
import HireMe from './components/HireMe';
import Contact from './components/Contact';

function HomePage() {
  return (
    <div className="page-anim">
      <Navbar className="mobile-only-nav" />
      <Hero />
      <RecentWork />
      <Services />
      <AllProjects />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Navbar className="desktop-only-nav" />
        <Routes>
          <Route path="/"              element={<HomePage />} />
          <Route path="/project/atria" element={<ProjectOverview />} />
          <Route path="/menu"          element={<Menu />} />
          <Route path="/hire"          element={<HireMe />} />
          <Route path="/contact"       element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
