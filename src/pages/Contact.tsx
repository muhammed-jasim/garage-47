import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';



const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

export default function Contact() {
  return (
    <div className="contact-page" style={{ paddingTop: '100px', backgroundColor: 'var(--bg-color)', minHeight: '100vh' }}>
      
      {/* Page Hero */}
      <section className="page-hero" style={{ padding: '80px 5%', textAlign: 'center', background: 'radial-gradient(circle at 50% 100%, rgba(59, 130, 246, 0.1) 0%, transparent 60%)' }}>
        <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
          <span className="section-eyebrow">Get In Touch</span>
          <h1 style={{ fontSize: '4rem', fontWeight: 800, margin: '20px 0', letterSpacing: '-1px' }}>
            Contact <span className="text-gradient">Garage 47</span>
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto' }}>
            Have a question about our services or ready to book your appointment? We're here to help you achieve the perfect finish for your vehicle.
          </p>
        </motion.div>
      </section>

      {/* Contact Info & Form Section */}
      <section style={{ padding: '60px 5%' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', gap: '60px', flexWrap: 'wrap' }}>
          
          {/* Contact Details */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            style={{ flex: '1 1 400px' }}
          >
            <motion.h2 variants={fadeInUp} style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '30px' }}>
              Reach Out to Us
            </motion.h2>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
              <motion.div variants={fadeInUp} style={{ display: 'flex', gap: '20px' }}>
                <div style={{ background: 'var(--bg-card)', width: '60px', height: '60px', borderRadius: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--border-light)' }}>
                  <MapPin size={28} className="text-gradient" />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '5px' }}>Location</h4>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>Calicut, Kerala<br />India</p>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} style={{ display: 'flex', gap: '20px' }}>
                <div style={{ background: 'var(--bg-card)', width: '60px', height: '60px', borderRadius: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--border-light)' }}>
                  <Phone size={28} className="text-gradient" />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '5px' }}>Phone</h4>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>+91 9497354185<br />+91 9207297029</p>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} style={{ display: 'flex', gap: '20px' }}>
                <div style={{ background: 'var(--bg-card)', width: '60px', height: '60px', borderRadius: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--border-light)' }}>
                  <Mail size={28} className="text-gradient" />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '5px' }}>Email</h4>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>info@garage47.com</p>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} style={{ display: 'flex', gap: '20px' }}>
                <div style={{ background: 'var(--bg-card)', width: '60px', height: '60px', borderRadius: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--border-light)' }}>
                  <Clock size={28} className="text-gradient" />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '5px' }}>Working Hours</h4>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>Mon - Sat: 9:00 AM - 7:00 PM<br />Sunday: Closed</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            style={{ flex: '1 1 500px', background: 'var(--bg-card)', padding: '40px', borderRadius: '24px', border: '1px solid var(--border-light)' }}
          >
            <h3 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '25px' }}>Send us a Message</h3>
            <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                <div style={{ flex: '1 1 200px' }}>
                  <label style={{ display: 'block', marginBottom: '8px', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Full Name</label>
                  <input type="text" placeholder="John Doe" style={{ width: '100%', padding: '14px 20px', borderRadius: '12px', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-medium)', color: '#fff', fontSize: '1rem', outline: 'none' }} />
                </div>
                <div style={{ flex: '1 1 200px' }}>
                  <label style={{ display: 'block', marginBottom: '8px', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Phone Number</label>
                  <input type="tel" placeholder="+91 XXXXX XXXXX" style={{ width: '100%', padding: '14px 20px', borderRadius: '12px', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-medium)', color: '#fff', fontSize: '1rem', outline: 'none' }} />
                </div>
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Email Address</label>
                <input type="email" placeholder="john@example.com" style={{ width: '100%', padding: '14px 20px', borderRadius: '12px', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-medium)', color: '#fff', fontSize: '1rem', outline: 'none' }} />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Service Needed</label>
                <select style={{ width: '100%', padding: '14px 20px', borderRadius: '12px', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-medium)', color: '#fff', fontSize: '1rem', outline: 'none', appearance: 'none' }}>
                  <option value="" disabled selected>Select a service</option>
                  <option value="ceramic">Ceramic Coating</option>
                  <option value="ppf">Paint Protection Film</option>
                  <option value="detailing">Interior Detailing</option>
                  <option value="correction">Paint Correction</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Message</label>
                <textarea rows={4} placeholder="Tell us about your vehicle..." style={{ width: '100%', padding: '14px 20px', borderRadius: '12px', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-medium)', color: '#fff', fontSize: '1rem', outline: 'none', resize: 'vertical' }}></textarea>
              </div>
              <button type="submit" className="btn" style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px', marginTop: '10px' }}>
                Send Request <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Google Map Section */}
      <section style={{ padding: '0 5% 120px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            style={{ 
              borderRadius: '30px', 
              overflow: 'hidden',
              border: '1px solid var(--border-light)',
              height: '450px',
              boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
            }}
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15654.516805177264!2d75.7621419!3d11.2514101!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba65938563d4747%3A0x32150641ca32ecab!2sKozhikode%2C%20Kerala%2C%20India!5e0!3m2!1sen!2sus!4v1714652431012!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
