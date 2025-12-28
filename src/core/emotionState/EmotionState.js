/**
 * EmotionState
 * ------------
 * Global emotion + speech trigger store.
 */

import tts from "../../speech/TTS";

class EmotionState {
  constructor() {
    this.subscribers = new Set();
    this.state = {
      emotion: "neutral",
      intensity: 0,
    };
  }

  subscribe(callback) {
    this.subscribers.add(callback);
    callback(this.state);

    return () => {
      this.subscribers.delete(callback);
    };
  }

  notify() {
    this.subscribers.forEach((cb) => cb(this.state));
  }

  /**
   * Text → emotion + speech
   */
  setEmotionFromText(text) {
    const t = text.toLowerCase();

    let emotion = "neutral";
    let intensity = 0.4;

    if (!t || t.trim().length === 0) {
      emotion = "neutral";
      intensity = 0;
    } else if (
      t.includes("happy") ||
      t.includes("love") ||
      t.includes("great") ||
      t.includes("awesome")
    ) {
      emotion = "happy";
      intensity = 0.8;
    } else if (
      t.includes("sad") ||
      t.includes("lonely") ||
      t.includes("down")
    ) {
      emotion = "sad";
      intensity = 0.7;
    } else if (
      t.includes("angry") ||
      t.includes("mad") ||
      t.includes("hate")
    ) {
      emotion = "angry";
      intensity = 0.8;
    }

    this.state = { emotion, intensity };
    this.notify();

    // 🔊 SPEAK
    tts.speak(text);
  }
}

const emotionState = new EmotionState();
export default emotionState;
