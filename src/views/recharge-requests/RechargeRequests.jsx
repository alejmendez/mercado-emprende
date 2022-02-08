import { Container, Row, Col, Badge, Pagination } from "react-bootstrap";
import Back from "../../components/back/Back";

import getRechargeRequest from "../../services/getRechargeRequest";
import { dateToString } from "../../utils/date";
import { numberToCurrency } from "../../utils/currency";

import "./RechargeRequests.scss";

const RechargeRequest = () => {
  const rechargeRequests = getRechargeRequest();
  return (
    <Container className="recharge-request-page">
      <Back />

      <Row>
        <Col>
          <h1>Recharge Request</h1>
          Last movements
        </Col>
      </Row>
      <Row>
        <Col>
          {rechargeRequests.map((recharge) => (
            <div className="recharge" key={recharge.id}>
              <div className="recharge-date">{dateToString(recharge.date)}</div>
              <div className="recharge-content">
              Recharge amount: {numberToCurrency(recharge.amount)}<br />
              Number Transaction: {recharge.numberTransaction}<br />
              Status: <span className={recharge.status.toLowerCase()}>{recharge.status}</span>
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

export default RechargeRequest;
