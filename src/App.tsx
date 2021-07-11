import React, { Suspense } from "react";
import { Canvas, Vector3 } from "@react-three/fiber";
import { OrbitControls, Box, Plane } from "@react-three/drei";
import Abe from "./CapoeiraAbe";

import "./index.css";
import { Color } from "three";

export default function App() {
  const vec: Vector3 = [1, 0.1, 2];

  return (
    <>
      <h1>Hello Capoeira</h1>

      <Canvas>
        <OrbitControls />
        <directionalLight intensity={2.5} />
        <ambientLight intensity={1.2} />
        <Suspense fallback={"...Loading"}>
          <Abe />
          <Box scale={0.4} position={vec} />
          <Plane rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        </Suspense>
      </Canvas>
    </>
  );
}
