import { Routes, Route } from "react-router-dom";

import VerticalLayout from "./layouts/vertical/VerticalLayout";
import Home from "./views/home/Home.jsx";
import Recharge from "./views/recharge/Recharge.jsx";
import RechargeTransaction from "./views/recharge/RechargeTransaction.jsx";
import Profile from "./views/profile/Profile.jsx";
import CompletedTasks from "./views/completed-tasks/CompletedTasks.jsx";

import "./App.scss";

function App() {
  return (
    <VerticalLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recharge" element={<Recharge />} />
        <Route path="/recharge/:quantity" element={<RechargeTransaction />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/completed-tasks" element={<CompletedTasks />} />
      </Routes>
    </VerticalLayout>
  );
}

export default App;
