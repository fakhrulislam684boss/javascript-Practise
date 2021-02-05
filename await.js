function TakeOrder(a, b, c) {
  let Order = {
    item_1: a,
    item_2: b,
    item_3: c,
  };
  return Order;
}

function ProcessOrder(order) {
  let Order = {
    ...order,
    processOrder: "Done",
  };
  return Order;
}

function DeliveryOrder(order) {
  let Order = {
    ...order,
    Delivery: "Done",
  };
  return Order;
}

function payBill(order) {
  let Order = {
    ...order,
    paybill: "paid",
  };
  console.log(Order);
}

async function fullProccess() {
  let orderTaken = await TakeOrder("cake", "Pizza", "Burger");

  let proccessed = await ProcessOrder(orderTaken);

  let deli = await DeliveryOrder(proccessed);
  let pay = await payBill(deli);

  console.log(pay);
}

fullProccess();
