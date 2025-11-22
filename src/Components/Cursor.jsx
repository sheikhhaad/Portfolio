// Components/AdvancedCursor.jsx
import React, { useState, useEffect } from 'react';

const AdvancedCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [trails, setTrails] = useState([]);

  useEffect(() => {
    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      // Trail effect के लिए
      setTrails(prev => [
        { x: e.clientX, y: e.clientY, id: Date.now() },
        ...prev.slice(0, 5) // Last 5 positions
      ]);
    };

    const onMouseLeave = () => setHidden(true);
    const onMouseEnter = () => setHidden(false);
    const onMouseDown = () => setClicked(true);
    const onMouseUp = () => setClicked(false);

    // Hover detection
    const hoverables = document.querySelectorAll('a, button, [role="button"]');
    const onHover = () => setHovered(true);
    const onHoverOut = () => setHovered(false);

    hoverables.forEach(el => {
      el.addEventListener('mouseenter', onHover);
      el.addEventListener('mouseleave', onHoverOut);
    });

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);
    document.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mouseup', onMouseUp);

    // Cleanup trails
    const interval = setInterval(() => {
      setTrails(prev => prev.slice(0, 3));
    }, 100);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseup', onMouseUp);
      
      hoverables.forEach(el => {
        el.removeEventListener('mouseenter', onHover);
        el.removeEventListener('mouseleave', onHoverOut);
      });
      
      clearInterval(interval);
    };
  }, []);

  // Main cursor
  const cursorClasses = `
    fixed w-2 h-2 bg-[#2DE72c] rounded-full pointer-events-none z-[9999]
    transform -translate-x-1/2 -translate-y-1/2 transition-all duration-75
    mix-blend-difference
    ${hidden ? 'opacity-0 scale-0' : 'opacity-100 scale-100'}
    ${clicked ? 'scale-50 bg-[#ff4500]' : ''}
    ${hovered ? 'scale-150' : ''}
  `;

  // Outline
  const outlineClasses = `
    fixed w-10 h-10 border border-[#2DE72c] rounded-full pointer-events-none z-[9998]
    transform -translate-x-1/2 -translate-y-1/2 transition-all duration-200 ease-out
    mix-blend-difference
    ${hidden ? 'opacity-0 scale-0' : 'opacity-100 scale-100'}
    ${clicked ? 'scale-125 border-[#ff4500] bg-[#ff4500]/10 border-2' : ''}
    ${hovered ? 'scale-175 bg-[#2DE72c]/10 border-[#2DE72c]' : ''}
  `;

  return (
    <>
      {/* Trail effects */}
      {trails.map((trail, index) => (
        <div
          key={trail.id}
          className="fixed w-1 h-1 bg-[#2DE72c]/30 rounded-full pointer-events-none z-[9997] transform -translate-x-1/2 -translate-y-1/2"
          style={{
            left: `${trail.x}px`,
            top: `${trail.y}px`,
            opacity: 0.3 - (index * 0.1),
            scale: 1 - (index * 0.2),
          }}
        />
      ))}
      
      {/* Main cursor */}
      <div className={outlineClasses} style={{ left: position.x, top: position.y }} />
      <div className={cursorClasses} style={{ left: position.x, top: position.y }} />
    </>
  );
};

export default AdvancedCursor;