import React from "react";
import { Modal, Button, Form, Col } from "react-bootstrap";
import axios from "axios";
import { EDIT_PROFILE, JWT_HEADER, GET_SELF } from "constants/urls";

const EditProfile = (props) => {
  const [btnDisabled, setBtnDisabled] = React.useState(false);
  const [id, setId] = React.useState("");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [residenceNumber, setResidenceNumber] = React.useState("");
  const [image, setImage] = React.useState("");
  const [errorName, setErrorName] = React.useState("");
  const [errorEmail, setErrorEmail] = React.useState("");
  const [errorPhone, setErrorPhone] = React.useState("");
  const [errorResidenceNumber, setErrorResidenceNumber] = React.useState("");
  const [errorImage, setErrorImage] = React.useState("");

React.useEffect(() => {
    axios
      .get(GET_SELF(), {
        headers: { Authorization: `Bearer ${JWT_HEADER}` },
      })
      .then((res) => {
        setId(res.data.data.id)
        setName(res.data.data.name)
        setEmail(res.data.data.email)
        setPhone(res.data.data.phone)
        setResidenceNumber(res.data.data.residence_number)
      })
      .catch((err) => {
        console.log(err);
      });
    }, [props.show]
)

  const submitEdit = () => {
    setBtnDisabled(true);
    axios
      .patch(
        EDIT_PROFILE(id),
        {
            name : name,
            email :email,
            phone :phone,
            role : "Pasien",
            residence_number :residenceNumber
        },
        { headers: { Authorization: `Bearer ${JWT_HEADER}` } }
      )
      .then((res) => {
        props.onHide(false);
      })
      .catch((err) => {
        if (err.response.data?.name) {
          setErrorName(err.response.data?.name[0]);
        }
        if (err.response.data?.email) {
          setErrorEmail(err.response.data?.email[0]);
        }
        if (err.response.data?.phone) {
          setErrorPhone(err.response.data?.phone[0]);
        }
        if (err.response.data?.residence_number) {
          setErrorResidenceNumber(err.response.data?.residence_number[0]);
        }
      });
    setBtnDisabled(false);
  };

  const changePict = (userId) => {
    setBtnDisabled(true);
    
    setBtnDisabled(false);
  };

  return (
    <>
      <Modal {...props} backdrop={props.closable ? true : "static"}>
        <Modal.Header closeButton={props.closable}>
          <Modal.Title centered="true">{props.message}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex align-items-center">
          <Form.Group>
            <Form.Row>
              <Form.Label column lg={4} md={4}>
                Nama
              </Form.Label>
              <Col className="mt-1">
                <Form.Control
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    setErrorName("");
                  }}
                  type="text"
                />
                {errorName !== "" ? (
                  <span className="text-danger font-smaller">{errorName}</span>
                ) : (
                  ""
                )}
              </Col>
            </Form.Row>
            <Form.Row className="mt-1">
              <Form.Label column lg={4}>
                Email
              </Form.Label>
              <Col lg="" className="mt-2">
                <Form.Control
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setErrorEmail("");
                  }}
                  type="text"
                />
                {errorEmail !== "" ? (
                  <span className="text-danger font-smaller">
                    {errorEmail}
                  </span>
                ) : (
                  ""
                )}
              </Col>
            </Form.Row>
            <Form.Row className="mt-1">
              <Form.Label column lg={4}>
                No. Telpon
              </Form.Label>
              <Col lg="" className="mt-2">
                <Form.Control
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value);
                    setErrorPhone("");
                  }}
                  type="text"
                />
                {errorPhone !== "" ? (
                  <span className="text-danger font-smaller">
                    {errorPhone}
                  </span>
                ) : (
                  ""
                )}
              </Col>
            </Form.Row>
            <Form.Row className="mt-1">
              <Form.Label column lg={4}>
                NIK
              </Form.Label>
              <Col lg="" className="mt-2">
                <Form.Control
                  value={residenceNumber}
                  onChange={(e) => {
                    setResidenceNumber(e.target.value);
                    setErrorResidenceNumber("");
                  }}
                  type="text"
                />
                {errorResidenceNumber !== "" ? (
                  <span className="text-danger font-smaller">
                    {errorResidenceNumber}
                  </span>
                ) : (
                  ""
                )}
              </Col>
            </Form.Row>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer className="d-flex align-items-center">
          <Button
            disabled={btnDisabled}
            variant="primary"
            onClick={() => submitEdit()}
          >
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EditProfile;
