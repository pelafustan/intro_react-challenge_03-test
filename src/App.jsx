import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { CollabsData } from "./CollabsData";
import AddCollaboratorForm from "./components/AddCollaboratorForm";
import CollaboratorList from "./components/CollaboratorList";
import SearchBar from "./components/searchBar";
import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";

function App() {
  const [collabs, setCollabs] = useState(CollabsData);
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
      <Container fluid>
        <h3 className="mt-2">Collaborator App</h3>
        <Row className="mt-5">
          <Col>
            <SearchBar setSearchTerm={setSearchTerm} />
            <CollaboratorList
              collabs={collabs}
              searchTerm={searchTerm}
              setCollabs={setCollabs}
            />
          </Col>
          <Col>
            <AddCollaboratorForm
              collabs={collabs}
              setCollabs={setCollabs}
            />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default App
