import { SET_LISTS, ADD_LIST, DELETE_LIST } from './actions'

const initialState = {
  lists: [],
}

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LISTS:
      return {
        ...state,
        lists: action.payload,
      }
    case ADD_LIST:
      return {
        ...state,
        lists: [...state.lists, action.payload],
      }
    case DELETE_LIST:
      return {
        ...state,
        lists: state.lists.filter((_, index) => index !== action.payload),
      }
    default:
      return state
  }
}
