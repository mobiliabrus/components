import Map from "./Map";
import Close from "../a-close";
import { htmlMinify } from "../util";
import "./index.less";

const template = htmlMinify(`<div>
<div v-if="fullscreen" class="map-wrapper map-fullscreen">
  <div @click="this.closeFullScreen" style="position:absolute;right:8px;top:10px;z-index:2147483646">
        <v-close></v-close>
  </div>
  <v-map
  :center="this._center"
  :points="this._points"
  :walking="this._walking"
  :transit="this._transit"
  :driving="this._driving"
  ></v-map>
</div>
<div class="map-wrapper">
  <div class="map-mask" @click="this.switchFullScreen"></div>
  <v-map
  :center="this._center"
  :points="this._points"
  :walking="this._walking"
  :transit="this._transit"
  :driving="this._driving"
  ></v-map>
</div>
</div>`);

export default {
  template,
  props: ["center", "points", "walking", "transit", "driving"],
  data: function () {
    return {
      fullscreen: false,
    };
  },
  computed: {
    _class: function () {
      return this.fullscreen ? "map-wrapper map-fullscreen" : "map-wrapper";
    },
    _points: function () {
      return typeof this.points === "string"
        ? this.points.split(/[;|]/).map((point) => {
            const [lat, lng, address] = point.split(",");
            return { latitude: lat, longitude: lng, address };
          })
        : [];
    },
    _center: function () {
      const [latitude, longitude] = typeof this.center === "string" ? this.center.split(",") : [];
      return latitude && longitude
        ? { latitude, longitude }
        : // try using points as center
          this._points[0] && { latitude: this._points[0].latitude, longitude: this.points[0].longitude };
    },
    _walking: function () {
      return typeof this.walking === "string"
        ? this.walking.split(/[;|]/).map((point) => {
            const [lat, lng, address] = point.split(",");
            return { latitude: lat, longitude: lng, address };
          })
        : [];
    },
    _transit: function () {
      return typeof this.transit === "string"
        ? this.transit.split(/[;|]/).map((point) => {
            const [lat, lng, address] = point.split(",");
            return { latitude: lat, longitude: lng, address };
          })
        : [];
    },
    _driving: function () {
      return typeof this.driving === "string"
        ? this.driving.split(/[;|]/).map((point) => {
            const [lat, lng, address] = point.split(",");
            return { latitude: lat, longitude: lng, address };
          })
        : [];
    },
  },
  methods: {
    switchFullScreen: function () {
      this.fullscreen = true;
    },
    closeFullScreen: function () {
      this.fullscreen = false;
    },
  },
  components: {
    "v-map": Map,
    "v-close": Close,
  },
};
