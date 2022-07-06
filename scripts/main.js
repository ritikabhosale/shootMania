const drawBubble = (bubble) => {
  const bubblesFrame = document.getElementById('bubble-view');
  const bubbleElement = document.createElement('div');
  const { id } = bubble.getInfo();
  bubbleElement.id = id;
  bubbleElement.className = 'bubble';
  bubbleElement.style.position = 'absolute';
  bubblesFrame.appendChild(bubbleElement);
};

const updateView = view => {
  const bubblesFrame = document.getElementById('bubble-view');
  bubblesFrame.style.height = view.dimensions.height;
  bubblesFrame.style.width = view.dimensions.width;
};

const updateBubble = bubble => {
  const { id, position: { top, left }, diameter } = bubble;
  const bubbleElement = document.getElementById(id);
  bubbleElement.style.top = top;
  bubbleElement.style.left = left;
  bubbleElement.style.width = diameter;
};

const eraseBubble = (bubble) => {
  const bubblesFrame = document.getElementById('bubble-view');
  const bubbleElement = document.getElementById(bubble.id);
  bubblesFrame.removeChild(bubbleElement);
};

const updateBubbles = game => {
  game.moveBubbles();
  const { bubbles } = game.getInfo();
  bubbles.forEach(bubble => {
    if (game.hasBubbleCrossed(bubble)) {
      game.removeBubble(bubble);
      eraseBubble(bubble); // screen
      return;
    }
    updateBubble(bubble); //screen
  });
};

const startGame = (game) => {
  let counter = 1;
  setInterval(() => {
    if (counter % 35 === 0) {
      const bubble = game.addBubble();
      if (bubble != -1) {
        drawBubble(bubble);
      }
    }
    updateBubbles(game); //screen
    counter++;
  }, 30);
};

const drawCannon = (cannon) => {
  const { position: { top, left }, id } = cannon;
  const cannonElement = document.createElement('div');
  const container = document.getElementById('container');
  container.appendChild(cannonElement);
  cannonElement.id = id;
  cannonElement.style.top = top;
  cannonElement.style.left = left;
};

const main = () => {
  const view = new View({ height: 600, width: 1200 });
  const cannon = { position: { top: 10, left: 850 }, id: 'cannon' };
  const game = new Game(view, [], cannon);
  drawCannon(game.getInfo().cannon);
  updateView(game.getInfo().view);
  startGame(game);
}

window.onload = main;
