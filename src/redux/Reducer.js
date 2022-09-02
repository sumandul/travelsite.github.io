import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
const initialState = {
  topDistination: [],

  message: null,
}

export const fetchTopPlace = createAsyncThunk('', async () => {
  const response = axios.get('api/topdestinations')
  return response
})
export const fetchTourList = createAsyncThunk('tour/fetchtours', async () => {
  const list = await axios.get('/api/tours/list')
  return list
})

const TopDistination = createSlice({
  name: 'top place',
  initialState,
  extraReducers: {
    [fetchTopPlace.pending]: (state, action) => {},
    [fetchTopPlace.fulfilled]: (state, action) => {
      state.topDistination = action.payload
      state.message = 'sucess'
    },
    [fetchTopPlace.rejected]: (state, action) => {
      state.message = action.error.message
    },
  },
})
const tourList = createSlice({
  name: 'tour list',
  initialState: {
    Tourlist: [],
  },
  extraReducers: {
    [fetchTourList.pending]: (state, action) => {},
    [fetchTourList.fulfilled]: (state, action) => {
      state.Tourlist = action.payload
      state.message = 'sucess'
    },
    [fetchTourList.rejected]: (state, action) => {
      state.message = action.error.message
    },
  },
})
export const Top = TopDistination.reducer
export const Tourlist = tourList.reducer
