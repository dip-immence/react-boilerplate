const initialData = {
  init: [],
}

export const initReducers = (state = initialData, action) => {
  switch (action.type) {
    case 'INIT_DATA':
      const { data } = action.payload
      return {
        ...state,
        init: [...state.init, data],
      }
    default:
      return state
  }
}
export default initReducers
