import { htmlMinify } from './util';

const oneDay = 86400000;
const template = htmlMinify(`<div>距离{{name}}还有{{days}}</div>`);

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
    days: function () {
      if (this.type === 'week') {
        const days = Math.ceil((new Date(this.date) - new Date()) / oneDay);
        const weeks = days / 7;
        if (weeks >= 2) {
          return Math.ceil(weeks) + '周';
        }
      }
      return Math.ceil((new Date(this.date) - new Date()) / oneDay) + '天';
    },
  },
};
