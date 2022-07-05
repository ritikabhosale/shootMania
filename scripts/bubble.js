class Bubble {
  #position;
  #diameter;
  #speed;
  #id;
  constructor(position, diameter, speed, id) {
    this.#position = position;
    this.#diameter = diameter;
    this.#speed = speed;
    this.#id = id;
  }
  move() {
    this.#position.top += this.#speed;
  }
  getInfo() {
    const { top, left } = this.#position;
    return { position: { top, left }, diameter: this.#diameter, speed: this.#speed, id: this.#id };
  }
}