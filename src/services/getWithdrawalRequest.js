const today = new Date().getTime();

const withdrawalRequest = [
  {
    id: '0b8657c5-5e58-4558-b4a8-a4466b438350',
    date: today,
    amount: 20,
    numberTransaction: 'DSD6565656',
    status: 'Processing',
  },
  {
    id: 'a23d07c8-2b3d-4747-95a5-2d6c3f4ecf82',
    date: today,
    amount: 20,
    numberTransaction: 'DSD6565651',
    status: 'Cancelled',
  },
  {
    id: '79444d7d-3f7c-4ffa-8334-1867a913ab1a',
    date: today,
    amount: 20,
    numberTransaction: 'DSD6565653',
    status: 'Successful',
  },
];

const getWithdrawalRequest = () => {
  return withdrawalRequest;
};

export default getWithdrawalRequest
