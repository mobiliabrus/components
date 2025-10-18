<script setup>
import { ref, watch, onMounted, onBeforeUnmount } from 'vue';
import { useFullscreenWithScroll } from '@/composables/useFullscreenWithScroll';
import { propsType } from './constant';
import VectorSource from 'ol/source/Vector';
import VectorLayer from 'ol/layer/Vector';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import { fromLonLat } from 'ol/proj';
import { parsePoint, parsePoints } from './util';
import { createLabelStyle } from './helper';
import olms from 'ol-mapbox-style';

const mapRef = ref(undefined);
const mapInstance = ref(null);

const { handleFullscreen, isFullscreen } = useFullscreenWithScroll();

const props = defineProps(propsType);
const initialCenter = props.center;
const initialZoom = props.zoom;
const drivingData = parsePoints(props.driving);
const walkingData = parsePoints(props.walking);
const pointsData = parsePoints(props.points);

let fitView = () => {};
const initMap = () => {
  olms(
    mapRef.value,
    'https://api.maptiler.com/maps/outdoor-v2/style.json?key=K18uxgT9BWfvlkwGw6VG'
  ).then((map) => {
    mapInstance.value = map;

    // Control
    map.getControls().clear();

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

    // Walking
    walkingData.forEach(([lng, lat, label]) => {
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

    fitView = () => {
      const extent = vectorSource.getExtent();
      view.fit(extent, {
        padding: [48, 48, 48, 48],
        maxZoom: 15,
        duration: 0,
      });
    };

    // Fit view
    if (pointsData.length > 0 || drivingData.length > 0 || walkingData.length > 0) {
      fitView();
    }
  });
};

const handleFullscreenClick = () => {
  handleFullscreen(mapRef.value);
};

watch(isFullscreen, () => {
  setTimeout(fitView, 0);
});

onMounted(() => {
  initMap();
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
    <div class="fullscreen-hint" v-if="!isFullscreen" @click="handleFullscreenClick" />
    <div class="fullscreen-exit" v-else @click="handleFullscreenClick">×</div>
  </div>
</template>

<style scoped>
.map-container {
  position: relative;
  background-color: #f0f0f0;
  width: 100%;
  height: 20vw;
  min-height: 160px;
  border: 1px solid #ccc;
  overflow: hidden;
}

.fullscreen-hint {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: transparent;
  z-index: 9007199254740991;
}

.fullscreen-exit {
  position: absolute;
  top: 8px;
  right: 8px;
  width: 18px;
  height: 18px;
  line-height: 18px;
  font-size: 18px;
  text-align: center;
  background: rgba(0, 0, 0, 0.2);
  color: #fff;
  z-index: 9007199254740991;
}
</style>
