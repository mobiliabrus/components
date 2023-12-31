import "./index.css";

export default {
  template:
    '<span class="badge"><span v-if="title" class="badge-title">{{ title }}</span><span class="badge-content"><slot></slot></span></span>',
  props: {
    title: {
      type: String,
    },
  },
};
