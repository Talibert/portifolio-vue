<template>
  <div class="beginning">
    <ProfileIntro/>
    <ProfilePhoto/>
  </div>
</template>

<script setup lang="ts">

import ProfileIntro from "@/components/ProfileIntro.vue";
import ProfilePhoto from "@/components/ProfilePhoto.vue";
</script>

<style scoped>
.beginning {
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  height: 100vh;
  background-color: #222222;
}

/* Os filhos do .hero ocuparão 50% cada */
.beginning > * {
  flex: 1;
  max-width: 50%;
  height: 100%;
  box-sizing: border-box;
}
</style>