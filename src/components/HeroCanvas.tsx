import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface HeroCanvasProps {
  scrollTriggerElement?: string | HTMLElement;
}

const HeroCanvas: React.FC<HeroCanvasProps> = ({ scrollTriggerElement = "body" }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const stRef = useRef<any>(null);
  const frameCount = 240;
  
  const currentFrame = (index: number) =>
    `/images/hero/ezgif-frame-${(index + 1).toString().padStart(3, '0')}.png`;

  useEffect(() => {
    let loadedCount = 0;
    const preloadImages = async () => {
      const loadedImages: HTMLImageElement[] = new Array(frameCount);
      
      // Load first frame immediately
      const loadFirstFrame = () => {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = currentFrame(0);
          img.onload = () => {
            loadedImages[0] = img;
            setImages([...loadedImages]);
            setIsLoaded(true); // Show canvas as soon as first frame is ready
            resolve(null);
          };
          img.onerror = resolve;
        });
      };

      await loadFirstFrame();

      // Load remaining images in chunks to avoid blocking
      const loadRemaining = async () => {
        const batchSize = 10;
        for (let i = 1; i < frameCount; i += batchSize) {
          const batchPromises = [];
          for (let j = i; j < Math.min(i + batchSize, frameCount); j++) {
            const img = new Image();
            img.src = currentFrame(j);
            loadedImages[j] = img;
            batchPromises.push(new Promise((resolve) => {
              img.onload = () => {
                loadedCount++;
                setLoadingProgress(Math.round((loadedCount / frameCount) * 100));
                resolve(null);
              };
              img.onerror = () => {
                loadedCount++;
                resolve(null);
              };
            }));
          }
          await Promise.all(batchPromises);
          setImages([...loadedImages]); // Update images array after each batch
        }
      };

      loadRemaining();
    };

    preloadImages();
  }, []);

  useEffect(() => {
    if (images.length === 0 || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const context = canvas.getContext('2d', { alpha: false });
    if (!context) return;

    const render = (index: number) => {
      if (images[index]) {
        const img = images[index];
        context.imageSmoothingEnabled = true;
        context.imageSmoothingQuality = 'high';
        
        const canvasAspect = canvas.width / canvas.height;
        const imgAspect = img.width / img.height;
        
        let drawWidth, drawHeight, offsetX, offsetY;
        
        // Add a subtle scale effect based on progress if available
        const scale = 1 + (stRef.current?.progress || 0) * 0.05;
        
        if (canvasAspect > imgAspect) {
          drawWidth = canvas.width * scale;
          drawHeight = (canvas.width / imgAspect) * scale;
          offsetX = (canvas.width - drawWidth) / 2;
          offsetY = (canvas.height - drawHeight) / 2;
        } else {
          drawWidth = (canvas.height * imgAspect) * scale;
          drawHeight = canvas.height * scale;
          offsetX = (canvas.width - drawWidth) / 2;
          offsetY = (canvas.height - drawHeight) / 2;
        }
        
        context.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
      }
    };


    const air = { frame: -1 };

    const handleResize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const parent = canvas.parentElement;
      if (!parent) return;

      const rect = parent.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      
      // Force re-render on resize
      if (air.frame >= 0) render(air.frame);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    // Initial render
    render(0);
    air.frame = 0;

    const st = ScrollTrigger.create({
      trigger: scrollTriggerElement,
      start: "top top",
      end: "bottom bottom",
      scrub: 1, // Faster scrub for better responsiveness
      onUpdate: (self) => {
        const frameIndex = Math.min(
          frameCount - 1, 
          Math.max(0, Math.floor(self.progress * (frameCount - 1)))
        );
        
        if (air.frame !== frameIndex) {
          air.frame = frameIndex;
          requestAnimationFrame(() => render(frameIndex));
        }
      }
    });

    stRef.current = st;

    return () => {
      window.removeEventListener('resize', handleResize);
      st.kill();
    };
  }, [images, scrollTriggerElement]);

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      {!isLoaded && (
        <div className="canvas-loader" style={{
          position: 'absolute',
          inset: 0,
          background: 'var(--bg-color)',
          zIndex: 9999,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'var(--text-primary)',
          fontFamily: 'var(--base-font)'
        }}>
          <div style={{ width: '100px', height: '2px', background: 'rgba(255,255,255,0.1)', borderRadius: '2px', overflow: 'hidden' }}>
            <div style={{ width: `${loadingProgress}%`, height: '100%', background: 'var(--accent-blue)', transition: 'width 0.3s ease' }}></div>
          </div>
        </div>
      )}
      <div className="canvas-vignette" style={{
        position: 'absolute',
        inset: 0,
        background: 'var(--bento-overlay, radial-gradient(circle, transparent 40%, rgba(0,0,0,0.5) 100%))',
        zIndex: 1,
        pointerEvents: 'none'
      }}></div>
      <canvas
        ref={canvasRef}
        className="hero-canvas"
        style={{
          display: 'block',
          width: '100%',
          height: '100%',
          zIndex: 0,
          pointerEvents: 'none',
          opacity: isLoaded ? 1 : 0,
          transition: 'opacity 1s ease',
          backgroundColor: 'transparent'
        }}
      />
    </div>
  );
};

export default HeroCanvas;
