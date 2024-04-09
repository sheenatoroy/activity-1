<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section class="mt-5">
    <div class="container">
      <div class="cart">
        <div class="table-responsive">
          <table class="table">
            <thead class="thead-dark">
              <tr>
                <th scope="col" class="text-white">Product</th>
                <th scope="col" class="text-white">Price</th>
                <th scope="col" class="text-white">Quantity</th>
                <th scope="col" class="text-white">Total</th>
              </tr>
            </thead>
            <tbody>
              <!--The books that added in cart must be display here make it loop-->
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>
  <div class="col-lg-4 offset-lg-4">
    <div class="checkout">
      <ul>
        <li class="subtotal">Subtotal<span>₱</span></li>
        <li class="cart-total">Total<span>₱</span></li>
      </ul>
      <a href="#" class="proceed-btn">Proceed to Checkout</a>
    </div>
  </div>
</template>

<style scoped>
section{
  margin: 10% 5% 5% 5%;
}

.checkout{

  margin: 5% 5% 5% 5%;

}

.cart .table {
  margin-bottom: 30px;
  border-bottom: 1px solid #fff;
  width: 100%;
}

.cart .table thead tr th {
  font-size: 16px;
  font-weight: bold;
}

.cart .table tbody tr td {
  padding: 15px;
  vertical-align: middle;
}

.cart .table tbody tr td img {
  border: 2px solid #000;
  border-radius: 3px;
}

.cart .table tbody tr td h6 {
  font-size: 16px;
  color: #000;
  margin-bottom: 5px;
}

.cart .table tbody tr td .counter input {
  width: 60px;
  height: 30px;
  text-align: center;
  border: 1px solid #ccc;
}

.checkout ul {
  border: 2px solid #ebebeb;
  background: #f3f3f3;
  padding: 16px 25px;
  list-style: none;
}

.checkout ul li {
  font-size: 16px;
  font-weight: bold;
  color: #252525;
  text-transform: uppercase;

}

.checkout ul li.subtotal {
  border-bottom: 1px solid #ccc;
  padding-bottom: 10px;
}

.checkout ul li.cart-total {
  margin-top: 10px;
}

.checkout ul li span {
  float: right;
}

.checkout .proceed-btn {
  font-size: 15px;
  font-weight: bold;
  color: #fff;
  background: #252525;
  text-transform: uppercase;
  padding: 12px 25px;
  display: inline-block;
  margin-top: 10px;
  text-align: center;
  border-radius: 5px;
  float: right;
}

.thead-dark{

  background-color: #000;
  color: white;
  height: 50px;
}

</style>
