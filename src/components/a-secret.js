import CryptoJS from 'crypto-js';
import { htmlMinify } from './util';

const template = htmlMinify(`
<template v-if="loading">
  <a-skeleton></a-skeleton>
</template>
<template v-if="!visible">
  <span
    v-if="this.blackout || this.content"
    @click="decrypt"
    style="
      display: inline;
      background-color: #333;
      color: transparent;
      padding: 0 8px;
      user-select: none;
      height: 18px;
      line-height: 18px;
      word-break: break-all;
      letter-spacing: -5.5px;
    "
  >
      {{ this.rawContent }}
  </span>
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
      loading: false,
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
    if (this.secretKey) {
      this.loading = true;
      fetch(`assets/confidential/${this.name}.md`, { mode: 'cors' })
        .then((res) => {
          if (res.status === 200) return res.text();
          window.antd.message.error(
            `${res.url.split('/').slice(-1)} ${res.statusText.toLowerCase()}.`
          );
          return Promise.reject();
        })
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
            this.content = _docsify.compiler.compile(content);
            if (this.autoload) {
              this.decrypt();
            }
          }
        })
        .finally(() => (this.loading = false));
    }
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
          this.subSidebar();
        }, 0);
      }
    },
    subSidebar: function (level = _docsify.config.subMaxLevel) {
      const activeEl = document.querySelector(
        `.sidebar-nav a[href='${location.hash.split('?')[0]}']`
      );
      if (!activeEl) return;
      const genTree = _docsify.compiler.genTree;
      const tree = _docsify.compiler.tree;
      const toc = [];
      const headers = document.getElementById('main').querySelectorAll('h1,h2,h3,h4,h5,h6');
      headers.forEach((header) => {
        const level = Number(header.tagName.slice(-1));
        const title = header.innerText;
        const slug = header.children[0].getAttribute('href');
        toc.push({ level, title, slug });
      });

      toc[0] && toc[0].level === 1 && toc.shift();

      const tree$1 = genTree(toc, level);
      const innerHTML = tree(tree$1, '{inner}');

      const sidebar = activeEl.parentNode.querySelector('.app-sub-sidebar');
      if (sidebar) {
        _docsify.compiler.toc = [];
        sidebar.innerHTML = innerHTML;
      }
    },
  },
  components: {
    'a-skeleton': window.antd.Skeleton
  }
};
