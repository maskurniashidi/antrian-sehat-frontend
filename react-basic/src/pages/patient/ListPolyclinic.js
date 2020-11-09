import React from "react";
import { GET_POLYCLINIC_OF_HA, JWT_HEADER } from "constants/urls";
import axios from "axios";
import { Row, Col, Card } from "react-bootstrap";
import { FaReact } from "react-icons/fa";
import { useParams } from "react-router";

const ListPolyclinic = () => {
  const [polyclinics, setPolyclinics] = React.useState([]);
  //Static Health Agency ID
  //const [, setHealthAgencyId] = React.useState(8);

  let { id_health_agency } = useParams();

  React.useEffect(() => {
    axios
      .get(GET_POLYCLINIC_OF_HA(id_health_agency), {
        headers: { Authorization: `Bearer ${JWT_HEADER}` },
      })
      .then((res) => {
        setPolyclinics(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="mx-4 mt-3">
      <Card
        className="border-light"
        style={{
          borderRadius: "15px",
        }}
      >
        <Card.Body>
          <Row className="d-flex align-items-center justify-content-around">
            {polyclinics.map((polyclinic, key) => {
              return (
                <Card
                  key={key}
                  className="text-center mx-auto"
                  style={{
                    backgroundColor: "#F0F5FE",
                    width: "180px",
                    borderRadius: "15px",
                  }}
                >
                  <Card.Body>
                    <FaReact
                      style={{
                        fontSize: "30px",
                      }}
                    />
                    <p className="mt-3">{polyclinic.poly_master.name}</p>
                  </Card.Body>
                </Card>
              );
            })}
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ListPolyclinic;