function macau(raw) {
  const reg = /`{3}<([^`]+)>\n([^`]+)`{3}/g;
  return raw.replace(reg, function (_, c, p) {
    let slot = '';
    let props = '';
    p.split(/\n/).forEach((q) => {
      const isBind = q.indexOf(':') === 0;
      const [prop, ...rest] = q.replace(/^:/, '').trim().split(':');
      const value = rest.join(':');
      if (typeof prop === 'string') {
        if (value) {
          props += ` ${isBind ? ':' : ''}${prop}="${escapeAttr(value)}"`;
        } else {
          slot = prop;
        }
      }
    });
    return `<${c}${props}>${slot}</${c}>`;
  });
}

function escapeAttr(value) {
  return String(value).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

export default macau;
