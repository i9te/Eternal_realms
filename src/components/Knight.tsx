import { useGLTF } from "@react-three/drei";

export default function Knight() {
  const { scene } = useGLTF("/assets/characters/knight.gltf");
  return <primitive object={scene} position={[0, 0, 0]} />;
}
