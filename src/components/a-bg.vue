<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  bg: {
    type: String,
    default: 'transparent',
  },
  color: {
    type: String,
    default: '#fff',
  },
});
</script>

<template>
  <span :style="{ background: props.bg, color: props.color }">
    <slot></slot>
  </span>
</template>
