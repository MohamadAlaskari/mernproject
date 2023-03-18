import { useState, useEffect } from "react";
import Axios from "axios";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Navbar, Form, Button, ListGroup } from "react-bootstrap";
//react-icons
import { SiMongodb, SiExpress, SiReact, SiNodedotjs } from "react-icons/si";
import { BsFillPersonFill } from "react-icons/bs";
import { HiMail } from "react-icons/hi";
import { FaBirthdayCake } from "react-icons/fa";
import { BsPencilSquare, BsTrash } from "react-icons/bs";

export default function App() {
  const api = "http://localhost:3001";
  const [users, setUsers] = useState([]);
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState();
  const [email, setEmail] = useState("");
  const [showBearbeitenForm, setShowBearbeitenForm] = useState(false);

  const [searchTerm, setSearchTerm] = useState("");

  // get users
  useEffect(() => {
    Axios.get(`${api}/users`)
      .then((res) => {
        setUsers(res.data);
      })

      .catch((error) => {
        console.log(error);
      });
  }, [users]);

  // create user
  const createUser = () => {
    if (name && age && email) {
      Axios.post(`${api}/createUser`, {
        name: name,
        age: age,
        email: email,
      })
        .then((res) => {
          alert(res.data.message);
        })
        .catch((error) => {
          // handle error
          console.log(error);
        });
    }
  };
  // delete user
  const deleteUser = (id) => {
    Axios.delete(`${api}/deleteUser/${id}`)
      .then((res) => {
        /*
       /*   const updatedUsers = users.filter((user) => user._id !== id);
      /* setUsers(updatedUsers);
    */
        alert(res.data.message);
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  };

  //search user
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const userBearbeiten = (id, name, age, email) => {
    setShowBearbeitenForm(true);
    setId(id);
    setName(name);
    setAge(age);
    setEmail(email);
  };

  // update user
  const updateUser = (id) => {
    if (name && age && email) {
      Axios.put(`${api}/updateUser/${id}`, {
        name: name,
        age: age,
        email: email,
      })
        .then((res) => {
          alert(res.data.message);
          setShowBearbeitenForm(false);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  /*
    const users = [
      { "_id": "64116c6dcb92f1bd10a08538", "name": "Mo", "age": 27, "email": "m_alaskari96@hotmail.com" },
      { "_id": "64116d91cb92f1bd10a08539", "name": "Majd", "age": 23, "email": "majdaskari@hotmail.com" },
      { "_id": "64116db7cb92f1bd10a0853a", "name": "Nour", "age": 29, "email": "nouraskari@gmail.com" }
    ]
  */

  return (
    <Container fluid className="pb-4 bg-dark main">
      <Container>
        <Navbar variant="dark" className="mb-4">
          <Navbar.Brand href="#home" className="brand fw-bold text-success">
            <h1>
              <SiMongodb />
              <SiExpress className="ms-1" />
              <SiReact className="ms-1" />
              <SiNodedotjs className="mx-2 ms-1" />
            </h1>
          </Navbar.Brand>
        </Navbar>

        <div className="row">
          <div className="col-lg-3 col-md-4 col-sm-12">
            <Form className={`form border border-success rounded-3 p-3 mb-3 ${showBearbeitenForm ? "d-none" : ""
              }`}>
              <Form.Control
                type="text"
                placeholder="Enter name"
                onChange={(e) => setName(e.target.value)}
              />
              <Form.Control
                type="number"
                placeholder="Enter age"
                onChange={(e) => setAge(e.target.value)}
              />
              <Form.Control
                type="email"
                placeholder="Enter your email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button
                className="mt-2 btn"
                variant="success"
                type="submit"
                onClick={createUser}
              >
                Create User
              </Button>
            </Form>
            <Form
              className={`form border border-success rounded-3 p-3 mb-3 ${showBearbeitenForm ? "" : "d-none"
                }`}
            >
              <Form.Control
                type="text"
                placeholder={name}
                onChange={(e) => setName(e.target.value)}
              />
              <Form.Control
                type="number"
                placeholder={age}
                onChange={(e) => setAge(e.target.value)}
              />
              <Form.Control
                type="email"
                placeholder={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="btn-group mt-2">
                <Button
                  className="btn m-2"
                  variant="success"
                  type="submit"
                  onClick={() => updateUser(id)}
                >
                  Save User
                </Button>
                <Button
                  className="btn m-2"
                  variant="danger"
                  onClick={() => setShowBearbeitenForm(false)}
                >
                  Cancel
                </Button>
              </div>
            </Form>
          </div>

          <div className="col-lg-9 col-md-8 col-sm-12 center">
            <div>
              <Form className="d-flex border border-success rounded-3 p-3">
                <Form.Control
                  type="search"
                  placeholder="Search User"
                  className="me-auto"
                  aria-label="Search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </Form>
            </div>
            <div className="result border border-success rounded-3 p-3">
              {filteredUsers.map((user) => (
                <ListGroup key={user._id}>
                  <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start"
                  >
                    <div className="ms-2 me-auto">
                      <div className="fw-bold">
                        <BsFillPersonFill /> {user.name}
                      </div>
                      <div>
                        <FaBirthdayCake /> {user.age}
                      </div>
                      <div>
                        <HiMail /> {user.email}
                      </div>
                    </div>
                    <div c>
                      <BsPencilSquare
                        className="  me-2 text-primary"
                        style={{ cursor: "pointer" }}
                        size={24}
                        onClick={() =>
                          userBearbeiten(
                            user._id,
                            user.name,
                            user.age,
                            user.email
                          )
                        }
                      />
                      <BsTrash
                        className="text-danger"
                        style={{ cursor: "pointer" }}
                        size={24}
                        onClick={() => deleteUser(user._id)}
                      />
                    </div>
                  </ListGroup.Item>
                </ListGroup>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Container>
  );
}
