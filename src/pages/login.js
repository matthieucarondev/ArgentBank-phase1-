import{ useState , useEffect } from 'react';
//import userData from '../data/dataAuth.json';
import { useNavigate } from 'react-router-dom/dist';
import { useDispatch, useSelector } from 'react-redux';
import { loginAction} from '../actions/authAction';
import { userProfile } from '../actions/userAction';


const Login = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
   
    const dispatch = useDispatch();
    
   const navigate = useNavigate();

    const handleFormSubmit = (e) => {
        e.preventDefault();
        dispatch(loginAction(email,password));

    }
    
    const token = useSelector(state =>state.auth.token);
    useEffect(() => {
        if (token) {
          console.log('login successful')
          dispatch(userProfile(token))
          navigate('/profile')
        }
      }, [token, navigate,dispatch])
        //  vérifier si les information de connexion sont  corrécte
        // const user = userData.find((user)=>user.email === username && user.password === password);
        // if(user){
        //     setError('');
        //     
        //     //si les informations d'identification sont valide ,redirigez l'utilisateur ou effectuez une autre action
        //   
        // }else{
        //     setError('Nom d’utilisateur ou mot de passe non valide');
        // }
    return (
        <>
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <form onSubmit={handleFormSubmit}>
            <div className="input-wrapper">
              <label htmlFor="username">Username</label>
              <input  onChange={(e) => setEmail(e.target.value)} type="text" id="username" />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input   onChange={(e) => setPassword(e.target.value)} type="password" id="password"  />
            </div>
            <div className="input-remember">
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            <button  type='submit' className="sign-in-button">connexion</button>           
          </form>
        </section>
      </main>
    </>

    )
}

export default Login