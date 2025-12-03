import "./index.css";

export default {
  template:
    '<span class="badge" aria-hidden="true"><span v-if="title" class="badge-title">{{ title }}</span><span class="badge-content"><slot></slot></span></span>',
  props: {
    title: {
      type: String,
    },
  },
};
