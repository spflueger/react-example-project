import { useState } from "react";
import { Form, Button, Col, Container, Row, Alert } from "react-bootstrap";
import { signin } from "./api.js";
import { Redirect } from "react-router-dom";

export default function SignIn() {
  const [fetchState, setFetchState] = useState({
    loading: false,
    error: "",
  });

  const signIn = function (event) {
    signin(
      event.target.form.formBasicEmail.value,
      event.target.form.formBasicPassword.value
    )
      .then((res) => {
        console.log(res);
        if (res.hasOwnProperty("access")) {
          localStorage.setItem("tokens", JSON.stringify(res));
          setFetchState({ ...fetchState, loading: false });
        }
      })
      .catch((e) => {
        let errorMessage = "Some unknown error occurred";
        if (e.status !== undefined) {
          errorMessage = `Error ${e.status}: ${e.statusText}`;
        } else if (e.message !== undefined) {
          errorMessage = `Error: ${e.message}`;
        }
        setFetchState({ ...fetchState, error: errorMessage, loading: false });
      });
  };

  if (localStorage.getItem("tokens") !== null) {
    return <Redirect to="/" />;
  } else if (fetchState.loading) {
    return <Alert> Loading </Alert>;
  }
  return (
    <Container>
      <Row className="justify-content-center">
        <Col sm="8">
          {fetchState.error !== "" && (
            <Alert variant="danger"> {fetchState.error} </Alert>
          )}
          <Form onSubmit={(e) => e.preventDefault()}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="Enter username" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Button
              variant="primary"
              type="submit"
              onClick={(e) => {
                signIn(e);
                setFetchState({ ...fetchState, loading: true });
              }}
            >
              Sign In
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
