import img from './a-img';
import { Carousel } from './antd';
import { htmlMinify, getSecret } from './util';

const template = htmlMinify(`
<a-carousel autoplay v-if="visible">
<div v-for="i in content">
<a-img :name="i.name" :dir="i.dir" :key="i.name"></a-img>
</div>
</a-carousel>
`);

export default {
  template,
  props: ['img'],
  computed: {
    visible: function () {
      return this.content.length > 0;
    },
    content: function () {
      const secretKey = getSecret();
      return this.img.filter((i) => {
        return !i.dir.incudes('privacy') || !!secretKey;
      });
    },
  },
  components: {
    'a-carousel': Carousel,
    'a-img': img,
  },
};
