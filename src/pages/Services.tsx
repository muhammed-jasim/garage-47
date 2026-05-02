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
    <div className="services-page" style={{ paddingTop: '100px', backgroundColor: 'var(--bg-color)', minHeight: '100vh' }}>
      
      {/* Page Hero */}
      <section className="page-hero" style={{ padding: '80px 5%', textAlign: 'center', background: 'radial-gradient(circle at 50% 100%, rgba(59, 130, 246, 0.1) 0%, transparent 60%)' }}>
        <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
          <span className="section-eyebrow">Our Services</span>
          <h1 style={{ fontSize: '4rem', fontWeight: 800, margin: '20px 0', letterSpacing: '-1px' }}>
            Comprehensive <span className="text-gradient">Automotive Care</span>
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto' }}>
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
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '40px', paddingBottom: '20px', borderBottom: '1px solid var(--border-medium)' }}>
                {category.icon}
                <h2 style={{ fontSize: '2.5rem', fontWeight: 700 }}>{category.title}</h2>
              </div>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '30px' }}>
                {category.services.map((service, sIdx) => (
                  <motion.div 
                    key={sIdx} 
                    variants={fadeInUp} 
                    className="detailed-service-card"
                    style={{ 
                      background: 'var(--bg-card)', 
                      border: '1px solid var(--border-light)', 
                      borderRadius: '24px', 
                      padding: '35px',
                      display: 'flex',
                      flexDirection: 'column',
                      transition: 'all 0.3s ease'
                    }}
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
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '15px' }}>
                      <h3 style={{ fontSize: '1.5rem', fontWeight: 600 }}>{service.title}</h3>
                      <span style={{ background: 'rgba(59, 130, 246, 0.1)', color: 'var(--accent-blue)', padding: '6px 12px', borderRadius: '100px', fontSize: '0.9rem', fontWeight: 600 }}>
                        {service.price}
                      </span>
                    </div>
                    <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '25px', flexGrow: 1 }}>
                      {service.desc}
                    </p>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto', paddingTop: '20px', borderTop: '1px solid var(--border-light)' }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                        <Sun size={16} /> Est. Time: {service.time}
                      </span>
                      <Link to={`/service/${service.id}`} style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-primary)', fontWeight: 600, fontSize: '0.95rem' }}>
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
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span className="section-eyebrow">Queries</span>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 800 }}>Service FAQs</h2>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
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
                style={{
                  background: 'var(--bg-glass)',
                  border: '1px solid var(--border-light)',
                  borderRadius: '20px',
                  padding: '30px'
                }}
              >
                <h4 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '10px', color: 'var(--text-primary)' }}>{faq.q}</h4>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: '0 5% 120px' }}>
        <div style={{ 
          background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1))',
          borderRadius: '30px',
          padding: '60px',
          textAlign: 'center',
          maxWidth: '1200px',
          margin: '0 auto',
          border: '1px solid var(--border-medium)',
          boxShadow: 'var(--card-shadow)'
        }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '15px' }}>Not sure what your car needs?</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '30px' }}>
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
