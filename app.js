const app = Vue.createApp({
  data() {
    return {
      showBooks: true,
      // title: 'The Final Bagel',
      // author: 'OJ Simpson',
      // age: 2.5,
      // x: 0,
      // y: 0
      url: 'www.nike.com',
      books: [
        { title: 'name1', author: 'ye', img: 'img/ye.jpg' },
        { title: 'name2', author: 'chis', img: 'img/supra.jpg'  },
        { title: 'name3', author: 'antjony', img: 'img/city.jpg'  },
      ]
    }
  },
  methods: {
    toggleShowBooks() {
      this.showBooks = !this.showBooks
    },
    // handleEvent() {
    //   console.log('event')
    // },
    // handleEvent(e, data) {
    //   console.log(e, e.type)
    //   if (data) {
    //     console.log(data)
    //   }
    // },
    // handleMousemove(e) {
    //   this.x = e.offsetX
    //   this.y = e.offsetY
    // }
  }
})

app.mount('#app')
