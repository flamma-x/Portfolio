import { useRef } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import RecentWork from './components/RecentWork';
import Services from './components/Services';
import MyStory from './components/MyStory';
import Footer from './components/Footer';
import ProjectOverview from './components/ProjectOverview';
import Menu from './components/Menu';
import HireMe from './components/HireMe';
import Contact from './components/Contact';
import Resume from './components/Resume';

/* ─── Route depth — determines slide direction ────────── */
const ROUTE_DEPTH = {
  '/':              0,
  '/hire':          1,
  '/contact':       1,
  '/resume':        1,
  '/menu':          1,
  '/project/atria': 1,
};

/* ─── Slide variants ──────────────────────────────────── */
const variants = {
  initial: (dir) => ({
    x: dir >= 0 ? '100%' : '-100%',
    opacity: 0,
  }),
  animate: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.38, ease: [0.22, 1, 0.36, 1] },
  },
  exit: (dir) => ({
    x: dir >= 0 ? '-22%' : '22%',
    opacity: 0,
    transition: { duration: 0.28, ease: [0.22, 1, 0.36, 1] },
  }),
};

function HomePage() {
  return (
    <div>
      <Navbar className="mobile-only-nav" />
      <Hero />
      <MyStory />
      <RecentWork />
      <Services />
      <Footer />
    </div>
  );
}

function AppContent() {
  const location = useLocation();

  /* Track previous depth to compute slide direction */
  const prevDepthRef = useRef(ROUTE_DEPTH[location.pathname] ?? 0);
  const prevPathnameRef = useRef(location.pathname);
  const directionRef = useRef(0);

  if (location.pathname !== prevPathnameRef.current) {
    const currDepth = ROUTE_DEPTH[location.pathname] ?? 0;
    directionRef.current = currDepth >= prevDepthRef.current ? 1 : -1;
    prevDepthRef.current = currDepth;
    prevPathnameRef.current = location.pathname;
  }

  return (
    <div className="app-wrapper">
      <Navbar className="desktop-only-nav" />

      {/* Overflow wrapper so sliding pages don't bleed outside the app frame */}
      <div className="page-transition-wrap">
        <AnimatePresence mode="popLayout" custom={directionRef.current} initial={false}>
          <motion.div
            key={location.key}
            custom={directionRef.current}
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            style={{ willChange: 'transform' }}
          >
            <Routes location={location}>
              <Route path="/"              element={<HomePage />} />
              <Route path="/project/atria" element={<ProjectOverview />} />
              <Route path="/menu"          element={<Menu />} />
              <Route path="/hire"          element={<HireMe />} />
              <Route path="/contact"       element={<Contact />} />
              <Route path="/resume"        element={<Resume />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
