import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Droplets, Shield, Sun } from 'lucide-react';
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
      { id: 2, title: "Level 1 Paint Correction", price: "From ₹4,999", desc: "Single stage machine polish to enhance gloss and remove light wash marring.", time: "1-2 Days" },
      { id: 2, title: "Level 2 Paint Correction", price: "From ₹8,999", desc: "Two-stage compounding and polishing to remove 80-90% of defects, swirls, and scratches.", time: "2-3 Days" },
      { id: 4, title: "Graphene Ceramic Coating", price: "From ₹14,999", desc: "Advanced 9H+ graphene coating for extreme hydrophobic properties and 5-year durability.", time: "3 Days" },
      { id: 4, title: "Paint Protection Film (PPF)", price: "Custom Quote", desc: "Self-healing clear bra installation to protect against rock chips and deep scratches.", time: "4-5 Days" }
    ]
  },
  {
    title: "Interior Restoration",
    icon: <Shield size={32} className="text-gradient" />,
    services: [
      { id: 1, title: "Deep Interior Clean", price: "From ₹2,499", desc: "Comprehensive vacuuming, steam cleaning, and sanitization of all surfaces.", time: "4 Hours" },
      { id: 1, title: "Leather Treatment & Coating", price: "From ₹3,999", desc: "Deep cleaning followed by premium leather ceramic coating to prevent dye transfer.", time: "6 Hours" },
      { id: 1, title: "Odor Removal Treatment", price: "From ₹1,499", desc: "Ozone generator treatment to eliminate embedded smells from smoke or pets.", time: "2 Hours" }
    ]
  },
  {
    title: "Maintenance & Wash",
    icon: <Droplets size={32} className="text-gradient" />,
    services: [
      { id: 3, title: "Premium Maintenance Wash", price: "From ₹999", desc: "pH-neutral foam bath, safe two-bucket hand wash, and forced air drying.", time: "1.5 Hours" },
      { id: 3, title: "Engine Bay Detailing", price: "From ₹1,299", desc: "Safe degreasing and dressing of all engine compartment plastics and hoses.", time: "2 Hours" },
      { id: 3, title: "Headlight Restoration", price: "From ₹1,499", desc: "Wet sanding, compounding, and UV coating of oxidized headlights.", time: "1 Hour" }
    ]
  },
  {
    title: "Specialty Add-ons",
    icon: <Sparkles size={32} className="text-gradient" />,
    services: [
      { id: 4, title: "Wheel & Caliper Coating", price: "From ₹4,499", desc: "High-temperature ceramic coating to repel brake dust and road grime.", time: "4 Hours" },
      { id: 4, title: "Glass Polishing & Coating", price: "From ₹1,999", desc: "Water spot removal and hydrophobic coating for extreme visibility in rain.", time: "2 Hours" },
      { id: 4, title: "Plastic Trim Restoration", price: "From ₹999", desc: "Restoring faded exterior plastics to a rich factory black with ceramic dye.", time: "1 Hour" }
    ]
  }
];

export default function Services() {
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
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'var(--accent-blue)';
                      e.currentTarget.style.transform = 'translateY(-5px)';
                      e.currentTarget.style.boxShadow = 'var(--card-shadow)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'var(--border-light)';
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    <div className="service-card-header">
                      <h3 className="service-card-title">{service.title}</h3>
                      <span className="service-price-tag">
                        {service.price}
                      </span>
                    </div>
                    <p className="service-desc">
                      {service.desc}
                    </p>
                    <div className="service-footer">
                      <span className="service-meta">
                        <Sun size={16} /> Est. Time: {service.time}
                      </span>
                      <Link to={`/service/${service.id}`} className="service-link">
                        View Details <ArrowRight size={16} color="var(--accent-blue)" />
                      </Link>
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
