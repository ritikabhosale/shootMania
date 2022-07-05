const drawBubble = (bubble, view) => {
  const bubbleElement = document.createElement('div');
  const viewElement = document.getElementById(view.id);
  const { id } = bubble.getInfo();
  bubbleElement.id = id;
  bubbleElement.className = 'bubble';
  bubbleElement.style.position = 'absolute';
  viewElement.appendChild(bubbleElement);
};

const drawView = view => {
  const viewElement = document.createElement('div');
  const containerElement = document.getElementById('container');
  containerElement.appendChild(viewElement);
  viewElement.id = view.id;
  viewElement.style.height = view.dimensions.height;
  viewElement.style.width = view.dimensions.width;
  viewElement.style.position = 'relative';
};

const updateBubble = bubble => {
  const { id, position: { top, left }, diameter } = bubble;
  const bubbleElement = document.getElementById(id);
  bubbleElement.style.top = top;
  bubbleElement.style.left = left;
  bubbleElement.style.width = diameter;
};

const updateBubbles = game => {
  game.moveBubbles();
  const { bubbles } = game.getInfo();
  bubbles.forEach(bubble => {
    updateBubble(bubble);
    game.updateBubbles(bubble);
  });
};

const startGame = (game) => {
  const { view } = game.getInfo();
  let counter = 1;
  setInterval(() => {
    if (counter % 35 === 0) {
      const bubble = game.addBubble();
      if (bubble != -1) {
        drawBubble(bubble, view);
      }
    }
    updateBubbles(game);
    counter++;
  }, 30);
};

const main = () => {
  const view = new View({ height: 600, width: 1200 }, 'bubble-view');
  const game = new Game(view, []);
  drawView(game.getInfo().view);
  startGame(game);
}

window.onload = main;
