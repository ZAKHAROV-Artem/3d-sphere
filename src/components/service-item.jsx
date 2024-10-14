import { Billboard, Text } from "@react-three/drei";
import * as THREE from "three";

import { createRoundedSquareGeometry } from "../utils/helpers";
import ServiceItemPopover from "./service-item-popover";
import { useState } from "react";

export default function ServiceItem({
  text,
  position,
  isTitle = false,
  onClick,
  url,
  isOpen,
}) {
  const [isHovered, setIsHovered] = useState(false);

  const fontSize = isTitle ? 0.03 : 0.02;
  const lines = text.split("\n");

  const textWidth =
    Math.max(...lines.map((line) => line.length)) * fontSize * 0.7;
  const textHeight = lines.length * fontSize * 2.4;

  const radius = 0.015;
  const geometry = createRoundedSquareGeometry(textWidth, textHeight, radius);

  const handlePointerOver = () => {
    setIsHovered(true);
  };

  const handlePointerOut = () => {
    setIsHovered(false);
  };

  return (
    <Billboard position={position}>
      <mesh
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
        geometry={geometry}
        onClick={onClick}
        position={[0, 0, 0.02]}
      >
        <meshBasicMaterial
          color={new THREE.Color(0xffffff)}
          toneMapped={false}
        />
      </mesh>
      <Text
        anchorX="center"
        anchorY="middle"
        color="black"
        fontSize={fontSize}
        position={[0, 0, 0.03]}
        textAlign="center"
      >
        {text}
      </Text>
      <ServiceItemPopover isOpen={isOpen || isHovered} text={text} url={url} />
    </Billboard>
  );
}
