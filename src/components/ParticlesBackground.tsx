
import React, { useRef, useEffect } from 'react';
import { useFrame, Canvas } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

// Generate random points in a 3D sphere
const generateSpherePoints = (count: number, radius: number) => {
  const points = new Float32Array(count * 3);
  
  for (let i = 0; i < count; i++) {
    const i3 = i * 3;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    const r = radius * Math.cbrt(Math.random());
    
    points[i3] = r * Math.sin(phi) * Math.cos(theta);
    points[i3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    points[i3 + 2] = r * Math.cos(phi);
  }
  
  return points;
};

interface ParticlesProps {
  count?: number;
  size?: number;
  radius?: number;
  color?: string;
}

const Particles: React.FC<ParticlesProps> = ({ 
  count = 2000, 
  size = 0.01, 
  radius = 1.5,
  color = '#8B5CF6'
}) => {
  const pointsRef = useRef<THREE.Points>(null);
  
  // Generate points
  const points = generateSpherePoints(count, radius);
  const positions = React.useMemo(() => new Float32Array(points), [points]);
  
  // Animation
  useFrame((state) => {
    if (!pointsRef.current) return;
    
    const time = state.clock.getElapsedTime() * 0.1;
    pointsRef.current.rotation.x = Math.sin(time * 0.7) * 0.2;
    pointsRef.current.rotation.y = Math.sin(time * 0.3) * 0.2;
  });
  
  return (
    <Points ref={pointsRef} positions={positions} stride={3}>
      <PointMaterial 
        transparent
        color={color}
        size={size}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
};

const ParticlesBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 opacity-50">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Particles />
      </Canvas>
    </div>
  );
};

export default ParticlesBackground;
