import { defineStore } from 'pinia'

export const useCarsStore = defineStore('cars', {
  state: () => ({
    cars: []
  }),
  actions: {
    async fetchCars() {
      try {
        const response = await fetch('https://am111.05.testing.place/api/v1/cars/list')
        if (response.ok) {
          const data = await response.json()
          console.log(data, 'datra')
          this.cars = data
        }
      } catch (error) {
        console.error('Ошибка при загрузке данных автомобилей:', error)
      }
    }
  }
})