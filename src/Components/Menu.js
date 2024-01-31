import Pizza from "../Components/Pizza";
import pizzaData from "../data";

function Menu() {
  return (
    <div className="menu">
      <h2> Our Menu </h2>
      <div>
        {pizzaData.map((pizza, index) => (
          <Pizza
            key={index}
            name={pizza.name}
            ingredients={pizza.ingredients}
            photoName={pizza.photoName}
            price={pizza.price}
          />
        ))}
      </div>
    </div>
  );
}

export default Menu;
