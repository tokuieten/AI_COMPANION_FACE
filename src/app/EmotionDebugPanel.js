// src/app/EmotionDebugPanel.js

/**
 * EmotionDebugPanel
 * -----------------
 * Development-only tool.
 * Displays the current emotion state in real time.
 *
 * This file has ZERO impact on the actual system behavior.
 * It can be removed at any time.
 */

import { useEffect, useState } from "react";
import emotionState from "../core/emotionState/EmotionState";

export default function EmotionDebugPanel() {
  const [state, setState] = useState({
    emotion: "neutral",
    intensity: 0,
  });

  useEffect(() => {
    const unsubscribe = emotionState.subscribe((newState) => {
      setState(newState);
    });

    return unsubscribe;
  }, []);

  return (
    <div
      style={{
        position: "absolute",
        top: "12px",
        right: "12px",
        padding: "10px 12px",
        backgroundColor: "rgba(0,0,0,0.6)",
        color: "#fff",
        fontSize: "12px",
        borderRadius: "8px",
        pointerEvents: "none",
        fontFamily: "monospace",
      }}
    >
      <div><strong>Emotion:</strong> {state.emotion}</div>
      <div><strong>Intensity:</strong> {state.intensity.toFixed(2)}</div>
    </div>
  );
}
