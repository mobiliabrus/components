export default {
  template: '<span :style="{background:bg, color}"><slot></slot></span>',
  props: {
    bg: {
      type: String,
      default: 'transparent',
    },
    color: {
      type: String,
      default: '#fff',
    },
  },
};
