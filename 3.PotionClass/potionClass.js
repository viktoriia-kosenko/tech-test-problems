class Potion {
  constructor(color, volume) {
    this.color = color;
    this.volume = volume;
  }
  mix(potion) {
    let newVolume = potion.volume + this.volume;
    let newColor = this.color.map((color, index) => {
      return Math.ceil(
        (color * this.volume + potion.color[index] * potion.volume) / newVolume
      );
    });
    return new Potion(newColor, newVolume);
  }
}

module.exports = { Potion };
