import img from './components/a-img';
import secret from './components/a-secret';
import flight from './components/a-flight';
import map from './components/a-map';
import hotel from './components/a-hotel';
import carousel from './components/a-carousel';
import badge from './components/a-badge';
import tooltip from './components/a-tooltip';
import gallery from './components/a-gallery';
import word from './components/a-word';
import countdown from './components/a-countdown';
import remind from './components/a-remind';
import select from './components/a-select';
import slash from './components/a-slash';

if (!window.$docsify) {
  window.$docsify = {};
}

window.$docsify.vueComponents = {
  'a-img': img,
  'a-secret': secret,
  'a-flight': flight,
  'a-map': map,
  'a-hotel': hotel,
  'a-carousel': carousel,
  'a-badge': badge,
  'a-tooltip': tooltip,
  'a-gallery': gallery,
  'a-word': word,
  'a-countdown': countdown,
  'a-remind': remind,
  'a-select': select,
  'a-slash': slash,
  ...(window.$docsify.vueComponents || {}),
};

if (!Array.isArray(window.$docsify.plugins)) {
  window.$docsify.plugins = [];
}

window.$docsify.plugins.push(function (hook, vm) {
  hook.beforeEach(function (raw) {
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
  });
});

export {};
