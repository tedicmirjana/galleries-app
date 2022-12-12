import React from "react";
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

export default function LoginComponent({ handleOnLogin, credentials, setCredentials }) {
  return (
    <div>
      <Form onSubmit={handleOnLogin}>
      <Form.Group as={Row} className="px-3 my-5" controlId="formHorizontalEmail">
      <Form.Label column sm={1}>
        Email:
      </Form.Label>
      <Col sm={4}>
          <Form.Control
          required
          type="email"
          placeholder="Email"
          value={credentials.email}
          onChange={({ target }) =>
          setCredentials({ ...credentials, email: target.value })}
          />
      </Col>
      </Form.Group>
        <br />
      <Form.Group as={Row} className="px-3 my-1" controlId="formHorizontalPassword">
        <Form.Label column sm={1}>
          Password:
      </Form.Label>
      <Col sm={4}>
          <Form.Control
          required
          type="password"
          placeholder="Password"
          value={credentials.password}
          onChange={({ target }) =>
          setCredentials({ ...credentials, password: target.value })}
          />
      </Col>
      </Form.Group>
        <br />
      <Form.Group as={Row} className="mb-3">
      <Col sm={{ span: 8, offset: 2 }}>
      <Button type="submit">Login</Button>
      </Col>
      </Form.Group>
      </Form>
    </div>
  );
}