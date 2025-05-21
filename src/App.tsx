import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import ScrollToTop from './components/ScrollToTop';
import { NavBar } from './components/ui/tubelight-navbar';
import { Home, Phone, Info } from 'lucide-react';

const navItems = [
  { name: 'Accueil', url: '/', icon: Home },
  { name: 'À Propos', url: '/about', icon: Info },
  { name: 'Contact', url: '/contact', icon: Phone }
];

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Header />
        <NavBar items={navItems} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;