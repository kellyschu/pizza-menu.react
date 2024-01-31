function Order({ closeHour }) {
  return (
    <div className="order">
      <p>We're oepn until {closeHour}:00. Come visit us or order online.</p>
      <button className="btn">Order now</button>
    </div>
  );
}
export default Order;
