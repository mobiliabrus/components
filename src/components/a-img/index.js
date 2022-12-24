import crypto from '../crypto.js';
import modal from '../a-modal';
import { Button } from 'antd';
import { htmlMinify } from '../util';
import './index.less';

const template = htmlMinify(`<a-modal :scale="scale">
<template v-slot:action>
  <div>
    <t-button ghost v-if="!src" @click="loadHD" :loading="loading">HD</t-button>
  </div>
</template>
<template v-slot:popover>
  <img class="a-img-popover-item" :src="visible && (src || srcMin)" :alt="name" />
</template>
<template v-slot:default>
  <img v-if="src || srcMin" :src="visible && !hide && (src || srcMin)" :alt="name" @load="onImageLoad" style="width:100%" />
</template>
</a-modal>`);

const isLocal = location.hostname === 'localhost';

const baseUrl = () => {
  if (isLocal) {
    return '/packages/img/docs/assets/';
  }
  return '/img/assets/';
};

const fetchErrCatch = (err) => {
  console.error(err);
};

export default {
  template,
  props: {
    name: {
      type: String,
      required: true,
    },
    dir: {
      type: String,
      default: 'public',
    },
    hide: {
      type: Boolean,
      default: false,
    },
  },
  data: function () {
    const secretKey = localStorage.getItem("lee6's-secret");
    return {
      src: undefined,
      srcMin: undefined,
      scale: undefined,
      secretKey,
      loading: false,
      visible: !(this.dir === 'assert' && !secretKey),
    };
  },
  mounted() {
    this.load('min', 'srcMin');
  },
  methods: {
    onImageLoad(e) {
      const img = e.target;
      this.scale = window.innerHeight / img.offsetHeight;
    },
    loadHD() {
      this.load('', 'src');
    },
    load(suffer = '', t = 'src') {
      if (this.dir === 'privacy') {
        if (this.secretKey) {
          const name = suffer ? [this.name.split('.')[0], suffer, 'webp'].join('.') : this.name;
          this.loading = true;
          fetch(baseUrl() + 'privacy/' + name, { mode: 'cors' })
            .then((res) => res.text())
            .then((content) => {
              this[t] = crypto(content, this.secretKey, 'decrypt');
            })
            .catch(fetchErrCatch)
            .finally(() => {
              this.loading = false;
            });
        }
      } else if (this.dir === 'privacy-gif') {
        if (this.secretKey) {
          const name = suffer
            ? [this.name.split('.')[0], suffer ? suffer + '.g1f' : 'gif'].join('.')
            : this.name;
          this.loading = true;
          fetch(baseUrl() + 'privacy/' + name, { mode: 'cors' })
            .then((res) => res.text())
            .then((content) => {
              this[t] = crypto(content, this.secretKey, 'decrypt');
            })
            .catch(fetchErrCatch)
            .finally(() => {
              this.loading = false;
            });
        }
      } else if (this.dir === 'animation') {
        this[t] = baseUrl() + 'animation/' + [this.name, suffer, 'gif'].filter((_) => _).join('.');
      } else {
        this[t] = baseUrl() + 'public/' + [this.name, suffer, 'webp'].filter((_) => _).join('.');
      }
    },
  },
  components: {
    'a-modal': modal,
    't-button': Button,
  },
};
