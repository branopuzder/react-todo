import React from "react";
import { Form, Button } from "react-bootstrap";

const FormTodo = ({ addTodo }) => {
  const [value, setValue] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>
          <b>Add Todo</b>
        </Form.Label>
        <Form.Control
          type="text"
          className="input"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Add a new Todo"
        ></Form.Control>
      </Form.Group>
      <Button variant="primary my-3" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default FormTodo;
