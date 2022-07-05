const createBubbleElement = (bubble, viewport) => {
  const { id } = bubble.getInfo();
  const bubbleElement = document.createElement('div');
  const bubbleViewport = document.getElementById(viewport.id);
  bubbleElement.id = id;
  bubbleElement.className = 'bubble';
  bubbleViewport.appendChild(bubbleElement);
};

const createBubbleViewport = bubbleViewport => {
  const viewportElement = document.createElement('div');
  const view = document.getElementById('view');
  viewportElement.id = bubbleViewport.id;
  view.appendChild(viewportElement);
};

const drawBubble = bubble => {
  const { id, position: { top, left }, diameter } = bubble.getInfo();
  const bubbleElement = document.getElementById(id);
  bubbleElement.style.top = top;
  bubbleElement.style.left = left;
  bubbleElement.style.position = 'absolute';
  bubbleElement.style.width = diameter;
};

const drawViewport = viewport => {
  const viewportElement = document.getElementById(viewport.id);
  viewportElement.style.height = viewport.dimensions.height;
  viewportElement.style.width = viewport.dimensions.width;
  viewportElement.style.position = 'relative';
};

const randomInt = limit => Math.floor(Math.random() * limit);

const randomPosition = ({ height, width }) => {
  const randomLeft = randomInt(width);
  const randomTop = randomInt(height / 2);
  return { top: randomTop, left: randomLeft };
};

const updateBubble = bubble => setInterval(() => {
  bubble.move();
  drawBubble(bubble);
}, 30);

const createBubbles = id => bubbleViewport => {
  const position = randomPosition(bubbleViewport.dimensions);
  const diameter = randomInt(60) + 40;
  return new Bubble(position, diameter, 5, 'bubble-' + id++);
};

const startGame = (bubbles, bubbleViewport) => {
  const createBubble = createBubbles(1);
  setInterval(() => {
    const bubble = createBubble(bubbleViewport);
    bubbles.push(bubble);
    createBubbleElement(bubble, bubbleViewport);
    updateBubble(bubble);
  }, 1000);
};

const main = () => {
  const bubbles = [];
  const bubbleViewport = { dimensions: { height: 600, width: 1200 }, id: 'bubble-viewport' };
  createBubbleViewport(bubbleViewport);
  drawViewport(bubbleViewport);
  startGame(bubbles, bubbleViewport);
}

window.onload = main;
