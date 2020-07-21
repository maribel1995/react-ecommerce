export const formatNumber = (number = 0) => {
  return number.toFixed(2).toString().replace(".", ",");
};

export const getDiscount = (currentPrice, originalPrice) => {
  return Math.round((currentPrice / originalPrice) * 100);
};

export const unitPrice = (units, price) => {
  return price / units;
};

export const normalizeString = (str) =>
  str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

export const buildSearchRegex = (str) => {
  const arr = str.split("");
  const exp = arr.map((x, i) => `(.*?)${arr[i]}`).join("");
  return new RegExp(exp, "i");
};
