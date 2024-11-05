import { getListsFromDB } from '../utils/indexedDB'

// Action types
export const SET_LISTS = 'SET_LISTS'
export const ADD_LIST = 'ADD_LIST'
export const DELETE_LIST = 'DELETE_LIST'

// Action creators
export const setLists = (lists) => ({
  type: SET_LISTS,
  payload: lists,
})

export const addList = (list) => ({
  type: ADD_LIST,
  payload: list,
})

export const deleteList = (index) => ({
  type: DELETE_LIST,
  payload: index,
})

// Load lists from IndexedDB
export const loadLists = () => async (dispatch) => {
  try {
    const lists = await getListsFromDB()
    dispatch(setLists(lists))
  } catch (error) {
    console.error('Failed to load lists from IndexedDB:', error)
  }
}
