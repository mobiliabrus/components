const template = `<span>{{content}}</span>`;

export default {
  template,
  data: function () {
    return {
      count: 0,
    };
  },
  props: {
    selector: {
      type: String,
      required: true,
    },
    render: {
      type: Function,
      default: function(count) {
        return '共' + count + '条';
      }
    },
  },
  computed: {
    content: function() {
      return this.render(this.count);
    }
  },
  mounted() {
    if (typeof this.selector === 'string') {
      this.$nextTick(() => {
        this.count = document.querySelectorAll(this.selector).length || 0;
      });
    }
  },
};
