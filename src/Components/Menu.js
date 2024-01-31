import Pizza from "../Components/Pizza";
import pizzaData from "../data";

function Menu() {
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;

  return (
    <div className="menu">
      <h2> Our Menu </h2>
      {numPizzas > 0 && (
        <ul className="pizzas">
          {pizzas.map((pizza) => (
            <Pizza pizzaObj={pizza} key={pizza.name} />
          ))}
        </ul>
      )}
    </div>
  );
}

export default Menu;
