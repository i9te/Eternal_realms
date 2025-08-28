<<<<<<< Updated upstream
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";

import Map from "./Map";
import Knight from "./Knight";
import Mage from "./Mage";
import Rogue from "./Rogue";
import Crystals from "./Crystals";

export default function Scene() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 10]} />
      <Suspense fallback={null}>
        <Map />
        <Knight />
        <Mage />
        <Rogue />
        <Crystals />
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
}
=======
import { useGLTF, useTexture } from "@react-three/drei";

export default function Crystals() {
  const { scene } = useGLTF("/assets/crystals/crystals.gltf");
  // kalau textures terpisah:
  // const baseColor = useTexture("/assets/crystals/Crystal_MAT_baseColor.png");

  return <primitive object={scene} />;
}

useGLTF.preload("/assets/crystals/crystals.gltf");
>>>>>>> Stashed changes
