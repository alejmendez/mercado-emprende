import {
  Container,
  Row,
  Col,
  Button,
  Form,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Back from "../../components/back/Back";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";

import "./Invitation.scss";

import bannerImg from '../../assets/images/invitation/banner.png' // relative path to image
import getInvitationLink from "../../services/getInvitationLink";
import getCommissionList from "../../services/getCommissionList";

const Invitation = () => {
  const navigate = useNavigate();

  const invitationLink = getInvitationLink();
  const commissionList = getCommissionList();
  const handleClickCopy = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(invitationLink);
  };
  const handleClickGoBack = (e) => {
    navigate(-1)
  };

  return (
    <Container className="invitation-page">
      <Back />

      <Row>
        <Col>
          <h1>Invitation</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <img className="banner" src={bannerImg} alt="" />
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
                defaultValue={invitationLink}
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
        <Col className="commission mt-3">
          {commissionList.map((commission, index) => (
            <div key={index}>
              {commission.name}: {commission.percentage}%<br />
            </div>
          ))}
        </Col>
      </Row>
      <Row>
        <Col className="text-center mt-3">
          <Button
            className="btn-go-back"
            variant="primary"
            onClick={handleClickGoBack}
          >
            Back
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Invitation;
