import crypto from '../crypto.js';
import modal from '../a-modal';
import { Button } from 'antd';
import { htmlMinify, base64ToFile } from '../util';
import './index.less';

const template = htmlMinify(`
<a-modal :scale="scale">
  <template v-slot:action>
    <div>
      <div class="a-img-left-action">
          <t-button type="text" style="padding:4px 5px;"  v-if="!src" @click="loadHD" :loading="loading">
          <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20"><path d="M128 128h768a42.666667 42.666667 0 0 1 42.666667 42.666667v682.666666a42.666667 42.666667 0 0 1-42.666667 42.666667H128a42.666667 42.666667 0 0 1-42.666667-42.666667V170.666667a42.666667 42.666667 0 0 1 42.666667-42.666667z m192 352V384H256v256h64v-96h85.333333V640H469.333333V384H405.333333v96h-85.333333z m298.666667-32H682.666667a21.333333 21.333333 0 0 1 21.333333 21.333333v85.333334a21.333333 21.333333 0 0 1-21.333333 21.333333h-64v-128zM554.666667 384v256h128a85.333333 85.333333 0 0 0 85.333333-85.333333v-85.333334a85.333333 85.333333 0 0 0-85.333333-85.333333h-128z" fill="#fff"></path></svg>
          </t-button>
      </div>
      <div class="a-img-right-action">
          <t-button type="text" style="padding:4px 5px;" @click="scaleIn">
              <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20"><path d="M149.333333 394.666667c17.066667 0 32-14.933333 32-32v-136.533334l187.733334 187.733334c6.4 6.4 14.933333 8.533333 23.466666 8.533333s17.066667-2.133333 23.466667-8.533333c12.8-12.8 12.8-32 0-44.8l-187.733333-187.733334H362.666667c17.066667 0 32-14.933333 32-32s-14.933333-32-32-32H149.333333c-4.266667 0-8.533333 0-10.666666 2.133334-8.533333 4.266667-14.933333 10.666667-19.2 17.066666-2.133333 4.266667-2.133333 8.533333-2.133334 12.8v213.333334c0 17.066667 14.933333 32 32 32zM874.666667 629.333333c-17.066667 0-32 14.933333-32 32v136.533334L642.133333 597.333333c-12.8-12.8-32-12.8-44.8 0s-12.8 32 0 44.8l200.533334 200.533334H661.333333c-17.066667 0-32 14.933333-32 32s14.933333 32 32 32h213.333334c4.266667 0 8.533333 0 10.666666-2.133334 8.533333-4.266667 14.933333-8.533333 17.066667-17.066666 2.133333-4.266667 2.133333-8.533333 2.133333-10.666667V661.333333c2.133333-17.066667-12.8-32-29.866666-32zM381.866667 595.2l-200.533334 200.533333V661.333333c0-17.066667-14.933333-32-32-32s-32 14.933333-32 32v213.333334c0 4.266667 0 8.533333 2.133334 10.666666 4.266667 8.533333 8.533333 14.933333 17.066666 17.066667 4.266667 2.133333 8.533333 2.133333 10.666667 2.133333h213.333333c17.066667 0 32-14.933333 32-32s-14.933333-32-32-32h-136.533333l200.533333-200.533333c12.8-12.8 12.8-32 0-44.8s-29.866667-10.666667-42.666666 0zM904.533333 138.666667c0-2.133333 0-2.133333 0 0-4.266667-8.533333-10.666667-14.933333-17.066666-17.066667-4.266667-2.133333-8.533333-2.133333-10.666667-2.133333H661.333333c-17.066667 0-32 14.933333-32 32s14.933333 32 32 32h136.533334l-187.733334 187.733333c-12.8 12.8-12.8 32 0 44.8 6.4 6.4 14.933333 8.533333 23.466667 8.533333s17.066667-2.133333 23.466667-8.533333l187.733333-187.733333V362.666667c0 17.066667 14.933333 32 32 32s32-14.933333 32-32V149.333333c-2.133333-4.266667-2.133333-8.533333-4.266667-10.666666z" fill="#fff"></path></svg>
          </t-button>
          <t-button type="text" style="padding:4px 5px;" @click="scaleOut">
              <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20"><path d="M313.6 358.4H177.066667c-17.066667 0-32 14.933333-32 32s14.933333 32 32 32h213.333333c4.266667 0 8.533333 0 10.666667-2.133333 8.533333-4.266667 14.933333-8.533333 17.066666-17.066667 2.133333-4.266667 2.133333-8.533333 2.133334-10.666667v-213.333333c0-17.066667-14.933333-32-32-32s-32 14.933333-32 32v136.533333L172.8 125.866667c-12.8-12.8-32-12.8-44.8 0-12.8 12.8-12.8 32 0 44.8l185.6 187.733333zM695.466667 650.666667H832c17.066667 0 32-14.933333 32-32s-14.933333-32-32-32H618.666667c-4.266667 0-8.533333 0-10.666667 2.133333-8.533333 4.266667-14.933333 8.533333-17.066667 17.066667-2.133333 4.266667-2.133333 8.533333-2.133333 10.666666v213.333334c0 17.066667 14.933333 32 32 32s32-14.933333 32-32v-136.533334l200.533333 200.533334c6.4 6.4 14.933333 8.533333 23.466667 8.533333s17.066667-2.133333 23.466667-8.533333c12.8-12.8 12.8-32 0-44.8l-204.8-198.4zM435.2 605.866667c-4.266667-8.533333-8.533333-14.933333-17.066667-17.066667-4.266667-2.133333-8.533333-2.133333-10.666666-2.133333H192c-17.066667 0-32 14.933333-32 32s14.933333 32 32 32h136.533333L128 851.2c-12.8 12.8-12.8 32 0 44.8 6.4 6.4 14.933333 8.533333 23.466667 8.533333s17.066667-2.133333 23.466666-8.533333l200.533334-200.533333V832c0 17.066667 14.933333 32 32 32s32-14.933333 32-32V618.666667c-2.133333-4.266667-2.133333-8.533333-4.266667-12.8zM603.733333 403.2c4.266667 8.533333 8.533333 14.933333 17.066667 17.066667 4.266667 2.133333 8.533333 2.133333 10.666667 2.133333h213.333333c17.066667 0 32-14.933333 32-32s-14.933333-32-32-32h-136.533333L896 170.666667c12.8-12.8 12.8-32 0-44.8-12.8-12.8-32-12.8-44.8 0l-187.733333 187.733333V177.066667c0-17.066667-14.933333-32-32-32s-32 14.933333-32 32v213.333333c2.133333 4.266667 2.133333 8.533333 4.266666 12.8z" fill="#fff"></path></svg>
          </t-button>
      </div>
    </div>
  </template>
  <template v-slot:popover>
    <img class="a-img-popover-item" :src="visible && (src || srcMin)" :alt="name" />
  </template>
  <template v-slot:default>
    <div v-if="loading && (!src && !srcMin)">loading image...</div>
    <img v-if="src || srcMin" :src="visible && !hide && (src || srcMin)" :alt="name" @load="onImageLoad" @error="onImageError" style="width:100%" />
  </template>
</a-modal>
`);

