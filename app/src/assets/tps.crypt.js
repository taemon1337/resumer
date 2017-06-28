let secure = {
  password: 'go'
}

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
    first: 'Timothy',
    last: 'Stello',
    email: 'timstello@gmail.com',
    phone: '443.333.9115',
    address: '2361 Rutland Rd.<br>Davidsonville, MD  21035'
  },
  github: {
    href: 'https://github.com'
  },
  twitter: {
    href: 'https://twitter.com'
  },
  tabs: {
    heading: 'Tim has professional experience with each of these components, though not all in a production environment.',
    tabs: [
      { id: 'skills' },
      { id: 'jobs', label: 'Job History' },
      { id: 'education' },
      { id: 'personal' },
      { id: 'references' }
    ],
    skills: {
      tabs: [
        { id: 'webdev', label: 'Web Development' },
        { id: 'stacks', label: 'Development Stacks' },
        { id: 'infosec', label: 'Computer Security' },
        { id: 'devops', label: 'Docker / DevOps' },
        { id: 'tools', label: 'Development Tools' }
      ]
    }
  },
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
    logo: 'data:image/png;base64,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',
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
  },
  jobs: {
    heading: '<p class="title">Job History</p>',
    tigta: {
      title: 'U.S. Treasury Inspector General for Tax Administration (TIGTA)',
      href: 'https://www.treasury.gov/tigta/',
      logo: 'http://tioga.freedomist.com/wp-content/uploads/2016/06/TIGTA-logo.gif',
      dates: 'August 2017 - Present',
      tag: ' ',
      details: [
        { content: 'Worked as a Computer Specialist in the Digital Forensic Services (DFS) division.' },
        { content: 'Deployed and managed Docker Swarm cluster for local support services.' },
        { content: 'Performed digital forensic examinations on various digital media/files.' },
        { content: 'Developed tools and applications to support DFS activities using Docker, Python, Java, and Vue JS.' },
        { content: 'Designed data transfer utility and digital processing engine for automating workflows.' }
      ]
    },
    omnyon: {
      title: 'Omnyon',
      href: 'http://www.omnyon.com/',
      logo: 'http://www.omnyon.com/images/omnyonlogoofficial.png',
      dates: 'July 2015 - August 2017',
      tag: '*Contract work',
      details: [
        { content: 'Worked as a Ruby on Rails and Javascript developer on small project team.' },
        { content: 'Headed the development of a new Javascript frontend UI using Angular 1 and Bootstrap.' },
        { content: 'Application stack included Ruby on Rails application, Redis server, CRON jobs, Postgres database, and Angular 1 UI.' },
        { content: 'Migrated development stack from virtual machines to Docker containers deployed locally using Docker Compose.' },
        { content: 'Migrated production stack from virtual machines to Docker containers, including deployment to RedHat Openshift environment.' }
      ]
    },
    sabre: {
      title: 'Sabre Engineering',
      href: 'http://sabre-eng.com/',
      logo: 'http://sabre-eng.com/wp-content/uploads/2016/12/logo-draft-04.png',
      dates: 'June 2014 - July 2015',
      tag: '*Contract work',
      details: [
        { content: 'Worked as a developer in an Innovation Center rapid prototyping applications.' },
        { content: 'Developed custom web application for customer to modernize a workflow ticketing system.' },
        { content: 'Performed deployment operations as well as database migration from MYSQL to MongoDB.' },
        { content: 'Integrated requirements from stakeholders into web application utilizing Ruby on Rails backend with JavaScript frontend application.' },
        { content: 'Application includes CRUD storage into a Mongo DB database, custom visualizations for record relationships using Kendo UI charts as well as record statistics.' }
      ]
    },
    exelis: {
      title: 'Exelis Inc (formerly ITT Corp, acquired by Harris Corp)',
      href: 'https://en.wikipedia.org/wiki/Exelis_Inc.',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f3/Exelis_Inc._logo.png',
      dates: 'March 2012 - June 2014',
      tag: '*Contract work',
      details: [
        { content: 'Developed cloud analytics in Java, PIG, and JRuby on Hadoop/HDFS.' },
        { content: 'Developed tools in Java, Ruby, JavaScript, and Python to support analysis.' },
        { content: 'Developed Ruby Gems to support big data correlation and analysis.' },
        { content: 'Characterized network traffic using data analysis tools.' },
        { content: 'Identified malicious and anomalous network traffic using corporate and custom built tools.' }
      ]
    },
    nsa: {
      title: 'National Security Agency (NSA)',
      href: 'https://www.nsa.gov/',
      logo: 'https://www.festisite.com/static/partylogo/img/logos/nsa.png',
      dates: 'June 2011 - March 2012',
      tag: ' ',
      details: [
        { content: 'Worked as a Security Controls Assessor (SCA) in Information Assurance (IA).' },
        { content: 'Assigned as the government lead of the penetration testing team.' },
        { content: 'Designed the Penetration Testing Track curriculum for new hire program.' },
        { content: 'Performed security assessments under NIST DCID 6/3 controls.' }
      ]
    },
    edge: {
      title: 'Edge Professional Services – Kestrel EI / Boeing',
      href: 'http://www.boeing.com/',
      logo: 'http://www.boeing.com/resources/boeingdotcom/company/key_orgs/images/boeing_logo_300x119.jpg',
      dates: 'February 2011 - June 2011',
      tag: '*Contract work',
      details: [
        { content: 'Data Integrator for Kestrel EI.' },
        { content: 'Integrated data feeds into TAC database system.' },
        { content: 'Historic reprocessing of feed data.' },
        { content: 'Operated in Red Hat Linux environment.' },
        { content: 'Developed scripts in Ruby for reprocessing purposes.' }
      ]
    },
    navair: {
      title: 'Special Communications Requirements (SCR) - NAVAIR / NAWCAD',
      href: 'http://www.navair.navy.mil/nawcad/index.cfm?fuseaction=home.content_detail&key=23DC7E89-EC55-4FA1-BE60-348D4131B20F',
      logo: 'http://www.navair.navy.mil/nawcad/img/nawcad/nawcad_seal.png',
      dates: 'June 2007 - February 2011',
      tag: ' ',
      details: [
        { content: 'Project Engineer, Network Engineer, and Project Manager.' },
        { content: 'Worked as network engineer and then project manager on the USSOCOM SCAMPI project for SCR.  This project includes designing and implementing secure network installations for USSOCOM requirements.' },
        { content: 'Engineering duties include designing encrypted network designs, producing technical solutions, product specification, implementation and configuration.' },
        { content: 'Project managerial responsibilities include monitoring and controlling project cost, schedule, and performance throughout the project life cycle.' }
      ]
    }
  },
  education: {
    heading: 'Education and Certifications',
    messiah: {
      logo: 'http://www.messiah.edu/site/images/logo.png',
      href: 'http://www.messiah.edu',
      title: 'Bachelor of Science in Computer Engineering',
      content: 'Messiah College, Grantham, PA. Graduated May 2007.'
    },
    ceh: {
      logo: 'https://cert.eccouncil.org/images/CEH-logo.png',
      href: 'https://www.eccouncil.org/programs/certified-ethical-hacker-ceh/',
      title: 'Certified Ethical Hacker',
      content: 'CEHv6 [2010]'
    },
    ccna: {
      logo: 'http://randycannon.com/wp-content/uploads/2016/03/cisco-ccna-logo.jpg',
      href: 'http://www.cisco.com/c/en/us/training-events/training-certifications/certifications/associate/ccna-routing-switching.html',
      title: 'Cisco Certified Network Associate',
      content: 'CCNA [2010]'
    },
    pmp: {
      logo: 'https://seeklogo.com/images/P/pmp-logo-98FBCB2BA7-seeklogo.com.gif',
      href: 'https://www.pmi.org/certifications/types/project-management-pmp',
      title: 'Project Management Professional',
      content: 'PMP [2010]'
    },
    secplus: {
      logo: 'data:image/png;base64,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',
      href: 'https://certification.comptia.org/certifications/security',
      title: 'Security + Certification',
      content: 'Security+ [2010]'
    },
    malware: {
      logo: 'https://media.licdn.com/mpr/mpr/shrink_200_200/AAEAAQAAAAAAAAjWAAAAJDRkNzU0MTExLTJjYjMtNDEzZC1iYWJhLTgxNTE0YTFiOGVkOA.png',
      href: 'http://www.anrc-services.com',
      title: 'Malware Analysis by ANRC (currently Focal Point Data Risk)',
      content: '[2011]'
    },
    foundstone: {
      logo: 'http://conference.hitb.org/hitbsecconf2006kl/images/foundstone.jpg',
      href: 'https://en.wikipedia.org/wiki/Foundstone',
      title: 'Foundstone Hacking: Windows and Web Application',
      content: '[2011]'
    }
  },
  personal: {
    family: {
      title: 'My Family',
      image: {
        src: 'https://lh3.googleusercontent.com/-ZFYuVfqKoIA/AAAAAAAAAAI/AAAAAAAAAAA/AAyYBF6RdKF5SHu-O-Z7UDEQlms4e6rGeQ/s128-c-mo/photo.jpg',
        href: '#'
      }
    },
    sports: {
      title: 'My Sports',
      image: {
        src: 'http://media.gettyimages.com/photos/forward-josh-sanders-left-of-messiah-college-celebrates-his-second-picture-id640563798',
        href: '#'
      }
    },
    farm: {
      title: 'My Farm',
      image: {
        src: 'http://www.stellarriding.com/uploads/1/2/0/0/12000931/14591579-1379994968692487-475802265699088439-n_orig.jpg',
        href: 'https://stellarriding.com'
      }
    }
  },
  references: [
    {
      author: 'John Smith',
      relation: 'personal friend',
      content: 'Do <strong>NOT</strong> hire this guy, he will steal your money and your wife!!'
    },
    {
      author: 'Smokey Johnson',
      relation: 'aged culinary acquaintence',
      content: 'When I met Mr. Stello he was murdering friends of mine, I was soon next.  As he sat there grinning like a bafoon, he laughed as my friends emitted long screams, their inner liquids oozing out slowly.  Once they were completely dead, he then finished them off completely in the most barbaric way possible.'
    },
    {
      author: 'Little Timmy Durgens',
      relation: 'childhood friend',
      content: 'I one time told Tim that he was being mean to a neighborhood cat, so he stopped being mean to the cat.  The next week my family went on vacation for 2 weeks, Tim threw the cat through my bedroom window where it spent the entire 2 weeks bleeding to death.  I realized later that Tim had given the cat a laxative as well.  We had to move.  Please run as far away from this person as humanly possible.'
    }
  ]
}

