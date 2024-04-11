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
      <a href="#" class="proceed-btn" @click="checkOut">Proceed to Checkout</a>
    </div>
  </div>

  <!-- Checkout Overlay -->
  <div v-if="showCheckOut" class="checkout-overlay">
    <div class="checkout-popup">
      <div class="checkout-content">
        <div class="checkmark-container">
          <img src="@/assets/check.gif" alt="Checkmark Animation" />
        </div>
       
        <p>Summary</p>
        <table class="summary-table">
          <thead class="thead-dark1">
            <tr>
              <th scope="col">Product</th>
              <th scope="col">Price</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in cartItems" :key="index">
              <td>{{ item.title }}</td>
              <td>${{ item.price }}</td>
            </tr>
          </tbody>
        </table>
        <div class="summary-total">
          Total: ${{ subtotal }}
        </div>
        <div class="button-container">
          <button class="pay-btn" @click="payment">PAY NOW</button>
          <button class="cancel-btn" @click="cancel">CANCEL TRANSACTION </button>
        </div>
      </div>
     
    </div>
  </div>

  <!-- Thank You Overlay -->
  <div v-if="showThankYouOverlay" class="paynow-overlay">
    <div class="paynow-popup">
      <div class="checkmark-container" style="align-items: center;">
          <img src="@/assets/check.gif" alt="Checkmark Animation" />
        </div>
      <button class="close-button" @click="closeOverlay">X</button>
      <p>Thank you for purchasing!</p>
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
  data() {
    return {
      showCheckOut: false,
      showThankYouOverlay: false,
    };
  },
  methods: {
    deleteItem(index) {
      this.$store.commit('removeCartItem', index);
    },
    checkOut() {
      this.showCheckOut = true;
    },
    payment() {
      this.showCheckOut = false;
      this.showThankYouOverlay = true;
    },
    closeOverlay() {
      this.showThankYouOverlay = false;
      this.showCheckOut = false;
    },
    cancel(){
      this.showCheckOut = false;
    }
  },
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
  text-align: center;
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
  padding: 12px 24px;
  display: inline-block;
  margin-top: 20px;
  margin-left: 39.7%;
  text-align: center;
  border-radius: 5px;
}

.thead-dark {
  background-color: #000;
  color: white;
  height: 50px;
  padding: 10px;
}

.thead-dark1 {
  background-color: #25c02774;
  color: white;
  height: 50px;
}

.paynow-overlay {
  position: fixed;
  top: 25%;
  left: 25%;
  width: 50%;
  height: 50%;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
}

.paynow-popup {
  position: relative; /* Add this */
  background-color: #f4f1f1;
  color: black;
  padding: 20px;
  border-radius: 5px;
  width: 80%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 16px;
  cursor: pointer;
  z-index: 1; /* Ensure button appears above other content */
}


.checkout-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
}

.checkout-popup {
  background-color: #f4f1f1;
  color: black;
  padding: 20px;
  border-radius: 5px;
  width: 80%; /* Add the width here */
}

.cart .table {
  margin-bottom: 30px;
}

.table th {
  font-weight: bold;
}

.checkout-content {
  text-align: center;
}

.checkout-content p {
  margin-bottom: 20px;
}

.summary-table {
  margin: 0 auto; /* Center horizontally */
  margin-bottom: 10px;

}

.summary-total {
  margin-bottom: 10px;
  font-weight: bold;
  text-align: right;
}

.pay-btn {
  background-color: #4caf50;
  color: white;
  padding: 10px 0;
  width: 40%;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 5%;
}

.cancel-btn {
  background-color: red;
  color: white;
  padding: 10px 0;
  width: 40%;
  border-radius: 5px;
  cursor: pointer;
}

.action-button {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;
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
