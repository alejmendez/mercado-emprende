const menuList = [
  {
    to: "/information",
    key: "info",
    img: "https://cdn.pixabay.com/photo/2017/01/10/03/54/icon-1968239_960_720.png",
    text: "Info",
    title: "Información",
  },
  {
    to: "/recharge",
    key: "recharge",
    img: "https://img.icons8.com/color/2x/restart--v1.png",
    text: "Reca",
    title: "Recarga",
  },
  {
    to: "/withdraw",
    key: "withdraw",
    img: "https://img.icons8.com/color/2x/external-link.png",
    text: "Reti",
    title: "Retirar",
  },
  {
    to: "/invite",
    key: "invite",
    img: "https://i2.wp.com/www.alicanteturismo.com/wp-content/uploads/2021/02/ICONO-REGALO.png?fit=500%2C500&ssl=1",
    text: "Invi",
    title: "Invitar",
  },
];

const getHomeMenu = () => {
  return menuList;
};

export default getHomeMenu
