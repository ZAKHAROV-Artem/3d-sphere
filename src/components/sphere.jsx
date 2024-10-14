import {
  Image,
  Line,
  MeshTransmissionMaterial,
  QuadraticBezierLine,
} from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useRef, useState, useMemo, useCallback, memo } from "react";
import * as THREE from "three";
import { useShallow } from "zustand/react/shallow";

import { useSelectedService } from "../store/use-selected-service";
import { SPHERE_RADIUS } from "./../constants";
import { categories } from "./../data";
import {
  calculateControlPoint,
  createCirclePoints,
  getCameraTargetPositionAfterRotation,
  getClosestItem,
  isValidCoordinate,
  moveAtPosition,
} from "./../utils/helpers";
import ServiceItem from "./service-item";

const Sphere = () => {
  const logoRef = useRef();

  const { selectedService, setSelectedService } = useSelectedService(
    useShallow((state) => ({
      selectedService: state.selectedService,
      setSelectedService: state.setSelectedService,
    })),
  );

  const [isSphereMoving, setIsSphereMoving] = useState(false);
  const [openedService, setOpenedService] = useState(null);

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

  const handleServiceClick = (item) => {
    setOpenedService((prevOpened) =>
      prevOpened?.text === item.text ? null : item,
    );
  };

  const circlePoints = useMemo(
    () => createCirclePoints(SPHERE_RADIUS + 0.1, 100),
    [],
  );

  return (
    <mesh
      onPointerDown={handlePointerDown}
      onPointerOut={handlePointerUp}
      onPointerUp={handlePointerUp}
      ref={sphereRef}
      scale={viewport.width < 4 ? 0.8 : 0.9}
    >
      <group ref={logoRef}>
        <Image opacity={1} transparent url="/logo.svg" />
        <Image opacity={1} rotation-y={Math.PI} transparent url="/logo.svg" />
      </group>
      <sphereGeometry args={[SPHERE_RADIUS, 50, 50]} />
      <MeshTransmissionMaterial
        anisotropicBlur={0}
        chromaticAberration={0}
        distortionScale={0}
        samples={1}
      />
      {categories.map((categoryItems, categoryI) => {
        let title = {};
        return (
          <group
            key={categoryI}
            rotation-y={THREE.MathUtils.degToRad(72 * categoryI)}
          >
            {categoryItems.map((item, itemI) => {
              if (item.isTitle && isValidCoordinate(item.position)) {
                title = { position: item.position, index: itemI };
              }
              return (
                <ServiceItem
                  isOpen={openedService?.text === item.text}
                  key={`category${categoryI}-item${itemI}`}
                  onClick={() => handleServiceClick(item)}
                  {...item}
                />
              );
            })}
            {categoryItems.map((item, itemI) => {
              if (!item.isTitle && isValidCoordinate(item.position)) {
                return (
                  <QuadraticBezierLine
                    color="black"
                    end={item.position}
                    key={`line-${title.index}-${itemI}`}
                    lineWidth={1}
                    mid={calculateControlPoint(title.position, item.position)}
                    segments={20}
                    start={title.position}
                  />
                );
              }
              return null;
            })}
          </group>
        );
      })}
      <Line color="red" lineWidth={1} points={circlePoints} />
    </mesh>
  );
};

export default memo(Sphere);
