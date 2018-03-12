import { SET_IMAGES } from './../mutation-types'
export default {
  FETCH_IMAGES({ commit }) {
    commit(SET_IMAGES, { images: ['foo', 'bar', 'baz'] })
  }
}
