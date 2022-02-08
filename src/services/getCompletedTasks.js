const today = new Date().getTime();
const completedTasks = [
  {
    id: 'T930438485456465',
    date: today, // 02/07/2022 06:15:44
    image: 'https://assets.stickpng.com/images/580b585b2edbce24c47b2ad6.png',
    description: 'Ballon Super',
    price: '50$',
    count: 'x10',
    participationAmount: '200$',
    commission: '0,83%',
    amountOnAccount: '1,66$',
  },
  {
    id: 'T930438485456466',
    date: today, // 02/07/2022 06:15:44
    image: 'https://assets.stickpng.com/images/580b585b2edbce24c47b2ad6.png',
    description: 'Ballon Super',
    price: '50$',
    count: 'x10',
    participationAmount: '200$',
    commission: '0,83%',
    amountOnAccount: '1,66$',
  },
];

const getCompletedTasks = () => {
  return completedTasks;
};

export default getCompletedTasks
