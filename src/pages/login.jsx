import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginAction } from '../actions/authAction';
import { userProfile } from '../actions/userAction';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const storedEmail = localStorage.getItem('rememberedEmail');
    const storedPassword = localStorage.getItem('rememberedPassword');
    const storedRememberMe = localStorage.getItem('rememberMe') === 'true';
    if (storedEmail && storedPassword && storedRememberMe) {
      setEmail(storedEmail);
      setPassword(storedPassword);
      setRememberMe(true);
    }

    const sessionEmail = sessionStorage.getItem('rememberedEmail');
    const sessionPassword = sessionStorage.getItem('rememberedPassword');
    if (sessionEmail && sessionPassword && !storedRememberMe) {
      setEmail(sessionEmail);
      setPassword(sessionPassword);
    }
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (rememberMe) {
      localStorage.setItem('rememberedEmail', email);
      localStorage.setItem('rememberedPassword', password);
      localStorage.setItem('rememberMe', 'true');
    } else {
      localStorage.removeItem('rememberedEmail');
      localStorage.removeItem('rememberedPassword');
      localStorage.removeItem('rememberMe');
      sessionStorage.setItem('rememberedEmail', email);
      sessionStorage.setItem('rememberedPassword', password);
    }
    dispatch(loginAction(email, password));
  };

  const token = useSelector(state => state.auth.token);
  useEffect(() => {
    if (token) {
      console.log('Login successful');
      dispatch(userProfile(token));
      if (rememberMe) {
        localStorage.setItem('token', token);
      } else {
        localStorage.removeItem('token');
        sessionStorage.setItem('token', token);
      }
      navigate('/profile');
    }
  }, [token, rememberMe, navigate, dispatch]);

  return (
    <main className="login bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={handleFormSubmit}>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              id="username"
              value={email}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
              value={password}
            />
          </div>
          <div className="input-remember">
            <input
              type="checkbox"
              id="remember-me"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button type="submit" className="sign-in-button">Connexion</button>
        </form>
      </section>
    </main>
  );
};

export default Login;