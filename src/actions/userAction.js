import {
    USER_PROFILE_SUCCESS,
    USER_PROFILE_FAIL,
    USER_PROFILE_RESET,
    USER_PROFILE_UPDATE,
  } from '../reducers/userReducer'
  import axios from 'axios'
  
  // Access data from user connection
  export const userProfile = (token) => async (dispatch) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }
  
      const { data } = await axios.post(
        'http://localhost:3001/api/v1/user/profile',
        { token },
        config
      )
  
      dispatch({ type: USER_PROFILE_SUCCESS, payload: data })
    } catch (error) {
      dispatch({
        type: USER_PROFILE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  }
  
  export const profileReset = () => async (dispatch) => {
    dispatch({ type: USER_PROFILE_RESET })
  }
  
  // User updating
  
  export const updateProfile =
    (token, newFirstName, newLastName) => async (dispatch) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }
  
      const { data } = await axios.put(
        'http://localhost:3001/api/v1/user/profile',
        { firstName: newFirstName, lastName: newLastName },
        config
      )
  
      dispatch({ type: USER_PROFILE_UPDATE, payload: data })
    } catch (error) {
      dispatch({
        type: USER_PROFILE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  }