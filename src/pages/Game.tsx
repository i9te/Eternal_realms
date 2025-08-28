// Lokasi file: src/pages/Game.tsx

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";

// Komponen Peta & Objek
import Map from "../components/Map";
import Crystals from "../components/Crystals";

// Komponen Karakter
import Knight from "../components/Knight";
import Mage from "../components/Mage";
import Rogue from "../components/Rogue";

export default function Game() {
  return (
    <div className="w-full h-screen">
      <Canvas camera={{ position: [0, 10, 20], fov: 60 }}>
        <ambientLight intensity={1.5} />
        <directionalLight position={[10, 15, 5]} intensity={2} />
        <Suspense fallback={null}>
          <Map />
          <Crystals position={[2, 0, -2]} />
          <Crystals position={[-1, 0, 3]} />
          <Crystals position={[4, 0, 1]} />
          
          <Knight position={[0, 0, 5]} scale={0.8} />
          <Mage position={[-2.5, 0, 5]} scale={0.8} />
          <Rogue position={[2.5, 0, 5]} scale={0.8} />
        </Suspense>
        <OrbitControls />
      </Canvas>
    </div>
  );
}

