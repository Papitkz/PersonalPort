// src/stores/counter.js
import { defineStore } from 'pinia'

export const useMainStore = defineStore('store', {
    state: () => ({
        userInformation: {},
        count: 0,
    }),
    getters: {
        doubleCount: (state) => state.count * 2,
    },
    actions: {
        increment() {
            this.count++
        },
    },
    persist: {
        key: 'store',
        paths: ['userInformation'],
    },
})
