<template>
  <section id="section1" class="hero">
    <ProfileIntro/>
    <ProfilePhoto/>
  </section>
  <section id="section2">
    <AdviceComponent/>
  </section>
</template>

<script setup lang="ts">
import CarrouselHome from './CarrouselHome.vue';
import AdviceComponent from '@/components/AdviceComponent.vue'
import ProfileIntro from "@/components/ProfileIntro.vue";
import ProfilePhoto from "@/components/ProfilePhoto.vue";

</script>

<style scoped>
.hero{
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  height: 100vh;
  background-color: #333333;
}

/* Os filhos do .hero ocuparão 50% cada */
.hero > * {
  flex: 1;
  max-width: 50%;
  height: 100%;
  box-sizing: border-box; /* Para respeitar padding/border */
}
</style>
