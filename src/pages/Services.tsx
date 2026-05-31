import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Droplets, Shield, ChevronLeft, ChevronRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const serviceCategories = [
  {
    title: "Paint Correction & Protection",
    icon: <Sparkles size={32} className="text-gradient" />,
    services: [
      { id: 2, title: "Level 1 Paint Correction", image: "/images/services/level1_polish.png", desc: "Single stage machine polish to enhance gloss and remove light wash marring." },
      { id: 2, title: "Level 2 Paint Correction", image: "/images/services/polishing.png", desc: "Two-stage compounding and polishing to remove 80-90% of defects, swirls, and scratches." },
      { id: 4, title: "Graphene Ceramic Coating", image: "/images/services/coating.png", desc: "Advanced 9H+ graphene coating for extreme hydrophobic properties and 5-year durability." },
      { id: 4, title: "Paint Protection Film (PPF)", image: "/images/services/ppf.png", desc: "Self-healing clear bra installation to protect against rock chips and deep scratches." }
    ]
  },
  {
    title: "Interior Restoration",
    icon: <Shield size={32} className="text-gradient" />,
    services: [
      { id: 1, title: "Deep Interior Clean", image: "/images/services/interior.png", desc: "Comprehensive vacuuming, steam cleaning, and sanitization of all surfaces." },
      { id: 1, title: "Leather Treatment & Coating", image: "/images/services/leather_coating.png", desc: "Deep cleaning followed by premium leather ceramic coating to prevent dye transfer." },
      { id: 1, title: "Odor Removal Treatment", image: "/images/services/interior.png", desc: "Ozone generator treatment to eliminate embedded smells from smoke or pets." }
    ]
  },
  {
    title: "Maintenance & Wash",
    icon: <Droplets size={32} className="text-gradient" />,
    services: [
      { id: 3, title: "Premium Maintenance Wash", image: "/images/services/wash.png", desc: "pH-neutral foam bath, safe two-bucket hand wash, and forced air drying." },
      { id: 3, title: "Engine Bay Detailing", image: "/images/services/engine_bay.png", desc: "Safe degreasing and dressing of all engine compartment plastics and hoses." },
      { id: 3, title: "Headlight Restoration", image: "/images/services/headlight.png", desc: "Wet sanding, compounding, and UV coating of oxidized headlights." }
    ]
  },
  {
    title: "Specialty Add-ons",
    icon: <Sparkles size={32} className="text-gradient" />,
    services: [
      { id: 4, title: "Wheel & Caliper Coating", image: "/images/services/wheels.png", desc: "High-temperature ceramic coating to repel brake dust and road grime." },
      { id: 4, title: "Glass Polishing & Coating", image: "/images/services/glass_coating.png", desc: "Water spot removal and hydrophobic coating for extreme visibility in rain." },
      { id: 4, title: "Plastic Trim Restoration", image: "/images/services/trim_restoration.png", desc: "Restoring faded exterior plastics to a rich factory black with ceramic dye." }
    ]
  }
];

const featuredSlides = [
  {
    id: '4',
    title: "Graphene Ceramic Coating",
    category: "Paint Protection",
    image: "/images/services/coating.png",
    tagline: "Atomic-Level Paint Shielding",
    desc: "Our premium 9H+ graphene ceramic coating bonds at the molecular level, creating an ultra-hydrophobic surface that guards against oxidation, acid rain, and environmental contaminants.",
    bullets: ["5-Year Warranted Durability", "98% Gloss Retention & Mirror Finish", "Extreme Water Beading (110° Contact Angle)"]
  },
  {
    id: '4',
    title: "Paint Protection Film (PPF)",
    category: "Paint Protection",
    image: "/images/services/ppf.png",
    tagline: "Self-Healing Clear Armor",
    desc: "The ultimate protection against rock chips, deep scratches, and road debris. Our high-gloss polycaprolactone film possesses active self-healing properties that make micro-scratches vanish under sunlight.",
    bullets: ["Premium 8mil Thickness", "Instant Self-Healing Technology", "Zero Yellowing & Optical Clarity"]
  },
  {
    id: '1',
    title: "Deep Interior Detailing",
    category: "Interior Restoration",
    image: "/images/services/leather_coating.png",
    tagline: "Cabin Rejuvenation & Protection",
    desc: "A meticulous clean of every stitch, crease, and panel. We perform deep fiber extraction on carpets and apply premium leather ceramic coatings to resist UV fading and dye transfer.",
    bullets: ["Anti-Static & Anti-Microbial Protection", "Premium Leather Conditioning", "Deep Fiber Hot-Water Extraction"]
  },
  {
    id: '2',
    title: "Level 2 Paint Correction",
    category: "Paint Correction",
    image: "/images/services/polishing.png",
    tagline: "Concourse-Level Paint Correction",
    desc: "Our two-stage heavy compounding and refining process safely levels the clear coat, permanently removing up to 90% of swirl marks, scratches, holograms, and oxidation.",
    bullets: ["Removes Swirls & Holograms Permanently", "Restores True Metallic Flake & Depth", "Spectrophotometer Paint-Depth Verified"]
  }
];

