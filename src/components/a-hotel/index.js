import { htmlMinify } from "../util";

const template = htmlMinify(`<div aria-hidden="true"><div><b>{{this.name}}</b></div><div @click="this.switchDetail" style="margin-bottom:16px">
<i>{{this.from}}</i>
<i>{{this.to}}</i>
</div></div>`);

export default {
  template,
  data: function () {
    return {
      detail: false,
    };
  },
  props: ["name", "date", "nights"],
  computed: {
    from: function () {
      if (!this.date) return "";
      return window.dayjs(this.date).format("D MMM, YYYY");
    },
    to: function () {
      if (!this.date || !this.nights) return "";
      return this.detail ? ` - ${window.dayjs(this.date).add(this.nights, "d").format("D MMM, YYYY")}` : `, ${this.nights} night${this.nights > 1 ? "s" : ""}`;
    },
  },
  methods: {
    switchDetail: function () {
      this.detail = !this.detail;
    },
  },
};
