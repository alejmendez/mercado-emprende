import { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Back from "../../components/back/Back";
import { Link } from "react-router-dom";

import "./Profile.scss";

import getProfileMenu from "../../services/getProfileMenu";


const menuList = getProfileMenu();

const Profile = () => {
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(0);
  const handleClick = (e) => {
    e.preventDefault();
    navigate(`/recharge/${quantity}`);
  };

  return (
    <Container className="profile-page">
      <Back />

      <Row>
        <Col>
          <div className="profile-balance clearfix">
            BALANCE
            <br />
            <span className="profile-balance-value">200$</span>
            <br />
            <Button
              className="btn-recharge my-3 float-start"
              variant="primary"
              onClick={handleClick}
            >
              Recharge
            </Button>
            <Button
              className="btn-recharge my-3 float-end"
              variant="success"
              onClick={handleClick}
            >
              Withdraw
            </Button>
          </div>
        </Col>
      </Row>
      <Row className="mt-4">
        {menuList.map((item, index) => (
          <Col xs="4" key={item.title} title={item.title}>
            <Link to={item.to}>
              <div className="btn-profile-actions text-center">
                <div className={item.className}>{item.icon}</div>
                {item.title}
              </div>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Profile;
