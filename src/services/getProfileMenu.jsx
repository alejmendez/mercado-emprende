import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInfo,
  faTasks,
  faBriefcase,
  faHistory,
  faMoneyBillAlt,
  faGift,
} from "@fortawesome/free-solid-svg-icons";

const menuList = [
  {
    title: "Information",
    to: "/information",
    className: "btn-information",
    icon: (<FontAwesomeIcon size="3x" icon={faInfo} />),
  },
  {
    title: "Completed Tasks",
    to: "/completed-tasks",
    className: "btn-completed-tasks",
    icon: (<FontAwesomeIcon size="3x" icon={faTasks} />),
  },
  {
    title: "My Earnings",
    to: "/my-earnings",
    className: "btn-my-earnings",
    icon: (<FontAwesomeIcon size="3x" icon={faBriefcase} />),
  },
  {
    title: "Recharge Requests",
    to: "/recharge-requests",
    className: "btn-recharge-requests",
    icon: (<FontAwesomeIcon size="3x" icon={faHistory} />),
  },
  {
    title: "Withdrawal Requests",
    to: "/withdrawal-requests",
    className: "btn-withdrawal-requests",
    icon: (<FontAwesomeIcon size="3x" icon={faMoneyBillAlt} />),
  },
  {
    title: "Invitation",
    to: "/invitation",
    className: "btn-invitation",
    icon: (<FontAwesomeIcon size="3x" icon={faGift} />),
  },
];

const getProfileMenu = () => {
  return menuList;
};

export default getProfileMenu
