
export const findFavProduct = (fav, id) => {
  return fav?.some(product => product.id === id) || false;
};