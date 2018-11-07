export default function locationReducer(state = "Srattle, WA", action) {
  // const newState = Object.assign({}, state, { location: action.payload });
  // return newState;

  if (action.type === "SET_LOCATION") {
    return action.payload;
  } else {
    return state;
  }
}
