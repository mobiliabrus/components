import { htmlMinify } from './util';
import { TypographyParagraph } from './antd';

function mount() {
  const { createApp } = window.Vue;

  const wrapper = document.createElement('div');
  wrapper.style.position = 'fixed';
  wrapper.style.top = '0';
  wrapper.style.left = '0';
  document.body.appendChild(wrapper);

  const app = createApp({
    template:
      htmlMinify(`<div v-if="text" :style="{ position: 'absolute', left: x + 'px', top: y + 'px', width: width + 'px', height: height + 'px', background: '#fff' }">
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
    beforeUnmount() {
      document.removeEventListener('selectionchange', this.listener);
      document.body.removeChild(wrapper);
    },
    methods: {
      listener() {
        if (document.getSelection()) {
          this.text = document.getSelection().toString();
          try {
            const rects = document.getSelection().getRangeAt(0).getClientRects();
            if (rects && rects[0]) {
              const [{ x, y, width, height }] = rects;
              this.x = x;
              this.y = y;
              this.width = width;
              this.height = height;
            }
          } catch (e) {}
        }
      },
    },
    components: {
      'a-typography-paragraph': TypographyParagraph,
    },
  });

  app.mount(wrapper);

  return () => {
    app.unmount();
  };
}

export default {
  mounted() {
    this.unmount = mount();
  },
  beforeUnmount() {
    if (typeof this.unmount === 'function') this.unmount();
  },
};
