<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import FullScreen from 'ol/control/FullScreen.js';
import VectorSource from 'ol/source/Vector';
import VectorLayer from 'ol/layer/Vector';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import { fromLonLat } from 'ol/proj';
import { parsePoint, parsePoints } from './util';
import { Style, Text, Fill, Stroke, Circle as CircleStyle } from 'ol/style';
import olms from 'ol-mapbox-style';

const mapRef = ref(undefined);
const mapInstance = ref(null);

const props = defineProps({
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
});
const initialCenter = props.center;
const initialZoom = props.zoom;
const drivingData = parsePoints(props.driving);
const pointsData = parsePoints(props.points);

const createLabelStyle = () => {
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
      fill: new Fill({
        color: '#000',
      }),
      text: '',
    }),
  });
};

onMounted(() => {
  olms(
    mapRef.value,
    'https://api.maptiler.com/maps/outdoor-v2/style.json?key=K18uxgT9BWfvlkwGw6VG'
  ).then((map) => {
    mapInstance.value = map;

    // Control
    map.getControls().clear();
    map.addControl(new FullScreen());

    // View
    const view = map.getView();
    if (initialCenter) view.setCenter(fromLonLat(parsePoint(initialCenter)));
    if (initialZoom) view.setZoom(initialZoom);

    const vectorSource = new VectorSource();

    // Points
    pointsData.forEach(([lng, lat, label]) => {
      const feature = new Feature({
        geometry: new Point(fromLonLat([lng, lat])),
      });
      feature.set('label', label);
      vectorSource.addFeature(feature);
    });

    // Driving
    drivingData.forEach(([lng, lat, label]) => {
      const feature = new Feature({
        geometry: new Point(fromLonLat([lng, lat])),
      });
      feature.set('label', label);
      vectorSource.addFeature(feature);
    });

    // Layer
    const labelStyle = createLabelStyle();
    const vectorLayer = new VectorLayer({
      source: vectorSource,
      style: function (feature) {
        const style = labelStyle.clone();
        style.getText().setText(feature.get('label'));
        return style;
      },
    });
    map.addLayer(vectorLayer);

    // Fit view
    if (pointsData.length > 0 || drivingData.length > 0) {
      const extent = vectorSource.getExtent();
      view.fit(extent, {
        padding: [100, 100, 100, 100],
        maxZoom: 15,
        duration: 0,
      });
    }
  });
});

onBeforeUnmount(() => {
  if (mapInstance.value) {
    mapInstance.value.setTarget(null);
    mapInstance.value = null;
  }
});
</script>

<template>
  <div ref="mapRef" class="map-container">
    <slot></slot>
  </div>
</template>

<style scoped>
.map-container {
  background-color: #f0f0f0;
  width: 100%;
  height: 20vw;
  min-height: 160px;
  border: 1px solid #ccc;
  overflow: hidden;
}
</style>
