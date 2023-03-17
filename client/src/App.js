

import { useState, useEffect } from "react"
import Axios from "axios"

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Navbar, Form, Button, ListGroup } from 'react-bootstrap';



export default function App() {

  const api = "http://localhost:3001"
  const [users, setUsers] = useState([])
  const [name, setName] = useState("")
  const [age, setAge] = useState("")
  const [email, setEmail] = useState("")
  const [searchTerm, setSearchTerm] = useState("");


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
  // Handler zum Löschen des Benutzers
  const deleteUser = (id) => {
    Axios.delete(`${api}/deleteUser/${id}`)
      .then((res) => {
        console.log(res.data);
        const updatedUsers = users.filter((user) => user._id !== id);
        setUsers(updatedUsers);
      })
      .catch((error) => {
        // handle error
      });
  };


  //search
  const filteredUsers = users.filter(user => user.name.toLowerCase().includes(searchTerm.toLowerCase()));

  /* const searchUser = () => {
     Axios.get(`${api}/users`)
       .then(res => {
         const filteredUsers = res.data.filter(user => user.name.toLowerCase().includes(searchTerm.toLowerCase()))
         setUsers(filteredUsers)
       })
       .catch(error => {
         // handle error
       });
   }
   */
  /*
    const users = [
      { "_id": "64116c6dcb92f1bd10a08538", "name": "Mo", "age": 27, "email": "m_alaskari96@hotmail.com" },
      { "_id": "64116d91cb92f1bd10a08539", "name": "Majd", "age": 23, "email": "majdaskari@hotmail.com" },
      { "_id": "64116db7cb92f1bd10a0853a", "name": "Nour", "age": 29, "email": "nouraskari@gmail.com" }
    ]
  */


  return (

    <Container fluid className="main bg-dark main">
      <Container>
        <Navbar variant="dark" className="mb-4">
          <Navbar.Brand href="#home" className="brand fw-bold text-success">
            MERN
          </Navbar.Brand>

        </Navbar>

        <div className="row">
          <div className="col col-3">


            <Form className="form border border-success rounded-3 p-3">
              <Form.Control type="text" placeholder="Enter name" onChange={e => setName(e.target.value)} />
              <Form.Control type="number" placeholder="Enter age" onChange={e => setAge(e.target.value)} />
              <Form.Control type="email" placeholder="Enter your email" onChange={e => setEmail(e.target.value)} />
              <Button className="mt-2 btn" variant="success" type="submit" onClick={createUser}>
                Create User
              </Button>
            </Form>



          </div>

          <div className="col col-6 center">
            <div>
              <Form className="d-flex border border-success rounded-3 p-3 ">
                <Form.Control
                  type="search"
                  placeholder="Search User"
                  className=" me-auto"
                  aria-label="Search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </Form>
            </div>
            <div className="result border border-success rounded-3 p-3">
              {filteredUsers.map(user => {
                return (

                  <ListGroup key={user._id}>
                    <ListGroup.Item
                      as="li"
                      className="d-flex justify-content-between align-items-start"
                    >
                      <div className="ms-2 me-auto">
                        <div className="fw-bold">{user.name}
                        </div>
                        <div> {user.email}</div>
                      </div>


                      <Button
                        variant="danger"
                        className="mx-2"
                        onClick={() => deleteUser(user._id)}
                      >
                        Delete
                      </Button>
                    </ListGroup.Item>
                  </ListGroup>
                )
              })}
            </div>
          </div >
          <div className="col col-3 result">


          </div>
        </div>


      </Container>
    </Container>


  );
}


