import Form from "react-bootstrap/Form";

const SearchBar = ({setSearchTerm}) => {
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <Form noValidate>
      <Form.Group className="mb-3">
        <Form.Control
          type="text"
          placeholder="Type to search a collaborator"
          onChange={handleChange}
        />
      </Form.Group>
    </Form>
  )
}

export default SearchBar;
