import { Alert } from './antd';

const template = `<div v-if="visible"><a-alert :message="'注意：' + message" type="warning"></a-alert></div>`;

export default {
  template,
  props: ['start', 'end', 'message'],
  computed: {
    visible: function () {
      const now = new Date();
      return now >= new Date(`${this.start} 00:00:00`) && now <= new Date(`${this.end} 23:59:59`);
    },
  },
  components: {
    'a-alert': Alert,
  },
};
