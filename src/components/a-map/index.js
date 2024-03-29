import Map from './Map';
import close from '../a-close';
import lazyload from '../a-lazyload';
import placeholder from '../a-placeholder';
import { htmlMinify } from '../util';
import './index.less';

const template = htmlMinify(`
<a-lazyload @load="onLoad">
  <div v-if="fullscreen" class="map-wrapper map-fullscreen">
    <div @click="this.closeFullScreen" style="position:absolute;right:8px;top:10px;z-index:2147483646">
          <v-close></v-close>
    </div>
    <v-map
    :center="this._center"
    :points="this._points"
    :divesites="this._divesites"
    :walking="this._walking"
    :transit="this._transit"
    :driving="this._driving"
    :line="this._line"
    ></v-map>
  </div>
  <div v-if="loaded" class="map-wrapper">
    <div class="map-mask" @click="this.switchFullScreen"></div>
    <v-map
    :center="this._center"
    :points="this._points"
    :divesites="this._divesites"
    :walking="this._walking"
    :transit="this._transit"
    :driving="this._driving"
    :line="this._line"
    ></v-map>
  </div>
  <a-placeholder v-else><a-placeholder/>
</a-lazyload>`);

export default {
  template,
  props: ['center', 'points', 'walking', 'transit', 'driving', 'line', 'divesites'],
  data: function () {
    return {
      loaded: false,
      fullscreen: false,
    };
  },
  computed: {
    _class: function () {
      return this.fullscreen ? 'map-wrapper map-fullscreen' : 'map-wrapper';
    },
    _points: function () {
      return typeof this.points === 'string'
        ? this.points.split(/[;|]/).map((point) => {
            const [lat, lng, address] = point.split(',');
            return { latitude: lat, longitude: lng, address };
          })
        : [];
    },
    _divesites: function () {
      return typeof this.divesites === 'string'
        ? this.divesites.split(/[;|]/).map((site) => {
            const [lat, lng, name] = site.split(',');
            return { latitude: lat, longitude: lng, name };
          })
        : [];
    },
    _center: function () {
      const [latitude, longitude] = typeof this.center === 'string' ? this.center.split(',') : [];
      return latitude && longitude
        ? { latitude, longitude }
        : // try using points as center
          this._points[0] && {
            latitude: this._points[0].latitude,
            longitude: this.points[0].longitude,
          };
    },
    _walking: function () {
      return typeof this.walking === 'string'
        ? this.walking.split(/[;|]/).map((point) => {
            const [lat, lng, address] = point.split(',');
            return { latitude: lat, longitude: lng, address };
          })
        : [];
    },
    _transit: function () {
      return typeof this.transit === 'string'
        ? this.transit.split(/[;|]/).map((point) => {
            const [lat, lng, address] = point.split(',');
            return { latitude: lat, longitude: lng, address };
          })
        : [];
    },
    _driving: function () {
      return typeof this.driving === 'string'
        ? this.driving.split(/[;|]/).map((point) => {
            const [lat, lng, address] = point.split(',');
            return { latitude: lat, longitude: lng, address };
          })
        : [];
    },
    _line: function () {
      return typeof this.line === 'string'
        ? this.line.split(/[;|]/).map((point) => {
            const [lat, lng] = point.split(',');
            return { latitude: lat, longitude: lng };
          })
        : [];
    },
  },
  methods: {
    onLoad() {
      this.loaded = true;
    },
    switchFullScreen: function () {
      this.fullscreen = true;
    },
    closeFullScreen: function () {
      this.fullscreen = false;
    },
  },
  components: {
    'v-map': Map,
    'v-close': close,
    'a-lazyload': lazyload,
    'a-placeholder': placeholder,
  },
};
