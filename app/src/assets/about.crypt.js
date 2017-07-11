let secure = false

let meta = {
  public: true,
  title: 'About this website',
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
  about: {
    title: 'What am I looking at?',
    subtitle: 'Why and what is going on?',
    content: 'This site was created to be a simple online presence for its creator, specifically to hold static site data in an encrypted format which could be unlocked by anyone with a valid access key.'
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
        component: 'd-tile',
        properties: {
          title: 'vuex:about.title',
          subtitle: 'vuex:about.subtitle',
          content: 'vuex:about.content',
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
