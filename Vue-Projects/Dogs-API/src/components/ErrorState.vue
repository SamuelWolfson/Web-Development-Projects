<script setup>
defineProps({
  message: {
    type: String,
    default: 'אירעה שגיאה בטעינת הנתונים'
  },
  showButtonReturnToBreedsList: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <div class="error-state">
    <div class="error-icon">⚠️</div>

    <h3>שגיאה</h3>
    <p>{{ message }}</p>

    <RouterLink 
      v-if="showButtonReturnToBreedsList" 
      to="/breeds" 
      class="back-button"
    >
      חזרה לרשימת הגזעים
    </RouterLink>

  </div>
</template>

<style scoped>
.error-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
  text-align: center;
  background-color: #fdf2f2;
  border: 1px solid #f8d7da;
  border-radius: 12px;
  margin: 20px auto;
  max-width: 500px;
}

.error-icon {
  font-size: 2.5rem;
  margin-bottom: 12px;
}

h3 {
  color: #c53030;
  margin: 0 0 8px 0;
  font-size: 1.3rem;
}

p {
  color: #742a2a;
  margin: 0 0 20px 0;
  font-size: 1rem;
}

.back-button {
  display: inline-block;
  margin-top: 15px;
  padding: 10px 20px;
  background-color: #42b983;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  font-weight: bold;
  transition: background-color 0.3s;
}

.back-button:hover {
  background-color: #3aa876; /* צבע כהה יותר ב-hover */
}
</style>