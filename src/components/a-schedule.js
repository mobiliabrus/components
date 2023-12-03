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
      // fix: Sunday should be the last day of the week
      const cv = dayjs().day() === 0 ? 1 : 0;
      return dayjs().week() - cv;
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
