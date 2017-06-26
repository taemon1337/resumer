let secure = false

let meta = {
  public: true,
  name: 'Test'
}

let routes = [
  {
    path: '/',
    name: 'home',
    component: 'DLayout'
  }
]

let data = {
  id: 'test',
  app: {
    name: 'test'
  },
  user: {
    image: 'https://lh3.googleusercontent.com/-ZFYuVfqKoIA/AAAAAAAAAAI/AAAAAAAAAAA/AAyYBF6RdKF5SHu-O-Z7UDEQlms4e6rGeQ/s64-c-mo/photo.jpg',
    first: 'Test',
    last: 'Testy'
  },
  github: {
    href: 'https://github.com'
  },
  twitter: {
    href: 'https://twitter.com'
  },
  navbar: {
    image: {
      src: 'http://bulma.io/images/bulma-logo.png'
    },
    title: 'Demo Site',
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
        text: 'Home'
      },
      {
        text: 'Documentation'
      },
      {
        text: 'Blog'
      },
      {
        vif: 'vuex:decrypted',
        text: 'Logout',
        icon: 'fa fa-lock'
      }
    ]
  }
}

let layout = {
  // colors: {},
  // styles: {},
  component: 'd-group',
  properties: {
    klass: 'box',
    children: [
      {
        component: 'd-level',
        properties: {
          items: [
            {
              component: 'd-image',
              properties: {
                image: {
                  src: 'vuex:user.image'
                },
                klass: 'image is-round is-64x64'
              }
            },
            {
              component: 'd-heading',
              properties: {
                heading: '',
                klass: 'title',
                content: 'Timothy Stello'
              }
            },
            {
              component: 'd-heading',
              properties: {
                heading: '',
                klass: '',
                content: ''
              }
            },
            {
              component: 'd-heading',
              properties: {
                heading: 'Email Address',
                klass: 'size-14 is-bold',
                content: 'timstello@gmail.com'
              }
            },
            {
              component: 'd-heading',
              properties: {
                heading: 'Phone Number',
                klass: 'size-14 is-bold',
                content: '443.333.9115'
              }
            },
            {
              component: 'd-heading',
              properties: {
                heading: 'Address',
                klass: 'size-12',
                content: '2361 Rutland Rd.<br> Davidsonville, MD  21035'
              }
            }
          ]
        }
      },
      {
        component: 'd-navbar',
        properties: {
          left: [
            {
              image: {
                src: 'vuex:navbar.image.src'
              }
            },
            {
              text: 'vuex:navbar.title'
            }
          ],
          center: 'vuex:navbar.icons',
          right: [
            {
              vif: 'vuex:decrypted',
              text: 'Logout',
              icon: 'fa fa-lock'
            }
          ]
        }
      },
      {
        component: 'd-tabs',
        properties: {
          tabs: [
            {
              id: 'home'
            },
            {
              id: 'about'
            }
          ]
        },
        slots: {
          home: {
            component: 'd-section',
            properties: {
              title: 'Home Section'
            },
            slots: {
              section: {
                component: 'd-navbar',
                properties: {
                  left: [
                    { text: 'One' },
                    { text: 'Two' },
                    { text: 'Three' },
                    { text: 'Four' },
                    { text: 'Five' }
                  ]
                }
              }
            }
          },
          about: {
            component: 'd-section',
            properties: {
              title: 'About Section'
            }
          }
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
