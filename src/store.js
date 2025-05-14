//Simple State container
function createStore(initialState = {}) {
  let state = initialState
  const listeners = new Set()

  //Returns the current state
  const getState = () => ({ ...state })

  //Updates the state and notifies all listeners
  const setState = (newState) => {
    state = typeof newState === 'function' ? newState(state) : { ...state, ...newState }
    listeners.forEach((listener) => listener(state))
  }

  //lets you watch for changes to the state
  const subscribe = (listener) => {
    listeners.add(listener)
    return () => listeners.delete(listener)
  }

  return { getState, setState, subscribe }
}

//Intital app state
const store = createStore({
  films: [],
  isLoading: false,
  error: null,
})

export default store
