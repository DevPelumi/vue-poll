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

const resetPoll = () => {
  options.value.forEach((option) => (option.votes = 0))
  totalVotes.value = 0
}
</script>

<template>
  <div class="poll-container">
    <div class="header">
      <h2 class="question">What is the best Website Builder ?</h2>
      <p class="subtext">You can vote multiple times</p>
    </div>

    <div class="options">
      <div v-for="option in options" :key="option.id" class="option" @click="vote(option)">
        <div class="option-content">
          <span class="option-text">{{ option.text }}</span>
          <span class="option-percentage">{{ getPercentage(option.votes) }}%</span>
        </div>

        <div class="progress-bar" :style="{ width: getPercentage(option.votes) + '%' }"></div>
      </div>
    </div>
    <div class="poll-stats">
      <span class="total-votes">{{ totalVotes }} votes</span>
      <a href="#" class="reset-button" @click.prevent="resetPoll"> Reset </a>
    </div>
  </div>
</template>

<style scoped>
.poll-container {
  margin-top: 100px;
  border: 1px solid var(--color-border);
  border-radius: 8px;
  padding: 2rem;
  max-width: 600px;
  width: 100%;
}

.question {
  font-size: 1.5rem;
  color: var(--color-text);
  text-align: left;
}
.subtext {
  font-size: 1rem;
  color: var(--color-text-soft);
  margin-bottom: 1.5rem;
}

.options {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.option {
  position: relative;
  border: 1px solid var(--color-border);
  border-radius: 8px;
  padding: 1rem;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.3s ease;
}

.option:hover {
  transform: translateY(-1px);
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
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.option-text {
  color: var(--color-text);
  font-weight: 500;
}

.option-percentage {
  font-weight: bold;
  color: var(--color-text);
  font-size: 0.9rem;
}

.progress-bar {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  background: var(--color-background-soft2);
  transition: width 0.6s ease-out;
}

.header {
  margin-bottom: 1rem;
}

.poll-stats {
  display: flex;
  gap: 1rem;
  align-items: center;
  margin-top: 1.5rem;
}

.total-votes {
  color: var(--color-text-soft);
  font-size: 0.9rem;
}

.reset-button {
  color: var(--color-text-soft);
  font-size: 0.9rem;
  text-decoration: none;
  transition: color 0.3s ease;
  padding: 0.2rem 0.4rem;
  border-radius: 4px;
  background: var(--color-background-soft2);
}

.reset-button:hover {
  color: var(--color-text);
}
</style>
