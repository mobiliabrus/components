import { htmlMinify } from '../util';
import './index.less';

const template = htmlMinify(`<a-diction :auto-load="true" :show-origin="showOrigin" :word="word">{{ title }}</a-diction>`);

export default {
  template,
  props: {
    word: {
      type: String,
    },
    title: {
      type: String,
    },
    showOrigin: {
      type: Boolean,
      default: false,
    }
  },
  components: {
    'a-diction': window.vueDiction,
  },
};
