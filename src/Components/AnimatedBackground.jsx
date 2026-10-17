// src/Components/AnimatedBackground.jsx
import React, { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import cosmicAtmosphere from '../assets/cosmic/cosmic-atmosphere.jpg';

// Starfield particles in 3D space
function CosmicField() {
  const pointsRef = useRef();
  const dustRef = useRef();

  // Create primary stars with slight depth variation
  const { starPositions, starColors } = useMemo(() => {
    const count = 2800;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      // Cylindrical / spherical spread across space
      const radius = 2.5 * Math.cbrt(Math.random());
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      positions[i3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i3 + 2] = radius * Math.cos(phi);

      // Star colors: predominantly silver-white with subtle emerald tints (#00FF00)
      const isEmerald = Math.random() > 0.75;
      if (isEmerald) {
        colors[i3] = 0.0;     // R
        colors[i3 + 1] = 1.0; // G
        colors[i3 + 2] = 0.2; // B
      } else {
        const shade = 0.85 + Math.random() * 0.15;
        colors[i3] = shade;
        colors[i3 + 1] = shade;
        colors[i3 + 2] = shade;
      }
    }
    return { starPositions: positions, starColors: colors };
  }, []);

  // Frame loop for subtle cosmic motion
  useFrame((state, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.015;
      pointsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.05) * 0.03;
      
      // Mouse interaction
      pointsRef.current.rotation.y += state.mouse.x * 0.005;
      pointsRef.current.rotation.x += -state.mouse.y * 0.005;
    }
  });

  return (
    <group>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={starPositions.length / 3}
            array={starPositions}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-color"
            count={starColors.length / 3}
            array={starColors}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.006}
          vertexColors
          transparent
          opacity={0.8}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </points>
    </group>
  );
}

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 w-full h-full -z-20 pointer-events-none overflow-hidden select-none">
      {/* Base Cosmic Gradient & Atmosphere Texture */}
      <div 
        className="absolute inset-0 bg-[#050505] opacity-90 transition-opacity duration-1000"
        style={{
          backgroundImage: `radial-gradient(circle at 50% 20%, rgba(0, 255, 0, 0.05) 0%, transparent 60%), radial-gradient(circle at 80% 80%, rgba(0, 255, 0, 0.03) 0%, transparent 50%)`,
        }}
      />
      
      {/* Ethereal Nebula Texture overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-screen transition-opacity duration-1000"
        style={{
          backgroundImage: `url(${cosmicAtmosphere})`,
        }}
      />

      {/* Subtle Scanline Texture for cinematic retro-futurism */}
      <div className="absolute inset-0 cosmic-scanline opacity-30 pointer-events-none" />

      {/* Three.js Interactive Particle Field */}
      <div className="absolute inset-0">
        <Canvas
          camera={{ position: [0, 0, 1.2], fov: 60 }}
          gl={{ antialias: false, alpha: true, powerPreference: 'high-performance' }}
          dpr={[1, 1.5]}
        >
          <Suspense fallback={null}>
            <CosmicField />
          </Suspense>
        </Canvas>
      </div>

      {/* Ambient Vignette Overlay to maintain readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/70 pointer-events-none" />
    </div>
  );
};

export default AnimatedBackground;