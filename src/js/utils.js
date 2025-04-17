export function createImage(src) {
  const image = new Image();
  image.src = src;
  return image;
}
export function getCollisionDirection(elementA, elementB) {
  if (
    elementA.x + elementA.width >= elementB.x &&
    elementA.x <= elementB.x + elementB.width &&
    elementA.y + elementA.height >= elementB.y &&
    elementA.y <= elementB.y + elementB.width
  ) {
    const topDiff = elementB.y + elementB.height - elementA.y;
    const bottomDiff = elementA.y + elementA.height - elementB.y;
    const leftDiff = elementB.x + elementB.width - elementA.x;
    const rightDiff = elementA.x + elementA.width - elementB.x;

    const offset = Math.min(bottomDiff, topDiff, leftDiff, rightDiff);

    return {
      bottom: bottomDiff === offset,
      right: rightDiff === offset,
      left: leftDiff === offset,
      top: topDiff === offset,
      offset,
    };
  }
  return null;
}
