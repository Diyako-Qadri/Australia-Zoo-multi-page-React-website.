export const getImageURL = imageName => {
    return new URL(`../assets/image/${imageName}`, import.meta.url).href;
  };