import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, X, Shield, Zap, Sparkles, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';
import BeforeAfterSlider from '../components/BeforeAfterSlider';

const categories = ['All', 'Ceramic Coating', 'Paint Correction', 'Interior', 'PPF'];

const galleryItems = [
  {
    id: 1,
    img: '/images/gallery/lambo.png',
    title: 'Lamborghini Huracán',
    category: 'Ceramic Coating',
    desc: 'Full body Graphene Ceramic Coating with 9H hardness.',
    size: 'large'
  },
  {
    id: 2,
    img: '/images/gallery/porsche.png',
    title: 'Porsche 911 GT3 RS',
    category: 'Paint Correction',
    desc: '3-stage paint correction bringing back the showroom mirror finish.',
    size: 'medium'
  },
  {
    id: 3,
    img: '/images/gallery/mercedes.png',
    title: 'Mercedes-AMG GT',
    category: 'PPF',
    desc: 'Matte Paint Protection Film applied to entire exterior.',
    size: 'small'
  },
  {
    id: 4,
    img: '/images/gallery/audi.png',
    title: 'Audi RS6 Avant',
    category: 'Ceramic Coating',
    desc: 'Wheel-off detailing and caliper ceramic coating.',
    size: 'small'
  },
  {
    id: 5,
    img: '/images/gallery/ferrari.png',
    title: 'Ferrari F8 Tributo',
    category: 'Paint Correction',
    desc: 'Intense swirl mark removal and dual-layer coating.',
    size: 'medium'
  },
  {
    id: 6,
    img: '/images/gallery/defender.png',
    title: 'Land Rover Defender',
    category: 'Interior',
    desc: 'Deep leather conditioning and interior fabric protection.',
    size: 'large'
  },
  {
    id: 7,
    img: '/images/gallery/aston.png',
    title: 'Aston Martin Vantage',
    category: 'Ceramic Coating',
    desc: 'Signature exterior detailing package and hydrophobic coating.',
    size: 'medium'
  },
  {
    id: 8,
    img: '/images/gallery/bmw.png',
    title: 'BMW M4 Competition',
    category: 'PPF',
    desc: 'Front-end clear bra and self-healing protective film.',
    size: 'small'
  },
  {
    id: 9,
    img: '/images/gallery/tesla.png',
    title: 'Tesla Model S Plaid',
    category: 'Interior',
    desc: 'Vegan leather deep clean and anti-static interior treatment.',
    size: 'small'
  }
];

const stats = [
  { icon: <Shield size={24} />, label: 'Hardness', value: '9H+', color: '#3b82f6' },
  { icon: <Zap size={24} />, label: 'Gloss Level', value: '98%', color: '#8b5cf6' },
  { icon: <Activity size={24} />, label: 'Durability', value: '5 Years', color: '#10b981' },
  { icon: <Sparkles size={24} />, label: 'Hydrophobic', value: '110°', color: '#f59e0b' }
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
} as const;

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
} as const;

