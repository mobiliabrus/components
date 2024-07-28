const template = `<span :style="{color}"><template v-for="i in size">★</template></span>`;

export default {
  template,
  props: ['size', 'color'],
};
