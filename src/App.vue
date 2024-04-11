<template>
  <div class="container">
    <nav id="navbar" class="">
      <div class="nav-wrapper">
        <div class="logo">
          <img src="@/assets/book.png" alt="Logo Image" />
          <a>Online Bookstore</a>
        </div>

        <ul id="menu">
          <li>
            <router-link to="/" class="nav-link">
              <a class="nav-link">Home</a>
            </router-link>
          </li>

          <li v-if="isLoggedIn">
            <router-link to="/BrowseBook" class="nav-link">
              <a class="nav-link">Browse Books</a>
            </router-link>
          </li>

          <li v-if="isLoggedIn">
            <router-link to="/CartBooks" class="nav-link">
              <a class="nav-link">Cart Books</a>
            </router-link>
          </li>

          <li
            class="dropdown"
            @mouseover="toggleDropdown(true)"
            @mouseleave="toggleDropdown(false)"
          >
            <a class="nav-link dropdown-toggle" @click="toggleDropdown">
              <i class="fa fa-user"></i>
            </a>
            <ul class="dropdown-menu" v-show="isDropdownOpen">
              <li>
                <a class="nav-link" @click="status">Status</a>
              </li>
              <li v-if="isLoggedIn">
                <a class="nav-link" @click="logout">Logout</a>
              </li>
              <li v-else>
                <router-link to="/Login" class="nav-link">Login</router-link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div v-if="showStatus" class="confirmation-overlay">
        <div class="confirmation-popup">
          <div class="confirmation-content">
            <div class="checkmark-container" v-if="isLoggedIn">
              <img
                src="@/assets/authenticated.gif"
                alt="Authenticated Animation"
              />
            </div>
            <div class="checkmark-container" v-if="!isLoggedIn">
              <img
                src="@/assets/unauthenticated.gif"
                alt="Unauthenticated Animation"
              />
            </div>
          </div>
          <div class="confirmation-content">
            <p
              :class="{
                authenticated: isLoggedIn,
                unauthenticated: !isLoggedIn,
              }"
            >
              {{ isLoggedIn ? "Authenticated" : "Unauthenticated" }}
            </p>
            <!-- Description below the text -->
            <p v-if="!isLoggedIn" class="description">
              Please log in to your account to access books and other features.
            </p>
            <p v-if="isLoggedIn" class="description">
              Congratulations! You can now add books to your cart and proceed
              with transactions.
            </p>
            <button @click="closeStatus">OK</button>
          </div>
        </div>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<script>
import "@fortawesome/fontawesome-free/css/all.css";
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["isLoggedIn"]),
  },
  data() {
    return {
      isDropdownOpen: false,
      showStatus: false,
      notificationMessage: "",
    };
  },
  methods: {
    toggleDropdown(open) {
      this.isDropdownOpen = open;
    },
    logout() {
      this.$store.commit("setUserAuthenticated", false);
      this.$router.push("/");
    },
    status() {
      this.showStatus = true;
    },
    closeStatus() {
      this.showStatus = false;
    },
  },
};
</script>

<style>
* {
  border: 0;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background: rgb(250, 250, 250) url(http://lorempixel.com/1920/1080/nature/);
  font-family: Lato, Helvetica, Arial, sans-serif;
}

a {
  color: inherit;
  font-family: inherit;
  font-size: inherit;
  text-decoration: none;
}

#navbar {
  background: white;
  color: rgb(13, 26, 38);
  position: fixed;
  top: 0;
  height: 60px;
  line-height: 60px;
  width: 100vw;
  z-index: 10;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
}

@media (max-width: 768px) {
  .nav-wrapper {
    width: 90%;
  }
}
@media (max-width: 638px) {
  .nav-wrapper {
    width: 100%;
  }
}

.nav-wrapper {
    width: 100%; 
    padding: 0; 
    display: flex; 
    justify-content: space-between; 
    align-items: center;
}

.logo {
    display: flex;
    align-items: center;
}


.logo img {
  width: 40px;
  height: 40px; 
  margin-right: 10px; 
}

@media (max-width: 768px) {
  .logo {
  }
}

#navbar ul {
  display: inline-block;
  float: right;
  list-style: none;
  margin-top: -2px;
  text-align: right;
}
@media (max-width: 640px) {
  #navbar ul {
    display: none;
  }
}
@media (orientation: landscape) {
  #navbar ul {
    display: inline-block;
  }
}

#navbar li {
  display: inline-block;
}

#navbar li a {
  color: rgb(13, 26, 38);
  display: block;
  font-size: 15px;
  height: 50px;
  letter-spacing: 1px;
  margin: 0 20px;
  padding: 0 4px;
  position: relative;
  text-decoration: none;
  text-transform: uppercase;
  transition: all 0.5s ease;
}

#navbar li a:hover {
  color: rgb(28, 121, 184);
  cursor: pointer;
}

#navbar li a:before,
#navbar li a:after {
  content: "";
  position: absolute;
  width: 0%;
  height: 1px;
  bottom: -1px;
  background: rgb(13, 26, 38);
}

#navbar li a:before {
  left: 0;
  transition: 0.5s;
}

#navbar li a:after {
  background: rgb(13, 26, 38);
  right: 0;
}

#navbar li a:hover:before {
  background: rgb(13, 26, 38);
  width: 100%;
  transition: width 0.5s cubic-bezier((0.22, 0.61, 0.36, 1));
}

#navbar li a:hover:after {
  background: transparent;
  width: 100%;
}

.dropdown {
  position: relative;
}

.dropdown-toggle::after {
  content: "\25BC";
  margin-left: 5px;
}

.dropdown-menu {
    position: absolute;
    top: 100%;
    left: -40px;
    z-index: 1;
    background-color: white;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    padding: 10px 0;
    display: none; 
    flex-direction: column;
}


.dropdown-menu li {
  display: block;
}

.dropdown-menu li a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-menu li a:hover {
  background-color: #f1f1f1;
}

.dropdown:hover .dropdown-menu {
  display: block;
}

.confirmation-overlay {
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

.confirmation-popup {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgb(244, 241, 241);
  color: white;
  padding: 20px;
  border-radius: 5px;
  z-index: 1000;
}

.confirmation-content {
  text-align: center;
  color: black;
}

.confirmation-content p {
  margin-bottom: 10px;
}

.checkmark-container img {
  width: 80px;
  height: 80px;
}

.confirmation-content button {
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}

.confirmation-content button:hover {
  background-color: #45a049;
}

.authenticated {
  color: green;
}

.unauthenticated {
  color: red;
}

.description {
  color: black;
}
</style>
