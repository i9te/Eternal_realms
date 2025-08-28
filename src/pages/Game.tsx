import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import { Crystal } from "../components/Crystal";
import { Map } from "../components/Map";

export default function Game() {
  return (
    <div className="w-full h-screen">
      <Canvas camera={{ position: [0, 2, 5], fov: 60 }}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 10, 5]} intensity={1} />
        <Suspense fallback={null}>
          <Map />
          <Crystal position={[2, 0, -2]} />
          <Crystal position={[-1, 0, 3]} />
          <Crystal position={[4, 0, 1]} />
        </Suspense>
        <OrbitControls />
      </Canvas>
    </div>
  );
}
