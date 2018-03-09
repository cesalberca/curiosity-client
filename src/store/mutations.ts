import { SET_IMAGES } from './mutation-types'
import { IState } from './state'

export default {
  [SET_IMAGES](state: IState, { images }: { images: Object[] }) {
    state.images = images
  }
}
