import { htmlMinify } from '../util';
import './index.less';

const template = htmlMinify(`<div>
  <span class="a-word-item" v-for="s in w" :style="{background: s === fix ? '#d9d9d9' : 'none'}">{{ s }}</span>
  <span>{{ title }}</span>
</div>`);

export default {
  template,
  props: {
    word: {
      type: String,
    },
    title: {
      type: String,
    },
    fix: {
      type: String,
    }
  },
  computed: {
    w: function() {
      return typeof this.word === 'string' ? this.word.split('.') : [];
    }
  }
};
