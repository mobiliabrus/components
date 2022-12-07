import { loadBingApi } from './loader';
import './map.less';

const apiKey =
  process.env.NODE_ENV === 'development'
    ? 'AmaJse0LMtAHWktKP2ew2c_NNcKEDFem3a1MWEu8xN0_fNn-alxc7q1BlLEgcQtD'
    : 'AvHBgtLyf4zbDhXESAuvFMSqIg1GgomX6DnDgw-CaXFeRmWVzvXPC55WveE4pJla';

const template = `<div class="map" ref="map"></div>`;

export default {
  template,
  data: function () {
    return {
      map: undefined,
    };
  },
  props: ['center', 'points', 'walking', 'transit', 'driving', 'line'],
  mounted() {
    loadBingApi(apiKey).then(() => {
      this.$initMap(this.$refs.map);
      this.$walking();
      this.$transit();
      this.$driving();
      this.$line();
      this.$addPoint();
      if (!this.autoUpdateMapView) {
        this.$setCenter();
      }
    });
  },
  computed: {
    autoUpdateMapView: function () {
      return (
        this.points.length === 0 &&
        this.line.length === 0 &&
        (this.walking.length > 0 ||
          this.driving.length > 0 ||
          this.transit.length > 0)
      );
    },
  },
  methods: {
    $initMap: function (el) {
      this.map = new Microsoft.Maps.Map(el, {
        customMapStyle: {
          elements: {
            area: { fillColor: '#b6e591' },
            water: { fillColor: '#75cff0' },
            tollRoad: { fillColor: '#a964f4', strokeColor: '#a964f4' },
            arterialRoad: { fillColor: '#ffffff', strokeColor: '#d7dae7' },
            road: { fillColor: '#ffa35a', strokeColor: '#ff9c4f' },
            street: { fillColor: '#ffffff', strokeColor: '#ffffff' },
            transit: { fillColor: '#000000' },
          },
          settings: {
            landColor: '#efe9e1',
          },
        },
      });
    },
    $setCenter: function () {
      const { center: { latitude, longitude } = {}, zoom } = this;
      if (latitude && longitude) {
        this.map.setView({
          center: new Microsoft.Maps.Location(latitude, longitude),
        });
      } else {
        this.$setFitView();
      }
    },
    $setFitView: function () {
      const { points = [], walking = [], driving = [], transit = [], line = [] } = this;
      const locations = [
        ...points.map(
          ({ latitude, longitude }) => new Microsoft.Maps.Location(latitude, longitude)
        ),
        ...walking.map(
          ({ latitude, longitude }) => new Microsoft.Maps.Location(latitude, longitude)
        ),
        ...driving.map(
          ({ latitude, longitude }) => new Microsoft.Maps.Location(latitude, longitude)
        ),
        ...transit.map(
          ({ latitude, longitude }) => new Microsoft.Maps.Location(latitude, longitude)
        ),
        ...line.map(({ latitude, longitude }) => new Microsoft.Maps.Location(latitude, longitude)),
      ];
      setTimeout(() => {
        this.map.setView({
          padding: 10,
          // eslint-disable-next-line new-cap
          bounds: new Microsoft.Maps.LocationRect.fromLocations(locations),
        });
      }, 0);
    },
    $addPoint: function () {
      const { points = [] } = this;
      if (Array.isArray(points) && points.length) {
        points.forEach(({ latitude, longitude, address }) => {
          const pushpin = new Microsoft.Maps.Pushpin(
            new Microsoft.Maps.Location(latitude, longitude),
            {
              title: address,
            }
          );
          const layer = new Microsoft.Maps.Layer();
          layer.add(pushpin);
          this.map.layers.insert(layer);
        });
      }
    },
    $walking: function () {
      const { walking = [] } = this;
      if (Array.isArray(walking) && walking.length) {
        this.$route(walking, 'walking');
      }
    },
    $transit: function () {
      const { transit = [] } = this;
      if (Array.isArray(transit) && transit.length) {
        this.$route(transit, 'transit');
      }
    },
    $driving: function () {
      const { driving = [] } = this;
      if (Array.isArray(driving) && driving.length) {
        this.$route(driving, 'driving');
      }
    },
    $line: function () {
      const { line = [] } = this;
      if (Array.isArray(line) && line.length) {
        this.$route(line, 'line');
      }
    },
    $route: function (route, type = 'walking') {
      if (Array.isArray(route) && route.length) {
        if (type === 'line') {
          const coords = route.map((l) => new Microsoft.Maps.Location(l.latitude, l.longitude));
          const line = new Microsoft.Maps.Polyline(coords, {
            strokeThickness: 3,
          });
          this.map.entities.push(line);
        } else {
          Microsoft.Maps.loadModule('Microsoft.Maps.Directions', () => {
            const directionsManager = new Microsoft.Maps.Directions.DirectionsManager(this.map);
            directionsManager.setRequestOptions({
              maxRoutes: 1,
              routeDraggable: false,
              routeMode: Microsoft.Maps.Directions.RouteMode[type],
            });
            route.forEach(({ address, latitude, longitude }) => {
              directionsManager.addWaypoint(
                new Microsoft.Maps.Directions.Waypoint({
                  address,
                  isViaPoint: !address,
                  location: new Microsoft.Maps.Location(latitude, longitude),
                })
              );
            });
            directionsManager.setRenderOptions({
              itineraryContainer: document.getElementById('printoutPanel'),
              autoUpdateMapView: this.autoUpdateMapView,
            });
            directionsManager.calculateDirections();
          });
        }
      }
    },
  },
};
