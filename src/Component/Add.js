import {Button,Modal, Form} from "react-bootstrap";
import {useState} from 'react';

function Add({addHandler}) {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  const [title,setTitle]= useState("");
  const [description,setDescription]= useState("");
  const [image ,setImage ]= useState("");
  const [rating,setRating]= useState("");
  const addMovie =()=> {
    addHandler ({name:title,description,image,rating})
    handleClose ()
  }
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
         Add New Movie
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Movie Title</Form.Label>
                    <Form.Control type="email" placeholder="Give the title of the movie" onChange={(e) =>setTitle (e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Movie Description</Form.Label>
                    <Form.Control type="email" placeholder="Give a brief description" onChange={(e) =>setDescription (e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Poster URL</Form.Label>
                    <Form.Control type="email" placeholder="Give the adress of the Poster" onChange={(e) =>setImage (e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Movie Rating</Form.Label>
                    <Form.Control type="email" placeholder="Give the Rate of the movie" onChange={(e) =>setRating (e.target.value)} />
                </Form.Group>
               
        </Form>

          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={addMovie}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  export default Add
  

