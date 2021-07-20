export const EMIT_LIST = (state, payload) => {
  state.check_list.push(payload)
}

export const EMIT_MARK_AS_COMPLETE = (state, payload) => {
  state.check_list = payload
}
