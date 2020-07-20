export const formatNumber = (number = 0) => {
  return number.toFixed(2).toString().replace(".", ",");
};

export const getDiscount = (currentPrice, originalPrice) => {
  return Math.round((currentPrice / originalPrice) * 100);
};

export const unitPrice = (units, price) => {
  return price/units;
};
