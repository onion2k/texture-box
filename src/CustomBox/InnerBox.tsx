import { useBoxStore } from "../store";
import { Box, Decal, useTexture } from "@react-three/drei";

export const InnerBox = () => {
  const baseCol = useBoxStore((state) => state.baseCol);
  const [react] = useTexture(["/react.png"]);
  return (
    <Box args={[11.25, 5, 8]} scale={0.15}>
      <meshPhysicalMaterial color={baseCol} />
      <Decal
        position={[5.5, 0.5, 0]}
        rotation={0}
        scale={2}
        map={react}
        map-anisotropy={16}
      />
      <Decal
        position={[-5.5, 0.5, 0]}
        rotation={0}
        scale={2}
        map={react}
        map-anisotropy={16}
      />
    </Box>
  );
};
