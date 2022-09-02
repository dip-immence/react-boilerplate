export const initData = (data) => {
  return {
    type: 'INIT_DATA',
    payload: {
      data,
    },
  }
}
