// the state needs to store an array of courses so it is empty

export default function courseReducer(state = [], action) {
  switch (action.type) {
    case "CREATE_COURSE":
      return [...state, { ...action.course }]
    default:
      return state
  }
}