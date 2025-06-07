<template>
  <div class="layout">
    <Navbar />
    <main class="main">
      <HomeView/>
    </main>
    <FooterComponent />
  </div>
</template>

<script setup lang="ts">
import Navbar from '@/components/Navbar.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import HomeView from '@/views/HomeView.vue'
</script>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  min-width: 100vw;
}

.main {
  flex: 1;
  background-color: #f5f5f5;
}
</style>