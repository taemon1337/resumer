let secure = false

let meta = {
  public: true,
  title: 'About',
  subtitle: '',
  keywords: ['help', 'about', 'readme', 'instruct', 'question', 'site', 'why', 'how', 'example']
}

let routes = [
  {
    path: '/',
    name: 'home',
    component: 'DLayout'
  }
]

let database = {
  user: {},
  github: {
    href: 'https://github.com/taemon1337/resumer'
  },
  headings: [
    { component: 'd-heading', properties: { heading: '', klass: 'title', content: 'About this application' } },
    { component: 'd-heading', properties: { heading: '', klass: 'title', content: 'Center' } },
    { component: 'd-heading', properties: { heading: '', klass: 'title', content: 'Right' } }
  ]
}

let navbar = {
  public: true,
  left: [
    {
      image: {
        src: 'http://bulma.io/images/bulma-logo.png'
      }
    },
    {
      content: '<p class="title">About this site</p>'
    }
  ],
  right: [
    { href: 'vuex:github.href', icon: 'fa fa-github' }
  ]
}

let templates = {}

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
  id: 'about',
  secure: secure,
  meta: meta,
  navbar: navbar,
  templates: templates,
  components: components,
  routes: routes,
  database: database,
  layout: layout
}
