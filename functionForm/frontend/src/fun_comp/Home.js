import React,{useState,useEffect} from 'react'
import axios from 'axios'

export default function Home() {

  const [users,setUser]=useState([])

  useEffect(()=>{
        loadUser();
  },[])

  const loadUser=async()=>{
  await axios.get("http://localhost:3001/sign_up")
  .then((res)=>{
    console.log('home recived data',res.data.newUser)
      setUser(res.data.newUser)
  })
  .catch((err)=>{console.log(err)})

  }
    return (
        <div >
        <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Adress</th>
          </tr>
        </thead>
        <tbody>
        {
          users.map((user,index)=>(
            <tr>
            <th scope="row">{index +1}</th>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.address}</td>
 
            </tr>
                     ))
        }
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          
        </tbody>
      </table>
        </div>
    )
}
