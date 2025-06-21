<template>
  <section id="beginning">
    <Beginning />
  </section>

  <div class="gradient-1-2"></div>

  <section id="career">
    <Career />
  </section>

  <div class="gradient-2-3"></div>

  <section id="academic">
    <Academic />
  </section>
</template>

<script setup lang="ts">
import Beginning from "@/components/Beginning.vue";
import Career from "@/components/Career.vue";
import Academic from "@/components/Academic.vue";
</script>

<style scoped>
/* Exemplo de altura, ajuste se quiser */
.gradient-1-2, .gradient-2-3 {
  height: 60px;
  width: 100%;
}

/* Gradiente de #333 para #222 */
.gradient-1-2 {
  background: linear-gradient(to bottom, #222222, #333333);
}

/* Gradiente de #222 para #888 */
.gradient-2-3 {
  background: linear-gradient(to bottom, #333333, #444444);
}
</style>
