import React, { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CustomCursor = () => {
  const canvasRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [mounted, setMounted] = useState(false);

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  // Dot follows cursor tightly
  const dotX = useSpring(rawX, { stiffness: 800, damping: 60 });
  const dotY = useSpring(rawY, { stiffness: 800, damping: 60 });

  // Glow + spotlight lag behind
  const glowX = useSpring(rawX, { stiffness: 120, damping: 28 });
  const glowY = useSpring(rawY, { stiffness: 120, damping: 28 });

  useEffect(() => {
    setMounted(true);

    const handleMouseMove = (e) => {
      rawX.set(e.clientX);
      rawY.set(e.clientY);
    };

    const handleMouseOver = (e) => {
      const el = e.target;
      setIsHovered(
        el.tagName === "BUTTON" || el.tagName === "A" ||
        !!el.closest("button") || !!el.closest("a")
      );
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  // Draw spotlight mask on canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    let animId;
    const draw = () => {
      const x = glowX.get();
      const y = glowY.get();

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "rgba(10,10,15,0.82)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const grad = ctx.createRadialGradient(x, y, 0, x, y, 130);
      grad.addColorStop(0, "rgba(0,0,0,1)");
      grad.addColorStop(0.5, "rgba(0,0,0,0.6)");
      grad.addColorStop(1, "rgba(0,0,0,0)");

      ctx.globalCompositeOperation = "destination-out";
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(x, y, 130, 0, Math.PI * 2);
      ctx.fill();
      ctx.globalCompositeOperation = "source-over";

      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, [glowX, glowY]);

  if (!mounted) return null;

  return (
    <>
      <style>{`body { cursor: none; } a, button { cursor: none; }`}</style>

      {/* Spotlight mask */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none"
        style={{ zIndex: 9997 }}
      />

      {/* Ambient glow halo */}
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

      {/* Inner dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none rounded-full"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
          zIndex: 9999,
        }}
        animate={{
          width: isHovered ? 14 : 8,
          height: isHovered ? 14 : 8,
          boxShadow: isHovered
            ? "0 0 14px 6px rgba(250,204,21,1), 0 0 40px 14px rgba(250,204,21,0.5), 0 0 80px 30px rgba(250,204,21,0.2)"
            : "0 0 8px 3px rgba(250,204,21,0.9), 0 0 20px 6px rgba(250,204,21,0.4)",
        }}
        transition={{ duration: 0.15 }}
        style={{
          backgroundColor: "#facc15",
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
          zIndex: 9999,
        }}
      />
    </>
  );
};

export default CustomCursor;