export const add = ({ commit }, payload) => {
  commit('EMIT_LIST', payload)
}

export const markAsCompleted = ({ state, commit }, payload) => {
  const currentList = [...state.check_list]
  const newList = currentList.filter((row, index) => !payload.includes(index))
  commit('EMIT_MARK_AS_COMPLETE', newList)
}
