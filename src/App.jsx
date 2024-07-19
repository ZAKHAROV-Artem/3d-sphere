import {
  ContactShadows,
  Environment,
  Lightformer,
  OrbitControls,
  SpotLight,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Sphere from "./components/sphere";
import { Suspense } from "react";
import FloatingBlock from "./components/floating-block";

function App() {
  return (
    <div className="h-screen">
      <Canvas
        camera={{
          position: [0, 0, 2],
          fov: 100,
        }}
      >
        <color attach="background" args={["#e0e0e0"]} />
        <ambientLight intensity={6} />
        <SpotLight
          position={[20, 20, 10]}
          penumbra={1}
          castShadow
          angle={0.2}
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
      <FloatingBlock />
      <a
        href="https://client.zahist.ua/homepage?makeAppointment=true"
        target="_blank"
        className="fixed bottom-2 right-2 rounded-lg bg-blue-500 px-2 py-1 text-sm text-white sm:px-3 sm:py-2 sm:text-base"
      >
        Записатися на консультацію
      </a>
    </div>
  );
}

export default App;
