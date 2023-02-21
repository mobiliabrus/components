import { htmlMinify } from "./util";

const oneDay = 86400000;

const template = htmlMinify(`<div>
  距离{{name}}还有{{days}}
</div>`);

export default {
  template,
  props: {
    date: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
    },
  },
  computed: {
    days: function() {
      if (this.type === 'week') {
        return Math.ceil((new Date(this.date) - new Date()) / 86400000 / 7) + '周';
      }
      return Math.floor((new Date(this.date) - new Date()) / oneDay) + '天';
    }
  }
};
