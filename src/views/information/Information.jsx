import { Container, Row, Col, Button } from "react-bootstrap";
import Back from "../../components/back/Back";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";

import "./Information.scss";

const Information = () => {
  return (
    <Container className="information-page">
      <Back />

      <Row>
        <Col>
          <h1>Information General</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="btn-download">
            <span>PDF</span>
            <FontAwesomeIcon size="3x" icon={faFilePdf} />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Information;
