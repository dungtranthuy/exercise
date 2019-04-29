import { createAction } from 'redux-actions'
import typeToReducer from 'type-to-reducer'
import apiFetchAllData from '../services/API.service'

const actionType = 'GET_ALL_DATA'
const action = createAction(actionType, apiFetchAllData)

const initialState = {
  categories: [],
  stores: [],
  loading: false
}

const getAllData = (state, action) => {
  const { payload } = action

  return {
    ...state,
    categories: payload.categories,
    stores: payload.stores
  }
}

const reducer = typeToReducer(
  {
    [actionType]: {
      LOADING: state => ({
        ...state,
        loading: true
      }),
      SUCCESS: getAllData,
      ERROR: state => ({
        ...state,
        loading: false
      })
    }
  },
  initialState
)

export { getAllData, action }
export default reducer
