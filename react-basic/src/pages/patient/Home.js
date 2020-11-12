import React from "react";
import {
  Button,
  Container,
  Card,
  Col,
  Row,
  Image,
  Spinner,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import PlusImage from "../../images/pasien/plus.png";
import ListTiket from "../../images/pasien/list tiket.png";
import HumanSit from "../../images/pasien/human sit rev.png";
import Patient from "../../images/pasien/patient.png";
import Instancies from "../../images/pasien/instancies.png";
import RightArrow from "../../images/pasien/right arrow.png";
import axios from "axios";
import { GET_NEAREST_WAITING_LIST, JWT_HEADER } from "constants/urls";

const Home = () => {
  const [currentWaitingList, setCurrentWaitingList] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(0);

  React.useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      await axios
        .get(GET_NEAREST_WAITING_LIST(), {
          headers: { Authorization: `Bearer ${JWT_HEADER}` },
        })
        .then((res) => {
          if (res.data.waiting_list == null)
            setCurrentWaitingList({
              current_number: 0,
              latest_number: 0,
              order_number: 0,
            });
          else setCurrentWaitingList(res.data.waiting_list);
        })
        .catch((err) => {
          console.log(err);
        });
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return (
    <>
      {isLoading ? (
        <Container className="text-center">
          <Spinner animation="grow" variant="info" className="mx-auto">
            <span className="sr-only">Loading...</span>
          </Spinner>
        </Container>
      ) : (
        <Container className="pasien-body py-2">
          <div className="mt-4 mb-3">
            <Container>
              <Card
                className="mx-lg-4"
                style={{
                  borderRadius: "15px",
                }}
              >
                <Card.Body className="justify-content-between text-capitalize bg-white">
                  <Row>
                    <Col lg="3">
                      <Card
                        body
                        style={{ fontSize: "29pt" }}
                        className="shadow text-center"
                      >
                        <div className="card-body">Daftar antrian</div>
                        <div>
                          <Link to="/pasien/puskesmas">
                            <Image width="85px" src={PlusImage} />
                          </Link>
                        </div>
                      </Card>
                    </Col>

                    <Col lg="5" className="pl-6 py-1">
                      <Col style={{ fontSize: "22pt" }}>
                        <Row className="ha-name">
                          {currentWaitingList.health_agency}
                        </Row>
                        <Row className="poli-name">
                          {currentWaitingList.polyclinic}
                        </Row>
                        <Row className="waiting-list-number">
                          {currentWaitingList.current_number} /
                          <span className="text-success">
                            {currentWaitingList.latest_number}
                          </span>
                          <span
                            className="text-dark ml-2 d-flex align-items-center"
                            style={{ fontSize: "15px" }}
                          >
                            (sedang diperiksa / antrian terakhir)
                          </span>
                        </Row>
                      </Col>
                      <Card body>
                        <Row className="p-0 mt-4 align-items-center">
                          <Col md="8" style={{ fontSize: "25pt" }}>
                            antrian anda
                          </Col>
                          <Col
                            md="4"
                            style={{ fontSize: "27pt" }}
                            className="text-primary"
                          >
                            {currentWaitingList.order_number}
                          </Col>
                        </Row>
                      </Card>
                      <div className="mt-1">(Antrian terbaru hari ini)</div>
                    </Col>

                    <Col lg="3" className="ml-2 d-flex align-items-center">
                      <div>
                        <span>
                          <Image
                            style={{ marginRight: "-25%" }}
                            className="float-right"
                            width="300px"
                            src={HumanSit}
                          />
                        </span>
                        <Link to="/pasien/riwayat-antrian">
                          <Image
                            className="float-left"
                            style={{ marginTop: "-30%", marginLeft: "30%" }}
                            width="180px"
                            src={ListTiket}
                          />
                        </Link>
                      </div>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Container>
          </div>
          <div className="mt-3 mb-3">
            <Container>
              <Card className="mx-lg-4" style={{ borderRadius: "15px" }}>
                <Card.Body>
                  <div
                    className="d-flex justify-content-end mr-4 pr-4"
                    style={{ fontSize: "50px" }}
                  >
                    Cari Jadwal?
                  </div>
                  <Row>
                    <Col md="8">
                      <Image
                        width="100%"
                        className="ml--7 mt--2 float-left"
                        src={Instancies}
                      />
                    </Col>
                    <Col md="4" className="d-flex align-items-end">
                      <Row>
                        <div
                          style={{ fontSize: "30px" }}
                          className="float-right mb-3"
                        >
                          Lihat daftar puskesmas
                        </div>
                        <div>
                          <Link to="/pasien/puskesmas">
                            <Image
                              roundedCircle
                              className="float-right"
                              width="100px"
                              src={RightArrow}
                            />
                          </Link>
                        </div>
                      </Row>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Container>
          </div>
          <div className="mt-3 mb-4">
            <Container>
              <Card className="mx-lg-4" style={{ borderRadius: "15px" }}>
                <Card.Body>
                  <div
                    className="d-flex justify-content-end mr-4 pr-4"
                    style={{ fontSize: "40px" }}
                  >
                    Cari Poli tersedia?
                  </div>
                  <Row>
                    <Col md="8">
                      <Image
                        width="100%"
                        className="ml--7 float-left"
                        src={Patient}
                      />
                    </Col>
                    <Col md="4" className="d-flex align-items-end">
                      <Row>
                        <div
                          style={{ fontSize: "30px" }}
                          className="float-right mb-3"
                        >
                          Lihat daftar poliklinik
                        </div>
                        <div>
                          <Link to="/pasien/polimaster">
                            <Image
                              roundedCircle
                              className="float-right"
                              width="100px"
                              src={RightArrow}
                            />
                          </Link>
                        </div>
                      </Row>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Container>
          </div>
        </Container>
      )}
    </>
  );
};

export default Home;
