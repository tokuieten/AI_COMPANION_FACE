/**
 * EmotionMapper
 * -------------
 * Maps high-level emotions to facial morph target values.
 *
 * Output format:
 * {
 *   morphTargetName: value (0.0 → 1.0)
 * }
 */

const EmotionMapper = {
  map(emotion, intensity = 1) {
    const i = Math.min(Math.max(intensity, 0), 1);

    switch (emotion) {
      case "happy":
        return {
          mouthSmileLeft: 0.8 * i,
          mouthSmileRight: 0.8 * i,
          eyeSquintLeft: 0.3 * i,
          eyeSquintRight: 0.3 * i,
        };

      case "sad":
        return {
          mouthFrownLeft: 0.6 * i,
          mouthFrownRight: 0.6 * i,
          browInnerUp: 0.4 * i,
        };

      case "angry":
        return {
          browDownLeft: 0.7 * i,
          browDownRight: 0.7 * i,
          mouthPressLeft: 0.5 * i,
          mouthPressRight: 0.5 * i,
        };

      case "surprised":
        return {
          jawOpen: 0.6 * i,
          browInnerUp: 0.6 * i,
        };

      case "neutral":
      default:
        return {};
    }
  },
};

export default EmotionMapper;
