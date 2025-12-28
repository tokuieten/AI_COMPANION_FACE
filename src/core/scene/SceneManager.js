// src/core/scene/SceneManager.js

/**
 * SceneManager
 * ------------
 * Responsible for initializing and maintaining the 3D scene context.
 * This file ensures environmental consistency.
 *
 * It does NOT:
 * - Control emotion
 * - Control the face
 *
 * It ONLY:
 * - Organizes scene-level behavior
 */

class SceneManager {
  constructor(scene) {
    this.scene = scene;
  }

  /**
   * Initialize scene-level settings
   */
  init() {
    if (!this.scene) return;

    // Prevent accidental tone mapping changes
    this.scene.background = null;

    // Ensure stable render ordering
    this.scene.traverse((obj) => {
      if (obj.isMesh) {
        obj.frustumCulled = false;
      }
    });
  }

  /**
   * Cleanup (future-proofing)
   */
  dispose() {
    if (!this.scene) return;

    this.scene.traverse((obj) => {
      if (obj.isMesh && obj.geometry) {
        obj.geometry.dispose();
      }
      if (obj.isMesh && obj.material) {
        obj.material.dispose();
      }
    });
  }
}

export default SceneManager;
