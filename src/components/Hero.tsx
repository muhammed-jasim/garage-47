import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import HeroCanvas from './HeroCanvas';

gsap.registerPlugin(ScrollTrigger);

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const stages = gsap.utils.toArray('.hero-content-stage');
    
    stages.forEach((stage: any, i) => {
      const isLast = i === stages.length - 1;
      
      // Initial state
      gsap.set(stage, { opacity: i === 0 ? 1 : 0, y: i === 0 ? 0 : 50 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: `${(i / stages.length) * 100}% top`,
          end: `${((i + 1) / stages.length) * 100}% top`,
          scrub: true,
        }
      });

      if (i > 0) {
        // Fade in
        tl.to(stage, { opacity: 1, y: 0, duration: 1 });
      }

      if (!isLast) {
        // Fade out
        tl.to(stage, { opacity: 0, y: -50, filter: 'blur(10px)', duration: 1 }, "+=0.5");
      }
    });

  }, []);

  const contentStages = [
    {
      subtitle: "Mastery in Motion",
      title: "Precision Bodywork & Paint",
      desc: "Experience the pinnacle of automotive restoration and protection. Our laboratory-grade facility in Calicut brings futuristic care to your vehicle."
    },
    {
      subtitle: "Molecular Protection",
      title: "Nano-Tech Shielding",
      desc: "We utilize aerospace-grade nano-materials that bond at the molecular level to create a permanent, high-gloss shield for your vehicle."
    },
    {
      subtitle: "Uncompromising Quality",
      title: "Artisanal Finish",
      desc: "Every vehicle that leaves our workshop is a testament to meticulous attention to detail and absolute perfection."
    },
    {
      subtitle: "Futuristic Facility",
      title: "The Advanced Lab",
      desc: "Step into the future of automotive care. Our workshop is engineered for precision, ensuring your car gets the treatment it deserves."
    }
  ];

  return (
    <section 
      ref={containerRef} 
      className="hero-scroll-section" 
      style={{ height: '500vh', position: 'relative', background: 'transparent', paddingTop: '100px' }}
    >
      <div 
        className="sticky-wrapper" 
        style={{ 
          position: 'sticky', 
          top: '110px', 
          height: '80vh', 
          width: '92%', 
          margin: '0 auto',
          overflow: 'hidden',
          borderRadius: '40px',
          background: 'var(--hero-bg)',
          backdropFilter: 'blur(20px)',
          border: '1px solid var(--border-medium)',
          boxShadow: 'var(--card-shadow)'
        }}
      >
        <div className="hero-grid" style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 1fr',
          height: '100%',
          width: '100%',
        }}>
          <div className="hero-content-side" style={{ 
            zIndex: 10, 
            padding: '60px',
            position: 'relative',
            display: 'grid',
            placeItems: 'center',
            textAlign: 'center',
            background: 'var(--hero-overlay)'
          }}>
            {contentStages.map((stage, idx) => (
              <div 
                key={idx} 
                className="hero-content-stage"
                style={{
                  gridArea: '1 / 1',
                  width: '100%',
                  padding: '0 60px',
                  pointerEvents: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  opacity: idx === 0 ? 1 : 0,
                  transform: idx === 0 ? 'none' : 'translateY(50px)'
                }}
              >
                <span 
                  className="hero-subtitle"
                  style={{ 
                    display: 'block', 
                    marginBottom: '20px', 
                    letterSpacing: '5px',
                    textTransform: 'uppercase',
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    color: 'var(--accent-blue)',
                    textAlign: 'center'
                  }}
                >
                  {stage.subtitle}
                </span>
                <h1 
                  className="hero-title"
                  style={{ 
                    fontSize: 'clamp(2rem, 5vw, 4rem)', 
                    fontWeight: 900, 
                    color: 'var(--text-primary)',
                    lineHeight: 1.1,
                    letterSpacing: '-2px',
                    margin: 0,
                    textAlign: 'center'
                  }}
                >
                  {stage.title.split('&').map((part, i) => (
                    <React.Fragment key={i}>
                      {i > 0 && <br />}
                      {i > 0 ? <span className="text-gradient">& {part}</span> : part}
                    </React.Fragment>
                  ))}
                </h1>
                <p
                  style={{ 
                    color: 'var(--text-secondary)', 
                    marginTop: '24px', 
                    fontSize: '1.1rem', 
                    maxWidth: '500px',
                    textAlign: 'center',
                    margin: '24px auto 0' 
                  }}
                >
                  {stage.desc}
                </p>
              </div>
            ))}
          </div>
          
          <div className="hero-visual-side" style={{ position: 'relative', overflow: 'hidden' }}>
            <HeroCanvas scrollTriggerElement={containerRef.current || undefined} />
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 1024px) {
          .hero-scroll-section {
            padding-top: 80px !important;
          }
          .sticky-wrapper {
            width: 95% !important;
            height: 85vh !important;
            top: 90px !important;
          }
          .hero-grid {
            grid-template-columns: 1fr !important;
            grid-template-rows: 1.2fr 1fr !important;
          }
          .hero-content-side {
            padding: 40px 30px !important;
            background: var(--hero-overlay-mobile) !important;
            height: 100% !important;
          }
          .hero-title {
            font-size: 2.8rem !important;
          }
          .hero-content-stage {
            padding: 0 20px !important;
            text-align: center !important;
            align-items: center !important;
          }
        }

        @media (max-width: 768px) {
          .hero-scroll-section {
            padding-top: 60px !important;
          }
          .hero-title {
            font-size: 2.2rem !important;
          }
          .hero-content-side {
            padding: 30px 20px !important;
          }
          .hero-content-stage {
            padding: 0 10px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
