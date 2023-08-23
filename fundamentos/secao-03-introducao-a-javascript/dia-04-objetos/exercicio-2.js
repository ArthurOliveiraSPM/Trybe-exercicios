//////🚀 Manipulação de objetos: Parte 2
const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        marguerita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        },
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        },
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      },
    },
    payment: {
      total: 60,
    },
  };
  
  const customerInfo = (fullOrder) => {
    return `Olá, ${order.order.delivery.deliveryPerson}, entrega para: ${order.name}, Telefone: ${order.phoneNumber}, ${order.address.street}. `
}
  
  console.log(customerInfo(order));
  
  const orderModifier = (fullOrder) => {
    return `Olá, ${order.name}, o valor  de seu pedido de ${Object.keys(order.order.pizza)} e ${order.order.drinks.coke.type} é R$ 50,00`
}
  
  console.log(orderModifier(order));
//   console.log(Object.keys(order.order.pizza));