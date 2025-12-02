<!-- LaTeXFormula.vue -->
<template>
  <div ref="katexEl" class="latex-formula"></div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import katex from 'katex';
import 'katex/dist/katex.min.css';

const props = defineProps({
  formula: {
    type: String,
    required: true,
  },
  inline: {
    type: Boolean,
    default: false,
  },
});

const katexEl = ref(null);

function renderFormula() {
  if (!katexEl.value) return;

  katexEl.value.innerHTML = '';

  try {
    katex.render(props.formula, katexEl.value, {
      throwOnError: false, // 避免公式错误导致崩溃
      displayMode: !props.inline, // true = 块级（居中），false = 行内
      trust: true, // 允许某些安全的 HTML（如 \href），按需开启
    });
  } catch (error) {
    console.warn('KaTeX 渲染失败:', error);
    katexEl.value.textContent = '[公式渲染错误]';
  }
}

onMounted(() => {
  renderFormula();
});

watch(() => [props.formula, props.inline], renderFormula, { immediate: false });
</script>

<style scoped>
.latex-formula {
  text-align: center;
}
.latex-formula[data-inline='true'] {
  display: inline-block;
  text-align: left;
}
</style>
