import { useRef, useState, useMemo, useCallback, memo } from "react";
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
import {
  Image,
  Line,
  MeshTransmissionMaterial,
  QuadraticBezierLine,
} from "@react-three/drei";
import { SPHERE_RADIUS } from "../lib/constants";
import * as THREE from "three";
import { useSelectedService } from "../store/use-selected-service";
import { useShallow } from "zustand/react/shallow";

const Sphere = () => {
  const logoRef = useRef();

  const { selectedService, setSelectedService } = useSelectedService(
    useShallow((state) => ({
      selectedService: state.selectedService,
      setSelectedService: state.setSelectedService,
    })),
  );

  const [isSphereMoving, setIsSphereMoving] = useState(false);
  const sphereRef = useRef();
  const { viewport } = useThree();

  useFrame(
    ({ camera }) => {
      logoRef.current.rotation.y =
        (logoRef.current.rotation.y + 0.005) % (2 * Math.PI);

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
        moveAtPosition(camera, targetPos, 0.01);
      }
    },
    [isSphereMoving, selectedService, setSelectedService],
  );

  const handlePointerDown = useCallback(() => {
    setIsSphereMoving(true);
  }, []);

  const handlePointerUp = useCallback(() => {
    setIsSphereMoving(false);
  }, []);

  const circlePoints = useMemo(
    () => createCirclePoints(SPHERE_RADIUS + 0.1, 100),
    [],
  );

  return (
    <mesh
      ref={sphereRef}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerOut={handlePointerUp}
      scale={viewport.width < 4 ? 0.8 : 0.9}
    >
      <group ref={logoRef}>
        <Image url="/logo.svg" transparent opacity={1} />
        <Image rotation-y={Math.PI} url="/logo.svg" transparent opacity={1} />
      </group>
      <sphereGeometry args={[SPHERE_RADIUS, 50, 50]} />
      <MeshTransmissionMaterial
        chromaticAberration={0}
        anisotropicBlur={0}
        distortionScale={0}
        samples={1}
      />
      {categories.map((categoryItems, categoryI) => {
        let title = {};
        return (
          <group
            rotation-y={THREE.MathUtils.degToRad(72 * categoryI)}
            key={categoryI}
          >
            {categoryItems.map((item, itemI) => {
              if (item.isTitle && isValidCoordinate(item.position)) {
                title = { position: item.position, index: itemI };
              }
              return (
                <ServiceItem
                  key={`category${categoryI}-item${itemI}`}
                  {...item}
                />
              );
            })}
            {categoryItems.map((item, itemI) => {
              if (!item.isTitle && isValidCoordinate(item.position)) {
                return (
                  <QuadraticBezierLine
                    key={`line-${title.index}-${itemI}`}
                    start={title.position}
                    end={item.position}
                    mid={calculateControlPoint(title.position, item.position)}
                    segments={20}
                    color="black"
                    lineWidth={1}
                  />
                );
              }
              return null;
            })}
          </group>
        );
      })}
      <Line points={circlePoints} color="red" lineWidth={1} />
    </mesh>
  );
};

export default memo(Sphere);
