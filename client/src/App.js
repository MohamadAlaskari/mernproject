import { useState, useEffect } from "react"
import Axios from "axios"

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Form, Button } from 'react-bootstrap';


export default function App() {

  const api = "http://localhost:3001"
  const [users, setUsers] = useState([])
  const [name, setName] = useState("")
  const [age, setAge] = useState("")
  const [email, setEmail] = useState("")


  useEffect(() => {
    Axios.get(`${api}/users`)
      .then(res => { setUsers(res.data) })
      .catch(error => {
        // handle error
      });
  }, [users])

  const createUser = () => {
    if (name && age && email) {
      Axios.post(`${api}/createUser`, {
        name: name,
        age: age,
        email: email
      })
        .then(res => { console.log(res.data) })
        .catch(error => {
          // handle error
        });
    }

  }

  /*
    const users = [
      { "_id": "64116c6dcb92f1bd10a08538", "name": "Mo", "age": 27, "email": "m_alaskari96@hotmail.com" },
      { "_id": "64116d91cb92f1bd10a08539", "name": "Majd", "age": 23, "email": "majdaskari@hotmail.com" },
      { "_id": "64116db7cb92f1bd10a0853a", "name": "Nour", "age": 29, "email": "nouraskari@gmail.com" }
    ]
  */


  return (
    <Container>


      {users.map(user => {
        return (
          <div className="card" key={user._id} >
            <ul>
              <li>Name: {user.name}</li>
              <li>Age: {user.age}</li>
              <li>Email: {user.email}</li>
            </ul>

          </div>
        )
      })}
      <div>
        <input type="text" placeholder="Name" onChange={e => setName(e.target.value)} />
        <input type="" number placeholder="Age" onChange={e => setAge(e.target.value)} />
        <input type="text" placeholder="Email" onChange={e => setEmail(e.target.value)} />
        <button onClick={createUser}>Creat User</button>
      </div>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail" >
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}


