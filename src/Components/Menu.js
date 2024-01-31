import Pizza from "../Components/Pizza";
import pizzaData from "../data";

function Menu() {
  return (
    <div className="menu">
      <h2> Our Menu </h2>
      <ul className="pizzas">
        {pizzaData.map((pizza) => (
          <Pizza pizzaObj={pizza} key={pizza.name} />
        ))}
      </ul>
    </div>
  );
}

export default Menu;
