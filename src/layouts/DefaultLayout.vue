<template>
  <div class="layout">
    <Navbar />
    <main class="main">
      <router-view />
    </main>
    <FooterComponent />
  </div>
</template>

<script setup lang="ts">

/**
 * Um DefaultLayout serve para criar um layout padrão que pode ser utilizado nas rotas desejadas
 * A ideia aqui é exibir o esquema de:
 * - Cabeçalho
 * - View
 * - Rodapé
 */

import Navbar from '@/components/Navbar.vue'
import FooterComponent from '@/components/FooterComponent.vue'

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
  padding-top: 80px;
}

footer {
  background-color: #5ceabf;
  padding: 10px;
  text-align: center;
}
</style>
