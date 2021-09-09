import React from "react";
import { Table } from "react-bootstrap";
import NavBar from "./Navbar";
import { todoItems } from "./api";

export default class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = { todoItems: [] };
  }

  componentWillMount() {
    todoItems().then((newItems) =>
      this.setState({ ...this.state, todoItems: newItems })
    );
  }

  // {text: , create_datum: }

  render() {
    console.log("rendering");
    return (
      <div>
        <NavBar title={"asdfasdf"}/>
        <div>
          <h1> Welcome! </h1>
          This view is only visible for authenticated users!
        </div>
        <div>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Text</th>
                <th>Datum</th>
              </tr>
            </thead>
            <tbody>
              {this.state.todoItems.map((value, index) => (
                <tr key={index}>
                  <td>{value.text}</td>
                  <td>{value.create_datum}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}
