// Lokasi file: src/components/Mage.tsx

import React from 'react';
import { useGLTF } from "@react-three/drei";

// Komponen iki khusus nggo ng-load model 3D Mage
export default function Mage(props: any) {
  // Path menyang file model 3D-mu nang folder public
  const { scene } = useGLTF('/assets/characters/mage.gltf');
  
  // <primitive> digunakne nggo nampilke objek 3D sing wis di-load
  // {...props} nggo neruske setelan kaya position lan scale seko Game.tsx
  return <primitive object={scene} {...props} />;
}

// Iki nggo pre-loading, ben pas ganti scene luwih cepet
useGLTF.preload('/assets/characters/mage.gltf');
