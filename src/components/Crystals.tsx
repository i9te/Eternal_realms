import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

interface CrystalProps {
  position?: [number, number, number];
}

export function Crystal({ position = [0, 0, 0] }: CrystalProps) {
  const gltf = useLoader(GLTFLoader, "/assets/crystals/crystal.gltf");
  return <primitive object={gltf.scene} scale={0.5} position={position} />;
}
