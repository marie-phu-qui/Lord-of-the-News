function news(state = "", action) {
  switch (action.type) {
    case "RECEIVE_NEWS":
      return action.news
    default:
      return state
  }
}

export default news