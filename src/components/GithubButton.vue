<script setup lang="ts">
import GithubIcon from './icons/GithubIcon.vue'

defineProps<{
  href: string
}>()
</script>

<template>
  <a :href="href" target="_blank" class="github-button">
    <GithubIcon size="24" />
    <span>Github Repo</span>
  </a>
</template>

<style scoped>
.github-button {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 8px;
  background-color: var(--vt-c-white);
  border: none;
  border-radius: 4px;
  color: var(--vt-c-black);
  text-decoration: none;
  font-weight: 600;
  font-size: 14px;
  transition: all 0.3s ease;
}

.github-button:hover {
  background-color: var(--vt-c-white-soft);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.github-button:active {
  transform: translateY(0);
}
</style>
