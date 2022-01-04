import React from "react";
import {Table} from "react-bootstrap";


const Tablas = () => {
    return(
        <Table striped bordered hover variant="danger">
  <thead>
    <tr>
      <th>Profesional</th>
      <th>Tecnologia</th>
      <th>Desarrollo</th>
      <th>Certificacion</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Werty</td>
      <td>Front-End Developer</td>
      <td>React, Veu , Angular</td>
      <td>@Ok</td>
    </tr>
    <tr>
      <td>Gasty</td>
      <td>Back-End Developer</td>
      <td>Python , Java, C# , .Net</td>
      <td>@Ok</td>
    </tr>
    <tr>
      <td>Nahue</td>
      <td>Diseño Ux/Ui</td>
      <td>Adobe XD, Figma</td>
      <td>@Ok</td>
    </tr>
  </tbody>
</Table>
    )
}
export default Tablas;