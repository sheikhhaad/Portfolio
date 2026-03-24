import React, { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CustomCursor = () => {
  const canvasRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [mounted, setMounted] = useState(false);

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  const dotX = useSpring(rawX, { stiffness: 800, damping: 60 });
  const dotY = useSpring(rawY, { stiffness: 800, damping: 60 });

  const glowX = useSpring(rawX, { stiffness: 120, damping: 28 });
  const glowY = useSpring(rawY, { stiffness: 120, damping: 28 });

  useEffect(() => {
    setMounted(true);

    const handleMouseMove = (e) => {
      rawX.set(e.clientX);
      rawY.set(e.clientY);
    };

    const handleHover = (e) => {
      const el = e.target;
      const interactive = el.closest(
        "a, button, input, textarea, select, [role='button']"
      );
      setIsHovered(!!interactive);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleHover);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleHover);
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("3d");

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    let raf;

    const draw = () => {
      const x = glowX.get();
      const y = glowY.get();
      const radius = Math.min(window.innerWidth, window.innerHeight) * 0.12;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "rgba(10,10,15,0.82)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const grad = ctx.createRadialGradient(x, y, 0, x, y, radius);
      grad.addColorStop(0, "rgba(0,0,0,1)");
      grad.addColorStop(0.5, "rgba(0,0,0,0.6)");
      grad.addColorStop(1, "rgba(0,0,0,0)");

      ctx.globalCompositeOperation = "destination-out";
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fill();
      ctx.globalCompositeOperation = "source-over";

      raf = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, [glowX, glowY]);

  if (!mounted || typeof window === "undefined") return null;

  return (
    <>
      <style>{`body { cursor: none; }`}</style>

      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none"
        style={{ zIndex: 9997 }}
      />

      {/* Glow */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none rounded-full"
        style={{
          x: glowX,
          y: glowY,
          width: 180,
          height: 180,
          translateX: "-50%",
          translateY: "-50%",
          background:
            "radial-gradient(circle, rgba(250,204,21,0.18) 0%, rgba(250,204,21,0.07) 40%, transparent 70%)",
          zIndex: 9998,
        }}
      />

      {/* Dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none rounded-full"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
          backgroundColor: "#facc15",
          zIndex: 9999,
        }}
        animate={{
          width: isHovered ? 14 : 8,
          height: isHovered ? 14 : 8,
          boxShadow: isHovered
            ? "0 0 14px 6px rgba(250,204,21,1), 0 0 40px 14px rgba(250,204,21,0.5)"
            : "0 0 8px 3px rgba(250,204,21,0.9)",
        }}
        transition={{ duration: 0.15 }}
      />
    </>
  );
};

export default CustomCursor;