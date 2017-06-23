export default {
  'element': '#jsdb',
  'template': '<DApp/>',
  'colors': {},
  'styles': {},
  'layout': {
    'component': 'DApp',
    'properties': {
      'name': 'vuex:app.name'
    },
    'children': [
      {
        'component': 'd-navbar',
        'properties': {
          'image': 'vuex:profile.image',
          'title': 'vuex:navbar.title'
        },
        'slots': {
          'items': {
            'component': 'd-link',
            'properties': {
              'items': 'vuex:navbar.items'
            }
          }
        }
      },
      {
        'component': 'd-section',
        'klass': 'column is-12',
        'properties': {},
        'children': []
      },
      {
        'component': 'd-footer',
        'properties': {},
        'children': []
      }
    ]
  }
}
