import axios from 'axios';
import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from '../reducers/authReducer';

export const loginAction = (email, password) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-type': 'application/json',
      },
    }
    const response = await axios.post('http://localhost:3001/api/v1/user/login', 
    { email, password },
    config
    );
    const token = response.data.body.token;
    
   

    // Dispatch de l'action pour mettre à jour l'état d'authentification
    dispatch({
      type: LOGIN_SUCCESS,
      payload: { token },
    });
  } catch (error) {
    console.error('Login failed:', error.message);
    // Dispatch d'une action d'échec si la connexion échoue
    dispatch({
      type: LOGIN_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const rehydrateToken = () => (dispatch) => {
  const token = localStorage.getItem('token');
  if (token) {
    dispatch({
      type: LOGIN_SUCCESS,
      payload: { token },
    });
  }
};
export const logout = () => (dispatch) => {
  // Supprimez le token côté client lors de la déconnexion
  localStorage.removeItem('jwtToken');

  // Dispatch de l'action de déconnexion
  dispatch({
    type: LOGOUT,
  });
};