<script setup>
defineProps({
  title: {
    type: String,
    default: 'אין נתונים להצגה'
  },
  message: {
    type: String,
    default: ''
  },
  actionText: {
    type: String,
    default: ''
  },
  actionRoute: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <div class="empty-state">

    <div class="icon">🐕</div>
    <h3>{{ title }}</h3>
    <p v-if="message">🐕{{ message }}🐕</p>

    <router-link v-if="actionRoute" :to="actionRoute" class="btn">
      {{ actionText }}
    </router-link>
  </div>
</template>

<style scoped>
.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem 1.5rem;
  text-align: center;
  background-color: #f9fafb;
  border: 2px dashed #e5e7eb;
  border-radius: 12px;
  max-width: 450px;
  margin: 2rem auto;
}

.icon {
  font-size: 3rem;
  margin-bottom: 0.5rem;
}

h3 {
  font-size: 1.25rem;
  color: #374151;
  margin-bottom: 0.5rem;
}

p {
  color: #6b7280;
  font-size: 0.95rem;
}
</style>