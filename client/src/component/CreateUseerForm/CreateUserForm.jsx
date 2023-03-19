import React from "react";
import "./createUserForm.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";

function CreateUserForm(props) {
  return (
    <div className="d-none">
      <Form
        className={`form border border-success rounded-3 p-3 mb-3 ${props.show ? "d-none" : ""
          }`}
      >
        <h6>Create User</h6>

        <Form.Control type="text" placeholder="Enter name" />
        <Form.Control type="number" placeholder="Enter age" />
        <Form.Control type="email" placeholder="Enter your email" />
        <Button className="mt-2 btn" variant="success" type="submit">
          Create User
        </Button>
      </Form>

    </div>
  );
}

export default CreateUserForm;
