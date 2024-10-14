import { OrbitControls, SpotLight } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

import Sphere from "./components/sphere";

function App() {
  return (
    <div className="h-screen">
      <Canvas
        camera={{
          position: [0, 0, 2],
          fov: 100,
        }}
      >
        <color args={["#e0e0e0"]} attach="background" />
        <ambientLight intensity={6} />
        <SpotLight
          angle={0.2}
          castShadow
          penumbra={1}
          position={[20, 20, 10]}
        />
        <Suspense fallback={null}>
          <Sphere />
        </Suspense>

        {/* <ContactShadows
          frames={1}
          scale={10}
          position={[0, -2.2, 0]}
          far={5}
          blur={5}
          opacity={0.3}
          color="black"
        /> */}

        {/* <Environment>
          <Lightformer
            intensity={8}
            position={[10, 5, 0]}
            scale={[10, 50, 1]}
            onUpdate={(self) => self.lookAt(0, 0, 0)}
          />
        </Environment> */}
        <OrbitControls enableZoom={false} rotateSpeed={0.5} />
      </Canvas>
    </div>
  );
}

export default App;