const heroSlides = [
  '/images/gallery/lambo.png',
  '/images/gallery/porsche.png',
  '/images/gallery/ferrari.png',
  '/images/gallery/mercedes.png',
  '/images/gallery/aston.png'
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const filteredItems = activeCategory === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  const handleImageClick = (id: number) => {
    setSelectedImage(id);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const activeItem = galleryItems.find(item => item.id === selectedImage);

  return (
    <div className="page-wrapper gallery-page">
      {/* Futuristic Hero Section */}
      <section className="page-hero futuristic-hero">
        <div className="hero-grid-overlay"></div>
        {heroSlides.map((slide, idx) => (
          <img 
            key={idx}
            src={slide} 
            alt={`Gallery Hero ${idx}`} 
            className="page-hero-bg" 
            style={{
              opacity: idx === currentSlide ? 0.35 : 0,
              transition: 'opacity 1.2s ease-in-out',
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              zIndex: 0,
              willChange: 'opacity'
            }}
          />
        ))}
        <div className="page-hero-overlay" style={{ background: 'linear-gradient(to bottom, transparent, var(--bg-color))' }}></div>
        
        <div className="page-hero-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" as const }}
          >
            <span className="section-eyebrow modern-eyebrow">Visual Archive</span>
            <h1 className="page-title main-title">
              Precision <br />
              <span className="text-gradient">Masterpieces</span>
            </h1>
            <p className="page-subtitle max-w-2xl">
              Witness the intersection of automotive engineering and aesthetic perfection. 
              Our gallery showcases the absolute limit of detailing excellence.
            </p>
          </motion.div>
          
          <motion.div 
            className="hero-scroll-indicator"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <div className="mouse">
              <div className="wheel"></div>
            </div>
            <span className="scroll-text">EXPLORE ARCHIVE</span>
          </motion.div>
        </div>
      </section>

      {/* Filter Section with Glow */}
      <section className="gallery-main-section">
        <div className="section-header center-header">
          <div className="section-title-wrapper centered">
            <span className="section-eyebrow">Project Categories</span>
            <h2 className="section-title small">Filter by <span className="text-gradient">Specialty</span></h2>
          </div>
        </div>

        <motion.div 
          className="gallery-filters-modern"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`modern-filter-btn ${activeCategory === category ? 'active' : ''}`}
            >
              <span className="btn-label">{category}</span>
              {activeCategory === category && (
                <motion.span 
                  layoutId="activeFilter"
                  className="active-bg"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </button>
          ))}
        </motion.div>

        {/* Bento Gallery Grid */}
        <motion.div 
          layout
          className="bento-gallery-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <AnimatePresence mode='popLayout'>
            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                key={item.id}
                className={`bento-gallery-item ${item.size}`}
                onClick={() => handleImageClick(item.id)}
              >
                <div className="item-inner">
                  <div className="img-shimmer"></div>
                  <img src={item.img} alt={item.title} className="gallery-img" loading="lazy" />
                  <div className="item-overlay">
                    <div className="item-content">
                      <motion.span 
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="item-category"
                      >
                        {item.category}
                      </motion.span>
                      <h3 className="item-title">{item.title}</h3>
                      <div className="item-action">
                        <span className="view-text">View Precision Details</span>
                        <div className="icon-circle">
                          <ArrowRight size={18} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item-corner-accent"></div>
                  <div className="item-glow"></div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* NEW FUTURISTIC SECTION: Precision Diagnostic HUD */}
      <section className="precision-hud-section">
        <div className="hud-container">
          <div className="hud-visual">
            <div className="car-wireframe">
              <img 
                src="https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&q=80" 
                alt="Precision Detailing" 
                className="hud-main-img"
              />
              <div className="hud-scanning-line"></div>
              
              {/* Floating HUD Points */}
              <div className="hud-point p1">
                <div className="point-pulse"></div>
                <div className="point-label">
                  <span className="label-title">Paint Correction</span>
                  <span className="label-val">99.2% Level</span>
                </div>
              </div>
              <div className="hud-point p2">
                <div className="point-pulse"></div>
                <div className="point-label">
                  <span className="label-title">Coating Thickness</span>
                  <span className="label-val">2.5 Microns</span>
                </div>
              </div>
              <div className="hud-point p3">
                <div className="point-pulse"></div>
                <div className="point-label">
                  <span className="label-title">Surface Tension</span>
                  <span className="label-val">Ultra Low</span>
                </div>
              </div>
            </div>
          </div>

          <div className="hud-info">
            <span className="section-eyebrow">Next-Gen Protection</span>
            <h2 className="section-title small">Precision <br/><span className="text-gradient">Diagnostics</span></h2>
            <p className="hud-desc">
              We don't just detail; we engineer perfection. Every vehicle undergoes a 
              multi-point digital inspection to ensure the protection layer is 
              atomically bonded for maximum longevity.
            </p>
            
            <div className="hud-stats-grid">
              {stats.map((stat, i) => (
                <motion.div 
                  key={i}
                  className="hud-stat-card"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="stat-icon" style={{ color: stat.color }}>
                    {stat.icon}
                  </div>
                  <div className="stat-data">
                    <span className="stat-val">{stat.value}</span>
                    <span className="stat-lbl">{stat.label}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Before & After Interactive Section */}
      <section className="before-after-gallery-section">
        <div className="section-header">
          <div className="section-title-wrapper">
            <span className="section-eyebrow">The Transformation</span>
            <h2 className="section-title">Before & <span className="text-gradient">After</span></h2>
          </div>
          <p className="header-desc max-w-md">
            Slide to reveal the dramatic difference professional detailing and paint correction makes.
          </p>
        </div>

        <div className="before-after-showcase">
          <BeforeAfterSlider 
            beforeImage="/images/bmw-before.png" 
            afterImage="/images/bmw-after.png"
          />
          <div className="slider-instruction">
            <ArrowRight size={24} className="bounce-x" />
            <span>Drag the slider to compare</span>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="gallery-cta">
        <div className="cta-content-modern">
          <div className="cta-bg-glow"></div>
          <h2 className="cta-title">Begin Your <br/><span className="text-gradient">Transformation</span></h2>
          <p>Your vehicle is a canvas. Let us create a masterpiece that lasts a lifetime.</p>
          <div className="cta-actions">
            <Link to="/contact" className="btn btn-premium">
              Book Appointment <Zap size={18} fill="currentColor" />
            </Link>
            <Link to="/services" className="btn btn-glass">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && activeItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lightbox-overlay"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="lightbox-card"
              onClick={(e) => e.stopPropagation()}
            >
              <button className="lightbox-close-modern" onClick={closeLightbox}>
                <X size={20} />
              </button>
              <div className="lightbox-media">
                <img src={activeItem.img} alt={activeItem.title} />
              </div>
              <div className="lightbox-info">
                <div className="info-header">
                  <span className="item-cat-badge">{activeItem.category}</span>
                  <h2 className="info-title">{activeItem.title}</h2>
                </div>
                <p className="info-desc">{activeItem.desc}</p>
                <div className="info-footer">
                  <Link to="/contact" className="btn btn-small">Inquire About This Service</Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .gallery-page {
          background-color: var(--bg-color);
        }

        .futuristic-hero {
          height: 80vh;
          min-height: 600px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          overflow: hidden;
        }

        .hero-grid-overlay {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px);
          background-size: 40px 40px;
          opacity: 0.3;
          z-index: 1;
        }

        .modern-eyebrow {
          background: rgba(59, 130, 246, 0.1);
          padding: 8px 20px;
          border-radius: 100px;
          border: 1px solid rgba(59, 130, 246, 0.2);
          display: inline-block;
          margin-bottom: 24px;
        }

        .hero-scroll-indicator {
          position: absolute;
          bottom: 40px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          z-index: 10;
        }

        .mouse {
          width: 26px;
          height: 44px;
          border: 2px solid var(--border-medium);
          border-radius: 20px;
          position: relative;
        }

        .wheel {
          width: 4px;
          height: 8px;
          background: var(--accent-blue);
          border-radius: 2px;
          position: absolute;
          top: 8px;
          left: 50%;
          transform: translateX(-50%);
          animation: mouseScroll 2s infinite;
        }

        @keyframes mouseScroll {
          0% { opacity: 1; transform: translateX(-50%) translateY(0); }
          100% { opacity: 0; transform: translateX(-50%) translateY(15px); }
        }

        .scroll-text {
          font-size: 0.7rem;
          letter-spacing: 3px;
          font-weight: 600;
          color: var(--text-secondary);
        }

        .center-header {
          justify-content: center;
          text-align: center;
          margin-bottom: 40px;
        }

        .gallery-filters-modern {
          display: flex;
          justify-content: center;
          gap: 12px;
          margin-bottom: 60px;
          padding: 0 5%;
          flex-wrap: wrap;
        }

        .modern-filter-btn {
          position: relative;
          padding: 10px 24px;
          background: transparent;
          border: none;
          color: var(--text-secondary);
          font-weight: 700;
          font-size: 0.85rem;
          cursor: pointer;
          transition: all 0.3s ease;
          text-transform: uppercase;
          letter-spacing: 2px;
          white-space: nowrap;
        }

        .modern-filter-btn.active {
          color: var(--text-inverse);
        }

        .active-bg {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, var(--accent-blue), #2563eb);
          border-radius: 100px;
          z-index: -1;
          box-shadow: 0 10px 20px -5px var(--accent-glow);
        }

        .bento-gallery-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          grid-auto-rows: 250px;
          gap: 24px;
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 5%;
        }

        .bento-gallery-item {
          border-radius: 24px;
          overflow: hidden;
          cursor: pointer;
        }

        .bento-gallery-item.large {
          grid-column: span 2;
          grid-row: span 2;
        }

        .bento-gallery-item.medium {
          grid-column: span 2;
          grid-row: span 1;
        }

        .bento-gallery-item.small {
          grid-column: span 1;
          grid-row: span 1;
        }

        .item-inner {
          position: relative;
          width: 100%;
          height: 100%;
          background: var(--bg-card);
          overflow: hidden;
        }

        .gallery-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.7s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .bento-gallery-item:hover .gallery-img {
          transform: scale(1.1);
        }

        .item-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 60%);
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 30px;
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .bento-gallery-item:hover .item-overlay {
          opacity: 1;
        }

        .item-category {
          color: var(--accent-blue);
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: 8px;
          display: block;
        }

        .item-title {
          font-size: 1.25rem;
          font-weight: 800;
          color: #fff;
          margin-bottom: 12px;
        }

        .item-action {
          display: flex;
          align-items: center;
          gap: 12px;
          transform: translateY(10px);
          transition: transform 0.4s ease;
        }

        .bento-gallery-item:hover .item-action {
          transform: translateY(0);
        }

        .view-text {
          font-size: 0.85rem;
          font-weight: 600;
          color: rgba(255,255,255,0.7);
        }

        .icon-circle {
          width: 36px;
          height: 36px;
          background: var(--accent-blue);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          box-shadow: 0 5px 15px var(--accent-glow);
        }

        .item-corner-accent {
          position: absolute;
          top: 20px;
          right: 20px;
          width: 40px;
          height: 40px;
          border-top: 2px solid rgba(255,255,255,0.2);
          border-right: 2px solid rgba(255,255,255,0.2);
          transition: all 0.4s ease;
        }

        .bento-gallery-item:hover .item-corner-accent {
          border-color: var(--accent-blue);
          transform: translate(5px, -5px);
        }

        .item-glow {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 50% 120%, var(--accent-blue) 0%, transparent 70%);
          opacity: 0;
          transition: opacity 0.4s ease;
          pointer-events: none;
        }

        .bento-gallery-item:hover .item-glow {
          opacity: 0.2;
        }

        .img-shimmer {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(255, 255, 255, 0.05) 50%,
            transparent 100%
          );
          background-size: 200% 100%;
          animation: shimmer 3s infinite;
          z-index: 1;
          pointer-events: none;
        }

        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }

        /* HUD Section Styles */
        .precision-hud-section {
          padding: 120px 5%;
          background: radial-gradient(circle at 70% 30%, rgba(59, 130, 246, 0.05) 0%, transparent 50%);
        }

        .hud-container {
          max-width: 1300px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 80px;
          align-items: center;
        }

        .hud-visual {
          position: relative;
        }

        .car-wireframe {
          position: relative;
          border-radius: 30px;
          overflow: hidden;
          box-shadow: 0 40px 80px rgba(0,0,0,0.5);
          border: 1px solid var(--border-light);
        }

        .hud-main-img {
          width: 100%;
          height: auto;
          display: block;
          filter: grayscale(0.2) contrast(1.1);
        }

        .hud-scanning-line {
          position: absolute;
          top: -100%;
          left: 0;
          width: 100%;
          height: 10%;
          background: linear-gradient(to bottom, transparent, var(--accent-blue), transparent);
          box-shadow: 0 0 20px var(--accent-blue);
          z-index: 5;
          opacity: 0.5;
          animation: scan 4s infinite linear;
        }

        @keyframes scan {
          0% { top: -10%; }
          100% { top: 110%; }
        }

        .hud-point {
          position: absolute;
          display: flex;
          align-items: center;
          gap: 15px;
          z-index: 6;
        }

        .p1 { top: 20%; left: 30%; }
        .p2 { top: 50%; right: 20%; }
        .p3 { bottom: 25%; left: 45%; }

        .point-pulse {
          width: 12px;
          height: 12px;
          background: var(--accent-blue);
          border-radius: 50%;
          box-shadow: 0 0 15px var(--accent-blue);
          position: relative;
        }

        .point-pulse::after {
          content: '';
          position: absolute;
          inset: -10px;
          border: 1px solid var(--accent-blue);
          border-radius: 50%;
          animation: pulse-out 2s infinite;
        }

        @keyframes pulse-out {
          0% { transform: scale(0.5); opacity: 1; }
          100% { transform: scale(2); opacity: 0; }
        }

        .point-label {
          background: var(--bg-secondary);
          backdrop-filter: blur(10px);
          padding: 10px 15px;
          border-radius: 12px;
          border: 1px solid var(--border-medium);
          display: flex;
          flex-direction: column;
          min-width: 150px;
          box-shadow: var(--card-shadow);
        }

        .label-title {
          font-size: 0.7rem;
          color: var(--text-secondary);
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .label-val {
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .hud-stats-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin-top: 40px;
        }

        .hud-stat-card {
          background: var(--bg-card);
          border: 1px solid var(--border-light);
          padding: 24px;
          border-radius: 20px;
          display: flex;
          align-items: center;
          gap: 15px;
          transition: all 0.3s ease;
        }

        .hud-stat-card:hover {
          border-color: var(--border-medium);
          transform: translateY(-5px);
          background: rgba(255,255,255,0.05);
        }

        .stat-icon {
          width: 50px;
          height: 50px;
          background: rgba(255,255,255,0.03);
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .stat-val {
          display: block;
          font-size: 1.2rem;
          font-weight: 800;
          line-height: 1;
          margin-bottom: 4px;
        }

        .stat-lbl {
          font-size: 0.8rem;
          color: var(--text-secondary);
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        /* Before After Styles */
        .before-after-gallery-section {
          background: var(--bg-secondary);
        }

        .before-after-showcase {
          max-width: 1100px;
          margin: 60px auto 0;
          border-radius: 30px;
          overflow: hidden;
          box-shadow: 0 30px 60px rgba(0,0,0,0.4);
          position: relative;
        }

        .slider-instruction {
          position: absolute;
          bottom: 30px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          align-items: center;
          gap: 10px;
          background: rgba(0,0,0,0.6);
          backdrop-filter: blur(10px);
          padding: 10px 20px;
          border-radius: 100px;
          color: #fff;
          font-weight: 600;
          font-size: 0.9rem;
          z-index: 10;
          pointer-events: none;
        }

        .bounce-x {
          animation: bounceX 2s infinite;
        }

        @keyframes bounceX {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(5px); }
        }

        /* CTA Styles */
        .gallery-cta {
          padding: 120px 5%;
        }

        .cta-content-modern {
          background: linear-gradient(135deg, #0a0a0e, #14141d);
          border-radius: 40px;
          padding: 100px 60px;
          text-align: center;
          position: relative;
          overflow: hidden;
          border: 1px solid var(--border-light);
        }

        .cta-bg-glow {
          position: absolute;
          width: 500px;
          height: 500px;
          background: var(--accent-blue);
          filter: blur(150px);
          opacity: 0.1;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 0;
        }

        .cta-title {
          font-size: clamp(2rem, 6vw, 3rem);
          font-weight: 900;
          margin-bottom: 24px;
          position: relative;
          z-index: 1;
        }

        .cta-content-modern p {
          font-size: 1.25rem;
          color: var(--text-secondary);
          margin-bottom: 48px;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
          position: relative;
          z-index: 1;
        }

        .cta-actions {
          display: flex;
          justify-content: center;
          gap: 20px;
          position: relative;
          z-index: 1;
        }

        /* Lightbox Styles */
        .lightbox-overlay {
          position: fixed;
          inset: 0;
          background: rgba(5, 5, 7, 0.98);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 40px;
          backdrop-filter: blur(15px);
        }

        .lightbox-close-modern {
          position: absolute;
          top: 20px;
          right: 20px;
          width: 40px;
          height: 40px;
          background: rgba(0, 0, 0, 0.5);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 50%;
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          z-index: 1010;
        }

        .lightbox-close-modern:hover {
          background: var(--accent-blue);
          transform: rotate(90deg);
        }

        .lightbox-card {
          width: 100%;
          max-width: 1200px;
          height: auto;
          max-height: 85vh;
          background: var(--bg-card);
          border-radius: 40px;
          overflow: hidden;
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          border: 1px solid var(--border-medium);
          position: relative;
          box-shadow: 0 50px 100px rgba(0,0,0,0.6);
        }

        .lightbox-media {
          background: #000;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .lightbox-media img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .lightbox-info {
          padding: 60px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          background: var(--bg-card);
          gap: 32px;
        }

        .item-cat-badge {
          color: var(--accent-blue);
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 2px;
          font-size: 0.8rem;
          margin-bottom: 12px;
          display: block;
        }

        .info-title {
          font-size: clamp(1.8rem, 5vw, 2.4rem);
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 20px;
          color: var(--text-primary);
        }

        .info-desc {
          color: var(--text-secondary);
          font-size: 1.1rem;
          line-height: 1.7;
        }

        @media (max-width: 1100px) {
          .lightbox-card {
            grid-template-columns: 1fr;
            max-height: 95vh;
            overflow-y: auto;
          }
          .lightbox-info {
            padding: 40px;
          }
        }

        @media (max-width: 1200px) {
          .bento-gallery-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
          }
        }

        @media (max-width: 900px) {
          .gallery-container-modern {
            padding: 100px 4% 60px;
          }
          .bento-gallery-grid {
            grid-template-columns: repeat(2, 1fr);
            grid-auto-rows: 250px;
            gap: 16px;
          }
          /* Reset spans for 2-column layout to prevent gaps */
          .col-2, .row-2, .bento-gallery-item.large, .bento-gallery-item.medium {
            grid-column: span 1;
            grid-row: span 1;
          }
          .hud-container {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .precision-img-container {
            height: 350px;
          }
        }

        @media (max-width: 600px) {
          .gallery-filters-modern {
            justify-content: flex-start;
            overflow-x: auto;
            padding: 0 5% 15px;
            margin: 0 -5% 30px;
            scrollbar-width: none;
            -ms-overflow-style: none;
            mask-image: linear-gradient(to right, black 85%, transparent 100%);
            -webkit-overflow-scrolling: touch;
          }
          .gallery-filters-modern::-webkit-scrollbar {
            display: none;
          }
          .filter-btn {
            padding: 8px 18px;
            font-size: 0.85rem;
          }
          .bento-gallery-grid {
            grid-template-columns: repeat(2, 1fr);
            grid-auto-rows: 160px;
            gap: 12px;
            padding: 0 4%;
          }
          .bento-gallery-item.large {
            grid-column: span 2;
            grid-row: span 1;
            height: 160px;
          }
          .col-2, .row-2, .bento-gallery-item.medium, .bento-gallery-item.small {
            grid-column: span 1;
            grid-row: span 1;
            height: 160px;
          }
          /* Default show content on mobile - No hover needed */
          .item-overlay {
            opacity: 1 !important;
            background: linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 60%, transparent 100%) !important;
            padding: 12px !important;
          }
          .item-title {
            font-size: 0.95rem !important;
            font-weight: 700 !important;
            margin-bottom: 4px !important;
            line-height: 1.2 !important;
          }
          .item-category {
            opacity: 1 !important;
            transform: none !important;
            font-size: 0.55rem !important;
            letter-spacing: 1px !important;
            margin-bottom: 2px !important;
          }
          .item-action, .icon-circle, .item-corner-accent {
            display: none !important;
          }
          .precision-hud-section {
            padding: 60px 5% 100px;
          }
          .hud-container {
            grid-template-columns: 1fr;
            gap: 30px;
          }
          .hud-visual {
            order: -1;
            height: 350px;
            margin-bottom: 20px;
            overflow: visible; /* Allow HUD points to float slightly outside if needed */
          }
          .hud-main-img {
            height: 100%;
            width: 100%;
            object-fit: contain; /* Ensure the full car is visible */
            background: rgba(255,255,255,0.02);
            border-radius: 20px;
          }
          .hud-point {
            display: flex;
            transform: scale(0.6);
          }
          .p1 { top: 15%; left: 10%; }
          .p2 { top: 35%; right: 5%; }
          .p3 { bottom: 15%; left: 25%; }
          
          .hud-stats-grid {
            grid-template-columns: 1fr 1fr;
            gap: 15px;
            margin-top: 30px;
          }
          .hud-stat-card {
            padding: 20px 15px;
            flex-direction: column;
            text-align: center;
            gap: 8px;
            background: rgba(255,255,255,0.03);
          }
          .stat-icon {
            width: 35px;
            height: 35px;
            margin-bottom: 5px;
          }
          .stat-val {
            font-size: 1.1rem;
          }
          .stat-lbl {
            font-size: 0.6rem;
            letter-spacing: 0.5px;
          }
          .lightbox-card {
            border-radius: 20px;
            width: 100%;
          }
          .lightbox-info {
            padding: 25px;
            gap: 20px;
          }
          .info-title {
            font-size: 1.4rem;
            margin-bottom: 12px;
          }
          .info-desc {
            font-size: 0.9rem;
            line-height: 1.5;
          }
          
          /* Gallery CTA mobile */
          .gallery-cta {
            padding: 60px 4%;
          }
          .cta-content-modern {
            padding: 50px 24px;
            border-radius: 24px;
          }
          .cta-title {
            font-size: 1.8rem;
            margin-bottom: 16px;
          }
          .cta-content-modern p {
            font-size: 1rem;
            margin-bottom: 30px;
          }
          .cta-actions {
            flex-direction: column;
            gap: 15px;
            width: 100%;
            align-items: center;
          }
          .cta-actions .btn {
            width: 100%;
            max-width: 320px;
            justify-content: center;
          }

          /* Bento item adjustments for mobile */
          .bento-gallery-item .item-overlay {
            padding: 20px;
          }
          .bento-gallery-item .item-title {
            font-size: 1.1rem;
            margin-bottom: 6px;
          }
          .bento-gallery-item .item-category {
            font-size: 0.65rem;
            letter-spacing: 1px;
            margin-bottom: 2px;
          }
        }
      `}</style>
    </div>
  );
}
