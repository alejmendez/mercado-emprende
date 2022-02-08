const today = new Date().getTime();

const myEarnings = [
  {
    id: '0b8657c5-5e58-4558-b4a8-a4466b438350',
    date: today,
    amount: 0.5,
  },
  {
    id: 'a23d07c8-2b3d-4747-95a5-2d6c3f4ecf82',
    date: today,
    amount: 0.5,
  },
  {
    id: '79444d7d-3f7c-4ffa-8334-1867a913ab1a',
    date: today,
    amount: 0.5,
  },
  {
    id: 'ef77dca9-3f2d-4a8e-850f-a4ad7e9db967',
    date: today,
    amount: -15,
  },
];

const getMyEarnings = () => {
  return myEarnings;
};

export default getMyEarnings
