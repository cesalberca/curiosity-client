import Vuex from 'vuex'
import state from './state'
import actions from './actions'
import mutations from './mutations'

export function __createMocks(custom = { getters: {}, mutations: {}, actions: {}, state: {} }) {
  const mockMutations = Object.assign({}, mutations, custom.mutations)
  const mockActions = Object.assign({}, actions, custom.actions)
  const mockState = Object.assign({}, state, custom.state)

  return {
    mutations: mockMutations,
    actions: mockActions,
    state: mockState,
    store: new Vuex.Store({
      mutations: mockMutations,
      actions: mockActions,
      state: mockState
    })
  }
}

export const store = __createMocks().store
