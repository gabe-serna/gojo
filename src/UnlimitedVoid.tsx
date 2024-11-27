import { OrbitControls, PerspectiveCamera, useTexture } from "@react-three/drei";

export default function UnlimitedVoid() {
  const backgroundTexture = useTexture("/images/background.jpg");
  const ringTexture = useTexture("/images/dark_circle.png");
  const gojoTexture = useTexture("/images/gojo.png");
  const eyesTexture = useTexture("/images/eyes.png");
  return (
    <>
      {/* INSPIRATION: https://zustand-demo.pmnd.rs/ */}
      <PerspectiveCamera position={[0, 0, 12]} makeDefault />

      <OrbitControls />
      {/* Floor */}
      {/* <mesh rotation={[-Math.PI / 2, 0, 0]} position-y={-5.4}>
        <planeGeometry args={[19.2, 10.8]} />
        <meshNormalMaterial />
      </mesh> */}

      <mesh position-z={1.01}>
        <planeGeometry args={[19.2, 10.8]} />
        <meshBasicMaterial map={eyesTexture} transparent />
      </mesh>
      <mesh position-z={1}>
        <planeGeometry args={[19.2, 10.8]} />
        <meshBasicMaterial map={gojoTexture} transparent />
      </mesh>
      <mesh position-z={0.9}>
        <planeGeometry args={[19.2, 10.8]} />
        <meshBasicMaterial map={ringTexture} transparent />
      </mesh>
      <mesh>
        <planeGeometry args={[19.2, 10.8]} />
        <meshBasicMaterial map={backgroundTexture} />
      </mesh>
    </>
  );
}
