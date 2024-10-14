import { Billboard, Text } from "@react-three/drei";
import * as THREE from "three";

import { roundedGeometry } from "../utils/helpers";
import ServiceItemPopover from "./service-item-popover";

export default function ServiceItem({
  text,
  position,
  isTitle = false,
  onClick,
  url,
  isOpen,
}) {
  const fontSize = isTitle ? 0.03 : 0.02;
  const lines = text.split("\n");

  const textWidth =
    Math.max(...lines.map((line) => line.length)) * fontSize * 0.7;
  const textHeight = lines.length * fontSize * 2.4;

  const radius = 0.015;
  const segments = 10;
  const geometry = roundedGeometry(textWidth, textHeight, radius, segments);

  return (
    <Billboard position={position}>
      <mesh geometry={geometry} onClick={onClick} position={[0, 0, 0.02]}>
        <meshBasicMaterial
          color={{ r: 255, g: 255, b: 255 }}
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
      <ServiceItemPopover isOpen={isOpen} text={text} url={url} />
    </Billboard>
  );
}
