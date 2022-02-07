import { Routes, Route } from "react-router-dom";

import VerticalLayout from "./layouts/vertical/VerticalLayout";
import Home from "./views/home/Home.jsx";

import './App.scss'

function App() {
  return (
    <VerticalLayout>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </VerticalLayout>
  )
}

export default App
