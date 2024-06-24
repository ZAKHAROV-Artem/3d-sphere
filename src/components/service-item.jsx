import { Billboard, Text } from "@react-three/drei";
import { useSelectedServicePopup } from "../store/use-selected-service-popup";

export default function ServiceItem({ text, url, position, isTitle = false }) {
  const setSelectedService = useSelectedServicePopup(
    (state) => state.setSelectedService,
  );
  return (
    <Billboard
      position={position}
      onClick={() => setSelectedService({ text, url })}
    >
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
}
