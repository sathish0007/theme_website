import React ,{useEffect,useState} from 'react'
import Login from "./components/login";
import ThemeForm from "./components/themeForm";
import axios from "axios"
import api from './config';
export default function AdminComponent() {
    const [logincheck, setlogincheck] = useState(false);
    const checkLogin =async ()=>{
        try {
            
        let token  = localStorage.getItem('user')
        let result = await axios.get(`${api}/users/detail`,{
           headers:{ authorization: `Bearer ${token}`}
        });
        if(result.data){
            setlogincheck(true);
        }
        } catch (error) {
          localStorage.removeItem('user')  
        }

    }
    useEffect(() => {
        checkLogin();
    }, [])
    
  return (
      logincheck 
        ?<ThemeForm />
        : <Login setlogincheck={setlogincheck}/>
      
  )
}
