import { Tooltip } from "../antd";

export default {
  template: '<span aria-hidden="true" style="border-bottom:1px dotted red;display:inline-block"><t-tooltip :title="title"><slot></slot></t-tooltip></span>',
  props: {
    title: {
      type: String,
    },
  },
  components: {
    't-tooltip': Tooltip,
  }
};
