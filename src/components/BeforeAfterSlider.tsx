import { useState, useRef, useEffect, useCallback } from 'react';
import './BeforeAfterSlider.css';

interface Props {
  beforeImage: string;
  afterImage: string;
}

export default function BeforeAfterSlider({ beforeImage, afterImage }: Props) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const { left, width } = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - left, width));
    const percent = (x / width) * 100;
    setSliderPosition(percent);
  }, []);

  const onMouseDown = () => setIsDragging(true);
  const onTouchStart = () => setIsDragging(true);

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) handleMove(e.clientX);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (isDragging) handleMove(e.touches[0].clientX);
    };

    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging, handleMove]);

  return (
    <div 
      className={`before-after-slider ${isDragging ? 'dragging' : ''}`} 
      ref={containerRef}
      onMouseDown={onMouseDown}
      onTouchStart={onTouchStart}
    >
      <div className="slider-label before-label">Before</div>
      <div className="slider-label after-label">After</div>
      
      <img 
        src={beforeImage} 
        alt="Before" 
        className="image-base" 
        loading="lazy"
      />
      
      <img 
        src={afterImage} 
        alt="After" 
        className="image-clip" 
        loading="lazy"
        style={{ 
          clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
        }}
      />
      
      <div 
        className="slider-line" 
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="slider-handle">
          <div className="handle-line"></div>
          <div className="slider-button">
            <div className="slider-button-glow"></div>
            <div className="arrows">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </div>
          </div>
          <div className="handle-line"></div>
        </div>
        
        <div className="slider-status">
          <div className="status-dot"></div>
          {isDragging ? 'ANALYZING' : 'SCANNING'}
        </div>
      </div>
    </div>
  );
}
