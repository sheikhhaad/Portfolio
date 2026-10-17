import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CustomCursor = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Smooth springs for high performance cursor tracking
  const springX = useSpring(cursorX, { stiffness: 600, damping: 45 });
  const springY = useSpring(cursorY, { stiffness: 600, damping: 45 });

  const ringSpringX = useSpring(cursorX, { stiffness: 180, damping: 28 });
  const ringSpringY = useSpring(cursorY, { stiffness: 180, damping: 28 });

  useEffect(() => {
    // Check for touch device / coarse pointer
    if (window.matchMedia("(pointer: coarse)").matches || "ontouchstart" in window) {
      setIsTouchDevice(true);
      return;
    }

    const handleMouseMove = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleHover = (e) => {
      const el = e.target;
      const interactive = el.closest("a, button, input, textarea, select, [role='button'], .cursor-pointer");
      setIsHovered(!!interactive);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("mouseover", handleHover, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("mouseover", handleHover);
    };
  }, [cursorX, cursorY, isVisible]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <>
      <style>{`
        @media (pointer: fine) {
          * {
            cursor: default;
          }
          a, button, input, textarea, [role='button'], .cursor-pointer {
            cursor: pointer;
          }
        }
      `}</style>

      {/* Outer Cosmic Halo Ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none rounded-full z-[9998]"
        style={{
          x: ringSpringX,
          y: ringSpringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: isHovered ? 48 : 28,
          height: isHovered ? 48 : 28,
          borderColor: isHovered ? "rgba(0, 255, 0, 0.7)" : "rgba(255, 255, 255, 0.25)",
          borderWidth: isHovered ? "1.5px" : "1px",
          backgroundColor: isHovered ? "rgba(0, 255, 0, 0.08)" : "transparent",
          boxShadow: isHovered ? "0 0 20px rgba(0, 255, 0, 0.3)" : "none",
        }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      />

      {/* Inner Emerald Core Dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none rounded-full z-[9999]"
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
          backgroundColor: "#00FF00",
        }}
        animate={{
          width: isHovered ? 6 : 5,
          height: isHovered ? 6 : 5,
          boxShadow: "0 0 10px #00FF00, 0 0 20px rgba(0,255,0,0.6)",
        }}
        transition={{ duration: 0.15 }}
      />
    </>
  );
};

export default CustomCursor;