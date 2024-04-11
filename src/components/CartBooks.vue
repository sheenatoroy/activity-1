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
                <th scope="col" class="text-white">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in cartItems" :key="index">
                <td>{{ item.title }}</td>
                <td>${{ item.price }}</td>
                <td>{{ item.quantity }}</td>
                <td>${{ item.price * item.quantity }}</td>
                <td>
                  <div class="button-container">
                    <button @click="deleteItem(index)" class="action-button delete-button">Delete</button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>
  <div class="col-lg-4 offset-lg-4">
    <div class="checkout">
      <ul>
        <li class="subtotal">
          Subtotal<span>${{ subtotal }}</span>
        </li>
        <li class="cart-total">
          Total<span>${{ subtotal }}</span>
        </li>
      </ul>
      <a href="#" class="proceed-btn" @click="purchaseItems">Proceed to Checkout</a>
  </div>
  </div>
</template>

<script>
export default {
  computed: {
    cartItems() {
      return this.$store.getters.cartItems;
    },
    subtotal() {
      return this.$store.getters.subtotal;
    },
  },
  methods: {
    // updateItem(index) {
    //   const item = this.cartItems[index];
    //   const updatedQuantity = parseInt(item.updatedQuantity);
    //   if (updatedQuantity > 0) {
    //     this.$store.commit('updateCartItemQuantity', { index, quantity: updatedQuantity });
    //   }
    // },
    deleteItem(index) {
      this.$store.commit('removeCartItem', index);
    },
    purchaseItems() {
      const cartItems = this.cartItems;
      if (cartItems.length === 0) {
        alert('No product to purchase');
      } else {
        alert('Products successfully purchased');
        // Perform further actions here, like navigating to the checkout page
      }
    }
  }
};
</script>



<style scoped>
section {
  margin: 10% 5% 5% 5%;
}

.checkout {
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

.thead-dark {
  background-color: #000;
  color: white;
  height: 50px;
}

.action-button {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;
}

.update-button {
  background-color: #4caf50; /* Green */
  color: white;
  margin-right: 10px;
}

.delete-button {
  background-color: #f44336; /* Red */
  color: white;
}

.action-button:hover {
  filter: brightness(90%);
}

.button-container {
  display: flex;
  justify-content: center;

}

</style>