export default function Services() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % featuredSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isPaused]);

  const handlePrevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + featuredSlides.length) % featuredSlides.length);
  };

  const handleNextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % featuredSlides.length);
  };

  return (
    <div className="services-page" style={{ backgroundColor: 'var(--bg-color)', minHeight: '100vh' }}>
      
      {/* Page Hero */}
      <section className="page-hero services-hero">
        <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
          <span className="section-eyebrow">Our Services</span>
          <h1 className="page-title">
            Comprehensive <span className="text-gradient">Automotive Care</span>
          </h1>
          <p className="page-subtitle">
            From routine luxury maintenance to concourse-level restoration, Garage 47 Calicut offers tailored packages to meet your vehicle's exact needs.
          </p>
        </motion.div>
      </section>

      {/* Signature Package Slider Showcase */}
      <section className="featured-showcase-section" style={{ padding: '0 5% 80px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <motion.div 
            className="section-header centered"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            style={{ textAlign: 'center', marginBottom: '50px' }}
          >
            <span className="section-eyebrow" style={{ color: 'var(--accent-purple)' }}>Signature Packages</span>
            <h2 className="section-title" style={{ fontSize: 'clamp(1.8rem, 4.5vw, 2.6rem)', fontWeight: 800 }}>Featured Detailing <span className="text-gradient">Showcase</span></h2>
          </motion.div>

          <div 
            className="showcase-slider-deck"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Left Column: Image Area */}
            <div className="slider-visual-column">
              {featuredSlides.map((slide, idx) => (
                <div 
                  key={idx} 
                  className={`slider-slide-img-box ${idx === activeSlide ? 'active' : ''}`}
                >
                  <img src={slide.image} alt={slide.title} />
                  <div className="slider-image-overlay"></div>
                </div>
              ))}
              
              {/* Slider Navigation Arrows */}
              <button className="slider-control-btn prev" onClick={handlePrevSlide}>
                <ChevronLeft size={24} />
              </button>
              <button className="slider-control-btn next" onClick={handleNextSlide}>
                <ChevronRight size={24} />
              </button>

              {/* Indicator Dots */}
              <div className="slider-indicator-dots">
                {featuredSlides.map((_, idx) => (
                  <button 
                    key={idx} 
                    className={`indicator-dot ${idx === activeSlide ? 'active' : ''}`}
                    onClick={() => setActiveSlide(idx)}
                  ></button>
                ))}
              </div>
            </div>

            {/* Right Column: Information Area */}
            <div className="slider-content-column">
              <div className="slider-content-card">
                <span className="slide-eyebrow-category">{featuredSlides[activeSlide].category}</span>
                <h3 className="slide-title-header">{featuredSlides[activeSlide].title}</h3>
                <span className="slide-tagline">{featuredSlides[activeSlide].tagline}</span>
                <p className="slide-desc-text">{featuredSlides[activeSlide].desc}</p>
                
                <ul className="slide-bullet-list">
                  {featuredSlides[activeSlide].bullets.map((bullet, bIdx) => (
                    <li key={bIdx}>
                      <span className="slide-bullet-icon-box"><Check size={14} /></span>
                      {bullet}
                    </li>
                  ))}
                </ul>

                <div className="slide-cta-wrapper">
                  <Link to={`/service/${featuredSlides[activeSlide].id}`} className="btn btn-premium">
                    Configure Package <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Menu */}
      <section className="services-menu" style={{ padding: '40px 5% 120px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {serviceCategories.map((category, idx) => (
            <motion.div 
              key={idx} 
              className="service-category" 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
              style={{ marginBottom: '80px' }}
            >
              <div className="category-header">
                {category.icon}
                <h2 className="category-title">{category.title}</h2>
              </div>
              
              <div className="services-grid">
                {category.services.map((service, sIdx) => (
                  <motion.div 
                    key={sIdx} 
                    variants={fadeInUp} 
                    className="detailed-service-card"
                  >
                    <div className="service-card-image-wrapper">
                      <img src={service.image} alt={service.title} className="service-card-image" />
                      <div className="service-card-image-overlay"></div>
                    </div>
                    <div className="service-card-body">
                      <div className="service-card-header">
                        <h3 className="service-card-title">{service.title}</h3>
                      </div>
                      <p className="service-desc">
                        {service.desc}
                      </p>
                      <div className="service-footer">
                        <Link to={`/service/${service.id}`} className="service-link">
                          View Details <ArrowRight size={16} color="var(--accent-blue)" />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="faq-section" style={{ padding: '0 5% 100px' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div className="faq-header">
            <span className="section-eyebrow">Queries</span>
            <h2 className="faq-title">Service FAQs</h2>
          </div>
          
          <div className="faq-grid">
            {[
              { q: "How long does a ceramic coating actually last?", a: "With proper maintenance and regular pH-neutral washing, our 9H+ graphene ceramic coatings can last anywhere from 3 to 5 years. We provide a complimentary maintenance guide with every coating service." },
              { q: "Do I need paint correction before ceramic coating?", a: "Yes, we highly recommend at least a Stage 1 paint correction. Ceramic coating locks in the condition of the paint beneath it. Removing swirls and defects first ensures a flawless, deep mirror finish." },
              { q: "How often should I detail my car?", a: "For a daily driven car, we recommend a thorough maintenance wash every 2 weeks, an interior deep clean every 3 months, and a decontamination wash every 6 months to preserve the clear coat." }
            ].map((faq, idx) => (
              <motion.div 
                key={idx}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="faq-item"
              >
                <h4 className="faq-question">{faq.q}</h4>
                <p className="faq-answer">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: '0 5% 120px' }}>
        <div className="cta-box">
          <h2 className="cta-title">Not sure what your car needs?</h2>
          <p className="cta-desc">
            Drop by our Calicut workshop for a free visual inspection and custom consultation.
          </p>
          <button className="btn">Book Free Consultation <ArrowRight size={18} /></button>
          
          <div style={{ marginTop: '40px', paddingTop: '30px', borderTop: '1px solid var(--border-light)' }}>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
              For more details and live project updates, visit: 
              <a href="https://www.instagram.com/garage47calicut/" target="_blank" rel="noreferrer" style={{ color: 'var(--accent-blue)', marginLeft: '8px', fontWeight: 600, textDecoration: 'underline' }}>
                @garage47calicut
              </a>
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
