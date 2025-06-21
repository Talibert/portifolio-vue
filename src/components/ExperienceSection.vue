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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  max-width: 800px;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
  transition: all 0.3s ease;
  box-sizing: border-box;
}

.experience-section.right {
  margin-left: auto;
  background-color: #1a1a1a;
  border-left: 6px solid #1e90ff;
}

.experience-section.left {
  margin-right: auto;
  background-color: #1a1a1a;
  border-right: 6px solid #1e90ff;
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
</style>
