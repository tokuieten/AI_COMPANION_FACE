/**
 * EmotionTransition
 * -----------------
 * Smoothly interpolates facial morph target values.
 * Includes a subtle idle baseline so the face never feels frozen.
 */

class EmotionTransition {
  constructor() {
    this.current = {};
    this.target = {};
    this.speed = 4;

    // 👇 Idle baseline (VERY subtle)
    this.idleBaseline = {
      jawOpen: 0.05,
      mouthSmileLeft: 0.02,
      mouthSmileRight: 0.02,
    };
  }

  /**
   * Set a new target expression
   */
  setTarget(targetValues) {
    this.target = { ...targetValues };
  }

  /**
   * Update per frame
   */
  update(delta = 1 / 60) {
    const output = {};

    // Apply target values
    Object.keys(this.target).forEach((key) => {
      const currentValue = this.current[key] ?? 0;
      const targetValue = this.target[key] ?? 0;

      const diff = targetValue - currentValue;
      const step = diff * Math.min(this.speed * delta, 1);

      const newValue = currentValue + step;
      this.current[key] = newValue;
      output[key] = newValue;
    });

    // Relax unused values
    Object.keys(this.current).forEach((key) => {
      if (!(key in this.target)) {
        this.current[key] *= 1 - Math.min(this.speed * delta, 1);
        output[key] = this.current[key];
      }
    });

    // 👇 Add idle baseline LAST (so it never fully disappears)
    Object.entries(this.idleBaseline).forEach(([key, value]) => {
      output[key] = (output[key] ?? 0) + value;
    });

    return output;
  }
}

export default EmotionTransition;
