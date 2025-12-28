import React, { useState } from "react";
import FaceCanvas from "../ui/FaceCanvas.jsx";
import emotionState from "../core/emotionState/EmotionState";

/**
 * AppShell
 * --------
 * Application layout shell.
 * - Top: face (emotional focus)
 * - Bottom: text input (user intent)
 */
export default function AppShell() {
  const [text, setText] = useState("");

  const handleSubmit = () => {
    // Trigger emotion logic
    emotionState.setEmotionFromText(text);
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "#0f0f0f",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      {/* ================= FACE AREA ================= */}
      <div
        style={{
          flex: "1 1 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <FaceCanvas />
      </div>

      {/* ================= TEXT INPUT ================= */}
      <div
        style={{
          padding: "16px",
          backgroundColor: "#151515",
          display: "flex",
          gap: "12px",
          alignItems: "center",
        }}
      >
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type a paragraph or song lyrics..."
          style={{
            flex: 1,
            height: "64px",
            resize: "none",
            padding: "12px",
            borderRadius: "10px",
            border: "none",
            outline: "none",
            fontSize: "14px",
            backgroundColor: "#1f1f1f",
            color: "#ffffff",
            lineHeight: "1.4",
          }}
        />

        <button
          onClick={handleSubmit}
          style={{
            height: "64px",
            padding: "0 24px",
            borderRadius: "10px",
            border: "none",
            backgroundColor: "#4f46e5",
            color: "#ffffff",
            fontSize: "14px",
            fontWeight: "600",
            cursor: "pointer",
            whiteSpace: "nowrap",
          }}
        >
          Apply
        </button>
      </div>
    </div>
  );
}
