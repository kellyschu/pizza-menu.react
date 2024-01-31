import pizzaData from "../data.js";
import focaccia from "../pizzas/focaccia.jpg";

function Pizza() {
  return (
    <div>
      <h3> {pizzaData[0].name} </h3>
      <p> {pizzaData[0].ingredients} </p>
      <p> {pizzaData[0].price} </p>
      <img src={focaccia} alt={focaccia} />
      <p> {pizzaData[0].soldOut} </p>
    </div>
  );
}
export default Pizza;
