<template>
  <div
      ref="sectionRef"
      :class="['experience-section', alignClass, { current, visible: isVisible }]"
  >
    <div class="content">
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'

interface Props {
  title: string
  description: string
  align: 'left' | 'right'
  current: boolean
}

const props = defineProps<Props>()

const alignClass = computed(() => (props.align === 'left' ? 'left' : 'right'))

const sectionRef = ref<HTMLElement | null>(null)
const isVisible = ref(false)

useIntersectionObserver(
    sectionRef,
    ([entry]) => {
      isVisible.value = entry.isIntersecting
    },
    {
      threshold: 0.1, // dispara quando 10% do card estiver visível
    }
)
</script>

<style scoped>
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

.experience-section {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.experience-section.visible.left {
  animation: fadeInLeft 0.8s ease forwards;
  opacity: 1;
  transform: translateX(0);
}

.experience-section.visible.right {
  animation: fadeInRight 0.8s ease forwards;
  opacity: 1;
  transform: translateX(0);
}

.experience-section.current.left {
  background-color: #1a1a1a;
  border-right-color: #ff4d4f;
}

.experience-section.current.right {
  background-color: #1a1a1a;
  border-left-color: #ff4d4f;
}

/* Seu estilo base do card, alinhamento, sombras, etc, continua igual */
.experience-section {
  width: 45%;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
  box-sizing: border-box;
  position: relative;
  z-index: 1;
}

.experience-section.left {
  margin-right: auto;
  text-align: right;
  border-right: 6px solid #1e90ff;
  background-color: #1a1a1a;
}

.experience-section.right {
  margin-left: auto;
  border-left: 6px solid #1e90ff;
  background-color: #1a1a1a;
}

.content h3 {
  font-family: 'Inter', sans-serif;
  margin: 0 0 60px 0;
  font-size: 3rem;
  color: #1e90ff;
}

.content p {
  font-family: 'Lato', sans-serif;
  font-weight: 400;
  margin: 0;
  color: #ddd;
  font-size: 1.5rem;
  line-height: 1.5;
  text-align: justify;
}

.experience-section.current .content h3 {
  color: #ff4d4f;
}

.experience-section.current .content p {
  color: #ddd;
}
</style>
