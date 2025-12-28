// src/config/faceConfig.js

/**
 * faceConfig
 * ----------
 * Central configuration for facial behavior.
 * No logic. No state. Only constraints and tuning values.
 *
 * Changing values here should NEVER break the system.
 */

const faceConfig = {
  /**
   * Emotion intensity limits
   */
  emotionLimits: {
    min: 0,
    max: 1,
  },

  /**
   * Default emotion values
   */
  defaults: {
    emotion: "neutral",
    intensity: 0.4,
  },

  /**
   * Emotion transition behavior
   */
  transition: {
    speed: 0.08, // must match EmotionTransition for consistency
  },

  /**
   * Idle behavior tuning
   */
  idle: {
    blink: {
      minInterval: 2,
      maxInterval: 5,
      durationMs: 120,
    },
    headMotion: {
      yaw: 0.02,
      pitch: 0.01,
    },
  },

  /**
   * Camera constraints (safety + comfort)
   */
  camera: {
    distance: 2.5,
    breathingAmplitude: 0.03,
  },

  /**
   * Lighting constraints
   */
  lighting: {
    ambientIntensity: 0.6,
    keyIntensity: 0.8,
    fillIntensity: 0.4,
  },
};

export default faceConfig;
