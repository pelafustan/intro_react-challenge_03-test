import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";

const AddCollaboratorForm = ({ collabs, setCollabs }) => {
  const nameRegex = /^\w{2,}(\s?\w{2,})*$/;
  const emailRegex = /\w*/

  const generateId = (data) => {
    let id = 1;

    if (data.length) {
      return id += data[data.length - 1].id;
    }

    return id;
  }

  const [formInput, setFormInput] = useState({
    id: "",
    name: "",
    email: "",
    age: "",
    position: "",
    phone: "",
  });

  const [hasFocus, setHasFocus] = useState({
    name: false,
    email: false,
    age: false,
    position: false,
    phone: false,
  });

  const [validated, setValidated] = useState(false);

  const handleChange = (event) => {
    setFormInput({
      ...formInput,
      [event.target.name]: event.target.value,
    });
  };

  const handleFocus = (event) => {
    setHasFocus({
      ...hasFocus,
      [event.target.name]: true,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (!form.checkValidity()) {
      event.stopPropagation();
      setValidated(true);
      return;
    } else {
      formInput.id = generateId(collabs);

      setCollabs([
        ...collabs,
        formInput,
      ]);

      setFormInput({
        id: "",
        name: "",
        email: "",
        age: "",
        position: "",
        phone: "",
      });

      setHasFocus({
        name: false,
        email: false,
        age: false,
        position: false,
        phone: false,
      });

      setValidated(false);
    }
  };

  return (
    <>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group className="mb-2">
          <Form.Control
            required
            name="name"
            type="text"
            placeholder="Name"
            value={formInput.name}
            pattern={nameRegex.source}
            onChange={handleChange}
            onFocus={handleFocus}
            isValid={nameRegex.test(formInput.name) && hasFocus.name}
            isInvalid={!nameRegex.test(formInput.name) && hasFocus.name}
          />
          <Form.Control.Feedback type="invalid">Input a valid name!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Control
            required
            name="email"
            type="email"
            placeholder="Email"
            value={formInput.email}
            onChange={handleChange}
            onFocus={handleFocus}
            isValid={emailRegex.test(formInput.email) && hasFocus.email}
            isInvalid={!emailRegex.test(formInput.email) && hasFocus.email}
          />
          <Form.Control.Feedback type="invalid">Input a valid email!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Control
            required
            name="age"
            type="text"
            placeholder="Age"
            value={formInput.age}
            pattern="^(1[8,9]|[2-9][0-9])$"
            onChange={handleChange}
            onFocus={handleFocus}
            isValid={parseInt(formInput.age) >= 18 && hasFocus.age}
            isInvalid={parseInt(formInput.age) < 18 && hasFocus.age}
          />
          <Form.Control.Feedback type="invalid">Collaborators must have, at least, 18 years old!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Control
            required
            name="position"
            type="text"
            placeholder="Position"
            value={formInput.position}
            onChange={handleChange}
            onFocus={handleFocus}
            isValid={formInput.position !== "" && hasFocus.position}
            isInvalid={formInput.position === "" && hasFocus.position}
          />
          <Form.Control.Feedback type="invalid">Input a position!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-4">
          <Form.Control
            required
            name="phone"
            type="text"
            placeholder="Phone"
            value={formInput.phone}
            pattern="\d{8}"
            onChange={handleChange}
            onFocus={handleFocus}
            isValid={/\d{8}/.test(formInput.phone) && hasFocus.phone}
            isInvalid={!/\d{8}/.test(formInput.phone) && hasFocus.phone}
          />
          <Form.Control.Feedback type="invalid">Input a valid phone number!</Form.Control.Feedback>
        </Form.Group>
        <Button type="submit" className="btn btn-success">Add Collaborator</Button>
      </Form>
    </>
  )
};

export default AddCollaboratorForm;
