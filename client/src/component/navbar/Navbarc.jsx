import React from 'react'
import { Navbar } from 'react-bootstrap';
import { SiMongodb, SiExpress, SiReact, SiNodedotjs } from "react-icons/si";

function Navbarc() {
  return (
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
  )

}

export default Navbarc


