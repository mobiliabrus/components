import { htmlMinify } from "./util";

const template = htmlMinify(`
<div style="width:100%;height:120px;text-align:center;line-height:120px;background:#fafafa">
  <slot name="default"></slot>
</div>
`);

export default {
  template,
  props: ['type'],
};
