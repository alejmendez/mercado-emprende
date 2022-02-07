import { Row } from "react-bootstrap";
import Package from "./Package";

const Packages = (props) => {
  return props.packages.map((item, index) => (
    <Row key={index}>
      <Package packages={item} />
    </Row>
  ));
};

export default Packages;
