import React, { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

import FaceRigController from "./FaceRigController";
import tts from "../speech/TTS";

export default function FaceModel() {
  const { scene } = useGLTF("/models/face.glb");

  const rigsRef = useRef([]);
  const clockRef = useRef(new THREE.Clock());

  // Blink state
  const blinkRef = useRef({
    timer: 0,
    progress: 0,
    nextBlink: Math.random() * 3 + 2,
    blinking: false,
  });

  useEffect(() => {
    rigsRef.current = [];

    scene.traverse((child) => {
      if (child.isMesh && child.morphTargetInfluences) {
        rigsRef.current.push(new FaceRigController(child));
      }
    });
  }, [scene]);

  useFrame((_, delta) => {
    if (!rigsRef.current.length) return;

    const t = clockRef.current.getElapsedTime();

    /* ---------- BLINK ---------- */
    const blink = blinkRef.current;
    blink.timer += delta;

    if (!blink.blinking && blink.timer > blink.nextBlink) {
      blink.blinking = true;
      blink.progress = 0;
      blink.timer = 0;
    }

    if (blink.blinking) {
      blink.progress += delta * 8;
      if (blink.progress >= 1) {
        blink.progress = 0;
        blink.blinking = false;
        blink.nextBlink = Math.random() * 3 + 2;
      }
    }

    /* ---------- SPEECH MOUTH ---------- */
    let jaw = 0;
    if (tts.isSpeaking) {
      // Natural talking rhythm
      jaw = 0.25 + Math.abs(Math.sin(t * 6)) * 0.35;
    }

    /* ---------- APPLY ---------- */
    rigsRef.current.forEach((rig) => {
      rig.apply({
        eyeBlinkLeft: blink.progress,
        eyeBlinkRight: blink.progress,
        jawOpen: jaw,
      });
    });
  });

  return <primitive object={scene} />;
}
