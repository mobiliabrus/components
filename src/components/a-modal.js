import Zoomer from "./a-zoomer/vue-zoomer";
import Close from "./a-close";
import { htmlMinify } from "./util";

const template = htmlMinify(`<div style="line-height:initial">
  <div v-if="visible" style="position:fixed;top:0;left:0;height:100vh;width:100vw;background:rgba(0,0,0,0.8);z-index:2147483647;">
    <div @click="this.close" style="position:absolute;right:8px;top:10px;z-index:2147483646">
      <v-close></v-close>
    </div>
    <div style="position:absolute;left:0;bottom:0;width:100%;padding:8px 10px;z-index:2147483646">
      <slot name="action"></slot>
    </div>
    <v-zoomer ref="zoomer" style="width:100%;height:100%;">
      <slot name="popover"></slot>
    </v-zoomer>
  </div>
  <div @click="this.pop">
    <slot name="default"></slot>
  </div>
</div>`);

export default {
  template,
  data: function () {
    return {
      visible: false,
    };
  },
  props: {
    scale: {
      type: Number,
      default: 1,
    },
  },
  methods: {
    zoomIn: function (s) {
      this.$refs.zoomer.zoomIn(s);
    },
    pop: function () {
      this.visible = true;
      this.$emit("popover");
      this.$nextTick(function () {
        this.zoomIn(this.scale);
      });
    },
    close: function () {
      this.visible = false;
    },
  },
  components: {
    "v-zoomer": Zoomer,
    "v-close": Close,
  },
};
