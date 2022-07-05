const createBubbleElement = (bubble, viewport) => {
  const bubbleElement = document.createElement('div');
  const bubbleViewport = document.getElementById(viewport.id);
  bubbleElement.id = bubble.id;
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
  const bubbleElement = document.getElementById(bubble.id);
  bubbleElement.style.top = bubble.position.top;
  bubbleElement.style.left = bubble.position.left;
  bubbleElement.style.position = 'absolute';
  bubbleElement.style.width = bubble.size;
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

const moveBubble = (bubble) => {
  setInterval(() => {
    bubble.position.top += 5;
    drawBubble(bubble);
  }, 30);
};

const createBubbles = id => bubbleViewport => {
  const position = randomPosition(bubbleViewport.dimensions);
  const size = randomInt(60) + 40;
  return { position, size, id: 'bubble-' + id++ };
};

const startGame = (bubbles, bubbleViewport) => {
  const createBubble = createBubbles(1);
  setInterval(() => {
    const bubble = createBubble(bubbleViewport);
    bubbles.push(bubble);
    createBubbleElement(bubble, bubbleViewport);
    moveBubble(bubble);
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
