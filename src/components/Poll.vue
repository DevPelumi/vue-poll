<script setup lang="ts">
import { ref } from 'vue'

interface Option {
  id: number
  text: string
  votes: number
}

const totalVotes = ref(0)
const options = ref<Option[]>([
  { id: 1, text: 'Vzy', votes: 0 },
  { id: 2, text: 'Wix', votes: 0 },
  { id: 3, text: 'Squarespace', votes: 0 },
  { id: 4, text: 'Wordpress', votes: 0 },
])

const vote = (option: Option) => {
  option.votes++
  totalVotes.value++
}

const getPercentage = (votes: number): number => {
  if (totalVotes.value === 0) return 0
  return Math.round((votes / totalVotes.value) * 100)
}
</script>

<template>
  <div class="poll-container">
    <h2 class="question">What is the best Website Builder ?</h2>

    <div class="options">
      <div v-for="option in options" :key="option.id" class="option" @click="vote(option)">
        <div class="option-content">
          <span class="option-text">{{ option.text }}</span>
          <span class="percentage">{{ getPercentage(option.votes) }}%</span>
        </div>

        <div class="progress-bar" :style="{ width: getPercentage(option.votes) + '%' }"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.poll-container {
  background: var(--color-background-soft);
  border-radius: 12px;
  padding: 2rem;
  max-width: 600px;
  width: 100%;
}

.question {
  font-size: 1.5rem;
  color: var(--color-text);
  margin-bottom: 1.5rem;
  text-align: left;
}

.options {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.option {
  position: relative;
  background: var(--color-background-soft2);
  border-radius: 8px;
  padding: 1rem;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.3s ease;
}

.option:hover {
  background: #ececec;
  transform: translateY(-2px);
}

.option:active {
  transform: translateY(0);
}

.option-content {
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.option-text {
  color: var(--color-text);
  font-weight: 500;
}

.percentage {
  font-weight: bold;
  color: var(--color-text);
  font-size: 0.9rem;
}

.progress-bar {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  background: rgba(100, 108, 255, 0.2);
  transition: width 0.6s ease-out;
}
</style>
