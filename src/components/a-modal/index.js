import Zoomer from '../a-zoomer/vue-zoomer';
import Close from '../a-close';
import { htmlMinify } from '../util';
import './index.less';

const template = htmlMinify(`
<Teleport :disabled="!visible" to="body">
  <div style="line-height:initial">
    <div v-if="visible" class="a-modal-wrapper">
      <div class="a-modal-close" @click="this.close">
        <v-close></v-close>
      </div>
      <div class="a-modal-actions">
        <slot name="action"></slot>
      </div>
      <v-zoomer ref="zoomer" style="width:100%;height:100%;">
        <slot name="popover"></slot>
      </v-zoomer>
    </div>
    <div @click="this.pop">
      <slot name="default"></slot>
    </div>
  </div>
</Teleport>
`);

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
  watch: {
    scale() {
      this.$nextTick(function () {
        if (this.scale) {
          this.zoomIn(this.scale);
        } else {
          this.reset();
        }
      });
    },
  },
  methods: {
    zoomIn: function (s) {
      if (this.$refs.zoomer) {
        this.$refs.zoomer.zoomIn(s);
      }
    },
    reset: function () {
      if (this.$refs.zoomer) {
        this.$refs.zoomer.reset();
      }
    },
    pop: function () {
      this.visible = true;
      this.$emit('popover');
      this.$nextTick(function () {
        this.zoomIn(this.scale);
      });
    },
    close: function () {
      this.visible = false;
    },
  },
  components: {
    'v-zoomer': Zoomer,
    'v-close': Close,
  },
};
