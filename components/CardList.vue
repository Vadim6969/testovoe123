<template>
    <div class="container py-5">
      <h1 class="text-center mb-5">Автомобилка</h1>
      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        <Card v-for="car in cars" :key="car.id" :car="car" />
      </div>
    </div>
  </template>
  
  <script setup>
  import { useCarsStore } from "../stores/cars.ts"
  import Card from './Card.vue'
  
  const carsStore = useCarsStore()
  const { cars } = storeToRefs(carsStore)
  
  onMounted(async () => {
    await carsStore.fetchCars()
  })
  </script>