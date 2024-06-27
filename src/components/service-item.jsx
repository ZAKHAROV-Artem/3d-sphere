import { Billboard, Plane, Text } from "@react-three/drei";

export default function ServiceItem({ text, position, isTitle = false }) {
  const fontSize = isTitle ? 0.03 : 0.02;
  const lines = text.split("\n");

  const textWidth =
    Math.max(...lines.map((line) => line.length)) * fontSize * 0.7; // Adjust the multiplier as needed
  const textHeight = lines.length * fontSize * 1.2; // Adjust the multiplier as needed

  return (
    <Billboard position={position}>
      <Plane args={[textWidth, textHeight]} position={[0, 0, 0.02]}>
        <meshBasicMaterial
          toneMapped={false}
          color={{ r: 255, g: 255, b: 255 }}
        />
      </Plane>

      <Text
        fontSize={fontSize}
        color="black"
        textAlign="center"
        anchorX="center"
        position={[0, 0, 0.02]}
        anchorY="middle"
      >
        {text}
      </Text>
    </Billboard>
  );
}
