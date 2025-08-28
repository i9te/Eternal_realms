import { useGLTF } from "@react-three/drei";

<<<<<<< Updated upstream
export default function Knight() {
  const { scene } = useGLTF("/assets/characters/knight.gltf");
  return <primitive object={scene} position={[0, 0, 0]} />;
}
=======
export default function Knight(props: any) {
  // Ng-load model 3D ksatria
  const { scene } = useGLTF('/assets/characters/knight.gltf');

  // Nampilke model 3D nang scene
  // {...props} nggo neruske setelan kaya position lan scale seko Game.tsx
  return <primitive object={scene} {...props} />;
}

// Iki nggo pre-loading, ben pas ganti scene luwih cepet
useGLTF.preload('/assets/characters/knight.gltf');

>>>>>>> Stashed changes
