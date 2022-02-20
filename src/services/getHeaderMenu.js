const headerMenu = [
  {
    to: "/",
    key: "home",
    text: "Inicio",
  },
  {
    to: "/information",
    key: "info",
    text: "Información",
  },
  {
    to: "/recharge",
    key: "recharge",
    text: "Recarga",
  },
  {
    to: "/withdrawal-requests",
    key: "withdraw",
    text: "Retirar",
  },
  {
    to: "/invitation",
    key: "invite",
    text: "Invitar",
  },
];

const getHeaderMenu = () => {
  return headerMenu;
};

export default getHeaderMenu
