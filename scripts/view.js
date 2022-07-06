class View {
  #dimensions;
  constructor(dimensions) {
    this.#dimensions = dimensions;
  }
  doesIntersectRightEdge(bubble) {
    const requiredWidth = bubble.position.left + bubble.diameter;
    return requiredWidth >= this.#dimensions.width;
  }
  doesIntersectBottomEdge(bubble) {
    const requiredWidth = bubble.position.top + bubble.diameter;
    return requiredWidth >= this.#dimensions.height;
  }
  getInfo() {
    const { height, width } = this.#dimensions;
    return { dimensions: { height, width } };
  }
}
