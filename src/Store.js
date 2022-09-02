import { configureStore } from '@reduxjs/toolkit'
import { Top } from './redux/Reducer'
import { Tourlist } from './redux/Reducer'
export const store = configureStore({
  reducer: {
    Tours: Top,
    listTour: Tourlist,
  },
})
// export default store
