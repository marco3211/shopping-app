import { getListsFromDB } from '../utils/indexedDB'

// Action types
export const SET_LISTS = 'SET_LISTS'
export const ADD_LIST = 'ADD_LIST'
export const DELETE_LIST = 'DELETE_LIST'
export const REORDER_LISTS = 'REORDER_LISTS'
export const UPDATE_LIST = 'UPDATE_LIST'

// Action creators
export const setLists = (lists) => ({
  type: SET_LISTS,
  payload: lists,
})

export const addList = (list) => ({
  type: ADD_LIST,
  payload: list,
})

export const deleteList = (listName) => ({
  type: DELETE_LIST,
  payload: listName,
})

export const reorderLists = (lists) => ({
  type: REORDER_LISTS,
  payload: lists,
})

export const updateList = (list) => ({
  type: UPDATE_LIST,
  payload: list,
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
