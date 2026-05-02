import { motion } from 'framer-motion';
import { Target, Award, Users, ShieldCheck, Cpu, Zap, Activity, Sparkles, Microscope, Compass } from 'lucide-react';
import { Link } from 'react-router-dom';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

export default function About() {
  return (
    <div className="about-page">
      
      {/* Futuristic Page Hero */}
      <section className="about-hero">
        <div className="hero-grid-overlay"></div>
        <div className="hero-glow-sphere"></div>
        <motion.div 
          className="about-hero-content"
          initial="hidden" 
          animate="visible" 
          variants={fadeInUp}
        >
          <span className="section-eyebrow modern-eyebrow">The Engineering Behind Perfection</span>
          <h1 className="about-title">
            Beyond <span className="text-gradient">Detailing</span>
          </h1>
          <p className="about-subtitle">
            Garage 47 Calicut isn't just a workshop; it's an advanced automotive laboratory where science meets artistry to redefine the boundaries of vehicle protection and restoration.
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

      <style>{`
        .about-page {
          background-color: var(--bg-color);
          overflow-x: hidden;
        }

        .about-hero {
          min-height: 400px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          position: relative;
          overflow: hidden;
          padding: 120px 5% 80px;
        }

        .hero-glow-sphere {
          position: absolute;
          width: 600px;
          height: 600px;
          background: var(--accent-blue);
          filter: blur(150px);
          opacity: 0.1;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 1;
        }

        .about-hero-content {
          position: relative;
          z-index: 5;
          max-width: 900px;
          width: 100%;
        }

        .about-title {
          font-size: clamp(2.5rem, 8vw, 5rem);
          font-weight: 900;
          letter-spacing: -2px;
          margin: 20px 0;
          line-height: 1.1;
        }

        .about-subtitle {
          font-size: clamp(1rem, 2vw, 1.25rem);
          color: var(--text-secondary);
          line-height: 1.6;
          max-width: 700px;
          margin: 0 auto;
        }

        .genesis-section {
          padding: 100px 0;
        }

        .container {
          max-width: 1300px;
          margin: 0 auto;
          padding: 0 24px;
          width: 100%;
        }

        .genesis-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }

        .tech-frame {
          position: relative;
          border-radius: 32px;
          overflow: hidden;
          border: 1px solid var(--border-light);
          box-shadow: 0 30px 60px rgba(0,0,0,0.5);
        }

        .tech-img {
          width: 100%;
          display: block;
          height: auto;
          object-fit: cover;
        }

        .tech-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, var(--bg-color), transparent);
          opacity: 0.4;
        }

        .experience-orb {
          position: absolute;
          bottom: 30px;
          left: 30px;
          background: rgba(10,10,15,0.85);
          backdrop-filter: blur(20px);
          padding: 20px 30px;
          border-radius: 24px;
          border: 1px solid var(--accent-blue);
          display: flex;
          flex-direction: column;
          align-items: center;
          z-index: 10;
        }

        .experience-orb .years {
          font-size: 2.5rem;
          font-weight: 900;
          line-height: 1;
          color: #fff;
        }

        .experience-orb .plus { color: var(--accent-blue); }

        .experience-orb .label {
          font-size: 0.65rem;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: var(--text-secondary);
          margin-top: 5px;
          white-space: nowrap;
        }

        .text-large {
          font-size: clamp(1.1rem, 3vw, 1.3rem);
          color: #fff;
          font-weight: 600;
          line-height: 1.5;
          margin-bottom: 25px;
        }

        .stats-row {
          display: flex;
          gap: 20px;
          margin-top: 40px;
        }

        .stat-card-mini {
          flex: 1;
          background: var(--bg-card);
          border: 1px solid var(--border-light);
          padding: 20px;
          border-radius: 20px;
        }

        .stat-card-mini .val {
          display: block;
          font-size: 1.8rem;
          font-weight: 800;
          color: var(--accent-blue);
          margin-bottom: 4px;
        }

        .stat-card-mini .lbl {
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: var(--text-secondary);
        }

        .lab-section {
          padding: 100px 0;
          background: var(--bg-secondary);
          position: relative;
        }

        .centered {
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 60px;
        }

        .section-desc {
          max-width: 800px;
          margin-top: 20px;
          color: var(--text-secondary);
        }

        .lab-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 24px;
          width: 100%;
        }

        .lab-item {
          background: var(--bg-card);
          border: 1px solid var(--border-light);
          padding: 35px;
          border-radius: 28px;
          position: relative;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          height: 100%;
        }

        .lab-item:hover {
          border-color: var(--accent-blue);
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.3);
        }

        .lab-icon-box {
          width: 56px;
          height: 56px;
          background: rgba(59, 130, 246, 0.1);
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-blue);
          margin-bottom: 24px;
        }

        .lab-item h3 {
          font-size: 1.35rem;
          font-weight: 700;
          margin-bottom: 12px;
        }

        .lab-item p {
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 24px;
          font-size: 0.95rem;
        }

        .lab-item-footer {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.7rem;
          color: var(--text-secondary);
          text-transform: uppercase;
          letter-spacing: 1.5px;
          margin-top: auto;
        }

        .status-dot {
          width: 8px;
          height: 8px;
          background: #10b981;
          border-radius: 50%;
          box-shadow: 0 0 10px #10b981;
        }

        .values-section {
          padding: 100px 0;
        }

        .values-grid {
          display: grid;
          grid-template-columns: 0.8fr 1.2fr;
          gap: 60px;
          align-items: flex-start;
        }

        .values-cards {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        .value-card-modern {
          background: var(--bg-card);
          border: 1px solid var(--border-light);
          padding: 28px;
          border-radius: 24px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .value-icon-circle {
          width: 48px;
          height: 48px;
          background: linear-gradient(135deg, var(--accent-blue), var(--accent-purple));
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
        }

        .value-info h4 {
          font-size: 1.15rem;
          font-weight: 700;
          margin-bottom: 6px;
        }

        .value-info p {
          font-size: 0.85rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .certs-section {
          padding: 80px 0 120px;
        }

        .certs-row {
          display: flex;
          gap: 30px;
          justify-content: center;
          margin-top: 50px;
          flex-wrap: wrap;
        }

        .cert-badge-futuristic {
          flex: 1;
          max-width: 500px;
          min-width: 300px;
        }

        .badge-inner {
          background: var(--bg-card);
          border: 1px solid var(--border-light);
          border-radius: 28px;
          padding: 35px;
          display: flex;
          align-items: center;
          gap: 24px;
          position: relative;
          overflow: hidden;
          height: 100%;
        }

        .badge-glow {
          position: absolute;
          width: 100px;
          height: 100px;
          background: var(--accent-blue);
          filter: blur(50px);
          opacity: 0.1;
          top: -20px;
          right: -20px;
        }

        .badge-glow.purple { background: var(--accent-purple); }

        .badge-inner img {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid var(--border-light);
          flex-shrink: 0;
        }

        .badge-content h4 {
          font-size: 1.25rem;
          font-weight: 800;
          margin-bottom: 6px;
        }

        .badge-content p {
          color: var(--text-secondary);
          font-size: 0.9rem;
          line-height: 1.5;
        }

        @media (max-width: 1024px) {
          .genesis-grid, .values-grid { grid-template-columns: 1fr; gap: 40px; }
          .values-header { text-align: center; }
          .about-hero { height: auto; padding: 120px 5% 80px; }
        }

        @media (max-width: 768px) {
          .values-cards { grid-template-columns: 1fr; }
          .stats-row { flex-direction: column; }
          .badge-inner { flex-direction: column; text-align: center; padding: 30px; }
          .experience-orb { position: static; margin-top: -40px; margin-left: auto; margin-right: auto; width: fit-content; }
          .tech-frame { border-radius: 24px; }
          .section-title { font-size: 2.2rem; }
        }
      `}</style>
    </div>
  );
}
