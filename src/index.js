import './docsify';
import macau from './macau';
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
import collapse from './components/a-collapse';
import schedule from './components/a-schedule';
import count from './components/a-count';
import times from './components/a-times';
import lazyload from './components/a-lazyload';
import bg from './components/a-bg';
import star from './components/a-star';

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
  'a-collapse': collapse,
  'a-schedule': schedule,
  'a-count': count,
  'a-times': times,
  'a-lazyload': lazyload,
  'a-bg': bg,
  'a-star': star,
  ...(window.$docsify.vueComponents || {}),
};

if (!Array.isArray(window.$docsify.plugins)) {
  window.$docsify.plugins = [];
}

window.$docsify.plugins.push(function (hook) {
  hook.beforeEach(macau);
});

window.addEventListener('click', (e) => {
  if (e.target.nodeName === 'A') {
    if (e.target.className === 'section-link') {
      const [hash] = location.hash.split('?');
      location.hash = hash;
    }
  }
});

export {};
