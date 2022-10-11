import * as THREE from "three";
import { useBoxStore } from "../store";

import { useLoader } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";

import { Wrapper } from "./Wrapper";
import { Annotations } from "./Annotations";
import { InnerBox } from "./InnerBox";

export const CustomBox = ({
  textures,
  logos
}: {
  textures: string[];
  logos: { file: string; title: string }[];
}) => {
  const baseCol = useBoxStore((state) => state.baseCol);
  const texture = useBoxStore((state) => state.texture);
  const logo = useBoxStore((state) => state.logo);

  const tTextures = useLoader(THREE.TextureLoader, textures);
  const tLogos = useTexture(logos.map((logo) => logo.file));

  return (
    <group>
      <InnerBox />
      <Wrapper textures={tTextures} logos={tLogos} />
      <Annotations
        texture={textures[texture].substring(
          textures[texture].lastIndexOf("-") + 1
        )}
        logo={logos[logo].title}
        baseCol={baseCol}
      />
    </group>
  );
};
