import { Canvas } from "@react-three/fiber";
import UnlimitedVoid from "./UnlimitedVoid";
function App() {
  return (
    <>
      <div className="w-screen h-screen">
        <Canvas>
          <UnlimitedVoid />
        </Canvas>
      </div>
    </>
  );
}

export default App;
