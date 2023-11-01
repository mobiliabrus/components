const template = `<div @click="switchVisible" :style="visible ? '' : 'white-space:nowrap;text-overflow:ellipsis;overflow:hidden;'"><slot></slot></div>`;

export default {
  data: function () {
    return {
      visible: false,
    };
  },
  methods: {
    switchVisible: function () {
      this.visible = !this.visible;
    },
  },
  template,
};
