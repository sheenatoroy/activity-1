<template>
  <div class="container">
    <nav id="navbar" class="">
      <div class="nav-wrapper">
        <div class="logo">
          <a><i class="fa fa-angellist"></i>Online Bookstore</a>
        </div>

        <ul id="menu">
          <!-- <li>
            <router-link to="/HomeViews" class="nav-link">
              <a class="nav-link">Home</a> 
            </router-link>
          </li> -->

          <li>
            <router-link to="/BrowseBook" class="nav-link"> 
              <a class="nav-link">Browse Books</a> 
            </router-link>
          </li>

          <li>
            <router-link to="/CartBooks" class="nav-link"> 
              <a class="nav-link">Cart Books</a> 
            </router-link>
          </li>
        </ul>
        
      </div>
    </nav>
  </div>
  <router-view/>
</template>

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

.nav-wrapper {
  margin: auto;
  text-align: center;
  width: 70%;
} @media(max-width: 768px) {
    .nav-wrapper {
      width: 90%;
    }
  } @media(max-width: 638px) {
      .nav-wrapper {
        width: 100%;
      }
    } 


.logo {
  float: left;
  margin-left: 28px;
  font-size: 1.5em;
  height: 60px;
  letter-spacing: 1px;
  text-transform: uppercase;
} @media(max-width: 768px) {
    .logo {
    }
  }

#navbar ul {
  display: inline-block;
  float: right;
  list-style: none;
  margin-top: -2px;
  text-align: right;
  transition: transform 0.5s ease-out;
  -webkit-transition: transform 0.5s ease-out;
} @media(max-width: 640px) {
    #navbar ul {
      display: none;
    }
  } @media(orientation: landscape) {
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
  -webkit-transition: all 0.5s ease;
}

#navbar li a:hover {
  color: rgb(28, 121, 184);
  transition: all 1s ease;
  -webkit-transition: all 1s ease;
  cursor: pointer;
}


#navbar li a:before, #navbar li a:after {
  content: '';
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


</style>
