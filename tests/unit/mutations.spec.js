import mutations from '../../src/store/mutations'

describe('mutations', () => {
  it('should replace the current image state', () => {
    const state = {
      images: []
    }

    const payload = {
      images: [1, 2, 3]
    }

    mutations.SET_IMAGES(state, payload)

    expect(state.images).toEqual([1, 2, 3])
  })
})
