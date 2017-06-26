let state = {
  app: {
    name: 'Demo Site'
  },
  github: {
    href: 'https://github.com'
  },
  twitter: {
    href: 'https://twitter.com'
  },
  navbar: {
    image: 'http://bulma.io/images/bulma-logo.png',
    title: 'vuex:app.name',
    icons: [
      {
        href: 'vuex:github.href',
        icon: 'fa fa-github'
      },
      {
        href: 'vuex:twitter.href',
        icon: 'fa fa-twitter'
      }
    ],
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
