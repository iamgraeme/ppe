export const aspectRatio = (ratio) => {
  const padding = ratio.split(':').reduce((first, second) => second / first)
  return padding * 100
};
