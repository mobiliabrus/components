import { Style, Text, Fill, Stroke, Circle as CircleStyle } from 'ol/style';

export const createLabelStyle = () => {
  return new Style({
    image: new CircleStyle({
      radius: 5,
      fill: new Fill({ color: 'rgba(255, 255, 255, 0.8)' }),
      stroke: new Stroke({ color: '#3399CC', width: 1.5 }),
    }),
    text: new Text({
      font: 'bold 14px "Open Sans", "Helvetica Neue", sans-serif',
      textAlign: 'center',
      textBaseline: 'bottom',
      offsetY: -15,
      padding: [2, 4, 2, 4],
      fill: new Fill({
        color: 'rgba(0, 0, 0, 1)',
      }),
      backgroundFill: new Fill({
        color: 'rgba(255, 255, 255, 0.8)',
      }),
      backgroundStroke: new Stroke({
        color: '#333',
        width: 1.5,
      }),
      stroke: new Stroke({
        color: 'rgba(255, 255, 255, 0.8)',
        width: 3,
      }),
      text: '',
    }),
  });
};