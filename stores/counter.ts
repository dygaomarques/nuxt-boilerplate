import { defineStore } from 'pinia'

interface State {
  count: number
}

export const useCounterStore = defineStore('count', {
  state: (): State => ({
    count: 0,
  }),

  getters: {
    count: (state) => state.count,
  },

  actions: {
    incrementCounter() {
      this.$state.count++
    },
    clearCounter() {
      this.$reset()
    },
  },
})
