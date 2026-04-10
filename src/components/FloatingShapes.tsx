/* eslint-disable react/no-unknown-property */
import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface ShapeConfig {
  position: [number, number, number];
  rotation: [number, number, number];
  scale: number;
  speed: number;
  type: 'icosahedron' | 'octahedron' | 'torus' | 'dodecahedron' | 'torusKnot';
}

function Shape({ config, color }: { config: ShapeConfig; color: string }) {
  const ref = useRef<THREE.Mesh>(null!);
  const initialY = config.position[1];

  useFrame((state) => {
    const t = state.clock.elapsedTime * config.speed;
    ref.current.position.y = initialY + Math.sin(t) * 0.3;
    ref.current.rotation.x += 0.002 * config.speed;
    ref.current.rotation.z += 0.001 * config.speed;
  });

  const geometry = useMemo(() => {
    switch (config.type) {
      case 'octahedron': return <octahedronGeometry args={[1, 0]} />;
      case 'torus': return <torusGeometry args={[1, 0.4, 16, 32]} />;
      case 'dodecahedron': return <dodecahedronGeometry args={[1, 0]} />;
      case 'torusKnot': return <torusKnotGeometry args={[0.8, 0.3, 64, 16]} />;
      default: return <icosahedronGeometry args={[1, 1]} />;
    }
  }, [config.type]);

  return (
    <mesh
      ref={ref}
      position={config.position}
      rotation={config.rotation}
      scale={config.scale}
    >
      {geometry}
      <meshStandardMaterial
        color={color}
        wireframe
        transparent
        opacity={0.15}
      />
    </mesh>
  );
}

interface FloatingShapesProps {
  color?: string;
  shapes?: ShapeConfig[];
  count?: number;
}

const defaultShapes: ShapeConfig[] = [
  { position: [-4, 2, -3], rotation: [0.5, 0.3, 0], scale: 1.2, speed: 0.6, type: 'icosahedron' },
  { position: [4.5, -1, -4], rotation: [0.2, 0.8, 0.1], scale: 0.9, speed: 0.8, type: 'octahedron' },
  { position: [-3, -2.5, -5], rotation: [0.7, 0.1, 0.3], scale: 0.7, speed: 0.5, type: 'torus' },
  { position: [3, 3, -6], rotation: [0.1, 0.5, 0.2], scale: 1.0, speed: 0.7, type: 'dodecahedron' },
  { position: [0, -3, -4], rotation: [0.4, 0.6, 0.1], scale: 0.6, speed: 0.9, type: 'torusKnot' },
  { position: [-5, 0, -7], rotation: [0.3, 0.4, 0.5], scale: 0.8, speed: 0.4, type: 'icosahedron' },
  { position: [5, 1.5, -5], rotation: [0.6, 0.2, 0.4], scale: 1.1, speed: 0.55, type: 'octahedron' },
];

export default function FloatingShapes({ color = '#6366f1', shapes = defaultShapes }: FloatingShapesProps) {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 45 }}
      gl={{ alpha: true, antialias: true }}
      style={{ pointerEvents: 'none' }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={0.8} />
      {shapes.map((config, i) => (
        <Shape key={i} config={config} color={color} />
      ))}
    </Canvas>
  );
}
