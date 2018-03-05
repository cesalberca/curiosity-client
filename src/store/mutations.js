import { SET_IMAGES } from './mutation-types'

export default {
  [SET_IMAGES](state, { images }) {
    state.images = images
  }
}
