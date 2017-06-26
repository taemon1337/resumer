let state = {
  'element': '#jsdb',
  'template': '<DApp/>',
  'colors': {},
  'styles': {},
  'layout': {
    'component': 'DApp',
    'klass': 'container-fluid',
    'properties': {
      'name': 'vuex:app.name'
    },
    'children': [
      {
        'component': 'd-navbar',
        'properties': {
          'left': [
            {
              'image': {
                'klass': 'image is-64x64',
                'src': 'vuex:navbar.image'
              }
            },
            {
              'text': 'vuex:navbar.title'
            }
          ],
          'center': 'vuex:navbar.icons',
          'right': [
            {
              'text': 'Home'
            },
            {
              'text': 'Documentation'
            },
            {
              'text': 'Blog'
            },
            {
              'content': '<div class="field is-grouped"><p class="control"><a class="button" ><span class="icon has-text-info"><i class="fa fa-twitter"></i></span><span>Tweet</span></a></p><p class="control"><a class="button is-primary"><span class="icon"><i class="fa fa-download"></i></span><span>Download</span></a></p></div>'
            },
            {
              'vif': 'vuex:decrypted',
              'text': 'Logout',
              'icon': 'fa fa-lock'
            }
          ]
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
