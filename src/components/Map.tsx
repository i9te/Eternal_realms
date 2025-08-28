import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export function Map() {
  const gltf = useLoader(GLTFLoader, "/assets/map/scene.gltf");
  return <primitive object={gltf.scene} scale={1} />;
}
