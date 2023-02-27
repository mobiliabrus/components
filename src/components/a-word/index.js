import { htmlMinify } from '../util';
import './index.less';

const template = htmlMinify(`<a-diction :auto-load="true" :show-origin="false" :word="word">{{ title }}</a-diction>`);

export default {
  template,
  props: {
    word: {
      type: String,
    },
    title: {
      type: String,
    },
  },
  components: {
    'a-diction': window.vueDiction,
  },
};
