const app = Vue.createApp({
  data() {
    return {
      showBooks: true,
      title: 'The Final Bagel',
      author: 'OJ Simpson',
      age: 2.5
    }
  },
  methods: {
    toggleShowBooks() {
      this.showBooks = !this.showBooks
    }
  }
})

app.mount('#app')
