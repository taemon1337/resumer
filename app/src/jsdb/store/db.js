let state = {
  app: {
    name: 'tim.stello.org'
  },
  navbar: {
    image: 'http://bulma.io/images/placeholders/128x128.png',
    title: 'vuex:app.name',
    items: [
      {
        text: 'Home',
        route: 'home'
      }
    ]
  }
}

let getters = {
  database: state => state
}

export default {
  state,
  getters
}
