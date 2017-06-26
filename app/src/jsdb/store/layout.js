let state = {
  'element': '#jsdb',
  'template': '<DApp/>',
  'colors': {},
  'styles': {},
  'layout': {
    'component': 'DApp',
    'klass': 'box',
    'properties': {
      'name': 'vuex:app.name'
    },
    'children': [
      {
        'component': 'd-navbar',
        'properties': {
          'left': {
            'image': {
              'src': 'vuex:profile.image'
            },
            'title': 'vuex:navbar.title'
          },
          'right': {
            'text': 'RIGHT',
            'klass': 'button'
          }
        },
        'slots': {
          'left': {
            'component': 'd-navbar-item',
            'properties': {
              'text': 'Home'
            }
          }
        }
      },
      {
        'component': 'd-section',
        'klass': 'column is-12',
        'properties': {},
        'children': []
      }
    ]
  }
}

let getters = {
  'layout': state => state.layout
}

export default {
  state,
  getters
}
