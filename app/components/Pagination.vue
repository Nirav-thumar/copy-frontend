<template>
  <div class="pagination">
    <button @click="previousPage" :disabled="currentPage === 1">Previous</button>
    <span>Page {{ currentPage }} of {{ totalPages }}</span>
    <button @click="nextPage" :disabled="currentPage === totalPages">Next</button>
  </div>
</template>

<script setup>
import { ref, defineProps, defineEmits } from 'vue';

const { currentPage, totalPages } = defineProps(['currentPage', 'totalPages']);
const { emit } = defineEmits();

const previousPage = () => {
  if (currentPage.value > 1) {
    emit('page-change', currentPage.value - 1);
  }
};

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    emit('page-change', currentPage.value + 1);
  }
};
</script>
