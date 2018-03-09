import mutations from '@/store/mutations'
import images from './fixtures/images.json'

describe('mutations', () => {
  it('should replace the current image state', () => {
    const state = {
      images: []
    }

    const payload = {
      images
    }

    mutations.SET_IMAGES(state, payload)

    expect(state.images).toEqual(images)
  })
})
