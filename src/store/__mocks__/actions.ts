import { SET_IMAGES } from './../mutation-types'
import { Commit } from 'vuex'

export default {
  FETCH_IMAGES({ commit }: { commit: Commit }) {
    commit(SET_IMAGES, { images: ['foo', 'bar', 'baz'] })
  }
}
