import { useState, useEffect } from 'react';
import { Menu, MapPin, Phone, Mail, ArrowRight, Sun, Moon } from 'lucide-react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import ServiceDetail from './pages/ServiceDetail';
import './index.css';

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [isLightMode, setIsLightMode] = useState(false);

  useEffect(() => {
    if (isLightMode) {
      document.body.classList.add('light-theme');
    } else {
      document.body.classList.remove('light-theme');
    }
  }, [isLightMode]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Router>
      <div className="app">
        {/* Background large text */}
        <div className="bg-text">AUTOMOTIVE</div>

        {/* Navbar */}
        <nav className="navbar" style={{ background: scrolled ? 'var(--nav-bg)' : 'transparent', borderBottom: scrolled ? '1px solid var(--border-light)' : 'none' }}>
          <Link to="/" className="logo" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
            <img src="/dp.jpg" alt="Garage 47" style={{ width: '40px', height: '40px', borderRadius: '50%' }} />
            <span style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.2 }}>
              <span className="logo-accent" style={{ fontSize: '1.2rem', fontWeight: 800 }}>GARAGE 47</span>
              <span style={{ fontSize: '0.8rem', letterSpacing: '2px', color: '#fff' }}>CALICUT</span>
            </span>
          </Link>
          <div className="nav-links">
            <Link to="/">Home</Link>
            <a href="/#services">Services</a>
            <a href="/#portfolio">Portfolio</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="nav-actions">
            <button className="nav-icon" onClick={() => setIsLightMode(!isLightMode)} style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: 'var(--text-primary)' }}>
              {isLightMode ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            <Menu className="nav-icon menu-icon" size={24} />
          </div>
        </nav>

        {/* Page Content */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service/:id" element={<ServiceDetail />} />
        </Routes>

        {/* Footer Area */}
        <footer className="footer" id="contact">
          <div className="footer-top">
            <h2>Let's build something <span className="text-gradient">beautiful</span> together.</h2>
            <p>Expert auto detailers dedicated to excellence, innovation, and quality service for every car, everywhere.</p>
            <div className="newsletter">
              <input type="email" placeholder="Enter your email for offers" className="newsletter-input" />
              <button className="btn newsletter-btn">Subscribe <ArrowRight size={18} /></button>
            </div>
          </div>
          <div className="footer-grid">
            <div className="footer-col brand-col">
              <Link to="/" className="logo" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none', marginBottom: '20px' }}>
                <img src="/dp.jpg" alt="Garage 47" style={{ width: '40px', height: '40px', borderRadius: '50%' }} />
                <span style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.2 }}>
                  <span className="logo-accent" style={{ fontSize: '1.2rem', fontWeight: 800 }}>GARAGE 47</span>
                  <span style={{ fontSize: '0.8rem', letterSpacing: '2px', color: '#fff' }}>CALICUT</span>
                </span>
              </Link>
              <p>Redefining automotive perfection through cutting-edge detailing and correction.</p>
              <div className="social-links">
                <a href="https://www.instagram.com/garage47calicut/" target="_blank" rel="noreferrer" className="social-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </a>
                <a href="#" className="social-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                </a>
                <a href="#" className="social-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
                </a>
              </div>
            </div>
            
            <div className="footer-col">
              <h4>Contact Info</h4>
              <p className="contact-item"><MapPin size={18} className="contact-icon" /> Calicut, Kerala</p>
              <p className="contact-item"><Phone size={18} className="contact-icon" /> +91 9497354185</p>
              <p className="contact-item"><Phone size={18} className="contact-icon" /> +91 9207297029</p>
              <p className="contact-item"><Mail size={18} className="contact-icon" /> info@garage47.com</p>
            </div>
            <div className="footer-col">
              <h4>Our Services</h4>
              <Link to="/service/3">Car Wash</Link>
              <Link to="/service/1">Interior Detailing</Link>
              <Link to="/service/2">Paint Correction</Link>
              <Link to="/service/4">Ceramic Coating</Link>
            </div>
            <div className="footer-col">
              <h4>Quick Links</h4>
              <a href="#">About Us</a>
              <a href="#">Portfolio</a>
              <a href="#">Customer Reviews</a>
              <a href="#">Book Appointment</a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Garage 47 Calicut. All Rights Reserved.</p>
            <div className="footer-legal">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
