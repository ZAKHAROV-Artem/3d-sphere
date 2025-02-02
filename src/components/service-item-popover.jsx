import { Billboard, Text } from "@react-three/drei";

import {
  createRoundedSquareGeometry,
  createTriangleGeometry,
} from "../utils/helpers";

export default function ServiceItemPopover({ text, url, isOpen }) {
  const padding = 0.02;
  const radius = 0.015;
  const wrapperWidth = 0.25 + padding * 2;
  const wrapperHeight = 0.1 + padding * 3;

  const buttonWrapperGeometry = createRoundedSquareGeometry(
    wrapperWidth,
    wrapperHeight,
    radius,
  );
  const buttonGeometry = createRoundedSquareGeometry(0.25, 0.05, radius);
  const triangleGeometry = createTriangleGeometry();

  const handleButtonClick = (link) => {
    const target = window?.ReactNativeWebView ? "_self" : "_blank";
    window.open(link, target);
  };

  if (!isOpen) return null;

  return (
    <Billboard position={[0, 0.13, 0.01]}>
      <mesh geometry={buttonWrapperGeometry} position={[0, 0, 0]}>
        <meshBasicMaterial color={"white"} toneMapped={false} />
      </mesh>

      <mesh
        geometry={buttonGeometry}
        onClick={() => handleButtonClick(url)}
        position={[0, padding * 1.5, 0]}
      >
        <meshBasicMaterial color={"white"} />
        <Text
          anchorX="center"
          anchorY="middle"
          color="black"
          fontSize={0.015}
          textAlign="center"
        >
          {`Дізнатися більше про\n${text.replace("\n", " ")}`}
        </Text>
      </mesh>

      <mesh
        geometry={buttonGeometry}
        onClick={() =>
          handleButtonClick(
            "https://client.zahist.ua/homepage?makeAppointment=true",
          )
        }
        position={[0, -padding * 1.5, 0]}
      >
        <meshBasicMaterial color={{ r: 39, g: 139, b: 90 }} />
        <Text
          anchorX="center"
          anchorY="middle"
          color="black"
          fontSize={0.015}
          toneMapped={false}
        >
          Записатися на консультацію
        </Text>
      </mesh>

      <mesh
        geometry={triangleGeometry}
        position={[0, -0.088, 0]}
        rotation={[0, 0, Math.PI]}
      >
        <meshBasicMaterial color={"white"} toneMapped={false} />
      </mesh>
    </Billboard>
  );
}
