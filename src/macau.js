function macau(raw) {
  const reg = /`{3}<([^`]+)>\n([^`]+)`{3}/g;
  return raw.replace(reg, function (_, c, p) {
    let slot = '';
    let props = '';
    p.split(/\n/).forEach((q) => {
      const [prop, ...rest] = q.trim().split(':');
      const value = rest.join(':');
      if (typeof prop === 'string') {
        if (value) {
          props += ` ${prop}="${value}"`;
        } else {
          slot = prop;
        }
      }
    });
    return `<${c}${props}>${slot}</${c}>`;
  });
}

export default macau;
