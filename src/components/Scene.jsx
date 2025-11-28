import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment, Stars } from '@react-three/drei';

function Cell({ position, scale, color }) {
    const meshRef = useRef();

    useFrame((state, delta) => {
        meshRef.current.rotation.x += delta * 0.1;
        meshRef.current.rotation.y += delta * 0.15;
    });

    return (
        <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
            <mesh ref={meshRef} position={position} scale={scale}>
                <icosahedronGeometry args={[1, 4]} />
                <meshPhysicalMaterial
                    color={color}
                    roughness={0.2}
                    metalness={0.1}
                    transmission={0.6}
                    thickness={1}
                    clearcoat={1}
                    clearcoatRoughness={0.1}
                    opacity={0.15}
                    transparent
                />
            </mesh>
        </Float>
    );
}

export default function Scene() {
    return (
        <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
            {/* Background color is handled in CSS, but we can add a fog or subtle color here if needed */}
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} color="#10b981" />
            <pointLight position={[-10, -10, -10]} intensity={0.5} color="#38bdf8" />

            <Cell position={[0, 0, 0]} scale={2} color="#10b981" />
            <Cell position={[-4, 2, -2]} scale={1.2} color="#059669" />
            <Cell position={[4, -2, -3]} scale={1.5} color="#38bdf8" />
            <Cell position={[3, 3, -5]} scale={1} color="#94a3b8" />
            <Cell position={[-3, -3, -4]} scale={0.8} color="#10b981" />

            {/* Stars removed for clean lab aesthetic */}
            <Environment preset="city" />
        </Canvas>
    );
}
