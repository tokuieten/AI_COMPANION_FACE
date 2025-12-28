/**
 * TTS
 * ---
 * Browser Text-to-Speech with speaking state.
 */

class TTS {
  constructor() {
    this.synth = window.speechSynthesis;
    this.voice = null;
    this.isSpeaking = false;

    this.loadVoices = this.loadVoices.bind(this);
    this.synth.onvoiceschanged = this.loadVoices;
    this.loadVoices();
  }

  loadVoices() {
    const voices = this.synth.getVoices();
    if (!voices.length) return;

    this.voice =
      voices.find(v => v.lang.startsWith("en") && v.name.toLowerCase().includes("female")) ||
      voices.find(v => v.lang.startsWith("en")) ||
      voices[0];
  }

  speak(text) {
    if (!text) return;

    this.synth.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.voice = this.voice;
    utterance.rate = 0.95;
    utterance.pitch = 1.0;
    utterance.volume = 1.0;

    utterance.onstart = () => {
      this.isSpeaking = true;
    };

    utterance.onend = () => {
      this.isSpeaking = false;
    };

    utterance.onerror = () => {
      this.isSpeaking = false;
    };

    this.synth.speak(utterance);
  }
}

const tts = new TTS();
export default tts;
