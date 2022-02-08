import { Routes, Route } from "react-router-dom";

import Home from "../views/home/Home";
import Recharge from "../views/recharge/Recharge";
import RechargeTransaction from "../views/recharge/RechargeTransaction";
import Profile from "../views/profile/Profile";
import CompletedTasks from "../views/completed-tasks/CompletedTasks";
import MyEarnings from "../views/my-earnings/MyEarnings";
import RechargeRequests from "../views/recharge-requests/RechargeRequests";
import WithdrawalRequest from "../views/withdrawal-request/WithdrawalRequest";
import Task from "../views/task/Task";
import Invitation from "../views/invitation/Invitation";
import Information from "../views/information/Information";

import NotAuthorized from "../views/NotAuthorized";
import Error from "../views/Error";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/recharge" element={<Recharge />} />
      <Route path="/recharge/:quantity" element={<RechargeTransaction />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/completed-tasks" element={<CompletedTasks />} />
      <Route path="/my-earnings" element={<MyEarnings />} />
      <Route path="/recharge-requests" element={<RechargeRequests />} />
      <Route path="/withdrawal-requests" element={<WithdrawalRequest />} />
      <Route path="/task" element={<Task />} />
      <Route path="/invitation" element={<Invitation />} />
      <Route path="/information" element={<Information />} />
      <Route path='/NotAuthorized' component={<NotAuthorized />} />
      <Route path='*' component={<Error />} />
    </Routes>
  );
}

export default Router
