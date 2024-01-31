// import pizzaData from "../data.js";
// import focaccia from "../pizzas/focaccia.jpg";

function Pizza(props) {
  return (
    <div className="pizza">
      <img src={props.photoName} alt={props.photoName} />
      <div className="">
        <h3> {props.name} </h3>
        <p> {props.ingredients} </p>
        <span> {props.price} </span>
      </div>
    </div>
  );
}
export default Pizza;