let layout = {
  // colors: {},
  // styles: {},
  templates: {
    job: {
      left: {
        klass: 'image is-128x128',
        image: {
          src: 'vuex:jobs.$0.logo'
        }
      },
      subtitle: {
        klass: 'link title',
        text: 'vuex:jobs.$0.title',
        href: 'vuex:jobs.$0.href'
      },
      tag: 'vuex:jobs.$0.tag',
      content: '<p class="is-italic">vuex:jobs.$0.dates</p>',
      children: 'vuex:jobs.$0.details'
    },
    skillparent: {
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
              template: 'skillchild',
              args: 'vuex:$0.children'
            }
          }
        }
      ]
    },
    skillchild: {
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
    },
    education: {
      left: {
        klass: 'image is-128x128',
        image: {
          src: 'vuex:education.$0.logo'
        }
      },
      subtitle: {
        klass: 'link title',
        text: 'vuex:education.$0.title',
        href: 'vuex:education.$0.href'
      },
      content: '<p class="subtitle">vuex:education.$0.content</p>'
    },
    reftile: {
      klass: 'column box',
      random: false,
      title: '$0.author',
      subtitle: '$0.relation',
      content: '$0.content'
    },
    pcard: {
      component: 'd-card',
      properties: {
        klass: 'card box',
        title: 'vuex:personal.$0.title',
        image: 'vuex:personal.$0.image'
      }
    }
  },
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
              properties: { image: { src: 'vuex:user.image' }, klass: 'image is-round is-64x64' }
            },
            {
              component: 'd-heading',
              properties: { heading: '', klass: 'title', content: 'vuex:user.first vuex:user.last' }
            },
            {
              component: 'd-heading',
              properties: { heading: '', klass: '', content: '' }
            },
            {
              component: 'd-heading',
              properties: { heading: 'Email Address', klass: 'size-14 is-bold', content: '<a class="link" href="mailto:vuex:user.email">vuex:user.email</a>' }
            },
            {
              component: 'd-heading',
              properties: { heading: 'Phone Number', klass: 'size-14 is-bold', content: 'vuex:user.phone' }
            },
            {
              component: 'd-heading',
              properties: { heading: 'Address', klass: 'size-12', content: 'vuex:user.address' }
            }
          ]
        }
      },
      {
        component: 'd-tabs',
        properties: {
          tabs: 'vuex:tabs.tabs'
        },
        slots: {
          skills: {
            component: 'd-tabs',
            properties: {
              tabs: 'vuex:tabs.skills.tabs'
            },
            slots: {
              webdev: {
                component: 'd-media',
                properties: {
                  content: 'vuex:tabs.heading',
                  children: {
                    inject: {
                      as: 'array',
                      template: 'skillparent',
                      args: ['javascript', 'css', 'node', 'ruby', 'python', 'java']
                    }
                  }
                }
              },
              stacks: {
                component: '',
                properties: {}
              },
              infosec: {
                component: '',
                properties: {}
              },
              devops: {
                component: '',
                properties: {}
              },
              tools: {
                component: '',
                properties: {}
              }
            }
          },
          jobs: {
            component: 'd-media',
            properties: {
              content: 'vuex:jobs.heading',
              children: {
                inject: {
                  as: 'array',
                  template: 'job',
                  args: ['tigta', 'omnyon', 'sabre', 'exelis', 'nsa', 'edge', 'navair']
                }
              }
            }
          },
          education: {
            component: 'd-media',
            properties: {
              content: 'vuex:education.heading',
              children: {
                inject: {
                  as: 'array',
                  template: 'education',
                  args: ['messiah', 'ceh', 'ccna', 'pmp', 'secplus', 'malware', 'foundstone']
                }
              }
            }
          },
          personal: {
            component: 'd-group',
            properties: {
              klass: 'container',
              children: [
                {
                  component: 'd-group',
                  properties: {
                    klass: 'columns is-multiline',
                    childClass: 'column',
                    children: {
                      inject: {
                        as: 'array',
                        template: 'pcard',
                        args: ['family', 'sports', 'farm']
                      }
                    }
                  }
                }
              ]
            }
          },
          references: {
            component: 'd-tile',
            properties: {
              klass: 'container',
              children: [
                {
                  klass: 'columns is-multiline',
                  children: {
                    inject: {
                      as: 'array',
                      template: 'reftile',
                      args: 'vuex:references'
                    }
                  }
                }
              ]
            }
          }
        }
      },
      {
        component: 'd-section',
        properties: {
          klass: 'footer is-paddingless'
        },
        slots: {
          section: {
            component: 'd-heading',
            properties: {
              content: '<p style="margin:15px;padding:15px;">This is some footer content.</p>'
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
