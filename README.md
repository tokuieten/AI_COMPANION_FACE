# 🧠 AI Companion Face (React + Three.js)

A browser-based **AI companion face** that renders a 3D face, blinks naturally, speaks user-provided text, and animates mouth movement while speaking. Built to be **LLM-ready** and easy to run on **any PC**.

---

## ✨ Features

- 🎭 3D face rendering from `.glb`
- 👁️ Natural eye blinking (procedural)
- 🗣️ Browser-based Text-to-Speech (no API keys)
- 👄 Mouth & jaw movement while speaking
- 🧩 Modular, extensible architecture
- ⚡ Fast dev setup with Vite

---

## 🛠 Tech Stack

- React
- Vite
- Three.js
- @react-three/fiber
- @react-three/drei
- Web Speech API (SpeechSynthesis)

---

## 📁 Project Structure

ai-companion-face/
│
├── public/
│ └── models/
│ └── face.glb
│
├── src/
│ ├── app/
│ │ └── AppShell.jsx
│ │
│ ├── ui/
│ │ └── FaceCanvas.jsx
│ │
│ ├── face/
│ │ ├── FaceModel.jsx
│ │ └── FaceRigController.js
│ │
│ ├── core/
│ │ ├── scene/
│ │ │ └── CameraController.js
│ │ │
│ │ └── emotionState/
│ │ ├── EmotionState.js
│ │ ├── EmotionMapper.js
│ │ └── EmotionTransition.js
│ │
│ ├── speech/
│ │ └── TTS.js
│ │
│ ├── main.jsx
│ └── style.css
│
├── index.html
├── package.json
└── README.md

yaml
Copy code

---

## 🚀 Getting Started (Any PC)

### 1️⃣ Prerequisites

Install **Node.js (v18+)**  
https://nodejs.org/

Verify:
```bash
node -v
npm -v
2️⃣ Clone the Repository
bash
Copy code
git clone https://github.com/<your-username>/ai-companion-face.git
cd ai-companion-face
3️⃣ Install Dependencies
bash
Copy code
npm install
4️⃣ Add the 3D Face Model
Place your model here (exact path required):

swift
Copy code
public/models/face.glb
⚠️ Notes:

File name must be face.glb

Path must be exactly public/models/face.glb

ARKit-compatible face models recommended (Ready Player Me, MB-Lab, etc.)

5️⃣ Run the Project
bash
Copy code
npm run dev
Open the local URL shown in the terminal (usually):

arduino
Copy code
http://localhost:5173
