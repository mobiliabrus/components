import { htmlMinify } from '../util';
import img from '../a-img';
import './index.less';

const template = htmlMinify(`
<div class="gallery" v-if="img">
<div class="gallery-item" v-for="i in img" :style="{width}">
<a-img :name="i.name" :dir="i.dir" :key="i.name"></a-img>
</div>
</div>
`);

export default {
  template,
  props: ['img'],
  computed: {
    width: function () {
      return `${100 / this.img.length}%`;
    },
  },
  components: {
    'a-img': img,
  },
};
