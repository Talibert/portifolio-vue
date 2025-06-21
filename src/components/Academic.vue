<template>
  <section class="academic-section">
    <div class="academic-title">
      <span class="invisible-placeholder">{{ title }}</span>
      <span class="typing">{{ displayedTitle }}</span><span class="cursor" />
    </div>

<!--    <div class="experiences">-->
<!--      <ExperienceSection-->
<!--          v-for="(item, index) in experiences"-->
<!--          :key="index"-->
<!--          :title="item.title"-->
<!--          :description="item.description"-->
<!--          :align="index % 2 === 0 ? 'right' : 'left'"-->
<!--          :current="item.current ?? false"-->
<!--      />-->
<!--    </div>-->
  </section>
</template>

<script setup lang="ts">
import { useTypingEffect } from '@/composables/useTypingEffect'
import ExperienceSection from './ExperienceSection.vue'

const title = 'MEUS ESTUDOS'

const { displayedText: displayedTitle } = useTypingEffect(title, 1000, 90, 30, false)
</script>

<style scoped>
.academic-section {
  position: relative;
  min-height: 100vh;
  padding: 80px 50px;
  background-color: #444444;
  color: #fff;
  display: flex;
  flex-direction: column;
}

.academic-title {
  font-size: 2.2rem;
  font-weight: bold;
  margin-bottom: 60px;
  text-align: left;
  position: relative;
}

.invisible-placeholder {
  visibility: hidden;
  height: 0;
  display: block;
}

.cursor {
  width: 2px;
  height: 1.1em;
  background-color: #1e90ff;
  display: inline-block;
  animation: blink 0.8s infinite;
  margin-left: 2px;
}

.typing {
  font-style: italic;
}

@keyframes blink {
  0%, 100% { opacity: 1 }
  50% { opacity: 0 }
}
</style>
