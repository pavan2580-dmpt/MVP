import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ProjectsPage from './pages/ProjectsPage';
import TeamPage from './pages/TeamPage';
import DiscussProjectPage from './pages/DiscussProjectPage';
import LightRays from './components/LightRays';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <main className="relative w-full min-h-screen overflow-hidden bg-transparent">
        {/* Global LightRays Background */}
        <div className="fixed inset-0 z-[-1] bg-slate-950">
          <LightRays
            raysOrigin="top-center"
            raysColor="#4c00ff"
            raysSpeed={0.7}
            lightSpread={1.4}
            rayLength={3}
            followMouse
            mouseInfluence={0.4}
            pulsating
            fadeDistance={1}
            saturation={1}
          />
        </div>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/discuss" element={<DiscussProjectPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