const isLocal = location.hostname === 'localhost';

const baseUrl = (localSuffix = 'docs/assets/') => {
  if (isLocal) {
    return '/packages/img/' + localSuffix;
  }
  return '/img/assets/';
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
      img: undefined,
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
      this.img = e.target;
      this.scaleIn();
    },
    onImageError(e) {
      window.antd.message.error(
        `${e.srcElement.getAttribute('src').split('/').slice(-1)} load error.`
      );
    },
    scaleIn() {
      this.scale = window.innerHeight / this.img.offsetHeight;
    },
    scaleOut() {
      this.scale = 0;
    },
    loadHD() {
      this.load('', 'src');
    },
    load(suffer = '', t = 'src') {
      const request = (url) => {
        this.loading = true;
        return fetch(baseUrl() + url, { mode: 'cors' })
          .then((res) => {
            if (res.status === 200) return res.text();
            if (location.hostname !== 'localhost')
              window.antd.message.error(
                `${res.url.split('/').slice(-1)} ${res.statusText.toLowerCase()}.`
              );
            return Promise.reject();
          })
          .then((content) => {
            const base64 = crypto(content, this.secretKey, 'decrypt');
            const blobUrl = URL.createObjectURL(base64ToFile(base64));
            this[t] = blobUrl;
          })
          .finally(() => {
            this.loading = false;
          });
      };
      if (this.dir === 'privacy') {
        if (this.secretKey) {
          const name = suffer ? [this.name.split('.')[0], suffer, 'webp'].join('.') : this.name;
          request('privacy/' + name).finally(() => {
            if (isLocal && !this[t]) {
              this[t] = baseUrl('src/') + 'privacy/' + this.name;
            }
          });
        }
      } else if (this.dir === 'privacy-gif') {
        if (this.secretKey) {
          const name = suffer
            ? [this.name.split('.')[0], suffer ? suffer + '.g1f' : 'gif'].join('.')
            : this.name;
          request('privacy/' + name).finally(() => {
            if (isLocal && !this[t]) {
              this[t] = baseUrl('src/') + 'privacy/' + this.name;
            }
          });
        }
      } else if (this.dir === 'animation') {
        if (isLocal) {
          this[t] = baseUrl() + 'animation/' + this.name + '.gif';
        } else {
          this[t] =
            baseUrl() + 'animation/' + [this.name, suffer, 'gif'].filter((_) => _).join('.');
        }
      } else {
        if (isLocal) {
          ``;
          this[t] = baseUrl() + 'public/' + this.name + '.jpg';
        } else {
          this[t] = baseUrl() + 'public/' + [this.name, suffer, 'webp'].filter((_) => _).join('.');
        }
      }
    },
  },
  components: {
    'a-modal': modal,
    't-button': Button,
  },
};
