import { ArrowRight, Play, Eye, CheckCircle2, Star, ShieldCheck, Clock, Cpu, Zap, Activity, Quote } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import Hero from '../components/Hero';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
} as const;

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
} as const;

export default function Home() {
  return (
    <>
      <Hero />
      {/* Old hero section commented out
      <section className="hero" id="home">
        <div className="hero-content">
          <motion.span 
            className="hero-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Premium Car Detailing
          </motion.span>
          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Elevate Your <span className="text-gradient">Drive</span>
          </motion.h1>
          <motion.p 
            className="hero-desc"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            Experience unparalleled automotive perfection. Our expert artisans combine cutting-edge technology with meticulous attention to detail to transform your vehicle into a masterpiece.
          </motion.p>
          <motion.div 
            className="hero-buttons"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <button className="btn">Book Now <ArrowRight size={18} /></button>
            <button className="btn btn-glass">Explore Services</button>
          </motion.div>
        </div>
        <div className="hero-glow"></div>
      </section>
      */}

      {/* About Section - Philosophy Hero */}
      <section className="philosophy-hero" id="about">
        <div className="hero-grid-overlay"></div>
        <div className="scanning-line"></div>
        <motion.div 
          className="section-header centered full-screen-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <div className="section-title-wrapper centered">
            <motion.span 
              className="section-eyebrow" 
              style={{ color: 'var(--accent-blue)', letterSpacing: '8px' }}
              variants={fadeInUp}
            >
              The Ethos
            </motion.span>
            <motion.h2 
              className="section-title giant-title"
              variants={fadeInUp}
            >
              Beyond the <span className="text-gradient">Showroom Standard</span>
            </motion.h2>
            <motion.p 
              className="section-desc centered mt-6 max-w-3xl"
              variants={fadeInUp}
              style={{ fontSize: '1.2rem', opacity: 0.8 }}
            >
              We don't just detail; we engineer brilliance through molecular precision and uncompromising craftsmanship. Our philosophy is rooted in the pursuit of absolute perfection.
            </motion.p>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <div className="mouse">
            <div className="wheel"></div>
          </div>
          <div>
            <span className="m_scroll_arrows unu"></span>
            <span className="m_scroll_arrows doi"></span>
          </div>
        </motion.div>
      </section>

      {/* Bento Grid Section */}
      <section className="about-section bento-section">

        <motion.div 
          className="bento-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          {/* Main Visual - Large left box */}
          <motion.div className="bento-item bento-visual" variants={fadeInUp}>
            <img src="https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&q=80" alt="Detailing" className="bento-bg" />
            <div className="bento-overlay"></div>
            <div className="bento-content bottom-left">
              <div className="experience-badge-modern">
                <span className="years">10<span className="plus">+</span></span>
                <span className="text">Years of<br/>Mastery</span>
              </div>
            </div>
          </motion.div>

          {/* Intro Text - Top right */}
          <motion.div className="bento-item bento-text-highlight" variants={fadeInUp}>
            <div className="bento-glow"></div>
            <div className="bento-status-badge">
              <div className="pulse-dot"></div>
              <span>Protocol: Active</span>
            </div>
            <div className="bento-content">
              <h3>Precision Engineering</h3>
              <p>Garage 47 Calicut is an advanced automotive laboratory specializing in molecular-level paint correction and multi-layer ceramic protection.</p>
            </div>
          </motion.div>

          {/* Stats - Middle right */}
          <motion.div className="bento-item bento-stats" variants={fadeInUp}>
             <div className="bento-stat-box">
                <div className="stat-icon-mini"><Activity size={16} /></div>
                <span className="stat-num">5K+</span>
                <span className="stat-label">Units Restored</span>
             </div>
             <div className="bento-stat-box">
                <div className="stat-icon-mini"><ShieldCheck size={16} /></div>
                <span className="stat-num">100%</span>
                <span className="stat-label">QC Accuracy</span>
             </div>
          </motion.div>

          {/* Deep text - Bottom right */}
          <motion.div className="bento-item bento-text-deep" variants={fadeInUp}>
            <div className="bento-content">
              <p>Our artisans combine cutting-edge technology with meticulous attention to detail. Every vehicle that leaves our workshop is a testament to uncompromising craftsmanship.</p>
              <Link to="/about" className="btn-link mt-4" style={{ textDecoration: 'none' }}>Discover Our Method <ArrowRight size={16} /></Link>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Before / After Transformation Section */}
      <section className="transformation-section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <motion.div 
          className="section-header centered"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="section-title-wrapper centered">
            <span className="section-eyebrow">Real Results</span>
            <h2 className="section-title">Witness The <span className="text-gradient">Transformation</span></h2>
            <p className="section-desc centered mt-4">
              Slide to see the difference our premium paint correction and ceramic coating services make.
            </p>
          </div>
        </motion.div>
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="slider-container"
        >
          <BeforeAfterSlider 
            beforeImage="/images/bmw-before.png" 
            afterImage="/images/bmw-after.png"
          />
        </motion.div>
      </section>

      {/* Dynamic Instagram Reels Section - Moved Up */}
      <section className="reels-section">
        <motion.div 
          className="section-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <div className="section-title-wrapper">
            <span className="section-eyebrow">Social</span>
            <h2 className="section-title">Latest Reels</h2>
          </div>
          <a href="https://www.instagram.com/garage47calicut/" target="_blank" rel="noreferrer" className="btn btn-glass">@garage47calicut <ArrowRight size={18} /></a>
        </motion.div>

        <motion.div 
          className="reels-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {[
             { id: 'DXmIrtxEtpA', img: 'https://instagram.fccj3-1.fna.fbcdn.net/v/t51.71878-15/536824537_1487168915623384_6351388001703865797_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=105&ig_cache_key=MzcwNDE1NTM0MzUwOTE0ODA3Nw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjY0MHgxMTM2LnNkci5DMyJ9&_nc_ohc=NaLsLeZv838Q7kNvwFZzLe-&_nc_oc=Adp_0gCDga460iRPHRl2AUtK0YM6VQWpyDY9luClpFL9CzUZoKoXKWsPzkvKfCuL1xt0vph3vASKSP4b0a-b_kKI&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fccj3-1.fna&_nc_gid=3YJCis8VYRYNPGvJ629eaw&_nc_ss=7a22e&oh=00_Af4x2uShlzzHk_JbimEp65vb3J9ShpVp64exMVaPeyaZuw&oe=69FA03CB', views: '581K' },
             { id: 'DRCnodUEqcR', img: 'https://instagram.fccj3-1.fna.fbcdn.net/v/t51.71878-15/581322268_1826407894645261_3739224545975229376_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=103&ig_cache_key=Mzc2NTc0NjU0MjUwMzQzODA5Nw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjY0MHgxMTM2LnNkci5DMyJ9&_nc_ohc=t9Z2lBc_Nj4Q7kNvwHt4p8g&_nc_oc=AdqLNbGVzAng5mF2x3Phip8bITNQP85ZS9aVWQqUL8AsMEuu1laSQkE1yvsa0kgkYEnbEjNLsAHPvzWI11qIMZNc&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fccj3-1.fna&_nc_gid=BkAZ4wW9fsUVadXxXP9rag&_nc_ss=7a22e&oh=00_Af7ur8H6hQxNQvYOCs9i9qeB54zA1WA89hk-CE67w2-oIA&oe=69FA002C', views: '151K' },
             { id: 'DM27M6QJk9r', img: 'https://instagram.fccj3-1.fna.fbcdn.net/v/t51.82787-15/527470194_17987135321837637_2213961404673460765_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=109&ig_cache_key=MzY5MDM5NzMxNjYwMjU0ODA3NTE3OTg3MTM1MzE1ODM3NjM3.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjIwMzB4MzYxMC5zZHIuQzMifQ%3D%3D&_nc_ohc=S9rBa7eQjrcQ7kNvwHWqjci&_nc_oc=AdrKkPCKhOhMNdWi7gAeFlmPmS9kFhyIvIKqxi6hEubVG7A6vjM5s6v32tyrhKqKYFe1YPuJ8B2Hic_izrR8AAkZ&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fccj3-1.fna&_nc_gid=3YJCis8VYRYNPGvJ629eaw&_nc_ss=7a22e&oh=00_Af7e3JRmVVlM6wp_AiBt4N4MKqdbTMkB5kc1ke_ucdTD0w&oe=69F9F812', views: '110K' },
             { id: 'DOFpQVdEn7L', img: 'https://instagram.fccj3-1.fna.fbcdn.net/v/t51.71878-15/541912079_792764926606939_7872708552532380799_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=100&ig_cache_key=MzcxMjU1NDkxMDI5MTc1NDY5OQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjY0MHgxMTM2LnNkci5DMyJ9&_nc_ohc=nZ_JJfMbzugQ7kNvwFmDbz-&_nc_oc=AdrQXUwGoA7h3EYMLqKyd6qDynFfL4KvmNtYmJI3CUh5VlhgyYx9vFWLyewpUNV0YjkJC_BduGxqQrXX0v7M8fdI&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fccj3-1.fna&_nc_gid=oGvqA4qk6nt-OS1M8GhVCg&_nc_ss=7a22e&oh=00_Af5dg1zA8Hs-qZhnXrVJ6QAkoPNg6EJpr1XzBu7b_7Nnvg&oe=69F9FC1B', views: '12.9K' }
          ].map((reel, idx) => (
             <motion.a 
                href={`https://www.instagram.com/reel/${reel.id}/`}
                target="_blank"
                rel="noreferrer"
                className="reel-card" 
                variants={fadeInUp} 
                key={idx}
             >
                <img src={reel.img} alt={`Reel ${idx}`} className="reel-img" />
                <div className="reel-overlay">
                  <div className="reel-top">
                    <span className="reel-views"><Eye size={14} /> {reel.views}</span>
                  </div>
                  <div className="reel-center">
                    <div className="play-btn">
                      <Play size={24} fill="currentColor" />
                    </div>
                  </div>
                  <div className="reel-bottom">
                    <p>Watch on Instagram</p>
                  </div>
                </div>
             </motion.a>
          ))}
        </motion.div>
      </section>

      <section className="services" id="services">
        <motion.div 
          className="section-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <div className="section-title-wrapper">
            <span className="section-eyebrow">Expertise</span>
            <h2 className="section-title">Our Services</h2>
          </div>
          <Link to="/services"><button className="btn btn-glass">View All <ArrowRight size={18} /></button></Link>
        </motion.div>
        
        <motion.div 
          className="services-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          {[
            { id: '01', title: 'Interior Detailing', img: 'https://images.unsplash.com/photo-1600705722908-bab1e61c0b4d?auto=format&fit=crop&q=80', desc: 'Deep cleaning and restoration of all interior materials and surfaces.' },
            { id: '02', title: 'Polishing', img: 'https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&q=80', desc: 'Multi-stage paint correction to remove scratches and swirl marks.' },
            { id: '03', title: 'Car Wash', img: 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&q=80', desc: 'Premium hand wash with pH-neutral soaps and microfiber drying.' },
            { id: '04', title: 'Ceramic Coating', img: 'https://images.unsplash.com/photo-1632823462996-05cdabac5516?auto=format&fit=crop&q=80', desc: 'Long-lasting nano-ceramic protection for paint, glass, and wheels.' }
          ].map((srv, idx) => (
            <motion.div variants={fadeInUp} key={idx} className="service-card-wrapper">
              <Link to={`/service/${idx + 1}`} className="service-card">
                <div className="service-img-wrapper">
                  <img src={srv.img} alt={srv.title} className="service-img" />
                  <div className="service-overlay"></div>
                </div>
                <div className="service-content">
                  <div className="service-header">
                    <span className="service-number">{srv.id}</span>
                    <ArrowRight className="service-arrow" size={24} />
                  </div>
                  <div className="service-info">
                    <h3>{srv.title}</h3>
                    <p>{srv.desc}</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="partners-marquee-section">
        <div className="partners-marquee-container">
          <div className="partners-marquee-track">
            {[
              'NGK', 'TOYOTA', 'FIAT', 'JEEP', 'MG MOTORS', 'AUDI',
              'BMW', 'MERCEDES-BENZ', 'PORSCHE', 'FERRARI', 'LAMBORGHINI',
              'TESLA', 'LEXUS', 'JAGUAR', 'ASTON MARTIN', 'LAND ROVER',
              'NGK', 'TOYOTA', 'FIAT', 'JEEP', 'MG MOTORS', 'AUDI',
              'BMW', 'MERCEDES-BENZ', 'PORSCHE', 'FERRARI', 'LAMBORGHINI',
              'TESLA', 'LEXUS', 'JAGUAR', 'ASTON MARTIN', 'LAND ROVER'
            ].map((partner, idx) => (
              <div className="partner-logo" key={idx}>{partner}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="portfolio" id="portfolio">
        <motion.div 
          className="section-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="section-title-wrapper">
            <span className="section-eyebrow">Showcase</span>
            <h2 className="section-title">Gallery</h2>
          </div>
          <div className="nav-actions">
            <Link to="/gallery"><button className="btn btn-glass" style={{ whiteSpace: 'nowrap' }}>View All <ArrowRight size={18} /></button></Link>
          </div>
        </motion.div>
        <motion.div 
          className="portfolio-wrapper"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {[
            'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&q=80',
            'https://images.unsplash.com/photo-1620601438965-ea9e79822aef?auto=format&fit=crop&q=80',
            'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80',
            'https://images.unsplash.com/photo-1503376712341-ea43100ca416?auto=format&fit=crop&q=80'
          ].map((img, i) => (
            <motion.div className="portfolio-item" variants={fadeInUp} key={i}>
              <img src={img} alt={`Work ${i+1}`} />
              <div className="portfolio-overlay">
                <Eye size={32} className="portfolio-icon" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* NEW FUTURISTIC SECTION: Nano-Tech Laboratory */}
      <section className="nano-tech-section">
        <motion.div 
          className="section-header center-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="section-title-wrapper centered">
            <span className="section-eyebrow">Advanced Engineering</span>
            <h2 className="section-title">The <span className="text-gradient">Nano-Tech</span> Lab</h2>
            <p className="max-w-2xl mx-auto mt-4" style={{ color: 'var(--text-secondary)' }}>
              We utilize aerospace-grade nano-materials that bond at the molecular level to create a 
              permanent, high-gloss shield for your vehicle.
            </p>
          </div>
        </motion.div>

        <div className="nano-grid">
          {[
            { 
              title: "Graphene Matrix", 
              spec: "Covalent Bond", 
              desc: "Engineered with atom-thin carbon layers for extreme heat resistance and unparalleled hardness.",
              icon: <Cpu size={32} />,
              color: "#3b82f6"
            },
            { 
              title: "Hydro-Sonic PPF", 
              spec: "Self-Healing", 
              desc: "Advanced thermoplastic polyurethane that heals surface scratches instantly under heat.",
              icon: <Zap size={32} />,
              color: "#8b5cf6"
            },
            { 
              title: "Ceramic Pro 9H", 
              spec: "Nano-Shield", 
              desc: "Multi-layered liquid glass technology that creates a permanent protective skin.",
              icon: <ShieldCheck size={32} />,
              color: "#10b981"
            }
          ].map((tech, i) => (
            <motion.div 
              key={i}
              className="nano-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
            >
              <div className="nano-card-glow" style={{ background: `radial-gradient(circle at center, ${tech.color}22, transparent 70%)` }}></div>
              <div className="nano-card-header">
                <div className="nano-icon" style={{ color: tech.color }}>{tech.icon}</div>
                <div className="nano-badge" style={{ borderColor: `${tech.color}44`, color: tech.color }}>{tech.spec}</div>
              </div>
              <h3 className="nano-title">{tech.title}</h3>
              <p className="nano-desc">{tech.desc}</p>
              <div className="nano-footer">
                <div className="nano-progress-bar">
                  <div className="nano-progress-fill" style={{ width: '85%', backgroundColor: tech.color }}></div>
                </div>
                <span className="nano-stat">Structural Integrity: 98.4%</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Floating background elements for the lab section */}
        <div className="lab-circle c1"></div>
        <div className="lab-circle c2"></div>
      </section>

      {/* Process Section */}
      <section className="process-section">
        <motion.div 
          className="section-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="section-title-wrapper">
            <span className="section-eyebrow">How It Works</span>
            <h2 className="section-title">Our Process</h2>
          </div>
        </motion.div>
        <motion.div 
          className="process-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {[
            { step: '01', title: 'Consultation', desc: 'We assess your vehicle and discuss your specific detailing needs.', icon: <CheckCircle2 size={32} /> },
            { step: '02', title: 'Preparation', desc: 'Thorough cleaning and decontamination to prepare the surface.', icon: <Clock size={32} /> },
            { step: '03', title: 'Correction', desc: 'Meticulous paint correction to remove imperfections and scratches.', icon: <ShieldCheck size={32} /> },
            { step: '04', title: 'Protection', desc: 'Application of ceramic coating or PPF for long-lasting brilliance.', icon: <Star size={32} /> }
          ].map((item, idx) => (
            <motion.div className="process-card" variants={fadeInUp} key={idx}>
              <div className="process-icon">{item.icon}</div>
              <h3 className="process-title">{item.step}. {item.title}</h3>
              <p className="process-desc">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <motion.div 
          className="section-header centered"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="section-title-wrapper centered">
            <span className="section-eyebrow">Reviews</span>
            <h2 className="section-title">Client Feedback</h2>
          </div>
        </motion.div>
        
        <div className="testimonials-container-outer">
          <motion.div 
            className="testimonials-grid-new"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {[
              { name: "Rahul S.", car: "BMW M3", review: "Absolutely phenomenal work. The ceramic coating made my car look better than when it rolled off the showroom floor." },
              { name: "Arun K.", car: "Porsche 911", review: "The attention to detail here is unmatched. They managed to remove swirls I thought were permanent. Highly recommend." },
              { name: "Sneha M.", car: "Audi Q5", review: "Professional, timely, and the results speak for themselves. The interior detailing made it feel like a brand new car again." }
            ].map((testimonial, idx) => (
              <motion.div className="testimonial-card-premium" variants={fadeInUp} key={idx}>
                <div className="testimonial-quote-icon">
                  <Quote size={40} fill="var(--accent-blue)" fillOpacity={0.1} />
                </div>
                <div className="stars">
                  {[1,2,3,4,5].map(star => <Star key={star} size={14} fill="var(--accent-blue)" color="var(--accent-blue)" />)}
                </div>
                <p className="review-text">"{testimonial.review}"</p>
                <div className="client-meta">
                  <div className="client-avatar">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="client-info">
                    <h4>{testimonial.name}</h4>
                    <span>{testimonial.car}</span>
                  </div>
                </div>
                <div className="card-shine"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <motion.div 
          className="cta-container"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="cta-content">
            <h2>Ready to transform your vehicle?</h2>
            <p>Book your appointment today and experience the ultimate in automotive care.</p>
            <div className="cta-buttons">
              <button className="btn">Book Appointment <ArrowRight size={18} /></button>
              <button className="btn btn-glass">Contact Us</button>
            </div>
          </div>
        </motion.div>
      </section>

      <style>{`
        .nano-tech-section {
          padding: 120px 5%;
          background: radial-gradient(circle at 30% 50%, rgba(59, 130, 246, 0.05) 0%, transparent 60%);
          position: relative;
          overflow: hidden;
        }

        .centered {
          margin: 0 auto;
          text-align: center;
          align-items: center;
        }

        .nano-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 30px;
          max-width: 1300px;
          margin: 60px auto 0;
          position: relative;
          z-index: 2;
        }

        .nano-card {
          background: var(--bg-card);
          border: 1px solid var(--border-light);
          border-radius: 30px;
          padding: 40px;
          position: relative;
          overflow: hidden;
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          backdrop-filter: blur(10px);
        }

        .nano-card-glow {
          position: absolute;
          inset: 0;
          z-index: 0;
          opacity: 0.5;
        }

        .nano-card-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 30px;
          position: relative;
          z-index: 1;
        }

        .nano-icon {
          width: 60px;
          height: 60px;
          background: rgba(255, 255, 255, 0.03);
          border-radius: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .nano-badge {
          font-size: 0.7rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          padding: 6px 14px;
          border: 1px solid;
          border-radius: 100px;
        }

        .nano-title {
          font-size: 1.8rem;
          font-weight: 800;
          margin-bottom: 15px;
          position: relative;
          z-index: 1;
        }

        .nano-desc {
          color: var(--text-secondary);
          line-height: 1.7;
          margin-bottom: 30px;
          position: relative;
          z-index: 1;
        }

        .nano-footer {
          position: relative;
          z-index: 1;
        }

        .nano-progress-bar {
          width: 100%;
          height: 4px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 2px;
          margin-bottom: 12px;
        }

        .nano-progress-fill {
          height: 100%;
          border-radius: 2px;
          box-shadow: 0 0 10px currentColor;
        }

        .nano-stat {
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--text-secondary);
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .lab-circle {
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
          z-index: 1;
          opacity: 0.1;
        }

        .lab-circle.c1 {
          width: 400px;
          height: 400px;
          background: var(--accent-blue);
          top: -100px;
          right: -100px;
        }

        .lab-circle.c2 {
          width: 300px;
          height: 300px;
          background: var(--accent-purple);
          bottom: -50px;
          left: -50px;
        }

        @media (max-width: 768px) {
          .nano-grid {
            grid-template-columns: 1fr;
          }
          .nano-card {
            padding: 30px;
          }
        }

        .scanning-line {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            to right,
            transparent,
            rgba(59, 130, 246, 0.03),
            rgba(59, 130, 246, 0.07),
            rgba(59, 130, 246, 0.03),
            transparent
          );
          transform: skewX(-20deg);
          animation: scan 10s infinite linear;
          z-index: 1;
          pointer-events: none;
        }

        @keyframes scan {
          0% { transform: translateX(-100%) skewX(-20deg); }
          100% { transform: translateX(200%) skewX(-20deg); }
        }

        .philosophy-hero {
          position: relative;
          background: radial-gradient(circle at center, var(--bg-secondary) 0%, var(--bg-color) 100%);
        }

        .philosophy-hero .giant-title {
          text-shadow: 0 0 30px var(--accent-glow);
        }
      `}</style>
    </>
  );
}
