<template>
  <section id="section1" class="hero">
    <AdviceComponent/>
    <CarrouselHome/>
  </section>
  <section id="section2">
    <AdviceComponent/>
  </section>
</template>

<script setup lang="ts">
import CarrouselHome from './CarrouselHome.vue';
import AdviceComponent from '@/components/AdviceComponent.vue'

</script>

<style scoped>
.hero{
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  height: 2000px;

  background-image: url('@/assets/images/hero.png'); /* ou caminho relativo se estiver na mesma pasta */
  background-size: cover;       /* Para cobrir toda a área */
  background-position: center;  /* Centraliza a imagem */
  background-repeat: no-repeat;
}

/* Os filhos do .hero ocuparão 50% cada */
.hero > * {
  flex: 1;
  max-width: 50%;
  height: 100%;
  box-sizing: border-box; /* Para respeitar padding/border */
}
</style>
