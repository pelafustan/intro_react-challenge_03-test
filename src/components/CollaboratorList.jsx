import Table from "react-bootstrap/Table";
import { Trash2Fill } from "react-bootstrap-icons";

const CollaboratorList = ({ searchTerm, collabs, setCollabs }) => {

  const handleDeletion = (event) => {
    const id = parseInt(event.currentTarget.dataset.key);
    const newCollabs = collabs.filter(collab => {
      return collab.id !== id;
    });
    setCollabs([
      ...newCollabs,
    ]);
  };

  let filtered = [];

  if (searchTerm !== "") {
    filtered = collabs.filter(collab => {
      return (
        collab.name.toLowerCase().includes(searchTerm.toLowerCase())
        || collab.email.toLowerCase().includes(searchTerm.toLowerCase())
        || collab.position.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
  } else {
    filtered = [...collabs];
  }

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Name</th>
          <th>E-Mail</th>
          <th>Age</th>
          <th>Position</th>
          <th>Phone</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {
          filtered.map(collab => (
            <tr key={collab.id}>
              <td>{collab.name}</td>
              <td>{collab.email}</td>
              <td>{collab.age}</td>
              <td>{collab.position}</td>
              <td>{collab.phone}</td>
              <td><Trash2Fill className="trash-icon" size={28} data-key={collab.id} onClick={handleDeletion}/></td>
            </tr>
          ))
        }
      </tbody>
    </Table>
  )

};

export default CollaboratorList;
