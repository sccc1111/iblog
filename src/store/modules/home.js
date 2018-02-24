const home = {
    state: {
        token: '',
        roles: [],
        name: ''
    },
    mutations: {
      SET_TOKEN: (state, token) => {
        state.token = token
      },
      SET_NAME: (state, name) => {
        state.name = name
      },
      SET_ROLES: (state, roles) => {
        state.roles = roles
      }
    },
    actions: {
        GetUserInfo({ commit, state }) {
          
        }
    }
}