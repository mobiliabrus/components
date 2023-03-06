export const htmlMinify = (html) => {
  return html.replace(/\n/g, "");
};

export const debounce = (fn, interval = 0) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn.apply(this, args), interval);
  };
};
