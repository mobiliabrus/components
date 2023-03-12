import { htmlMinify } from './components/util';
import { TypographyParagraph } from './components/antd';

const { createApp } = window.Vue;

const wrapper = document.createElement('div');
wrapper.style.position = 'fixed';
wrapper.style.top = '0';
wrapper.style.left = '0';
document.body.appendChild(wrapper);

createApp({
  template: htmlMinify(`<div v-if="text" :style="{ position: 'absolute', left: x + 'px', top: y + 'px', width: width + 'px', height: height + 'px', background: '#fff' }">
  <a-typography-paragraph :copyable="{ text }" style="margin: 0; text-align: center;"></a-typography-paragraph>
</div>`),
  data() {
    return {
      text: '',
      x: 0,
      y: 0,
      width: 0,
      height: 0,
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
      console.log(document.getSelection().getRangeAt(0).getClientRects());
      const [{ x, y, width, height }] = document.getSelection().getRangeAt(0).getClientRects();
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
    },
  },
  components: {
    'a-typography-paragraph': TypographyParagraph,
  },
}).mount(wrapper);
