import { ArrowRight, ArrowLeft, Play, Eye } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

export default function Home() {
  return (
    <>
      <section className="hero" id="home">
        <div className="hero-video-wrapper">
          <img src="https://images.unsplash.com/photo-1600705722908-bab1e61c0b4d?auto=format&fit=crop&q=80" alt="Hero Background" className="hero-video" />
          <div className="hero-video-overlay"></div>
        </div>
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

      {/* About Section */}
      <section className="about-section" id="about">
        <motion.div 
          className="about-container"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div className="about-image-wrapper" variants={fadeInUp}>
            <div className="about-logo-glow"></div>
            <img src="/dp.jpg" alt="Garage 47 Logo" className="about-logo" />
            <div className="about-stats-card">
              <span className="stat-number">10+</span>
              <span className="stat-label">Years of<br/>Excellence</span>
            </div>
          </motion.div>
          <motion.div className="about-content" variants={fadeInUp}>
            <span className="section-eyebrow">Our Story</span>
            <h2 className="section-title">Redefining <br/><span className="text-gradient">Perfection</span></h2>
            <p className="about-desc">
              Garage 47 Calicut is the ultimate destination for premium car detailing, paint correction, and ceramic coating. Our team of expert artisans combines cutting-edge technology with meticulous attention to detail to transform your vehicle into a masterpiece.
            </p>
            <p className="about-desc">
              With a commitment to excellence and a passion for automotive aesthetics, we ensure every car that leaves our workshop is a testament to our craftsmanship.
            </p>
            <div className="about-features">
              <div className="feature-item">
                <div className="feature-icon-wrapper">✓</div>
                <span>Certified Detailers</span>
              </div>
              <div className="feature-item">
                <div className="feature-icon-wrapper">✓</div>
                <span>Premium Products</span>
              </div>
              <div className="feature-item">
                <div className="feature-icon-wrapper">✓</div>
                <span>100% Satisfaction</span>
              </div>
              <div className="feature-item">
                <div className="feature-icon-wrapper">✓</div>
                <span>Advanced Tech</span>
              </div>
            </div>
            <button className="btn mt-4">Discover More <ArrowRight size={18} /></button>
          </motion.div>
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
          <button className="btn btn-glass">View All <ArrowRight size={18} /></button>
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

      <section className="partners">
        {['NGK', 'Toyota', 'FIAT', 'Jeep', 'MG Motors', 'Audi'].map((partner, idx) => (
          <div className="partner-logo" key={idx}>{partner}</div>
        ))}
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
            <h2 className="section-title">Recent Works</h2>
          </div>
          <div className="nav-actions">
            <button className="nav-btn"><ArrowLeft size={20} /></button>
            <button className="nav-btn"><ArrowRight size={20} /></button>
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
    </>
  );
}
