import Card from "./Card";
import ProblemsDate from "./ProblemsDate";
import "./ProblemsItem.css";

const ProblemsItem = (props) => {
  return (
    <div>
      {/* <Link to={`/problems/${props.problem.id}`}>{props.problem.name}</Link> */}
      <Card className="expense-item">
        <ProblemsDate date={props.date} />
        <div className="head">
          <h2>{props.title}</h2>
          <h3>{props.cat}</h3>
        </div>
        <div className="expense-item__description">
          <div className="expense-item__price"># {props.amount} </div>
        </div>
      </Card>
    </div>
  );
};
export default ProblemsItem;
