import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Abe from "./CapoeiraAbe";

import "./index.css";

export default function App() {
  return (
    <Canvas>
      <OrbitControls />
      <directionalLight intensity={2.5} />
      <ambientLight intensity={1.2} />
      <Abe />
    </Canvas>
  );
}
