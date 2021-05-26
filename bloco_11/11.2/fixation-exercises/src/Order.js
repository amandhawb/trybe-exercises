import React from 'react';

class Order extends React.Component {
  render () {
    const { user, product, price } = this.props.order;

    return (
      <div className='order'>
        <p> {user} bought for {price.value} {price.currency} </p>
      </div>
    );
  }
}

export default Order;

// EXERCÍCIOS DE FIXAÇÃO:

// 1. O que o componente App é em relação a Order ?
// RESPOSTA: pai?

// 2. Complete o código 'App' de forma que os pedidos referentes aos produtos headphone e energyDrink sejam filhos de App.
