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
  props: ['center', 'points', 'walking', 'transit', 'driving', 'line', 'divesites'],
  mounted() {
    loadBingApi(apiKey).then(() => {
      this.$initMap(this.$refs.map);
      this.$walking();
      this.$transit();
      this.$driving();
      this.$line();
      this.$addPoint();
      this.$addDivesites();
      if (!this.autoUpdateMapView) {
        this.$setCenter();
      }
    });
  },
  beforeUnmount() {
    if (this.map !== null) {
      this.map.dispose();
      this.map = null;
    }
  },
  computed: {
    autoUpdateMapView: function () {
      return (
        this.points.length === 0 &&
        this.line.length === 0 &&
        (this.walking.length > 0 || this.driving.length > 0 || this.transit.length > 0)
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
      const {
        points = [],
        walking = [],
        driving = [],
        transit = [],
        line = [],
        divesites = [],
      } = this;
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
        ...divesites.map(
          ({ latitude, longitude }) => new Microsoft.Maps.Location(latitude, longitude)
        ),
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
    $addDivesites: function () {
      const { divesites = [] } = this;
      if (Array.isArray(divesites) && divesites.length) {
        divesites.forEach(({ latitude, longitude, name }) => {
          const pushpin = new Microsoft.Maps.Pushpin(
            new Microsoft.Maps.Location(latitude, longitude),
            {
              title: name,
              icon: 'data:image/jpeg;base64,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ABABLAAAAAEAAgEsAAAAAQACOEJJTQQmAAAAAAAOAAAAAAAAAAAAAD+AAAA4QklNBA0AAAAAAAQAAAAeOEJJTQQZAAAAAAAEAAAAHjhCSU0D8wAAAAAACQAAAAAAAAAAAQA4QklNJxAAAAAAAAoAAQAAAAAAAAACOEJJTQP1AAAAAABIAC9mZgABAGxmZgAGAAAAAAABAC9mZgABAKGZmgAGAAAAAAABADIAAAABAFoAAAAGAAAAAAABADUAAAABAC0AAAAGAAAAAAABOEJJTQP4AAAAAABwAAD/////////////////////////////A+gAAAAA/////////////////////////////wPoAAAAAP////////////////////////////8D6AAAAAD/////////////////////////////A+gAADhCSU0EAAAAAAAAAgAAOEJJTQQCAAAAAAACAAA4QklNBDAAAAAAAAEBADhCSU0ELQAAAAAABgABAAAAAjhCSU0ECAAAAAAAEAAAAAEAAAJAAAACQAAAAAA4QklNBB4AAAAAAAQAAAAAOEJJTQQaAAAAAAN1AAAABgAAAAAAAAAAAAAADwAAABcAAAAgADAANwA5ADgAZgBlADAANAA2ADQANAAzADYAOQBhADQAYgA5ADYAYQAyADIAMwA5ADEANAAwADgANgBkADkAYgAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAFwAAAA8AAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAQAAAAAAAG51bGwAAAACAAAABmJvdW5kc09iamMAAAABAAAAAAAAUmN0MQAAAAQAAAAAVG9wIGxvbmcAAAAAAAAAAExlZnRsb25nAAAAAAAAAABCdG9tbG9uZwAAAA8AAAAAUmdodGxvbmcAAAAXAAAABnNsaWNlc1ZsTHMAAAABT2JqYwAAAAEAAAAAAAVzbGljZQAAABIAAAAHc2xpY2VJRGxvbmcAAAAAAAAAB2dyb3VwSURsb25nAAAAAAAAAAZvcmlnaW5lbnVtAAAADEVTbGljZU9yaWdpbgAAAA1hdXRvR2VuZXJhdGVkAAAAAFR5cGVlbnVtAAAACkVTbGljZVR5cGUAAAAASW1nIAAAAAZib3VuZHNPYmpjAAAA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YmUuY29tL3hhcC8xLjAvIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDozZWRlMTE5Ni04MmJkLTY2NDAtYmIyMC1mM2YzODg2MjEwOWEiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0iN0FEQkZENDRCOEYyRUU3OUMxNDUzRUVDNzQ3NjI4NzciIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6YWQ4YjViYzgtM2UzNy00N2Y2LTg4ZjUtZTgxY2M5MDVmNTFjIiBkYzpmb3JtYXQ9ImltYWdlL2pwZWciIGNyczpWZXJzaW9uPSIxMi4xIiBjcnM6UHJvY2Vzc1ZlcnNpb249IjExLjAiIGNyczpXaGl0ZUJhbGFuY2U9IkFzIFNob3QiIGNyczpJbmNyZW1lbnRhbFRlbXBlcmF0dXJlPSIwIiBjcnM6SW5jcmVtZW50YWxUaW50PSIwIiBjcnM6U2F0dXJhdGlvbj0iMCIgY3JzOlNoYXJwbmVzcz0iMCIgY3JzOkx1bWluYW5jZVNtb290aGluZz0iMCIgY3JzOkNvbG9yTm9pc2VSZWR1Y3Rpb249IjAiIGNyczpWaWduZXR0ZUFtb3VudD0iMCIgY3JzOlNoYWRvd1RpbnQ9IjAiIGNyczpSZWRIdWU9IjAiIGNyczpSZWRTYXR1cmF0aW9uPSIwIiBjcnM6R3JlZW5IdWU9IjAiIGNyczpHcmVlblNhdHVyYXRpb249IjAiIGNyczpCbHVlSHVlPSIwIiBjcnM6Qmx1ZVNhdHVyYXRpb249IjAiIGNyczpWaWJyYW5jZT0iMCIgY3JzOkh1ZUFkanVzdG1lbnRSZWQ9IjAiIGNyczpIdWVBZGp1c3RtZW50T3JhbmdlPSIwIiBjcnM6SHVlQWRqdXN0bWVudFllbGxvdz0iMCIgY3JzOkh1ZUFkanVzdG1lbnRHcmVlbj0iMCIgY3JzOkh1ZUFkanVzdG1lbnRBcXVhPSIwIiBjcnM6SHVlQWRqdXN0bWVudEJsdWU9IjAiIGNyczpIdWVBZGp1c3RtZW50UHVycGxlPSIwIiBjcnM6SHVlQWRqdXN0bWVudE1hZ2VudGE9IjAiIGNyczpTYXR1cmF0aW9uQWRqdXN0bWVudFJlZD0iMCIgY3JzOlNhdHVyYXRpb25BZGp1c3RtZW50T3JhbmdlPSIwIiBjcnM6U2F0dXJhdGlvbkFkanVzdG1lbnRZZWxsb3c9IjAiIGNyczpTYXR1cmF0aW9uQWRqdXN0bWVudEdyZWVuPSIwIiBjcnM6U2F0dXJhdGlvbkFkanVzdG1lbnRBcXVhPSIwIiBjcnM6U2F0dXJhdGlvbkFkanVzdG1lbnRCbHVlPSIwIiBjcnM6U2F0dXJhdGlvbkFkanVzdG1lbnRQdXJwbGU9IjAiIGNyczpTYXR1cmF0aW9uQWRqdXN0bWVudE1hZ2VudGE9IjAiIGNyczpMdW1pbmFuY2VBZGp1c3RtZW50UmVkPSIwIiBjcnM6THVtaW5hbmNlQWRqdXN0bWVudE9yYW5nZT0iMCIgY3JzOkx1bWluYW5jZUFkanVzdG1lbnRZZWxsb3c9IjAiIGNyczpMdW1pbmFuY2VBZGp1c3RtZW50R3JlZW49IjAiIGNyczpMdW1pbmFuY2VBZGp1c3RtZW50QXF1YT0iMCIgY3JzOkx1bWluYW5jZUFkanVzdG1lbnRCbHVlPSIwIiBjcnM6THVtaW5hbmNlQWRqdXN0bWVudFB1cnBsZT0iMCIgY3JzOkx1bWluYW5jZUFkanVzdG1lbnRNYWdlbnRhPSIwIiBjcnM6U3BsaXRUb25pbmdTaGFkb3dIdWU9IjAiIGNyczpTcGxpdFRvbmluZ1NoYWRvd1NhdHVyYXRpb249IjAiIGNyczpTcGxpdFRvbmluZ0hpZ2hsaWdodEh1ZT0iMCIgY3JzOlNwbGl0VG9uaW5nSGlnaGxpZ2h0U2F0dXJhdGlvbj0iMCIgY3JzOlNwbGl0VG9uaW5nQmFsYW5jZT0iMCIgY3JzOlBhcmFtZXRyaWNTaGFkb3dzPSIwIiBjcnM6UGFyYW1ldHJpY0RhcmtzPSIwIiBjcnM6UGFyYW1ldHJpY0xpZ2h0cz0iMCIgY3JzOlBhcmFtZXRyaWNIaWdobGlnaHRzPSIwIiBjcnM6UGFyYW1ldHJpY1NoYWRvd1NwbGl0PSIyNSIgY3JzOlBhcmFtZXRyaWNNaWR0b25lU3BsaXQ9IjUwIiBjcnM6UGFyYW1ldHJpY0hpZ2hsaWdodFNwbGl0PSI3NSIgY3JzOlNoYXJwZW5SYWRpdXM9IisxLjAiIGNyczpTaGFycGVuRGV0YWlsPSIyNSIgY3JzOlNoYXJwZW5FZGdlTWFza2luZz0iMCIgY3JzOlBvc3RDcm9wVmlnbmV0dGVBbW91bnQ9IjAiIGNyczpHcmFpbkFtb3VudD0iMCIgY3JzOkxlbnNQcm9maWxlRW5hYmxlPSIwIiBjcnM6TGVuc01hbnVhbERpc3RvcnRpb25BbW91bnQ9IjAiIGNyczpQZXJzcGVjdGl2ZVZlcnRpY2FsPSIwIiBjcnM6UGVyc3BlY3RpdmVIb3Jpem9udGFsPSIwIiBjcnM6UGVyc3BlY3RpdmVSb3RhdGU9IjAuMCIgY3JzOlBlcnNwZWN0aXZlU2NhbGU9IjEwMCIgY3JzOlBlcnNwZWN0aXZlQXNwZWN0PSIwIiBjcnM6UGVyc3BlY3RpdmVVcHJpZ2h0PSIwIiBjcnM6UGVyc3BlY3RpdmVYPSIwLjAwIiBjcnM6UGVyc3BlY3RpdmVZPSIwLjAwIiBjcnM6QXV0b0xhdGVyYWxDQT0iMCIgY3JzOkV4cG9zdXJlMjAxMj0iMC4wMCIgY3JzOkNvbnRyYXN0MjAxMj0iMCIgY3JzOkhpZ2hsaWdodHMyMDEyPSIwIiBjcnM6U2hhZG93czIwMTI9IjAiIGNyczpXaGl0ZXMyMDEyPSIwIiBjcnM6QmxhY2tzMjAxMj0iMCIgY3JzOkNsYXJpdHkyMDEyPSIwIiBjcnM6RGVmcmluZ2VQdXJwbGVBbW91bnQ9IjAiIGNyczpEZWZyaW5nZVB1cnBsZUh1ZUxvPSIzMCIgY3JzOkRlZnJpbmdlUHVycGxlSHVlSGk9IjcwIiBjcnM6RGVmcmluZ2VHcmVlbkFtb3VudD0iMCIgY3JzOkRlZnJpbmdlR3JlZW5IdWVMbz0iNDAiIGNyczpEZWZyaW5nZUdyZWVuSHVlSGk9IjYwIiBjcnM6RGVoYXplPSIwIiBjcnM6VGV4dHVyZT0iMCIgY3JzOlRvbmVNYXBTdHJlbmd0aD0iMCIgY3JzOkNvbnZlcnRUb0dyYXlzY2FsZT0iRmFsc2UiIGNyczpPdmVycmlkZUxvb2tWaWduZXR0ZT0iRmFsc2UiIGNyczpUb25lQ3VydmVOYW1lPSJMaW5lYXIiIGNyczpUb25lQ3VydmVOYW1lMjAxMj0iTGluZWFyIiBjcnM6Q2FtZXJhUHJvZmlsZT0iRW1iZWRkZWQiIGNyczpDYW1lcmFQcm9maWxlRGlnZXN0PSI1NDY1MEEzNDFCNUI1Q0NBRTg0NDJEMEI0M0E5MkJDRSIgY3JzOkxlbnNQcm9maWxlU2V0dXA9IkxlbnNEZWZhdWx0cyIgY3JzOlVwcmlnaHRWZXJzaW9uPSIxNTEzODgxNjAiIGNyczpVcHJpZ2h0Q2VudGVyTW9kZT0iMCIgY3JzOlVwcmlnaHRDZW50ZXJOb3JtWD0iMC41IiBjcnM6VXByaWdodENlbnRlck5vcm1ZPSIwLjUiIGNyczpVcHJpZ2h0Rm9jYWxNb2RlPSIwIiBjcnM6VXByaWdodEZvY2FsTGVuZ3RoMzVtbT0iMzUiIGNyczpVcHJpZ2h0UHJldmlldz0iRmFsc2UiIGNyczpVcHJpZ2h0VHJhbnNmb3JtQ291bnQ9IjYiIGNyczpVcHJpZ2h0Rm91clNlZ21lbnRzQ291bnQ9IjAiIGNyczpBdXRvVG9uZURpZ2VzdD0iMTM5NzBCQTExRTlBNTM5NzJEQzdDOTREREZDMTdGMDAiIGNyczpBdXRvVG9uZURpZ2VzdE5vU2F0PSIzQzNBMTRCRTFBREZGQ0IxNTQ2QjdEN0VENjUwN0ZFRiIgY3JzOkhhc1NldHRpbmdzPSJUcnVlIiBjcnM6SGFzQ3JvcD0iRmFsc2UiIGNyczpBbHJlYWR5QXBwbGllZD0iVHJ1ZSIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMi0xMi0xMVQyMjoxODozOSswODowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjItMTItMTFUMjI6MTg6MzkrMDg6MDAiIHhtcDpDcmVhdGVEYXRlPSIyMDIyLTEyLTExVDIyOjE2OjQyKzA4OjAwIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0iQWRvYmUgUkdCICgxOTk4KSI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImRlcml2ZWQiIHN0RXZ0OnBhcmFtZXRlcnM9ImNvbnZlcnRlZCBmcm9tIGltYWdlL2pwZWcgdG8gaW1hZ2UvdGlmZiIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6YjlmMDM5ZjktZDkzNC00ZGQ3LWJkNGUtZDBkNWE4YjUwY2E4IiBzdEV2dDp3aGVuPSIyMDIyLTEyLTExVDIyOjE3OjIyKzA4OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ2FtZXJhIFJhdyAxMi4xIChNYWNpbnRvc2gpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDphNmJhYmM5ZC0wMzJlLTQwZjYtYTlmNi1hMjdkOWFhYmMxMzkiIHN0RXZ0OndoZW49IjIwMjItMTItMTFUMjI6MTg6MzkrMDg6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMS4wIChNYWNpbnRvc2gpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjb252ZXJ0ZWQiIHN0RXZ0OnBhcmFtZXRlcnM9ImZyb20gaW1hZ2UvdGlmZiB0byBpbWFnZS9qcGVnIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJkZXJpdmVkIiBzdEV2dDpwYXJhbWV0ZXJzPSJjb252ZXJ0ZWQgZnJvbSBpbWFnZS90aWZmIHRvIGltYWdlL2pwZWciLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmFkOGI1YmM4LTNlMzctNDdmNi04OGY1LWU4MWNjOTA1ZjUxYyIgc3RFdnQ6d2hlbj0iMjAyMi0xMi0xMVQyMjoxODozOSswODowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIxLjAgKE1hY2ludG9zaCkiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmE2YmFiYzlkLTAzMmUtNDBmNi1hOWY2LWEyN2Q5YWFiYzEzOSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpiOWYwMzlmOS1kOTM0LTRkZDctYmQ0ZS1kMGQ1YThiNTBjYTgiIHN0UmVmOm9yaWdpbmFsRG9jdW1lbnRJRD0iN0FEQkZENDRCOEYyRUU3OUMxNDUzRUVDNzQ3NjI4NzciLz4gPGNyczpUb25lQ3VydmU+IDxyZGY6U2VxPiA8cmRmOmxpPjAsIDA8L3JkZjpsaT4gPHJkZjpsaT4yNTUsIDI1NTwvcmRmOmxpPiA8L3JkZjpTZXE+IDwvY3JzOlRvbmVDdXJ2ZT4gPGNyczpUb25lQ3VydmVSZWQ+IDxyZGY6U2VxPiA8cmRmOmxpPjAsIDA8L3JkZjpsaT4gPHJkZjpsaT4yNTUsIDI1NTwvcmRmOmxpPiA8L3JkZjpTZXE+IDwvY3JzOlRvbmVDdXJ2ZVJlZD4gPGNyczpUb25lQ3VydmVHcmVlbj4gPHJkZjpTZXE+IDxyZGY6bGk+MCwgMDwvcmRmOmxpPiA8cmRmOmxpPjI1NSwgMjU1PC9yZGY6bGk+IDwvcmRmOlNlcT4gPC9jcnM6VG9uZUN1cnZlR3JlZW4+IDxjcnM6VG9uZUN1cnZlQmx1ZT4gPHJkZjpTZXE+IDxyZGY6bGk+MCwgMDwvcmRmOmxpPiA8cmRmOmxpPjI1NSwgMjU1PC9yZGY6bGk+IDwvcmRmOlNlcT4gPC9jcnM6VG9uZUN1cnZlQmx1ZT4gPGNyczpUb25lQ3VydmVQVjIwMTI+IDxyZGY6U2VxPiA8cmRmOmxpPjAsIDA8L3JkZjpsaT4gPHJkZjpsaT4yNTUsIDI1NTwvcmRmOmxpPiA8L3JkZjpTZXE+IDwvY3JzOlRvbmVDdXJ2ZVBWMjAxMj4gPGNyczpUb25lQ3VydmVQVjIwMTJSZWQ+IDxyZGY6U2VxPiA8cmRmOmxpPjAsIDA8L3JkZjpsaT4gPHJkZjpsaT4yNTUsIDI1NTwvcmRmOmxpPiA8L3JkZjpTZXE+IDwvY3JzOlRvbmVDdXJ2ZVBWMjAxMlJlZD4gPGNyczpUb25lQ3VydmVQVjIwMTJHcmVlbj4gPHJkZjpTZXE+IDxyZGY6bGk+MCwgMDwvcmRmOmxpPiA8cmRmOmxpPjI1NSwgMjU1PC9yZGY6bGk+IDwvcmRmOlNlcT4gPC9jcnM6VG9uZUN1cnZlUFYyMDEyR3JlZW4+IDxjcnM6VG9uZUN1cnZlUFYyMDEyQmx1ZT4gPHJkZjpTZXE+IDxyZGY6bGk+MCwgMDwvcmRmOmxpPiA8cmRmOmxpPjI1NSwgMjU1PC9yZGY6bGk+IDwvcmRmOlNlcT4gPC9jcnM6VG9uZUN1cnZlUFYyMDEyQmx1ZT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD94cGFja2V0IGVuZD0idyI/Pv/iAkBJQ0NfUFJPRklMRQABAQAAAjBBREJFAhAAAG1udHJSR0IgWFlaIAfPAAYAAwAAAAAAAGFjc3BBUFBMAAAAAG5vbmUAAAAAAAAAAAAAAAAAAAAAAAD21gABAAAAANMtQURCRQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACmNwcnQAAAD8AAAAMmRlc2MAAAEwAAAAa3d0cHQAAAGcAAAAFGJrcHQAAAGwAAAAFHJUUkMAAAHEAAAADmdUUkMAAAHUAAAADmJUUkMAAAHkAAAADnJYWVoAAAH0AAAAFGdYWVoAAAIIAAAAFGJYWVoAAAIcAAAAFHRleHQAAAAAQ29weXJpZ2h0IDE5OTkgQWRvYmUgU3lzdGVtcyBJbmNvcnBvcmF0ZWQAAABkZXNjAAAAAAAAABFBZG9iZSBSR0IgKDE5OTgpAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABYWVogAAAAAAAA81EAAQAAAAEWzFhZWiAAAAAAAAAAAAAAAAAAAAAAY3VydgAAAAAAAAABAjMAAGN1cnYAAAAAAAAAAQIzAABjdXJ2AAAAAAAAAAECMwAAWFlaIAAAAAAAAJwYAABPpQAABPxYWVogAAAAAAAANI0AAKAsAAAPlVhZWiAAAAAAAAAmMQAAEC8AAL6c/+4ADkFkb2JlAGRAAAAAAf/bAIQAAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQICAgICAgICAgICAwMDAwMDAwMDAwEBAQEBAQEBAQEBAgIBAgIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMD/8AAEQgADwAXAwERAAIRAQMRAf/dAAQAA//EAaIAAAAGAgMBAAAAAAAAAAAAAAcIBgUECQMKAgEACwEAAAYDAQEBAAAAAAAAAAAABgUEAwcCCAEJAAoLEAACAQMEAQMDAgMDAwIGCXUBAgMEEQUSBiEHEyIACDEUQTIjFQlRQhZhJDMXUnGBGGKRJUOhsfAmNHIKGcHRNSfhUzaC8ZKiRFRzRUY3R2MoVVZXGrLC0uLyZIN0k4Rlo7PD0+MpOGbzdSo5OkhJSlhZWmdoaWp2d3h5eoWGh4iJipSVlpeYmZqkpaanqKmqtLW2t7i5usTFxsfIycrU1dbX2Nna5OXm5+jp6vT19vf4+foRAAIBAwIEBAMFBAQEBgYFbQECAxEEIRIFMQYAIhNBUQcyYRRxCEKBI5EVUqFiFjMJsSTB0UNy8BfhgjQlklMYY0TxorImNRlUNkVkJwpzg5NGdMLS4vJVZXVWN4SFo7PD0+PzKRqUpLTE1OT0laW1xdXl9ShHV2Y4doaWprbG1ub2Z3eHl6e3x9fn90hYaHiImKi4yNjo+DlJWWl5iZmpucnZ6fkqOkpaanqKmqq6ytrq+v/aAAwDAQACEQMRAD8AMh13/M1+M/zd2TivjF/N+2PQx1WLnmx3WPzi67pG2tubZWSmH2tPkd6z4OlnyXW2RlZV+7y1BHV7RyRVP4rjaSBGZolt+Ydv3iFdv5phFR8FwvaVPq1MofVhVD+IKOule8+yPO3tfuc/PP3ed1do3UNc7NOfFSVRkrEHIW6QAnTE+i7jz4EsjnBNvnL/ACtvkN8M8We2ts51fkt8SsrRwZ3bvyL60Rckm39t5FVnxdX2xt7A1GRpsJj5qeRCm5cVJVbbqVdJJHx7SLB7Kd45cvtpX6mJ/qNsIqJVyQD/ABgcB/TWqnz08OpI9rffflD3HnHL+4Wv7l5/RjG9hcHSJZFNGFrI4UswNa20oW4UghfGCluqyKXJOf8AK2yJNKtBX1SVZrP8mEBxdU/3S1Jk8IhMDE+TVp0G97ew8G89WKf5OpxmgGkx+D+prQUpmviLilK1r5evX//QqUq6WVqysKtTj/Kqoc1dIp9M0itw0wNuPr9CORx7xuINT/nH+frvFFIvhxfF8I/C3p9nVr/8tj5B/wAyj4wYKLd3xh6T7a+R/wATMvX5T+9PUibE3vvfo7LrBLIm6ajr/e228DuKh6v3TGryCpeh8+Jmm5yGOmb9xBNsF9zBtyCTb7OW42xjlNLNGfXQwBCH1pVT5r59QD708oeyvPF3JYc7c07fsvP8ar4d0Z4YbxageGLmCR42uY+GnXpmC/2UwHaTW7k2R/Kg73/u9/MB+Mm8dgdD7s6i3xR9mfIX+Xh23XbBwWD7nTr7JruvsLrHqnZWezMW1k3pvSgxVZjqJdvS5LaGaqqmKlrKOinlnljM5IeWr3w982+VIZon1y2r6B4mk6mRVJ062oQNJKMTRgCSRH1lunv3yql97Sc67bd7rtu4WptrDf7UTu1n9QPDt7m5uEQyGCFmWR/qBHdwqrPHJIqop//Z',
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
        }
      }
    },
  },
};
