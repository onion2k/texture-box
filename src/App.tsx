import React, { Suspense } from "react";
import Spinner from "./Spinner";

import { OrbitControls, ContactShadows, Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import { Controls } from "./Controls";
import { SparklesLayer } from "./Effects/SparklesLayer";
import { CustomBox } from "./CustomBox";

import wood from "./wrapperTextures/wood.jpg";
import feathers from "./wrapperTextures/feathers.jpg";
import gold from "./wrapperTextures/gold.jpg";
import pink from "./wrapperTextures/pink.jpg";
import drops from "./wrapperTextures/drops.jpg";

import "./styles.scss";

export default function App() {
  const textures = [wood, feathers, gold, pink, drops];
  const logos = [
    { file: "/react.png", title: "React" },
    { file: "./three.png", title: "Three" }
  ];

  return (
    <div className="flex flex-row">
      <div className="flex flex-col flex-initial items-start w-3/4">
        <h1 className="px-8 py-5">Custom Box Generator</h1>

        <div className="App">
          <Suspense fallback={<Spinner />}>
            <Canvas
              shadows
              dpr={[1, 1.5]}
              camera={{ fov: 60, position: [1, 2, 2.5] }}
            >
              <ambientLight intensity={0.15} />
              <Environment preset="city" />

              <CustomBox textures={textures} logos={logos} />

              <SparklesLayer />

              <ContactShadows
                position={[0, -0.4, 0]}
                opacity={0.75}
                scale={10}
                blur={2.5}
                far={4}
              />

              <OrbitControls
                minPolarAngle={Math.PI * 0.25}
                maxPolarAngle={Math.PI * 0.5}
                enableZoom={false}
                enablePan={false}
              />
            </Canvas>
          </Suspense>
        </div>
      </div>
      <Controls textureImages={textures} logos={logos} />
    </div>
  );
}
