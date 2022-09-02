import { legacy_createStore as createStore } from 'redux'
import rootReducer from './reducers/index'

// function saveToLocalStorage(state) {
//   try {
//     const serializedState = JSON.stringify(state)
//     localStorage.setItem('persistentState', serializedState)
//   } catch (e) {
//     console.warn(e)
//   }
// }

// function loadFromLocalStorage() {
//   try {
//     const serializedState = localStorage.getItem('persistentState')
//     if (serializedState === null) return undefined
//     return JSON.parse(serializedState)
//   } catch (e) {
//     console.warn(e)
//     return undefined
//   }
// }

const store = createStore(
  rootReducer,
  // loadFromLocalStorage(),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
// store.subscribe(() => saveToLocalStorage(store.getState()))

export default store
