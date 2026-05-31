import { useState, useEffect } from 'react';
import { Menu, X, MapPin, Phone, Mail, Sun, Moon } from 'lucide-react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Home from './pages/Home';
import ServiceDetail from './pages/ServiceDetail';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import './index.css';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function AppContent() {
  const [scrolled, setScrolled] = useState(false);
  const [isLightMode, setIsLightMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPageLoading, setIsPageLoading] = useState(false);
  const location = useLocation();
  const isContactPage = location.pathname === '/contact';
  const isHomePage = location.pathname === '/';
  const isGalleryPage = location.pathname === '/gallery';
  const isServicesPage = location.pathname === '/services';
  const isServiceDetailPage = location.pathname.startsWith('/service');
  const hideNewsletter = isContactPage || isHomePage || isGalleryPage || isServicesPage || isServiceDetailPage;

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

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.2,
      touchMultiplier: 2,
      infinite: false,
      lerp: 0.1,
    });

    lenis.on('scroll', ScrollTrigger.update);

    const updateLenis = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateLenis);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(updateLenis);
      lenis.destroy();
    };
  }, []);

  // Handle page transitions and mobile menu
  useEffect(() => {
    setIsMobileMenuOpen(false);

    // Trigger loading animation on route change
    setIsPageLoading(true);
    const timer = setTimeout(() => {
      setIsPageLoading(false);
    }, 600); // Small delay for the loading animation to show

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <div className={`app ${isMobileMenuOpen ? 'menu-open' : ''}`}>
      <ScrollToTop />

      {/* Page Transition Loader */}
      {isPageLoading && (
        <div className="page-transition-loader">
          <div className="loader-content">
            <img src="/dp.jpg" alt="Loading" className="loader-logo pulse-animation" />
            <div className="loader-spinner"></div>
          </div>
        </div>
      )}

      {/* Background large text */}
      <div className="bg-text">AUTOMOTIVE</div>

      {/* Mobile Menu Overlay */}
      <div className="mobile-overlay" onClick={() => setIsMobileMenuOpen(false)}></div>

      {/* Navbar */}
      <nav className={`navbar ${scrolled || !isHomePage ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <Link to="/" className="logo" onClick={() => setIsMobileMenuOpen(false)}>
            <img src="/dp.jpg" alt="Garage 47" className="logo-img" />
            <div className="logo-text">
              <span className="logo-accent">GARAGE 47</span>
              <span className="logo-sub">CALICUT</span>
            </div>
          </Link>

          <div className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
            <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
            <Link to="/services" onClick={() => setIsMobileMenuOpen(false)}>Services</Link>
            <Link to="/gallery" onClick={() => setIsMobileMenuOpen(false)}>Gallery</Link>
            <Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
            <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
          </div>

          <div className="nav-actions">
            <button className="nav-icon theme-toggle" onClick={() => setIsLightMode(!isLightMode)} aria-label="Toggle Theme">
              {isLightMode ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            <button className="nav-icon menu-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle Menu">
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Page Content */}
      <div className="page-main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/service/:id" element={<ServiceDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </div>

      {/* Footer Area */}
      <footer className="footer" id="contact">
        {!hideNewsletter && (
          <div className="footer-top">
            <div className="newsletter-banner">
              <div className="newsletter-content">
                <span className="section-eyebrow" style={{ color: 'var(--accent-purple)' }}>VIP Access</span>
                <h2>Join the <span className="text-gradient">Elite List</span></h2>
                <p>Subscribe to receive exclusive offers, early access to new ceramic coating technologies, and premium car care tips from our master detailers.</p>
              </div>
              <div className="newsletter-form-container">
                <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                  <input type="email" placeholder="Enter your email address..." />
                  <button type="submit" className="btn">Subscribe <Mail size={18} /></button>
                </form>
                <p className="newsletter-note">* We respect your inbox. No spam, ever.</p>
              </div>
            </div>
          </div>
        )}
        <div className="footer-grid">
          <div className="footer-col brand-col">
            <Link to="/" className="logo">
              <img src="/dp.jpg" alt="Garage 47" className="logo-img" />
              <div className="logo-text">
                <span className="logo-accent">GARAGE 47</span>
                <span className="logo-sub">CALICUT</span>
              </div>
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
            <Link to="/about">About Us</Link>
            <Link to="/gallery">Gallery</Link>
            <a href="#">Customer Reviews</a>
            <Link to="/contact">Book Appointment</Link>
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
      {/* Mobile Bottom Navigation (Commented out per request) 
      <div className="mobile-bottom-nav">
        <Link to="/" className={`bottom-nav-item ${location.pathname === '/' ? 'active' : ''}`}>
          <HomeIcon size={20} />
          <span>Home</span>
        </Link>
        <Link to="/services" className={`bottom-nav-item ${location.pathname === '/services' ? 'active' : ''}`}>
          <Grid size={20} />
          <span>Services</span>
        </Link>
        <Link to="/gallery" className={`bottom-nav-item ${location.pathname === '/gallery' ? 'active' : ''}`}>
          <Image size={20} />
          <span>Gallery</span>
        </Link>
        <Link to="/about" className={`bottom-nav-item ${location.pathname === '/about' ? 'active' : ''}`}>
          <Info size={20} />
          <span>About</span>
        </Link>
        <Link to="/contact" className={`bottom-nav-item ${location.pathname === '/contact' ? 'active' : ''}`}>
          <Phone size={20} />
          <span>Contact</span>
        </Link>
      </div>
      */}

      {/* Floating Action Buttons */}
      <div className="floating-actions">
        <a href="https://wa.me/919497354185" target="_blank" rel="noreferrer" className="floating-btn whatsapp" aria-label="WhatsApp">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
        </a>
        <a href="tel:+919497354185" className="floating-btn call" aria-label="Call Now">
          <Phone size={24} />
        </a>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
