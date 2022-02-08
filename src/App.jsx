import Router from "./router/Router";

import VerticalLayout from "./layouts/vertical/VerticalLayout";
import "./App.scss";

function App() {
  return (
    <VerticalLayout>
      <Router />
    </VerticalLayout>
  );
}

export default App;
