import { getImages } from '@/services/image-service'
import { SET_IMAGES } from './mutation-types'
export default {
  async FETCH_IMAGES({ commit }) {
    const images = await getImages()
    commit(SET_IMAGES, { images })
  }
}
