import { useGLTF, useTexture } from "@react-three/drei";

export default function Crystals(props: any) {
  const { scene } = useGLTF("/assets/crystals/scene.gltf");
  const baseColor = useTexture("/assets/crystals/Crystal_MAT_baseColor.png");
  const emissive = useTexture("/assets/crystals/Crystal_MAT_emissive.png");
  const normal = useTexture("/assets/crystals/Crystal_MAT_normal.png");
  const roughness = useTexture("/assets/crystals/Crystal_MAT_metallicRoughness.png");

  scene.traverse((child: any) => {
    if (child.isMesh) {
      child.material.map = baseColor;
      child.material.emissiveMap = emissive;
      child.material.normalMap = normal;
      child.material.roughnessMap = roughness;
      child.material.needsUpdate = true;
    }
  });

  return <primitive object={scene} {...props} />;
}
