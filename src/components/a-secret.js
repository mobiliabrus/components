import CryptoJS from 'crypto-js';
import { htmlMinify } from './util';

const template = htmlMinify(`
<template v-if="!visible">
<span v-if="this.blackout || this.content" @click="decrypt" style="display: inline;
background-color: #333;
color: transparent;
padding: 0 8px;
user-select: none;
height: 18px;
line-height: 18px;
word-break: break-all;
letter-spacing: -5.5px;">{{ this.rawContent }}</span>
</template>
<template v-else>
<span ref="t"></span>
</template>
`);

export default {
  template,
  props: {
    name: {
      type: String,
      required: true,
    },
    autoload: {
      type: Boolean,
      default: false,
    },
    blackout: {
      type: Boolean,
      default: false,
    },
  },
  data: function () {
    return {
      app: undefined,
      visible: false,
      rawContent: undefined,
      content: undefined,
      secretKey: localStorage.getItem("lee6's-secret"),
    };
  },
  beforeUnmount() {
    if (this.app) {
      this.app.unmount();
      this.app = null;
    }
  },
  mounted() {
    fetch(`assets/confidential/${this.name}.md`, { mode: 'cors' })
      .then((res) => res.text())
      .then((rawContent) => {
        this.rawContent = rawContent;
        if (this.secretKey) {
          const keylength = 16;
          const keyorigin = this.secretKey.split('');
          const key16 =
            keyorigin.length < 16
              ? [
                  ...keyorigin,
                  ...Array.from(new Array(keylength - keyorigin.length)).map(() => '0'),
                ].join('')
              : key16;
          const keyutf = CryptoJS.enc.Utf8.parse(key16);
          const iv = { iv: CryptoJS.enc.Base64.parse(key16) };
          const raw = CryptoJS.AES.decrypt(
            { ciphertext: CryptoJS.enc.Base64.parse(rawContent) },
            keyutf,
            iv
          );
          const content = CryptoJS.enc.Utf8.stringify(raw);
          this.content = marked.parse(content);
          if (this.autoload) {
            this.decrypt();
          }
        }
      });
  },
  methods: {
    decrypt: function () {
      if (this.secretKey) {
        const app = window.Vue.createApp({
          template: this.content,
          components: window.$docsify.vueComponents,
        });
        this.visible = true;
        this.app = app;
        setTimeout(() => {
          app.mount(this.$refs.t);
        }, 0);
      }
    },
  },
};
