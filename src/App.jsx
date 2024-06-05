import { ContactShadows, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Sphere from "./components/sphere";
import { Suspense } from "react";

function App() {
  return (
    <div className="h-screen">
      <Canvas
        camera={{
          position: [0, 0, 2],
          fov: 100,
        }}
      >
        <ambientLight intensity={6} />
        <Suspense fallback={null}>
          <Sphere />
        </Suspense>

        <ContactShadows
          frames={1}
          scale={10}
          position={[0, -2.2, 0]}
          far={5}
          blur={5}
          opacity={0.3}
          color="black"
        />
        <OrbitControls enableZoom={false} rotateSpeed={0.5} />
      </Canvas>
    </div>
  );
}

export default App;
