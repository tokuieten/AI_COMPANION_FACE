// src/core/scene/LightingSetup.js

/**
 * LightingSetup
 * -------------
 * Defines soft, emotionally safe lighting for the face.
 * Lighting must never distract, dramatize, or intimidate.
 *
 * This file is static by design.
 */

import * as THREE from "three";

class LightingSetup {
  constructor(scene) {
    this.scene = scene;
    this.lights = [];
  }

  /**
   * Initialize lighting
   */
  init() {
    if (!this.scene) return;

    // Soft ambient light (emotional baseline)
    const ambient = new THREE.AmbientLight(0xffffff, 0.6);
    this.scene.add(ambient);
    this.lights.push(ambient);

    // Key light (soft, frontal)
    const keyLight = new THREE.DirectionalLight(0xffffff, 0.8);
    keyLight.position.set(1, 1, 2);
    this.scene.add(keyLight);
    this.lights.push(keyLight);

    // Fill light (reduce harsh shadows)
    const fillLight = new THREE.DirectionalLight(0xffffff, 0.4);
    fillLight.position.set(-1, 0.5, 2);
    this.scene.add(fillLight);
    this.lights.push(fillLight);
  }

  /**
   * Cleanup
   */
  dispose() {
    this.lights.forEach((light) => {
      this.scene.remove(light);
    });
    this.lights = [];
  }
}

export default LightingSetup;
