import { htmlMinify } from './components/util';
import { TypographyParagraph } from './components/antd';

console.log(TypographyParagraph);

const { createApp } = window.Vue;

const wrapper = document.createElement('div');
wrapper.style.position = 'fixed';
wrapper.style.top = '0';
wrapper.style.left = '0';
document.body.appendChild(wrapper);

createApp({
  template: htmlMinify(`<div v-if="text" :style="{ position: 'absolute', left: x + 'px', top: y + 'px', background: '#fff' }">
  <a-typography-paragraph :copyable="{ text }" style="display: flex; margin: 0;">
    {{ text }}
  </a-typography-paragraph>
</div>`),
  data() {
    return {
      text: '',
      x: 0,
      y: 0,
    };
  },
  mounted() {
    document.addEventListener('selectionchange', this.listener);
  },
  unmount() {
    document.removeEventListener('selectionchange', this.listener);
  },
  methods: {
    listener() {
      this.text = document.getSelection().toString();
      const [{ x, y }] = document.getSelection().getRangeAt(0).getClientRects();
      this.x = Math.floor(x);
      this.y = Math.floor(y);
    },
  },
  components: {
    'a-typography-paragraph': TypographyParagraph,
  },
}).mount(wrapper);
