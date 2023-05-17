export const requestInterval = (callback: () => any, interval: number) => {
  let timer: number | null = null;
  let startTime = new Date().valueOf();
  let endTime = new Date().valueOf();
  const loop = function () {
    timer = requestAnimationFrame(loop);
    endTime = new Date().valueOf();
    if (endTime - startTime >= interval) {
      endTime = startTime = new Date().valueOf();
      callback();
    }
  };
  timer = requestAnimationFrame(loop);
  return timer;
};

export const clearRequestInterval = (timer?: number) => {
  if (!timer) return;
  cancelAnimationFrame(timer);
};
