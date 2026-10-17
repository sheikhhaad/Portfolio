// src/Components/CosmicHeroVisual.jsx
import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import cosmicHeroImg from "../assets/cosmic/cosmic-hero.jpg";
import metallicDiscImg from "../assets/cosmic/metallic-disc.jpg";
import { Sparkles, Terminal, Cpu } from "lucide-react";

// Interactive 3D Metallic Ring & Floating Particles
function FloatingChromeObject() {
  const meshRef = useRef();
  const ringRef = useRef();

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.4;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
    }
    if (ringRef.current) {
      ringRef.current.rotation.z -= delta * 0.25;
      ringRef.current.rotation.x += delta * 0.15;
    }
  });

  return (
    <group>
      {/* Central Floating Chrome Torus / Orbital Ring */}
      <Float speed={2} rotationIntensity={0.8} floatIntensity={1.2}>
        <mesh ref={meshRef} position={[0, 0, 0]}>
          <torusGeometry args={[1.1, 0.04, 32, 100]} />
          <meshStandardMaterial
            color="#E2E8F0"
            metalness={0.95}
            roughness={0.15}
            wireframe={false}
          />
        </mesh>
      </Float>

      {/* Secondary Outer Inclined Ring */}
      <mesh ref={ringRef} rotation={[Math.PI / 3, Math.PI / 6, 0]}>
        <torusGeometry args={[1.5, 0.02, 16, 100]} />
        <meshStandardMaterial
          color="#00FF00"
          emissive="#00FF00"
          emissiveIntensity={0.4}
          metalness={0.8}
          roughness={0.3}
        />
      </mesh>
    </group>
  );
}

const CosmicHeroVisual = () => {
  const containerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  // Parallax spring values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [15, -15]), {
    stiffness: 150,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]), {
    stiffness: 150,
    damping: 20,
  });

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-[560px] aspect-square mx-auto flex items-center justify-center select-none"
      style={{ perspective: 1200 }}
    >
      {/* Background Cosmic Energy Aura */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-accent/20 via-white/5 to-accent/10 blur-[80px] -z-10 animate-pulse-glow" />

      {/* Main 3D Tilted Showcase Container */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative w-full h-full flex items-center justify-center p-6"
      >
        {/* Layer 1: Holographic Frame Ring */}
        <div className="absolute inset-4 rounded-full border border-white/10 glass-chrome -z-10 shadow-[0_0_50px_rgba(0,0,0,0.8)]">
          <div className="absolute -inset-1 rounded-full border border-accent/20 border-dashed animate-spin-slow pointer-events-none" />
        </div>

        {/* Layer 2: Ethereal Cosmic Figure Artwork */}
        <div className="relative w-[78%] h-[78%] rounded-full overflow-hidden border border-white/20 shadow-2xl glass-card">
          <img
            src={cosmicHeroImg}
            alt="Cosmic Ethereal Silhouette"
            className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-105"
          />
          {/* Subtle vignette over the image */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/70 via-transparent to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-radial from-transparent via-transparent to-[#050505]/60 pointer-events-none" />
        </div>

        {/* Layer 3: Interactive Floating Silver Metallic Vinyl Record */}
        <motion.div
          animate={{
            y: [-6, 6, -6],
            rotate: [0, 360],
          }}
          transition={{
            y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 40, repeat: Infinity, ease: "linear" },
          }}
          style={{ transform: "translateZ(60px)" }}
          className="absolute -bottom-4 -right-4 sm:bottom-0 sm:right-2 w-32 h-32 sm:w-44 sm:h-44 rounded-full overflow-hidden border-2 border-white/30 shadow-[0_15px_35px_rgba(0,0,0,0.9)] cursor-pointer group"
        >
          <img
            src={metallicDiscImg}
            alt="Floating Silver Metallic Vinyl Disc"
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          {/* Emerald Rim Highlight on the Disc */}
          <div className="absolute inset-0 rounded-full border border-accent/40 shadow-[inset_0_0_15px_rgba(0,255,0,0.4)] pointer-events-none" />
        </motion.div>

        {/* Layer 4: Interactive Three.js 3D Ring Overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ transform: "translateZ(40px)" }}
        >
          <Canvas
            camera={{ position: [0, 0, 3], fov: 45 }}
            gl={{ alpha: true, antialias: true }}
          >
            <ambientLight intensity={0.6} />
            <pointLight position={[5, 5, 5]} intensity={1.5} color="#FFFFFF" />
            <pointLight position={[-5, -5, -2]} intensity={1} color="#00FF00" />
            <FloatingChromeObject />
          </Canvas>
        </div>

        {/* Layer 5: Technical Telemetry Badges */}
        <motion.div
          style={{ transform: "translateZ(80px)" }}
          className="absolute -top-3 -left-3 sm:top-4 sm:left-0 glass border border-white/10 px-3.5 py-1.5 rounded-full flex items-center gap-2 shadow-xl"
        >
          <span className="w-2 h-2 rounded-full bg-accent shadow-[0_0_8px_#00FF00] animate-pulse" />
          <span className="text-[11px] font-mono text-gray-200 uppercase tracking-widest flex items-center gap-1">
            <Cpu className="w-3 h-3 text-accent" />
            MERN · 3D
          </span>
        </motion.div>

        <motion.div
          style={{ transform: "translateZ(70px)" }}
          className="absolute bottom-6 left-2 glass border border-white/10 px-3 py-1.5 rounded-lg hidden sm:flex items-center gap-2 text-xs font-mono text-gray-300"
        >
          <Terminal className="w-3.5 h-3.5 text-accent" />
          <span>LAT 30.3753° N // PAKISTAN</span>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default CosmicHeroVisual;
