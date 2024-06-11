import { useRef, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import {
  getClosestItem,
  getCameraTargetPositionAfterRotation,
  moveAtPosition,
} from "../lib/utils";
import ServiceItem from "./service-item";
import { categories } from "../lib/data";
import { Resize, useTexture } from "@react-three/drei";
import { SPHERE_RADIUS } from "../lib/constants";
import * as THREE from "three";

export default function Sphere() {
  const texture = useTexture("/texture.jpg", (texture) => {
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.offset.setX(0.05);
  });
  const [isSphereMoving, setIsSphereMoving] = useState(false);
  const sphereRef = useRef();
  const { viewport } = useThree();
  useFrame(({ camera }) => {
    if (!isSphereMoving) {
      const { closestItem, closestItemCategoryGroupIndex } = getClosestItem(
        camera,
        categories,
      );

      const targetPos = getCameraTargetPositionAfterRotation(
        closestItem.position,
        closestItemCategoryGroupIndex,
      );
      moveAtPosition(camera, targetPos, 0.04);
    }
  });
  const handlePointerDown = () => {
    setIsSphereMoving(true);
  };

  const handlePointerUp = () => {
    setIsSphereMoving(false);
  };
  console.log(viewport);
  return (
    <Resize width scale={3}>
      <mesh
        ref={sphereRef}
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onPointerOut={handlePointerUp}
        scale={viewport.width < 3.5 ? 0.8 : 1}
      >
        <sphereGeometry args={[SPHERE_RADIUS, 50, 50]} />
        <meshStandardMaterial map={texture} />
        {categories.map((categoryItems, categoryI) => (
          <group
            rotation-y={THREE.MathUtils.degToRad(72 * categoryI)}
            key={categoryI}
          >
            {categoryItems.map((item, itemI) => (
              <ServiceItem
                key={`category${categoryI}-item${itemI}`}
                {...item}
              />
            ))}
          </group>
        ))}
      </mesh>
    </Resize>
  );
}
