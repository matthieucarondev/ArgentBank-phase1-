import {useEffect,useState} from 'react';
import {  useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom/dist';
import accountData  from "../data/accountData.json";
import Account from '../components/account'
import { updateProfile } from '../actions/userAction';



const Profile = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate();

  const {token} = useSelector((state) => state.auth)
  const {firstName} = useSelector((state) => state.user)
  const {lastName} = useSelector((state) => state.user)

  useEffect(() => {
    if (!token){
      navigate("/Sign-In")
    }
  },[token,navigate]
  )
  
 const [editing, setEditing]= useState (false);
 const [newFirstname,setNewFirstname] = useState(firstName || '');
 const [newLastname, setNewLastname] = useState(lastName || '');
 const [error, setError] = useState('');

 const handleNamesToDB =() => {
  if (!newFirstname.trim()|| !newLastname.trim() ){
    setError('Both fields are required.');
    return;
  }
  setError('');
  dispatch(updateProfile(token, newFirstname, newLastname))
  setEditing(false);
 }
 const handleEditButtonClick = () => {
  setEditing(true);
  setError(''); // Réinitialiser le message d'erreur lorsque vous cliquez sur le bouton "Edit"
};
    return (
     <main class="main bg-dark">
        { !editing ?(
          <div className="header">
            <h1>Welcome back<br />{firstName} {lastName} </h1>
            <button className="edit-button" onClick={handleEditButtonClick}>Edit Name</button>
          </div> 
       ) :(
          <div className="header"> 
            <h1>Welcome back<br /> </h1>
           
            <div className='header-inputs'>
              <input 
                className='header-inputs-name' 
                type='text' 
                placeholder={firstName} 
                value={newFirstname}
                onChange={(e) => setNewFirstname(e.target.value)}
              />
              <input 
                className='header-inputs-name' 
                type='text' 
                placeholder={lastName} 
                value={newLastname}
                onChange={(e) => setNewLastname(e.target.value)}
              />
             </div>
             <div className="error-container">
            {error && <p className="error-message">{error}</p>}
            </div>
          <br />
            <div className='header-btns'>
              <button className="save-cancel-button" onClick={handleNamesToDB}  >Save</button>
              <button className="save-cancel-button" onClick={() => setEditing(false)}>Cancel</button>
            </div>
          </div> 
       ) }
        <h2 class="sr-only">Accounts</h2>
       
          {accountData.map((account, index) => (
          <Account key={index} account={account}  />
        ))}
     
      </main> 
    );
};

export default Profile;