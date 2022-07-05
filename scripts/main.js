const createBubble = bubble => {
  const bubbleElement = document.createElement('div');
  const view = document.getElementById('view');
  bubbleElement.id = bubble.id;
  bubbleElement.className = 'bubble';
  view.appendChild(bubbleElement);
}

const drawBubble = bubble => {
  const bubbleElement = document.getElementById(bubble.id);
  bubbleElement.style.top = bubble.position.top;
  bubbleElement.style.left = bubble.position.left;
  bubbleElement.style.height = bubble.size;
};

const main = () => {
  const position = { top: 0, left: 0 };
  const size = 60;
  const bubble = { position, size, id: 'bubble-1' };
  createBubble(bubble);
  drawBubble(bubble);
}

window.onload = main;
