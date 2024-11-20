import { SET_LISTS, ADD_LIST, REORDER_LISTS, DELETE_LIST, UPDATE_LIST } from './actions'

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
    case REORDER_LISTS:
      return {
        ...state,
        lists: action.payload,
      }
      case DELETE_LIST:
        return {
          ...state,
          lists: state.lists.filter((list) => list.name !== action.payload),
        }
    case UPDATE_LIST:
      return {
        ...state,
        lists: state.lists.map(list =>
          list.name === action.payload.name ? action.payload : list
        ),
      }
    default:
      return state
  }
}