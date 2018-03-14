import actions from '@/store/actions'
jest.mock('@/store/actions')
describe('actions', () => {
  it('should commit the SET_IMAGES mutation with the images retrieved', () => {
    const mockCommit = jest.fn()
    actions.FETCH_IMAGES({ commit: mockCommit })
    expect(mockCommit).toHaveBeenCalledWith('SET_IMAGES', { images: ['foo', 'bar', 'baz'] })
  })
})
