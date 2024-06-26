import { useRef, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import {
  getClosestItem,
  getCameraTargetPositionAfterRotation,
  moveAtPosition,
  isValidCoordinate,
  createCirclePoints,
  calculateControlPoint,
} from "../lib/utils";
import ServiceItem from "./service-item";
import { categories } from "../lib/data";
import { Line, QuadraticBezierLine, useTexture } from "@react-three/drei";
import { SPHERE_RADIUS } from "../lib/constants";
import * as THREE from "three";
import { useSelectedService } from "../store/use-selected-service";
import { useShallow } from "zustand/react/shallow";

export default function Sphere() {
  const texture = useTexture("/texture.jpg", (texture) => {
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.offset.setX(0.05);
  });
  const { selectedService, setSelectedService } = useSelectedService(
    useShallow((state) => ({
      selectedService: state.selectedService,
      setSelectedService: state.setSelectedService,
    })),
  );
  const [isSphereMoving, setIsSphereMoving] = useState(false);
  const sphereRef = useRef();
  const { viewport } = useThree();
  useFrame(({ camera }) => {
    if (!isSphereMoving) {
      const { closestItem, closestItemCategoryGroupIndex } = getClosestItem(
        camera,
        categories,
      );
      if (closestItem?.text !== selectedService?.text) {
        setSelectedService(closestItem);
      }
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
  const circlePoints = createCirclePoints(SPHERE_RADIUS + 0.1, 100);
  return (
    <mesh
      ref={sphereRef}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerOut={handlePointerUp}
      scale={viewport.width < 4 ? 0.8 : 0.9}
    >
      <sphereGeometry args={[SPHERE_RADIUS, 50, 50]} />
      <meshStandardMaterial map={texture} toneMapped={false} />
      {categories.map((categoryItems, categoryI) => (
        <group
          rotation-y={THREE.MathUtils.degToRad(72 * categoryI)}
          key={categoryI}
        >
          {categoryItems.map((item, itemI) => (
            <ServiceItem key={`category${categoryI}-item${itemI}`} {...item} />
          ))}
          {categoryItems.map((item, itemI) => {
            if (item.isTitle && isValidCoordinate(item.position)) {
              const titlePosition = item.position;
              return categoryItems.map((child, childI) => {
                if (!child.isTitle && isValidCoordinate(child.position)) {
                  return (
                    <QuadraticBezierLine
                      key={`line-${categoryI}-${childI}`}
                      start={titlePosition}
                      end={child.position}
                      mid={calculateControlPoint(titlePosition, child.position)}
                      segments={20}
                      color="black"
                      lineWidth={1}
                    />
                  );
                }
              });
            }
          })}
        </group>
      ))}
      <Line points={circlePoints} color="red" lineWidth={1} />
    </mesh>
  );
}
