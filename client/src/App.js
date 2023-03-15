import { useState, useEffect } from "react"
import Axios from "axios"
export default function App() {

  const [users, setUsers] = useState([])

  useEffect(()=>{
    Axios.get("http://localhost:3001/users")
    .then(res => {
      setUsers(res.data)
    })
    .catch(error => {
      // handle error
    });
  },[])


  /*
    const users = [
      { "_id": "64116c6dcb92f1bd10a08538", "name": "Mo", "age": 27, "email": "m_alaskari96@hotmail.com" },
      { "_id": "64116d91cb92f1bd10a08539", "name": "Majd", "age": 23, "email": "majdaskari@hotmail.com" },
      { "_id": "64116db7cb92f1bd10a0853a", "name": "Nour", "age": 29, "email": "nouraskari@gmail.com" }
    ]
  */


  return (
    <>
      {users.map(user => {
        return (
          <div className="card">
            <ul>
              <li>Name: {user.name}</li>
              <li>Age: {user.age}</li>
              <li>Email: {user.email}</li>
            </ul>

          </div>
        )
      })}
    </>
  );
}


