import { motion } from 'framer-motion';
import { Target, Award, Users, ShieldCheck, Activity, Sparkles, Microscope, Compass } from 'lucide-react';
import { Link } from 'react-router-dom';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
} as const;

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
} as const;

export default function About() {
  return (
    <div className="about-page">
      
      {/* Futuristic Page Hero */}
      <section className="page-hero">
        <div className="hero-grid-overlay"></div>
        <div className="hero-glow-sphere"></div>
        <motion.div 
          className="container"
          initial="hidden" 
          animate="visible" 
          variants={fadeInUp}
        >
          <span className="section-eyebrow modern-eyebrow">The Engineering Behind Perfection</span>
          <h1 className="page-title">
            Beyond <span className="text-gradient">Detailing</span>
          </h1>
          <p className="page-subtitle">
            Garage 47 Calicut is an advanced automotive laboratory where science meets artistry to redefine the boundaries of vehicle protection and restoration.
          </p>
        </motion.div>
      </section>

      {/* The Genesis Section - Split Layout */}
      <section className="genesis-section">
        <div className="container">
          <div className="genesis-grid">
            <motion.div 
              className="genesis-visual"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <div className="tech-frame">
                <img src="https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&q=80" alt="Mastery" className="tech-img" />
                <div className="tech-overlay"></div>
                <div className="experience-orb">
                  <span className="years">10<span className="plus">+</span></span>
                  <span className="label">Years of Mastery</span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="genesis-content"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <span className="section-eyebrow">Our Legacy</span>
              <h2 className="section-title small">From Passion to <span className="text-gradient">Protocol</span></h2>
              <p className="text-large">
                Founded in Calicut, Garage 47 began with a single mission: to provide the highest level of paint correction and protection available in the region.
              </p>
              <p>
                What started as an obsession with mirror-finishes has evolved into a comprehensive "Precision Protocol." We've spent a decade researching chemical bonding, polymer science, and abrasive technology to ensure that every vehicle treated in our lab receives a scientifically-backed transformation.
              </p>
              <div className="stats-row">
                <div className="stat-card-mini">
                  <span className="val">5000+</span>
                  <span className="lbl">Vehicles Transformed</span>
                </div>
                <div className="stat-card-mini">
                  <span className="val">99.8%</span>
                  <span className="lbl">Gloss Integrity</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* NEW SECTION: The Precision Laboratory */}
      <section className="lab-section">
        <div className="container">
          <motion.div 
            className="section-header centered"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <span className="section-eyebrow">Our Arsenal</span>
            <h2 className="section-title">The <span className="text-gradient">Tech Stack</span></h2>
            <p className="section-desc">
              We don't rely on guesswork. Our workshop is equipped with aerospace-grade diagnostic 
              tools to measure every variable of your vehicle's exterior health.
            </p>
          </motion.div>

          <motion.div 
            className="lab-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {[
              { 
                icon: <Microscope size={28} />, 
                title: "Surface Topography", 
                desc: "We use digital spectrophotometers to analyze paint depth and identify structural weaknesses before correction begins." 
              },
              { 
                icon: <Compass size={28} />, 
                title: "Molecular Bonding", 
                desc: "Our climate-controlled curing booths ensure that nano-coatings bond at the atomic level for maximum durability." 
              },
              { 
                icon: <Activity size={28} />, 
                title: "Gloss Metrics", 
                desc: "Every project is measured with a high-precision gloss meter to ensure we've achieved the absolute limit of reflection." 
              },
              { 
                icon: <Sparkles size={28} />, 
                title: "Ultra-Sonic Prep", 
                desc: "Advanced decontamination techniques that remove microscopic particles standard washing can't touch." 
              }
            ].map((item, i) => (
              <motion.div className="lab-item" key={i} variants={fadeInUp}>
                <div className="lab-icon-box">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <div className="lab-item-footer">
                  <div className="status-dot"></div>
                  <span>Diagnostic Active</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Core Values - Reimagined */}
      <section className="values-section">
        <div className="container">
          <div className="values-grid">
            <div className="values-header">
              <span className="section-eyebrow">Our Philosophy</span>
              <h2 className="section-title small">The <span className="text-gradient">Garage 47</span> Standard</h2>
              <p>
                A commitment to excellence isn't just a slogan; it's a measurable standard that defines our culture.
              </p>
              <div className="values-cta">
                <Link to="/contact" className="btn btn-premium">Consult an Expert</Link>
              </div>
            </div>

            <motion.div 
              className="values-cards"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {[
                { icon: <Target size={24} />, title: 'Absolute Precision', desc: 'No swirl mark is too small to go unnoticed under our specialized lighting array.' },
                { icon: <ShieldCheck size={24} />, title: 'Molecular Protection', desc: 'We exclusively use 9H+ graphene and ceramic coatings from the world\'s top labs.' },
                { icon: <Award size={24} />, title: 'Certified Mastery', desc: 'Our technicians are factory-trained for the world\'s most delicate paints.' },
                { icon: <Users size={24} />, title: 'Radical Transparency', desc: 'We provide full diagnostic reports before and after every major service.' }
              ].map((val, idx) => (
                <motion.div key={idx} variants={fadeInUp} className="value-card-modern">
                  <div className="value-icon-circle">{val.icon}</div>
                  <div className="value-info">
                    <h4>{val.title}</h4>
                    <p>{val.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Certifications - Futuristic Badges */}
      <section className="certs-section">
        <div className="container">
          <motion.div 
            className="section-header centered"
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
          >
            <span className="section-eyebrow">Accreditations</span>
            <h2 className="section-title">Globally <span className="text-gradient">Verified</span></h2>
          </motion.div>

          <div className="certs-row">
            <motion.div className="cert-badge-futuristic" variants={fadeInUp} initial="hidden" whileInView="visible">
              <div className="badge-inner">
                <div className="badge-glow"></div>
                <img src="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80" alt="Master" />
                <div className="badge-content">
                  <h4>Master Coating Studio</h4>
                  <p>Certified installer for Graphene 9H+ Ceramic technology.</p>
                </div>
              </div>
            </motion.div>

            <motion.div className="cert-badge-futuristic" variants={fadeInUp} initial="hidden" whileInView="visible">
              <div className="badge-inner">
                <div className="badge-glow purple"></div>
                <img src="https://images.unsplash.com/photo-1632823462996-05cdabac5516?auto=format&fit=crop&q=80" alt="PPF" />
                <div className="badge-content">
                  <h4>Advanced PPF Lab</h4>
                  <p>Factory-trained in precision self-healing film installation.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
