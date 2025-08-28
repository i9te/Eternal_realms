// Lokasi file: src/components/Rogue.tsx

import React from 'react';
import { useGLTF } from "@react-three/drei";

// Komponen iki khusus nggo ng-load model 3D Rogue
export default function Rogue(props: any) {
  // Path menyang file model 3D-mu nang folder public
  const { scene } = useGLTF('/assets/characters/rogue.gltf');
  
  // <primitive> digunakne nggo nampilke objek 3D sing wis di-load
  // {...props} nggo neruske setelan kaya position lan scale seko Game.tsx
  return <primitive object={scene} {...props} />;
}

// Iki nggo pre-loading, ben pas ganti scene luwih cepet
useGLTF.preload('/assets/characters/rogue.gltf');
