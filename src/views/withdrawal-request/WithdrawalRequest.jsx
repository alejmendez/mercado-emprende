import { Container, Row, Col, Badge, Pagination } from "react-bootstrap";
import Back from "../../components/back/Back";

import getWithdrawalRequest from "../../services/getWithdrawalRequest";
import { dateToString } from "../../utils/date";
import { numberToCurrency } from "../../utils/currency";

import "./WithdrawalRequest.scss";

const WithdrawalRequest = () => {
  const withdrawalRequests = getWithdrawalRequest();
  return (
    <Container className="withdrawal-request-page">
      <Back />

      <Row>
        <Col>
          <h1>Withdrawal Request</h1>
          Last movements
        </Col>
      </Row>
      <Row>
        <Col>
          {withdrawalRequests.map((recharge) => (
            <div className="withdrawal-request" key={recharge.id}>
              <div className="withdrawal-request-date">{dateToString(recharge.date)}</div>
              <div className="withdrawal-request-content">
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

export default WithdrawalRequest;
