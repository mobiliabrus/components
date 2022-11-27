import { htmlMinify } from "./util";
import img from './a-img'

const Carousel = window.antd && window.antd.Carousel;

const template = htmlMinify(`<a-carousel autoplay>
<div v-if="img" v-for="i in img">
<a-img :name="i.name" :dir="i.dir" :key="i.name"></a-img>
</div>
</a-carousel>`);

export default {
  template,
  props: ['img'],
  components: {
    "a-carousel": Carousel,
    "a-img": img,
  },
};
