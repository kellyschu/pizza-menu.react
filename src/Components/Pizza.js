// import pizzaData from "../data.js";
// import focaccia from "../pizzas/focaccia.jpg";

function Pizza(props) {
  return (
    <li className="pizza">
      <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name} />
      <div className="qw">
        <h3> {props.pizzaObj.name} </h3>
        <p> {props.pizzaObj.ingredients} </p>
        <span> {props.pizzaObj.price} </span>
      </div>
    </li>
  );
}
export default Pizza;
