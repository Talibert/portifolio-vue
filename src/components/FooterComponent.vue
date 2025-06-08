<template>
  <footer class="footer">
    <p>All Rights Reserved.</p>
  </footer>
</template>

<script setup lang="ts">
</script>

<style scoped>
.footer {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 70px;
  background: rgba(18, 18, 18, 0.85); /* igual ao header */
  backdrop-filter: saturate(180%) blur(12px); /* igual ao header */
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.7); /* sombra invertida */
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #f1f1f1; /* texto claro */
  text-align: center;
  padding: 0 30px;
  z-index: 1000;
}

@media (max-width: 600px) {
  .footer {
    padding: 0 15px;
  }
}
</style>