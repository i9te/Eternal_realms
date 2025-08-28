import { useGLTF } from "@react-three/drei";

export default function Map(props: any) {
  const { scene } = useGLTF("/assets/map/scene.gltf");
  return <primitive object={scene} {...props} />;
}
