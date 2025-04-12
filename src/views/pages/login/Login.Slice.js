import { createSlice } from '@reduxjs/toolkit'
import { authenticateUserThunk } from '../login/Login.Thunk'
import { v4 as uuidv4 } from 'uuid'

const initialState = {
  data: [],
  loggedin: localStorage.getItem('loggedin') === 'yes',
  loading: false,
  status: '',
  message: '',
}

const LoginSlice = createSlice({
  name: 'loginslice',
  initialState,
  reducers: {
    check_login_status(state) {
      state.loggedin = localStorage.getItem('loggedin') === 'yes'
    },
    logout(state) {
      const uniqueId = localStorage.getItem('uniqueId')
      localStorage.clear()
      localStorage.setItem('uniqueId', uniqueId)
      state.loggedin = false
      state.message = 'Logout success'
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(authenticateUserThunk.pending, (state, action) => {
        state.data = []
        state.loggedin = false
        state.loading = true
        state.status = action.meta.requestStatus
        state.message = 'loading'
      })
      .addCase(authenticateUserThunk.fulfilled, (state, action) => {
        state.data = action.payload
        state.loading = false
        state.status = action.meta.requestStatus

        if (action.payload?.approvalStatus === 'approved') {
          state.loggedin = true
          state.message = 'Login success'

          localStorage.setItem('usertype', action.payload.usertype)
          localStorage.setItem('username', action.payload.username)
          localStorage.setItem('userid', action.payload.userid)
          localStorage.setItem('password', action.payload.password)
          localStorage.setItem('loggedin', 'yes')

          if (!localStorage.getItem('uniqueId')) {
            const newUuid = uuidv4()
            localStorage.setItem('uniqueId', newUuid)
            console.log('New UUID generated and set:', newUuid)
          }
        } else {
          state.loggedin = false
          state.message = 'You have entered invalid userid/ password'
          localStorage.clear()
        }
      })
      .addCase(authenticateUserThunk.rejected, (state, action) => {
        state.data = []
        state.loggedin = false
        state.loading = false
        state.status = action.meta.requestStatus
        state.message = action.error.message || 'Authentication failed'
        localStorage.clear()
      })
  },
})

export const { check_login_status, logout } = LoginSlice.actions
export default LoginSlice.reducer
