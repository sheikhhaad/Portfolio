// Components/AnimatedBackground.jsx
import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';

function FloatingParticles(props) {
  const ref = useRef();
  const [sphere, setSphere] = useState(null);

  // Initialize particles with proper validation
  useEffect(() => {
    const generateParticles = () => {
      const count = 4000;
      const positions = new Float32Array(count * 5);
      
      for (let i = 0; i < count * 3; i += 3) {
        // Generate random positions within a sphere
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);
        const radius = 1.2 * Math.cbrt(Math.random());
        
        positions[i] = radius * Math.sin(phi) * Math.cos(theta);     // x
        positions[i + 1] = radius * Math.sin(phi) * Math.sin(theta); // y
        positions[i + 2] = radius * Math.cos(phi);                   // z
        
        // Validate no NaN values
        if (isNaN(positions[i]) || isNaN(positions[i + 1]) || isNaN(positions[i + 2])) {
          positions[i] = 0;
          positions[i + 1] = 0;
          positions[i + 2] = 0;
        }
      }
      setSphere(positions);
    };

    generateParticles();
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 8;
      ref.current.rotation.y -= delta / 10;
    }
  });

  // Don't render until particles are generated
  if (!sphere) return null;

  return (
    <group rotation={[0, 0, Math.PI / 2]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#ffffff"
          size={0.003}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.6}
        />
      </Points>
    </group>
  );
}

const AnimatedBackground = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none">
      <Canvas 
        camera={{ position: [0, 0, 1] }}
        gl={{ antialias: false }} // Better performance
      >
        <FloatingParticles />
      </Canvas>
    </div>
  );
};

export default AnimatedBackground;