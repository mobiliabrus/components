function macau(raw) {
  const reg = /`{3}<([^`]+)>\n([^`]+)`{3}/g;
  return raw.replace(reg, function (_, c, p) {
    let slot = '';
    let props = '';
    p.split(/\n/).forEach((q) => {
      const [prop, value] = q.trim().split(':');
      if (prop) {
        if (typeof value === 'undefined') {
          slot = prop;
        } else {
          props += ` ${prop}="${value}"`;
        }
      }
    });
    return `<${c}${props}>${slot}</${c}>`;
  });
}

export default macau;
