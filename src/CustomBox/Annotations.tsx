import { Text } from "@react-three/drei";
import { useBoxStore } from "../store";

export const Annotations = ({
  texture,
  baseCol,
  logo
}: {
  texture: string;
  baseCol: string;
  logo: string;
}) => {
  const scene = useBoxStore((state) => state.scene);
  if (!scene) return null;
  return (
    <>
      <Text
        position={[-0.85, -0.375, 0.625]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.5, 0.5, 0.5]}
        color="#444" // default
        anchorX="left" // default
        anchorY="top" // default
      >
        Custom Wrapper: {texture}
      </Text>

      <Text
        position={[0.875, -0.375, 0.6]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={[0.5, 0.5, 0.5]}
        color="#444" // default
        anchorX="left" // default
        anchorY="top" // default
      >
        Inner Box Color: {baseCol}
      </Text>

      <Text
        position={[0, 0.395, 0.4]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.5, 0.5, 0.5]}
        color="#444" // default
        anchorX="center" // default
        anchorY="top" // default
      >
        Custom Wrapper Logo: {logo}
      </Text>

      <Text
        position={[0.855, -0.1, 0]}
        rotation={[-Math.PI / 2, Math.PI / 2, Math.PI / 2]}
        scale={[0.5, 0.5, 0.5]}
        color="#444" // default
        anchorX="center" // default
        anchorY="top" // default
      >
        Inner Box Logo: {logo}
      </Text>
    </>
  );
};
