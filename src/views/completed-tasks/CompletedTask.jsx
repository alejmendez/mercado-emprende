import "./CompletedTask.scss";

const CompletedTask = (props) => {
  const {
    id,
    date,
    image,
    description,
    price,
    count,
    participationAmount,
    commission,
    amountOnAccount,
  } = props.task;
  const dateFormatted = `${new Date(date).toLocaleDateString()} ${new Date(date).toLocaleTimeString()}`;
  return (
    <div className="task-item clearfix">
      <div className="task-item-date">Date: {dateFormatted}</div>
      <div className="task-item-id">Task: {id}</div>
      <div className="clearfix">
        <div className="task-item-image">
          <img src={image} alt="" />
        </div>
        <div className="task-item-description">
          <div className="description">Description: {description}</div>
          <div className="price">
            <span className="float-start">{price}</span>
            <span className="float-end">{count}</span>
          </div>
        </div>
      </div>
      <div className="task-item-participation">
        Participation amount:
        <span className="float-end">{participationAmount}</span>
      </div>
      <div className="task-item-commission">
        Commission:
        <span className="float-end">{commission}</span>
      </div>
      <div className="task-item-amount-on-account">
        Amount on account:
        <span className="float-end">{amountOnAccount}</span>
      </div>
    </div>
  );
};

export default CompletedTask;
