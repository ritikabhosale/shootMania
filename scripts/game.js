const randomInt = limit => Math.floor(Math.random() * limit);

const randomPosition = ({ height, width }) => {
  const randomLeft = randomInt(width);
  const randomTop = randomInt(height / 2);
  return { top: randomTop, left: randomLeft };
};

class Game {
  #view;
  #bubbles;
  #numOfBubbles;
  constructor(view, bubbles) {
    this.#view = view;
    this.#bubbles = bubbles;
    this.#numOfBubbles = 0;
  }

  addBubble() {
    const position = randomPosition(this.#view.dimensions);
    const diameter = randomInt(60) + 40;
    const id = 'bubble--'.concat(++this.#numOfBubbles);
    const bubble = new Bubble(position, diameter, 3, id);
    this.#bubbles.push(bubble);
    return bubble;
  };

  moveBubbles() {
    console.log(this.#numOfBubbles);
    this.#bubbles.forEach(bubble => bubble.move());
  }

  getInfo() {
    const bubbles = [];
    this.#bubbles.forEach(bubble => bubbles.push(bubble.getInfo()));
    return { bubbles, view: this.#view };
  }
}