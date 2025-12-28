import React, { useEffect, useRef } from "react";
import { Canvas, useThree, useFrame } from "@react-three/fiber";

import FaceModel from "../face/FaceModel.jsx";
import CameraController from "../core/scene/CameraController";

/**
 * Internal scene setup component
 * Runs once when the canvas is created
 */
function SceneSetup() {
  const { camera } = useThree();
  const cameraControllerRef = useRef(null);

  useEffect(() => {
    cameraControllerRef.current = new CameraController(camera);
    cameraControllerRef.current.init();
  }, [camera]);

  useFrame((_, delta) => {
    cameraControllerRef.current?.update(delta);
  });

  return null;
}

export default function FaceCanvas() {
  return (
    <Canvas
      camera={{ fov: 35 }}
      style={{
        width: "100%",
        height: "100%",
      }}
      gl={{ antialias: true }}
    >
      {/* Calm, neutral lighting */}
      <ambientLight intensity={0.7} />
      <directionalLight position={[1, 2, 2]} intensity={0.7} />

      <SceneSetup />
      <FaceModel />
    </Canvas>
  );
}
