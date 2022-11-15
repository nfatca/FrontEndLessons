import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const AddTask = () => {
  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Task</Form.Label>
          <Form.Control type="text" placeholder="Enter text" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Date</Form.Label>
          <Form.Control type="date" />
        </Form.Group>

        <Button variant="primary" type="submit">
          SAVE
        </Button>
      </Form>
    </div>
  );
};

export default AddTask;
