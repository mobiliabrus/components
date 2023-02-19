import { htmlMinify } from "./util";

const template = htmlMinify(`<div>
  距离{{name}}还有{{days}}天
</div>`);

export default {
  template,
  props: ['date', 'name'],
  computed: {
    days: function() {
      return Math.floor((new Date(this.date) - new Date()) / 86400000);
    }
  }
};
