import { SET_IMAGES } from './mutation-types'
import { IState } from './state'
import { Image } from '@/models/Image'

export default {
  [SET_IMAGES](state: IState, { images }: { images: Image[] }) {
    state.images = images
  }
}
