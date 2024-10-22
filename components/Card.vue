<script setup lang="ts">

interface IProps {
    car: {
        name: string,
        year: string,
        engine: string,
        image: string,
    }
}

const props = defineProps<IProps>();

</script>

<template>
    <div class="col">
      <div class="card">
        <img :src="car.image" class="card-img-top" :alt="car.name">
        <div class="card-body">
          <h5 class="card-title">{{ car.name }} {{ car.year }} г.</h5>
          <p class="card-text">Объем двигателя: {{ car.engine }}</p>
        </div>
      </div>
    </div>
</template>