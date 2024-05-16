import React, { useState } from 'react';
import userData from '../data/dataAuth.json';
import { useNavigate } from 'react-router-dom/dist';

const Login = () => {
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [error,setError] = useState('');

    const navigate = useNavigate();

    const handleFormSubmit = (e) => {
        e.preventDefault();
        //  vérifier si les information de connexion sont  corrécte
        const user = userData.find((user)=>user.email === username && user.password === password);
        if(user){
            setError('');
            navigate('/profile');
            //si les informations d'identification sont valide ,redirigez l'utilisateur ou effectuez une autre action
            console.log('login successful'); 
        }else{
            setError('Nom d’utilisateur ou mot de passe non valide');
        }
    };


    return (
        <main className="main bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Connexion</h1>
                <form onSubmit={handleFormSubmit}>
                    <div className="input-wrapper">
                        <label htmlFor="username">Nom d’utilisateur</label>
                        <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Mot de passe</label>
                        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="input-remember">
                        <input type="checkbox" id="remember-me" />
                        <label htmlFor="remember-me">Souvenez-vous de moi</label>
                    </div>
                    {/* Placeholder link (for demo only) */}
                    <button type="submit" className="sign-in-button"  onClick={handleFormSubmit}>Connexion</button>
                    {error && <p className="error-message">{error}</p>}
                    {/* Actual button should be used for sign-in action */}
                    {/* <button className="sign-in-button">Sign In</button> */}
                </form>
            </section>
        </main>
    );
};

export default Login;