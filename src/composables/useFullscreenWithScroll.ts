// composables/useFullscreenWithScroll.js

import { ref, onMounted, onUnmounted } from 'vue';

export function useFullscreenWithScroll() {
  const isFullscreen = ref(false);

  const handleFullscreen = (element) => {
    if (!element) return;

    if (
      document.fullscreenElement ||
      document.webkitFullscreenElement ||
      document.msFullscreenElement
    ) {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    } else {
      savedScrollTop = window.pageYOffset;

      if (element.requestFullscreen) {
        element.requestFullscreen();
      } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
      } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
      }
    }
  };

  let savedScrollTop = 0;

  const updateFullscreenState = () => {
    const fullscreenElement =
      document.fullscreenElement ||
      document.webkitFullscreenElement ||
      document.mozFullScreenElement ||
      document.msFullscreenElement;

    if (fullscreenElement) {
      isFullscreen.value = true;
    } else {
      setTimeout(() => {
        window.scrollTo(0, savedScrollTop);
      }, 50);
      isFullscreen.value = false;
    }
  };

  onMounted(() => {
    document.addEventListener('fullscreenchange', updateFullscreenState);
    document.addEventListener('webkitfullscreenchange', updateFullscreenState);
    document.addEventListener('mozfullscreenchange', updateFullscreenState);
    document.addEventListener('MSFullscreenChange', updateFullscreenState); // IE11
  });

  onUnmounted(() => {
    document.removeEventListener('fullscreenchange', updateFullscreenState);
    document.removeEventListener('webkitfullscreenchange', updateFullscreenState);
    document.removeEventListener('mozfullscreenchange', updateFullscreenState);
    document.removeEventListener('MSFullscreenChange', updateFullscreenState);
  });

  return {
    handleFullscreen,
    isFullscreen,
  };
}
