import * as THREE from "three";
import { useEffect, useRef } from "react";
import { useBoxStore } from "../store";

import { Decal } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

import CustomShaderMaterial from "three-custom-shader-material";
import CustomShaderMaterialType from "three-custom-shader-material/vanilla";

import WrapperModel from "./WrapperModel";
import { vert, frag } from "./noise";

export const Wrapper = ({
  textures,
  logos
}: {
  textures: THREE.Texture[];
  logos: THREE.Texture[];
}) => {
  const material = useRef<CustomShaderMaterialType | null>(null);
  const logo = useBoxStore((state) => state.logo);
  const texture = useBoxStore((state) => state.texture);
  const boxRef = useRef<THREE.Group | null>(null);

  const prevTexture = useRef<number>(0);

  useFrame(() => {
    if (material?.current) {
      material.current.uniforms.effectFactor.value += 0.05;
    }
  });

  useEffect(() => {
    prevTexture.current = texture;
  }, [texture]);

  const tex1 = textures[prevTexture.current];
  const tex2 = textures[texture];

  return (
    <group ref={boxRef}>
      <WrapperModel
        args={[2, 1, 1]}
        position={[0, 0, 0]}
        scale={[0.4225, 0.376, 0.605]}
        castShadow
      >
        <CustomShaderMaterial
          ref={material}
          baseMaterial={THREE.MeshPhysicalMaterial}
          roughness={0.2}
          metalness={0.2}
          vertexShader={vert}
          fragmentShader={frag}
          uniforms={{
            effectFactor: { value: 0 },
            tex: { value: tex1 },
            tex2: { value: tex2 }
          }}
        />
        <Decal
          position={[0, 0.75, 0]}
          rotation={0}
          scale={1}
          map={logos[logo]}
          map-anisotropy={16}
        />
      </WrapperModel>
    </group>
  );
};
