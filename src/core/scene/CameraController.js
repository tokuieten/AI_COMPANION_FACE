/**
 * CameraController
 * ----------------
 * Face-centric camera framing.
 * This camera NEVER reacts to emotion.
 *
 * Responsibility:
 * - Frame the head and shoulders
 * - Keep the face centered and calm
 */

class CameraController {
  constructor(camera) {
    this.camera = camera;
  }

  /**
   * Initial camera setup
   */
  init() {
    if (!this.camera) return;

    // Position camera at human eye level
    // Y ≈ 1.6 works for most humanoid avatars
    this.camera.position.set(0, 1.6, 1.3);

    // Look directly at the face
    this.camera.lookAt(0, 1.6, 0);

    // Ensure projection updates
    this.camera.updateProjectionMatrix();
  }

  /**
   * No motion yet (intentional)
   */
  update() {}
}

export default CameraController;
