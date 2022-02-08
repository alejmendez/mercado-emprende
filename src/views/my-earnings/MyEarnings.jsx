import { Container, Row, Col, Badge, Pagination } from "react-bootstrap";
import Back from "../../components/back/Back";

import getMyEarnings from "../../services/getMyEarnings";
import { dateToString } from "../../utils/date";
import { numberToCurrency } from "../../utils/currency";
import "./MyEarnings.scss";

const MyEarnings = () => {
  const myEarnings = getMyEarnings();
  return (
    <Container className="my-earnings-page">
      <Back />

      <Row>
        <Col>
          <h1>My Earnings</h1>
          Last movements
        </Col>
      </Row>
      <Row>
        <Col>
          {myEarnings.map((earning) => (
            <div className="earning" key={earning.id}>
              <div className="earning-date">{dateToString(earning.date)}</div>
              <div className="earning-content">
                Indirect Reward:
                <Badge bg={earning.amount > 0 ? "success" : "danger"}>
                  {numberToCurrency(earning.amount)}
                </Badge>
              </div>
            </div>
          ))}
        </Col>
      </Row>
      <Row>
        <Col>
          <Pagination>
            <Pagination.First />
            <Pagination.Item>{1}</Pagination.Item>
            <Pagination.Item>{2}</Pagination.Item>
            <Pagination.Item>{3}</Pagination.Item>
            <Pagination.Last />
          </Pagination>
        </Col>
      </Row>
    </Container>
  );
};

export default MyEarnings;
