import { PropType } from 'vue';

type VectorStyle =
  | 'outdoor-v2'
  | 'backdrop'
  | 'base-v4'
  | 'basic-v2'
  | 'bright-v2'
  | 'dataviz'
  | 'openstreetmap'
  | 'streets-v2'
  | 'streets-v4'
  | 'topo-v2'
  | 'winter-v2'
  | 'satellite'
  | string;

export const propsType = {
  theme: {
    type: String as PropType<VectorStyle>,
    default: 'streets-v2',
  },
  center: {
    type: String,
    default: null,
  },
  zoom: {
    type: Number,
    default: 6,
  },
  points: {
    type: String,
    default: null,
  },
  driving: {
    type: String,
    default: null,
  },
  walking: {
    type: String,
    default: null,
  },
  height: {
    type: String,
    default: null,
  },
  padding: {
    type: Array<number>,
    default: [48, 24, 24, 24],
  },
};
