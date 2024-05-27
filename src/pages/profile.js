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
      navigate('/')
    }
  },[token,navigate]
  )
  
 const [editing, setEditing]= useState (false);
 const [newFirstname,setNewFirstname] = useState();
 const [newLastname, setNewLastname] = useState();

 const handleNamesToDB =() => {
  dispatch(updateProfile(token, newFirstname, newLastname))
  setEditing(!editing);
 }
    return (
        <main class="main bg-dark">
         { !editing ?
          <div className="header">
            <h1>Welcome back<br />{firstName} {lastName} </h1>
            <button className="edit-button" onClick={() => setEditing(!editing)}>Edit Name</button>
          </div> 
        :
          <div className="header"> 
            <h1>Welcome back<br /> </h1>
            <div className='header-inputs'>
              <input 
                className='header-inputs-name' 
                type='text' 
                placeholder={firstName} 
                onChange={(e) => setNewFirstname(e.target.value)}
              />
              <input 
                className='header-inputs-name' 
                type='text' 
                placeholder={lastName} 
                onChange={(e) => setNewLastname(e.target.value)}
              />
            </div> <br />
            <div className='header-btns'>
              <button className="save-cancel-button" onClick={handleNamesToDB}>Save</button>
              <button className="save-cancel-button" onClick={() => setEditing(!editing)}>Cancel</button>
            </div>
          </div> 
        }
        <h2 class="sr-only">Accounts</h2>
       
          {accountData.map((account, index) => (
          <Account key={index} account={account}  />
        ))} 
     
      </main>
    );
};

export default Profile;