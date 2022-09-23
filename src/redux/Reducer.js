import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import moment from 'moment'
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
export const fetchBanner = createAsyncThunk('home/setting', async () => {
  const setting = await axios.get('/api/settings')
  return setting
})
export const fetchReview = createAsyncThunk('clint/review', async () => {
  const clint = await axios.get('/api/clientreviews')
  return clint
})
export const postQuery = createAsyncThunk('clint/query', async (query) => {
  const clint = await axios.post('/api/asks', { query })
  return console.log(clint)
})
export const postEmail = createAsyncThunk('clint/query', async (email) => {
  console.log(email)
  const clint = await axios.post('/api/subscribes', { email: email })
  return clint
})
export const postquery = createAsyncThunk('clint/message', async (enquery) => {
  console.log(enquery)
  const clint = await axios.post('/api/inquires', {
    name: enquery.fullname,
    email: enquery.email,
    phone_no: enquery.number,
    message: enquery.message,
  })
  return console.log(clint, 'ds')
})
export const tourSearch = createAsyncThunk(
  'tour/search',
  async ({ selectPlace, activity, date }) => {
    const getTourList = await axios.get('/api/toursearches', {
      params: {
        destination_id: selectPlace,
        activity_id: activity,
        start_date: moment(date).format('YYYY-MM-D'),
      },
    })
    return getTourList
  },
)
export const fetchMenu = createAsyncThunk('fetch/menu', async () => {
  const menu = await axios.get('/api/menus', {})
  return menu
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
const bannerSetting = createSlice({
  name: 'setting',
  initialState: {
    setting: [],
    message: null,
  },
  extraReducers: {
    [fetchBanner.pending]: (state, action) => {},
    [fetchBanner.fulfilled]: (state, action) => {
      state.setting = action.payload
    },
    [fetchBanner.rejected]: (state, action) => {
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
const clintReview = createSlice({
  name: 'clint review',
  initialState: {
    review: [],
  },
  extraReducers: {
    [fetchReview.pending]: (state, action) => {},
    [fetchReview.fulfilled]: (state, action) => {
      state.review = action.payload
      state.message = 'sucess'
    },
    [fetchReview.rejected]: (state, action) => {
      state.message = action.error.message
    },
  },
})
const suscribEmail = createSlice({
  name: 'suscribemail',
  initialState: {
    message: '',
  },
  extraReducers: {
    [postEmail.pending]: (state, action) => {},
    [postEmail.fulfilled]: (state, action) => {
      state.message = action.payload
    },
    [postEmail.rejected]: (state, action) => {
      state.message = action.error.message
    },
  },
})
const menu = createSlice({
  name: 'menu',
  initialState: {
    menu: [],
  },
  extraReducers: {
    [fetchMenu.pending]: (state, action) => {},
    [fetchMenu.fulfilled]: (state, action) => {
      state.menu = action.payload
      state.message = 'sucess'
    },
    [fetchMenu.rejected]: (state, action) => {
      state.message = action.error.message
    },
  },
})
const searchTour = createSlice({
  name: 'searchtour',
  initialState: {
    searchTour: [],
  },
  extraReducers: {
    [tourSearch.pending]: (state, action) => {},
    [tourSearch.fulfilled]: (state, action) => {
      state.searchTour = action.payload
    },
    [tourSearch.rejected]: (state, action) => {
      state.message = action.error.message
    },
  },
})
export const Top = TopDistination.reducer
export const Tourlist = tourList.reducer
export const setting = bannerSetting.reducer
export const Review = clintReview.reducer
export const email = suscribEmail.reducer
export const filterTour = searchTour.reducer
export const Menu = menu.reducer
