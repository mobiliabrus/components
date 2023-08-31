import "./index.css";

export default {
  template:
    '<span class="badge" :style="{ display: inline ? \'inline-block\' : \'block\' }"><span v-if="title" class="badge-title">{{ title }}</span><span class="badge-content"><slot></slot></span></span>',
  props: {
    title: {
      type: String,
    },
    inline: {
      type: Boolean,
      default: true,
    },
  },
};
