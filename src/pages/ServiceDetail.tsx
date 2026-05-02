import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { useEffect } from 'react';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

export default function ServiceDetail() {
  const { id } = useParams();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);
  
  const servicesData: Record<string, any> = {
    '1': {
      title: 'Interior Detailing',
      image: 'https://images.unsplash.com/photo-1600705722908-bab1e61c0b4d?auto=format&fit=crop&q=80',
      processImg1: 'https://images.unsplash.com/photo-1618683569769-e092b77e8a34?auto=format&fit=crop&q=80',
      processImg2: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80',
      description1: 'Our premium interior detailing service is designed to bring your car’s cabin back to its factory-fresh glory. We meticulously clean every inch of the interior, from the dashboard and console to the seats and carpets, using specialized tools and pH-balanced cleaners.',
      description2: 'We tackle stubborn stains, odors, and hidden dust that accumulate over time. Leather seats are carefully conditioned to prevent cracking and restore their natural suppleness, while fabric surfaces undergo deep extraction cleaning to remove ingrained dirt.',
      description3: 'Whether you are preparing for a sale or just want a pristine driving environment, our interior detailing provides a hygienic, fresh-smelling, and visually stunning cabin that enhances your daily driving experience.',
      benefits: ['Deep extraction cleaning', 'Leather conditioning & protection', 'Odor elimination & sanitization', 'Dashboard & trim restoration', 'Streak-free interior glass cleaning']
    },
    '2': {
      title: 'Polishing',
      image: 'https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&q=80',
      processImg1: 'https://images.unsplash.com/photo-1620601438965-ea9e79822aef?auto=format&fit=crop&q=80',
      processImg2: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80',
      description1: 'Our multi-stage polishing and paint correction service is the ultimate solution for restoring your vehicle’s exterior shine. Over time, paint can become dull and marred by swirl marks, light scratches, and oxidation.',
      description2: 'We utilize advanced dual-action polishers and a range of premium cutting compounds to safely level the clear coat, permanently removing imperfections rather than just hiding them with fillers.',
      description3: 'The result is a mirror-like finish with unparalleled depth and clarity. This service is highly recommended as a preparatory step before applying ceramic coatings, ensuring the paint is flawless before it gets sealed in.',
      benefits: ['Multi-stage paint correction', 'Removal of swirl marks & light scratches', 'Restores paint depth and gloss', 'Removes oxidation and water spots', 'Prepares surface for coatings']
    },
    '3': {
      title: 'Car Wash',
      image: 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&q=80',
      processImg1: 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&q=80',
      processImg2: 'https://images.unsplash.com/photo-1503376712341-ea43100ca416?auto=format&fit=crop&q=80',
      description1: 'Experience the difference of a professional hand wash. Unlike automated car washes that can inflict micro-scratches and swirl marks, our meticulous hand wash process is completely safe for your vehicle’s delicate clear coat.',
      description2: 'We use the two-bucket method with grit guards, ultra-soft microfiber mitts, and pH-neutral snow foam to gently lift and wash away dirt and grime without damaging the paint.',
      description3: 'Every wash includes a thorough cleaning of the wheel faces, barrels, and tires, followed by a safe, scratch-free drying process using plush microfiber towels and forced air to remove water from crevices.',
      benefits: ['Safe, scratch-free hand wash', 'pH-neutral snow foam pre-soak', 'Two-bucket wash method', 'Wheel and tire deep clean', 'Air and microfiber drying']
    },
    '4': {
      title: 'Ceramic Coating',
      image: 'https://images.unsplash.com/photo-1632823462996-05cdabac5516?auto=format&fit=crop&q=80',
      processImg1: 'https://images.unsplash.com/photo-1618683569769-e092b77e8a34?auto=format&fit=crop&q=80',
      processImg2: 'https://images.unsplash.com/photo-1620601438965-ea9e79822aef?auto=format&fit=crop&q=80',
      description1: 'Ceramic coating is the ultimate protection for your vehicle’s exterior. It forms a semi-permanent, high-gloss, hydrophobic shield over your paint, protecting it from environmental contaminants, UV rays, and harsh chemicals.',
      description2: 'Unlike traditional waxes or sealants that wash away after a few months, our professional-grade ceramic coatings bond with the clear coat, providing years of durable protection and making routine maintenance incredibly easy.',
      description3: 'The intense hydrophobic properties ensure that water and dirt slide right off the surface. Your car will stay cleaner for longer and boast an extreme, candy-like gloss that turns heads everywhere you go.',
      benefits: ['Years of durable protection', 'Extreme hydrophobic properties', 'Protection against UV rays & oxidation', 'Chemical and stain resistance', 'Incredible high-gloss finish']
    }
  };

  const serviceId = id && servicesData[id] ? id : '1';
  const service = servicesData[serviceId];

  // Get related services (exclude current)
  const relatedServices = Object.entries(servicesData)
    .filter(([key]) => key !== serviceId)
    .slice(0, 3)
    .map(([key, value]) => ({ id: key, ...value }));

  return (
    <motion.div 
      className="detail-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="detail-header">
        <Link to="/" style={{ color: 'var(--accent-blue)', display: 'inline-flex', alignItems: 'center', gap: '5px', marginBottom: '20px', fontWeight: 600 }}>
           <ArrowRight size={16} style={{ transform: 'rotate(180deg)' }}/> Back to Home
        </Link>
        <motion.h1 
          className="section-title"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          {service.title}
        </motion.h1>
      </div>

      <motion.div 
        className="detail-img-container"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <img src={service.image} alt={service.title} />
      </motion.div>

      <div className="detail-content">
        <motion.div 
          className="detail-main"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.h2 variants={fadeInUp} style={{ fontSize: '2rem', marginBottom: '20px' }}>Excellence in Every Detail</motion.h2>
          <motion.p variants={fadeInUp}>{service.description1}</motion.p>
          
          <motion.img 
             variants={fadeInUp} 
             src={service.processImg1} 
             alt="process" 
             style={{ width: '100%', height: '350px', objectFit: 'cover', borderRadius: '16px', margin: '20px 0 30px' }} 
          />
          
          <motion.p variants={fadeInUp}>{service.description2}</motion.p>
          <motion.p variants={fadeInUp}>{service.description3}</motion.p>
          
          <motion.img 
             variants={fadeInUp} 
             src={service.processImg2} 
             alt="process" 
             style={{ width: '100%', height: '350px', objectFit: 'cover', borderRadius: '16px', margin: '20px 0 30px' }} 
          />
        </motion.div>

        <motion.aside 
          className="detail-sidebar"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <h3>Service Benefits</h3>
          <ul>
            {service.benefits.map((benefit: string, idx: number) => (
              <li key={idx}><CheckCircle2 color="var(--accent-blue)" size={20} style={{ flexShrink: 0 }} /> {benefit}</li>
            ))}
          </ul>
          
          <div style={{ padding: '30px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '12px', textAlign: 'center', marginTop: '40px' }}>
             <h4 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>Ready to Book?</h4>
             <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '20px' }}>Secure your spot today.</p>
             <button className="btn" style={{ width: '100%', justifyContent: 'center' }}>Book Appointment</button>
          </div>
        </motion.aside>
      </div>

      <motion.div 
        className="related-services"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
      >
        <div className="section-title-wrapper" style={{ marginBottom: '40px' }}>
          <span className="section-eyebrow">Explore</span>
          <h2 style={{ fontSize: '2.5rem' }}>Related Services</h2>
        </div>
        
        <div className="services-grid">
          {relatedServices.map((srv, idx) => (
             <motion.div variants={fadeInUp} key={idx} className="service-card-wrapper">
               <Link to={`/service/${srv.id}`} className="service-card">
                 <div className="service-img-wrapper" style={{ height: '200px' }}>
                   <img src={srv.image} alt={srv.title} className="service-img" />
                   <div className="service-overlay"></div>
                 </div>
                 <div className="service-content" style={{ marginTop: '-20px', padding: '20px' }}>
                   <div className="service-header" style={{ marginBottom: '10px' }}>
                     <span className="service-number">0{srv.id}</span>
                     <ArrowRight className="service-arrow" size={20} />
                   </div>
                   <div className="service-info">
                     <h3 style={{ fontSize: '1.4rem' }}>{srv.title}</h3>
                   </div>
                 </div>
               </Link>
             </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
