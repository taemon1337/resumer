let secure = false

let meta = {
  public: true,
  title: 'Demo',
  subtitle: '',
  keywords: ['demo', 'test', 'example', 'free', 'public']
}

let routes = [
  {
    path: '/',
    name: 'home',
    component: 'DLayout'
  }
]

let navbar = {
  public: true,
  left: [
    {
      image: {
        src: 'http://bulma.io/images/bulma-logo.png'
      }
    },
    {
      content: '<p class="title">Demonstration Site</p>'
    }
  ],
  center: [
    { href: 'vuex:github.href', icon: 'fa fa-github' },
    { href: 'vuex:twitter.href', icon: 'fa fa-twitter' }
  ]
}

let database = {
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
  headings: [
    { component: 'd-heading', properties: { heading: '', klass: 'title', content: 'Left' } },
    { component: 'd-heading', properties: { heading: '', klass: 'title', content: 'Center' } },
    { component: 'd-heading', properties: { heading: '', klass: 'title', content: 'Right' } }
  ],
  javascript: {
    logo: './static/javascript-logo.png',
    href: 'https://www.w3schools.com/Js/',
    title: 'Javascript',
    tag: ' ',
    children: ['vue', 'riot', 'angular', 'jquery', 'kendo']
  },
  css: {
    logo: './static/css-logo.png',
    href: 'https://www.w3schools.com/css/',
    title: 'CSS Styling',
    tag: ' ',
    children: ['bootstrap', 'materialize', 'bulma', 'sass']
  },
  node: {
    logo: './static/nodejs-logo.png',
    href: 'https://nodejs.org',
    title: 'Node JS',
    tag: ' ',
    children: ['express', 'sails', 'webpack', 'gulp', 'primus']
  },
  ruby: {
    logo: './static/ruby-logo.png',
    href: 'https://www.ruby-lang.org',
    title: 'Ruby',
    tag: ' ',
    children: ['rails', 'sinatra']
  },
  python: {
    logo: './static/python-logo.png',
    href: 'https://www.python.org/',
    title: 'Python',
    tag: ' ',
    children: ['eve', 'flask', 'bottle']
  },
  java: {
    logo: './static/java-logo.png',
    href: 'https://www.java.com',
    title: 'Java',
    tag: ' ',
    children: ['jersey', 'dropwizard', 'jetty']
  },
  vue: {
    logo: 'https://vuejs.org/images/logo.png',
    href: 'https://vuejs.org/',
    title: 'Vue 2 Framework',
    tag: ' ',
    subtitle: 'The Progressive JavaScript Framework'
  },
  riot: {
    logo: 'http://riotjs.com/img/logo/riot240x.png',
    href: 'http://riotjs.com',
    title: 'Riot JS Framework',
    tag: ' ',
    subtitle: 'Simple and elegant component-based UI library'
  },
  angular: {
    logo: 'https://angular.io/assets/images/logos/angular/angular.png',
    href: 'https://angularjs.org/',
    title: 'Angular JS',
    tag: '*Production',
    subtitle: 'One framework. Mobile & desktop.'
  },
  jquery: {
    logo: 'http://precision-software.com/wp-content/uploads/2014/04/jQurery.gif',
    href: 'https://jquery.com/',
    title: 'Jquery',
    tag: '*Production',
    subtitle: 'Write less, do more.'
  },
  kendo: {
    logo: 'https://s3.amazonaws.com/media-p.slid.es/uploads/samidip/images/1009061/Mark_vertical.jpg',
    href: 'http://www.telerik.com/kendo-ui',
    title: 'Kendo UI',
    tag: '*Production',
    subtitle: 'The Most Complete UI Library for Data-Rich Web Applications'
  },
  bootstrap: {
    logo: 'data:image/png;base64,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',
    href: 'http://getbootstrap.com/',
    title: 'Bootstrap',
    tag: '*Production',
    subtitle: 'Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web.'
  },
  materialize: {
    logo: 'http://imgh.us/materializecss.svg',
    href: 'http://materializecss.com/',
    title: 'Materialize CSS',
    tag: ' ',
    subtitle: 'A modern responsive front-end framework based on Material Design'
  },
  bulma: {
    logo: 'http://bulma.io/images/bulma-logo.png',
    href: 'http://bulma.io/',
    title: 'Bulma',
    tag: ' ',
    subtitle: 'A modern CSS framework based on Flexbox'
  },
  sass: {
    logo: 'http://sass-lang.com/assets/img/styleguide/color-1c4aab2b.png',
    href: 'http://sass-lang.com/',
    title: 'Sass: Syntactically Awesome Style Sheets',
    tag: ' ',
    subtitle: 'Sass is the most mature, stable, and powerful professional grade CSS extension language in the world.'
  },
  express: {
    logo: 'https://camo.githubusercontent.com/fc61dcbdb7a6e49d3adecc12194b24ab20dfa25b/68747470733a2f2f692e636c6f756475702e636f6d2f7a6659366c4c376546612d3330303078333030302e706e67',
    href: 'https://expressjs.com/',
    title: 'Express JS',
    tag: ' ',
    subtitle: 'Fast, unopinionated, minimalist web framework for Node.js'
  },
  sails: {
    logo: 'http://sailsjs.com/images/logo_sails.png',
    href: 'http://sailsjs.com/',
    title: 'Sails.js Realtime MVC Framework for Node.js',
    tag: ' ',
    subtitle: 'The web framework of your dreams. Built for developers by sea anemones.'
  },
  webpack: {
    logo: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAk1BMVEX///+O1vsceMCF0/uc2/vN7P0AbbwAcb31+//v+f6W2fvi7Pbd5/IygcSE0/sAbLvb8f6s4PzI6v3V7/2b2vu14/zm9f7B6P0Jc77y+v+l3vy65fyS1/vu9PpnndDV4/HL3O6Tt9xKjcmArNd0pNO60ehals2dvt8ifMKQttupxuNPkMq/1eqnxeI9h8d5p9UAY7i+fSrsAAAKAElEQVR4nO2daVfbOhCGcQJ2QkrCVjBLIJQWKEt7//+vu3ZWz2jxaDSO5B69X3ruPSHW41ijdyRrdHCQlJSUlJSUlJSUlJSUlLRfnR6v/h1fjsM2pCOND6cbwunwe9i2dKHR2TTLNoTDLBueh22PuK4rKECYDe9PwzZJVBfZEhAQVoyHV2GbJaaryxURJqwYz0Zhmyaim7oDGggrxuuwrRPQ3Y5GR1g9vhdhG+ipo6wJqCOsGC/72x1PjwGKgbDujjdhG8rU+BaBGAkrxruwbeVo9H2KMSyE1cN8FLa9zjpX8ayEFeNxnxzA6b2OwU5YMd72xZBfHeoJ2ggrxl4Y8tF3U/vbCSvFb8ivLa2nEMZuyC8MHZBOWHfHeB3AzmL7ENbdMU5DPjpraTiZMFJDftfabAfCCA05stjehLHlx4rFFiDMsmk0hlxjsUUIo+mOlA7IJIzCkOstthRhbcjDdkeTxZYjrPPjcIZ8bLTYkoRVyAmUH9sstixhpRDd0WqxxQn3b8hbLLY44b7zY3OO2x1h1R33ZsgJFtug+zWhZpKKpD0tWHE64Kp9WzfN/4r77g05zWJr1fgBGHF4w9jxDHlrjmtu2R3sRFdkM6t8U4cLVnSLrbZKTROoCYnm27oy5A4WG7XIkOpdcJ/4bvLjI350MA/W5+wvFTfk7EcK5z+fD5Pmf3qEHNH82CMswC7z+CMvZ3/nzf81Zo+ucobc4z5DFzJ/yMvBYFAWT/D+cQO0VH7M7yvQSY6eZzVfrWLwDi7Bc7mZzIKVY47buDgaml+LYrBTfvIJbyM7rHoacq7FVuL5r7cm35Lx47H5gdEd26z6GPLRMfey0CIvTjBf3R1nDyDk3HBDztRrTY41KE+hQ5u85CrfkjF/BhdjPTHDQ9+80TkPQL5x/nMbYFQVxSu4mPOwK5L7u6WD2KH9Lsx8S8a3X+DzbrmLVMJ4Rb6z+JZ+lXa+Zcj5swB/Q39oJLOMI9oVsUNTAqiB8YXj5PwzRdhaQmKhOjQS36AOOX+BySSkaWg4GnO643EG/qrtqmhYqgJo+wPaYHR0cuglquspx78d4kBsszeKQ3Piq6U4OUvIGd7eoI8OeYTKD2NahlEdmitfLcXJGRBRbrgcRdmEGXIn2rfVFIc2oAUYDePHN3A1rZODMOuw5EOIBgDNagzBoVHV7uTQa1Ob39mHUOljp6CDoDm0bx/kAGpgzJ/BF0InZ4wMfoRKNr0bk10cGlWKk9th3Bujuy9hhpa31kYOObTRb+cAamDUOzk43kJfIECIA9jlUHVoHh0QSePkpvBxQS5LgFCZ3DriOTQyI3Zy4AYrOYgIoe1tbAeHRlXl5Ey++ka1V0KEprnmyctMmm/F+KS7mtYiSxFqJ+gZDo0q7ORq6RNIOcIM9/iDV4EBwqy8BPNVxlRVkhBH7flzh4hFCX5E83SDLGH1mIBxYuLrY0wq89+gRZbsX5hwuyC/kfRQsVL+AjzqwcgytSlOeIw/zMuXrHwnC3SNke0F+M4JD0Y/RSNqUX6plwhLWKUVcqN+OXvWjPYhCB8/gLVSFyd4Qo5tMQhH+G2Got2TRPb0BiYzKsOUByTMB2UJMp35g28GDLPD5aJjEZSwznSA7Xj84zOLkf8EHfB9mZGFJhwM0OTK+4D7qOY/wM1arG9WeEIlC+Al+8XA8MBHQKhMPEwenPMpfJeedncpCsL6CQNznYsTt5CTwycdzLlGQqgk5e8FPeQUKFpB8xALoSbSE7sjSnSVOcl4CKu2wKWHyQehO1YWDVxXNfExEVYjBzRyn61z/ChH+tQsesRFqLxg8Wp9VAuYI+mT6cgI62l5OPXw12hWy+KL8snoCJUpa8NsKl6E+TJl0RESKkZOl1flsMdaVuWiJFRmkZ7QD6TkSBaDECehxmY2Ro4yhyto9pEzVkLVqfzZfFybI/WRsEaBedUSxTmhjJmwMiw4r0JZyJyQhURNqOZVsAO2vdjXB0Ilr2qI+F5K9ISmxU7ysmr8hEpeVcvhvY0+ECoW22mhox+ElZFrzGS7LVb1hbAaOdZGbuS4wtEbwsHgZPVnE8eJuB4SOv5ZIkyEiTARJsJEmAgTYSJMhIkwESbCRJgIE2EiTIT/PqHjtCCTcBaOcPTg9poli7AsNhPJQd7Vd9uWxyAsZ9tl5FC7EVxes3QnbL62v889M3Dnc9uLBnxCtG/GUklCeO+aUnwKvywjQ4g3PNvqVkgSaqv6zM3vrnEJ8ab1lUzb1wQJTVV9rC81uRPid962MmxBFCO0VQ5btG+0oBKW6K1vWGVB1x2l9nLDTcBXx61F2XiEaNvFwTXamasp7CKzHx/yLIty4CKbr/awSiLERVyWW5tR/SKlO0oQGq7hVHqHQFiijYeb8IlqJDdPVZQhHJqfE32BSx7h1qGt1axsovQRyboYuqo+5p/X7ORaCBsObSlcnQbdy2ZVXM/6NLiwieKecJmmT4OTsxMqpTBUl4bGql11BS9CVJxGX70J+4B3bSk6G2GBypmQrrMtUeNBiMpqWXzTZXs5QTMhdmjmSl+44tG9X52o9iJRzWvD8i5zdXe3iRA7NHsZQ12pKDYhKqvVVs10iMt6ziiE2KERKu4p7WIRXqLTFki1E1EoQE5OR6g4NErVRBTcx4esmntn9qo+pmvbirdpCBWHRqx8ibrEhW+RdpeK+rg+8+surCqEWodGvY7k+TqOFfWNZa4RYQlrs7jWnZarrk8rXgo0VZycSmhzaFRGker6zIrp2Mktd5M0CNscGvUy3mVoR7fsMtu4IO1J0SCcIYfGruadTX0Pu+Cfs6EpKvy2JvyP5NBoFxE4JMnjZBlcdnC9f2YiVFVftYpcsQ8nyQjHwvGPrpE8qmSsJkz0ZtzZYgH/6BolmHnK405byoq3O13Lt4ofGcQ+9sb8NLEPtpLrgHIN0py04RPBujpJj3/gmhrVPUahTo9fY5/okUEnJ/U9XYh9KkvWCH4+z4L3cRbt8jAgvqcD7usoS/7pSH4nPGa4dHiH4o7TnmdYWr2DtHihsD/nkNbinDTXp7Nka7kbci5hsOO5nbsjk1B0zslRjoacRTgVPQbQXU7uknO2escnq1LkYMidCbs5jtNZdEPuStjZkarOonZHN0JcGz2saLNJLoSmA2jDidId6YSoKHocIhhyOuHeLLab7EvEdEKvUyk7Vkt+TCLcv8V2k+lYLyphGIvtJFt3JBAGsthuMhvyNsKQFttNpvzYThh7B4TSG3IbYQwW2026NU8zYbAc10caQ24k7E8HhFIMuYFQ9qj7/QotWGkJ47PYbgKGXEMYSY7ro+YqqEoYT47ro/G2O2JC+XXcUNoYckjY9w4Ida4Q9sBiu2nZHRuEXa7jhtL4drpdP0QvMv8zOj1c/Tu+7JPFTkpKSkpKSkpKSkpKSvo39D9ru++JjtYQUQAAAABJRU5ErkJggg==',
    href: 'https://webpack.github.io/',
    title: 'Webpack',
    tag: ' ',
    subtitle: 'webpack module bundler'
  },
  gulp: {
    logo: 'https://codepen.io/shenoa/pen/jmzDf/image/small.png',
    href: 'http://gulpjs.com/',
    title: 'Gulp JS',
    tag: '*Production',
    subtitle: 'The streaming build system'
  },
  primus: {
    logo: 'https://assets-cdn.github.com/images/icons/emoji/unicode/26a1.png',
    href: 'http://primus.io/',
    title: 'Primus',
    tag: ' ',
    subtitle: 'Primus, the creator god of the transformers & an abstraction layer for real-time to prevent module lock-in.'
  },
  rails: {
    logo: 'https://upload.wikimedia.org/wikipedia/commons/1/16/Ruby_on_Rails-logo.png',
    href: 'http://rubyonrails.org/',
    title: 'Ruby on Rails',
    tag: '*Production',
    subtitle: 'A web-application framework that includes everything needed to create database-backed web applications according to the Model-View-Controller (MVC) pattern.'
  },
  sinatra: {
    logo: 'https://cdn.tutsplus.com/net/uploads/legacy/943_sinatra/images/singing-with-sinatra.jpg',
    href: 'http://www.sinatrarb.com/',
    title: 'Sinatra',
    tag: ' ',
    subtitle: 'Sinatra is a DSL for quickly creating web applications in Ruby with minimal effort'
  },
  eve: {
    logo: 'http://python-eve.org/_static/eve_leaf.png',
    href: 'http://python-eve.org/',
    title: 'Python REST API Framework: Eve',
    tag: ' ',
    subtitle: 'Eve is an open source Python REST API framework designed for human beings. It allows to effortlessly build and deploy highly customizable, fully featured RESTful Web Services.'
  },
  flask: {
    logo: 'http://flask.pocoo.org./static/logo/flask.png',
    href: 'http://flask.pocoo.org/',
    title: 'Flask (A Python Microframework)',
    tag: ' ',
    subtitle: 'Flask is a microframework for Python based on Werkzeug, Jinja 2 and good intentions. And before you ask: It"s BSD licensed!'
  },
  bottle: {
    logo: 'https://bottlepy.org/docs/dev/_static/logo_nav.png',
    href: 'https://bottlepy.org',
    title: 'Bottle: Python Web Framework',
    tag: ' ',
    subtitle: 'Bottle is a fast, simple and lightweight WSGI micro web-framework for Python. It is distributed as a single file module and has no dependencies other than the Python Standard Library.'
  },
  jersey: {
    logo: 'https://jersey.github.io/images/jersey_logo.png',
    href: 'https://jersey.github.io/',
    title: 'Jersey: RESTful Web Services in Java.',
    tag: ' ',
    subtitle: 'Make it easy to build RESTful Web services utilising Java and the Java Virtual Machine.'
  },
  dropwizard: {
    logo: 'https://backend4android.github.io/img/dropwizard.png',
    href: 'http://www.dropwizard.io/',
    title: 'Dropwizard - Production-ready, out of the box.',
    tag: ' ',
    subtitle: 'Dropwizard straddles the line between being a library and a framework. Its goal is to provide performant, reliable implementations of everything a production-ready web application needs.'
  },
  jetty: {
    logo: 'http://www.eclipse.org/jetty/images/jetty-logo-80x22.png',
    href: 'http://www.eclipse.org/jetty/',
    title: 'Jetty - Servlet Engine and Http Server',
    tag: ' ',
    subtitle: 'Jetty provides a Web server and javax.servlet container'
  }
}

