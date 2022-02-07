import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
const VerticalLayout = (props) => {
  return (
    <div className="app vertical-layout">
      <Header />
      {props.children}
      <Footer />
    </div>
  );
};

export default VerticalLayout;
