"use client"
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';

export default function NewPlaylistBtn() {

  const popover = (
    <Popover id="popover-basic">
      <Popover.Header as="h3">New Playlist</Popover.Header>
      <Popover.Body>
        <Form>
        <Form.Group className="mb-3" controlId="playlistName">
          <Form.Label>Playlist Name</Form.Label>
          <Form.Control type="name" placeholder="Enter playlist name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="playlistDescription">
          <Form.Label>Playlist Description</Form.Label>
          <Form.Control type="text" placeholder="Description" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Create
        </Button>
      </Form>
      </Popover.Body>
    </Popover>
  )

  return(
    <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
      <Button variant="success">Create new playlist</Button>
    </OverlayTrigger>
  )
}
