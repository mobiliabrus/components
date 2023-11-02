const template = `<dl style="list-style:mongolian"><dt>{{ title }}</dt><li v-for="d in this.weekData">{{ d }}</li></dl>`;

export default {
  template,
  props: {
    title: {
      type: String,
    },
    start: {
      type: Number,
      required: true,
    },
    data: {
      type: Object,
      required: true,
    },
  },
  computed: {
    currentWeek: function() {
      return dayjs().week();
    },
    weekIndex: function() {
      return this.currentWeek - this.start;
    },
    weekDay: function() {
      return dayjs().week(this.weekIndex).format();
    },
    weekData: function() {
      return this.data[this.weekIndex] || [];
    }
  }
};
