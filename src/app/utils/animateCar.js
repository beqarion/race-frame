export function animateCar(carElement, startX, endX, durationMs) {
  return new Promise((resolve, reject) => {
    let startTime = null;
    let animationId = null;
    let isStopped = false;
    const pxPerMs = (endX - startX) / durationMs;

    const step = (timestamp) => {
      if (isStopped) return;

      if (!startTime) startTime = timestamp;
      const elapsedMs = timestamp - startTime;
      const currentLeft = Math.min(startX + pxPerMs * elapsedMs, endX);

      carElement.style.left = `${currentLeft}px`;

      if (currentLeft >= endX) {
        cancelAnimationFrame(animationId);
        if (!isStopped) {
          isStopped = true;
        }
        return;
      }

      animationId = requestAnimationFrame(step);
    };

    animationId = requestAnimationFrame(step);

    return {
      stop: () => {
        if (!isStopped) {
          isStopped = true;
          cancelAnimationFrame(animationId);
          reject(new Error("Animation stopped by server error"));
        }
      },
    };
  });
}