let templates = {
  mediaparent: {
    children: [
      {
        left: {
          klass: 'image is-128x128',
          image: {
            src: 'vuex:$0.logo'
          }
        },
        subtitle: {
          text: 'vuex:$0.title',
          klass: 'link title',
          href: 'vuex:$0.href'
        },
        children: {
          inject: {
            as: 'array',
            template: 'mediachild',
            args: 'vuex:$0.children'
          }
        }
      }
    ]
  },
  mediachild: {
    left: {
      klass: 'image is-64x64',
      image: {
        src: 'vuex:$0.logo'
      }
    },
    subtitle: {
      text: 'vuex:$0.title',
      href: 'vuex:$0.href'
    },
    tag: 'vuex:$0.tag',
    content: 'vuex:$0.subtitle'
  }
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
      },
      {
        component: 'd-tabs',
        properties: {
          tabs: [
            { id: 'components' },
            { id: 'dmedia', label: 'DMedia' },
            { id: 'dhero', label: 'DHero' },
            { id: 'dtile', label: 'DTile' },
            { id: 'dheading', label: 'DHeading' },
            { id: 'djson', label: 'JSON' }
          ]
        },
        slots: {
          components: {
            component: 'd-heading',
            properties: {
              heading: 'Components',
              content: 'There are a bunch of components that use Bulma CSS.'
            }
          },
          dmedia: {
            component: 'd-media',
            properties: {
              children: {
                inject: {
                  as: 'array',
                  template: 'mediaparent',
                  args: ['javascript', 'css', 'node', 'ruby', 'python', 'java']
                }
              }
            }
          },
          dhero: {
            component: 'd-group',
            klass: 'column',
            properties: {
              children: [
                {
                  component: 'd-hero',
                  properties: {
                    title: 'Hero Title',
                    subtitle: 'The subtitle for the hero'
                  }
                },
                {
                  component: 'd-hero',
                  properties: {
                    klass: 'hero is-primary',
                    title: 'Hero With Color',
                    subtitle: 'The subtitle for the hero'
                  }
                }
              ]
            }
          },
          dtile: {
            component: 'd-tile',
            properties: {
              title: 'A tile',
              subtitle: 'Can also have children tiles',
              content: '<strong>can also have content</strong>',
              children: [
                {
                  title: 'A child tile',
                  klass: 'tile is-child notification is-primary'
                },
                {
                  title: 'A colored tile',
                  content: 'Just use the <strong>klass</strong> prop to adjust the class of the tile.'
                },
                {
                  title: 'A boxed child',
                  klass: 'tile is-child box',
                  content: 'Or use any Bulma class, like <span class="label">.box</span>.'
                }
              ]
            }
          },
          dheading: {
            component: 'd-heading',
            properties: {
              heading: 'The Heading',
              content: 'The content for the heading.'
            }
          },
          djson: {
            component: 'd-json',
            properties: {
              json: '$$database'
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
  id: 'demo',
  secure: secure,
  meta: meta,
  navbar: navbar,
  templates: templates,
  components: components,
  routes: routes,
  database: database,
  layout: layout
}
