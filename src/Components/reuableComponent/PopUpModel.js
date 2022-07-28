import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Tab,
  Tabs,
  Table,
  Modal,
} from 'react-bootstrap'
import ReactImageMagnify from 'react-image-magnify'
import { useState } from 'react'

export default function PopUpModel(props) {
  //   const [show, setShow] = useState({ ...props.show })

  //   const handleClose = () => setShow(false)
  // const handleShow = () => setShow(true)
  return (
    <Modal
      show={props.show}
      onHide={props.handleclose}
      backdrop="static"
      keyboard={false}
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>{props.header}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{props.body}</Modal.Body>
      {props.footer && <Modal.Footer>{props.footer}</Modal.Footer>}
    </Modal>
  )
}
