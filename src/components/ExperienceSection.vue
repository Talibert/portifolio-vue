<template>
  <div :class="['experience-section', alignClass, { current }]">
    <div class="content">
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  title: string
  description: string
  align: 'left' | 'right'
  current: boolean
}

const props = defineProps<Props>()

const alignClass = computed(() => props.align === 'left' ? 'left' : 'right')
</script>

<style scoped>
.experience-section {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 45%;                         /* ✅ Ocupa 45% da largura da section */
  max-width: none;                    /* ✅ Remove o limite anterior de 800px */
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
  transition: all 0.3s ease;
  box-sizing: border-box;
  z-index: 1;                          /* ✅ Ficar acima da linha */
}

.experience-section.right {
  margin-left: auto;
  background-color: #1a1a1a;
  border-left: 6px solid #1e90ff;
  animation: fadeInRight 0.8s ease forwards;
}

.experience-section.left {
  margin-right: auto;
  text-align: right;
  background-color: #1a1a1a;
  border-right: 6px solid #1e90ff;
  animation: fadeInLeft 0.8s ease forwards;
}

.experience-section.current.right {
  background-color: #1a1a1a;
  border-left-color: #ff4d4f;
}

.experience-section.current.left {
  background-color: #400000;
  border-right-color: #ff4d4f;
}

.content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}

.content h3 {
  font-family: 'Inter', sans-serif;
  margin: 0 0 30px 0;
  font-size: 3rem;
  color: #1e90ff;
}

.content p {
  font-family: 'Lato', sans-serif;
  margin: 0;
  color: #ddd;
  font-size: 1.5rem;
}

.experience-section.current .content h3 {
  color: #ff4d4f;
}

.experience-section.current .content p {
  color: #ddd;
}

@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
