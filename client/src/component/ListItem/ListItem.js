import React from 'react'
// react bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import { ListGroup } from "react-bootstrap";

//react-icons
import { BsFillPersonFill } from "react-icons/bs";
import { FaBirthdayCake } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { BsPencilSquare, BsTrash } from "react-icons/bs";

function ListItem(props) {
    return (
        <ListGroup.Item
            as="li"
            className="d-flex justify-content-between align-items-start"
        >
            <div className="ms-2 me-auto">
                <div className="fw-bold">
                    <BsFillPersonFill /> {props.user.name}
                </div>
                <div>
                    <FaBirthdayCake /> {props.user.age}
                </div>
                <div>
                    <HiMail /> {props.user.email}
                </div>
            </div>
            <div c>
                <BsPencilSquare
                    className="  me-2 text-primary"
                    style={{ cursor: "pointer" }}
                    size={24}

                />
                <BsTrash
                    className="text-danger"
                    style={{ cursor: "pointer" }}
                    size={24}
                />
            </div>
        </ListGroup.Item>
    )
}

export default ListItem
