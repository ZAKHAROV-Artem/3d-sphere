import { Billboard, Text } from "@react-three/drei";

const ServiceItem = ({ text, position, isTitle = false }) => {
  return (
    <Billboard position={position}>
      <Text
        fontSize={isTitle ? 0.03 : 0.02}
        color="black"
        textAlign="center"
        anchorX="center"
        anchorY="middle"
      >
        {text}
      </Text>
    </Billboard>
  );
};
export default ServiceItem;
