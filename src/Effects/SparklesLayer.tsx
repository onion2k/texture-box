import React from "react";
import { useBoxStore } from "../store";
import { Sparkles } from "@react-three/drei";

export const SparklesLayer = () => {
  const scene = useBoxStore((state) => state.scene);
  const size = 8;
  const amount = 50;

  const sizes = React.useMemo(() => {
    return new Float32Array(
      Array.from({ length: amount }, () => Math.random() * size)
    );
  }, [size, amount]);

  if (!scene) return null;

  return (
    <Sparkles
      speed={0.15}
      opacity={0.25}
      scale={2.0}
      size={sizes}
      color={"white"}
      count={amount}
    />
  );
};
