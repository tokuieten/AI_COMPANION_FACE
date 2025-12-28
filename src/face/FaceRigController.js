/**
 * FaceRigController
 * -----------------
 * Applies morph target values to a mesh,
 * with name normalization for compatibility.
 */

class FaceRigController {
  constructor(mesh) {
    this.mesh = mesh;
    this.influences = mesh.morphTargetInfluences;
    this.dictionary = mesh.morphTargetDictionary;

    // Build normalized lookup once
    this.normalizedMap = {};
    Object.keys(this.dictionary).forEach((key) => {
      this.normalizedMap[this.normalize(key)] = key;
    });

    // Debug once (keep this!)
    console.log("Morph targets (normalized):", this.normalizedMap);
  }

  normalize(name) {
    return name
      .toLowerCase()
      .replace(/[_\-\s]/g, "")
      .replace("left", "l")
      .replace("right", "r");
  }

  apply(values) {
    if (!this.influences || !this.dictionary) return;

    Object.entries(values).forEach(([key, value]) => {
      const normalized = this.normalize(key);
      const actualName = this.normalizedMap[normalized];

      if (actualName !== undefined) {
        const index = this.dictionary[actualName];
        this.influences[index] = value;
      }
    });
  }
}

export default FaceRigController;
