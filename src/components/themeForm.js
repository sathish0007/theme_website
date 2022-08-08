import React,{useState} from 'react'
import { SketchPicker } from 'react-color'
import api from '../config';
import axios from 'axios'
export default function ThemeForm() {
    const [color,changeColor] =useState('red');

    const handleChange = (e)=>{
        changeColor(e.hex)
        console.log(e,"e")
    }
    const submit =async (e)=>{
        try {
            e.preventDefault();
            let token  = localStorage.getItem('user');
            let result = await axios.post(`${api}/users/theme`,{color},{
                headers:{ authorization: `Bearer ${token}`}
             });
            console.log(result,"result")
            alert("Your theme updated to the website successsfully");
            window.open(window.location.hostname)

        } catch (error) {
           console.log(error,"error") 
        }
      
    }
  return (
    <div class="mycontainer">
	<div class="item-0">
        <h1> Select and update theme color to webite</h1>
    <form onSubmit={submit}>

    <SketchPicker color={ color } onChange={handleChange } />
    <br/>
  <button type="submit" class="btn btn-primary btn-block mb-4">Submit</button>

</form>
</div>
</div>
  )
}
