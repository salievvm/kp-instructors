const initState = {
  categoryId: parseInt(window.category_id) || 67,
  shopId: parseInt(window.shop_id),
  rootDirectory: window.ROOT_DIRECTORY,
}

function reducer(state = initState, action) {
  return state;
}

export default reducer;