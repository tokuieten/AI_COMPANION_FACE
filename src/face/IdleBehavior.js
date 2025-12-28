// src/face/IdleBehavior.js

/**
 * IdleBehavior
 * ------------
 * Adds subtle, unconscious movements to the face:
 * - blinking
 * - micro head motion
 *
 * This runs continuously and is emotion-agnostic.
 * It should NEVER override emotional expression.
 */

class IdleBehavior {
  constructor(mesh) {
    this.mesh = mesh;

    this.morphDict = mesh.morphTargetDictionary || {};
    this.morphInfluences = mesh.morphTargetInfluences || [];

    // Blink control
    this.blinkTargets = ["EyeBlinkLeft", "EyeBlinkRight"];
    this.blinkTimer = 0;
    this.nextBlinkTime = this.randomBlinkInterval();

    // Head motion
    this.time = 0;
  }

  randomBlinkInterval() {
    return 2 + Math.random() * 3; // 2–5 seconds
  }

  /**
   * Apply blinking (very subtle, fast)
   */
  applyBlink(delta) {
    this.blinkTimer += delta;

    if (this.blinkTimer >= this.nextBlinkTime) {
      this.blinkTargets.forEach((name) => {
        const index = this.morphDict[name];
        if (index !== undefined) {
          this.morphInfluences[index] = 1;
        }
      });

      // Reset blink shortly after
      setTimeout(() => {
        this.blinkTargets.forEach((name) => {
          const index = this.morphDict[name];
          if (index !== undefined) {
            this.morphInfluences[index] = 0;
          }
        });
      }, 120);

      this.blinkTimer = 0;
      this.nextBlinkTime = this.randomBlinkInterval();
    }
  }

  /**
   * Apply subtle idle head movement
   */
  applyHeadMotion(delta) {
    this.time += delta;

    if (!this.mesh.rotation) return;

    this.mesh.rotation.y = Math.sin(this.time * 0.5) * 0.02;
    this.mesh.rotation.x = Math.sin(this.time * 0.3) * 0.01;
  }

  /**
   * Update idle behavior every frame
   */
  update(delta) {
    this.applyBlink(delta);
    this.applyHeadMotion(delta);
  }
}

export default IdleBehavior;
