import { OrbitControls } from "@react-three/drei";

export default function UnlimitedVoid() {
  return (
    <>
      <OrbitControls />

      <mesh>
        <boxGeometry />
        <meshNormalMaterial />
      </mesh>
    </>
  );
}
