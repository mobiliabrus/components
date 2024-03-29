import { htmlMinify, getSecret } from '../util';
import img from '../a-img';
import './index.less';

const template = htmlMinify(`
<div class="gallery" v-if="visible">
<div class="gallery-item" v-for="i in content" :style="{width}">
<a-img :name="i.name" :dir="i.dir" :key="i.name"></a-img>
</div>
</div>
`);

export default {
  template,
  props: ['img'],
  computed: {
    width: function () {
      return `${100 / this.content.length}%`;
    },
    visible: function () {
      return this.content.length > 0;
    },
    content: function () {
      const secretKey = getSecret();
      return this.img.filter((i) => {
        return !i?.dir?.includes('privacy') || !!secretKey;
      });
    },
  },
  components: {
    'a-img': img,
  },
};
