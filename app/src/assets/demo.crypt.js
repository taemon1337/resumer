let secure = false

let meta = {
  public: true,
  name: 'Demo',
  keywords: ['demo', 'test', 'example', 'free', 'public']
}

let routes = [
  {
    path: '/',
    name: 'home',
    component: 'DLayout'
  }
]

let data = {
  id: 'demo',
  user: {
    image: '',
    first: 'Test',
    last: 'Tester'
  },
  github: {
    href: 'https://github.com'
  },
  twitter: {
    href: 'https://twitter.com'
  },
  navbar: {
    left: [
      {
        image: {
          src: 'http://bulma.io/images/bulma-logo.png'
        }
      },
      {
        content: '<p class="title">Demo Site</p>'
      }
    ],
    center: [
      { href: 'vuex:github.href', icon: 'fa fa-github' },
      { href: 'vuex:twitter.href', icon: 'fa fa-twitter' }
    ],
    right: [
      { text: 'Home' },
      { text: 'Documentation' },
      { text: 'Blog' },
      {
        vif: 'vuex:decrypted',
        text: 'Logout',
        event: 'lock',
        icon: 'fa fa-lock'
      }
    ]
  },
  headings: [
    { component: 'd-heading', properties: { heading: '', klass: 'title', content: 'Left' } },
    { component: 'd-heading', properties: { heading: '', klass: 'title', content: 'Center' } },
    { component: 'd-heading', properties: { heading: '', klass: 'title', content: 'Right' } }
  ]
}

let layout = {
  component: 'd-group',
  properties: {
    klass: 'box',
    children: [
      {
        component: 'd-level',
        properties: {
          items: 'vuex:headings'
        }
      }
    ]
  }
}

let components = [
  'DRender',
  'DLayout',
  'DNavbar',
  'DNavbarItem',
  'DMedia',
  'DSection',
  'DLevel'
]

module.exports = {
  jsdb: true,
  secure: secure,
  meta: meta,
  components: components,
  routes: routes,
  data: data,
  layout: layout
}
