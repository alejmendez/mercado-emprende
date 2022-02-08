import { Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const Recharge = () => {
  const navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    navigate(-1);
  };

  return (
    <Row>
      <Col>
        <Button variant="light" onClick={handleClick}>
          <FontAwesomeIcon size="1x" icon={faArrowLeft} />
        </Button>
      </Col>
    </Row>
  );
};

export default Recharge;
