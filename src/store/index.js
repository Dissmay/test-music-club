import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'
import playlists from './playlists'
import user from './user'
import artists from './artists'
import shared from './shared'


Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth,
    playlists,
    user,
    artists,
    shared
  }
})
