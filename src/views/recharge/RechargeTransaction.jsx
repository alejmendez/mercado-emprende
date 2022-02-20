import {
  Container,
  Row,
  Col,
  Button,
  Form,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import Back from "../../components/back/Back";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";

import getTransactionAccount from "../../services/getTransactionAccount";

import "./RechargeTransaction.scss";

const RechargeTransaction = () => {
  const navigate = useNavigate();
  const params = useParams();
  const quantity = params.quantity;
  const transactionAccount = getTransactionAccount();
  getTransactionAccount;
  const handleClickCopy = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(transactionAccount);
  };

  const handleClick = (e) => {
    e.preventDefault();
    navigate(`/recharge/${quantity}`);
  };

  const handleClickCancel = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <Container className="recharge-transaction-page">
      <Back />

      <Row>
        <Col>
          <div className="banner-recharge">
            <div className="banner-recharge-title">IMPORTANT:</div>
            Send to the following address through the TRON (TRX) network
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form>
            <InputGroup className="my-3">
              <InputGroup.Text id="basic-addon1" onClick={handleClickCopy}>
                <FontAwesomeIcon icon={faCopy} />
              </InputGroup.Text>
              <FormControl
                aria-label="transactionAccount"
                aria-describedby="basic-addon1"
                defaultValue={transactionAccount}
              />
            </InputGroup>
          </Form>
        </Col>
      </Row>
      <Row>
        <Col className="text-center">
          <Button
            className="btn-recharge"
            variant="light"
            onClick={handleClickCopy}
          >
            Copy
          </Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button className="btn-recharge" variant="info" onClick={handleClick}>
            ID_TX transaction number
          </Button>
        </Col>
        <Col>
          <Button
            className="btn-recharge"
            variant="danger"
            onClick={handleClickCancel}
          >
            Cancel
          </Button>
        </Col>
      </Row>
      <Row>
        <Col className="recharge-transaction-footer mt-3">
          <img
            src="https://media.istockphoto.com/vectors/alarm-clock-and-calculator-digital-numbers-vector-illustration-vector-id1133681258?k=20&m=1133681258&s=612x612&w=0&h=xIw4fXztLFc2hHP3PePyjqvN6IY7C_BTXuvB9nOAnUM="
            alt=""
          />
          Complete the transaction before
        </Col>
      </Row>
    </Container>
  );
};

export default RechargeTransaction;
