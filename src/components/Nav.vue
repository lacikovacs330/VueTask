<script setup>
import { ref } from 'vue';

import { faPhone, faEnvelope, faBars } from "@fortawesome/free-solid-svg-icons";

const isMobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};
</script>

<template>
  <nav>
    <div class="nav-logo">
      <img src="../assets/web.png" alt="logo">
    </div>
    <div class="nav-texts">
      <div class="nav-upper">
        <div class="nav-upper-left">
          <span><fa icon="phone" style="color: #6E6F71; width: 15px; height: 15px; margin-right: 8px; cursor: pointer;" />+36 1 123 4567</span>
          <span><fa icon="envelope" style="color: #6E6F71; width: 15px; height: 15px; margin-right: 8px; margin-left: 20px; cursor: pointer;" />info@netipar.hu</span>
        </div>
        <div class="nav-upper-center">
          <fa :icon="['fab', 'facebook']" style="color: #6E6F71; cursor: pointer;" />
          <fa :icon="['fab', 'linkedin']" style="color: #6E6F71; margin-left: 15px; cursor: pointer;" />
        </div>
        <div class="nav-upper-right">
          <div class="nav-upper-right-search">
            <div class="icon-container">
              <fa :icon="['fas', 'magnifying-glass']" style="color: gray; cursor: pointer;" class="icon" />
            </div>
            <input type="text" class="input-field" />
          </div>
          <div class="nav-upper-right-language" style="cursor: pointer;">
            <span style="color: #fff; ">Magyar</span>
            <fa :icon="['fas', 'angle-down']" style="color: #fff; font-size: 12px; margin-left: 5px;" />
          </div>
        </div>
      </div>
      <div class="nav-lower">
        <div class="nav-lower-buttons">
            <button class="my-button">Piactér</button>
            <button class="my-button">Elemzések</button>
            <button class="my-button">Pályázatok</button>
            <button class="my-button">Rendvezmények</button>
            <button class="my-button">Híreink</button>
            <button class="my-button">Csatlakozom</button>
            <button class="my-button">Tagjaink</button>
            <button class="my-button">Dokumentumok</button>
            <button class="my-button">Rólunk</button>
        </div>
        <div class="nav-lower-buttons-1">
            <button class="my-button1" style="background-color: #03AB96; color: #fff; cursor: pointer;">Belépés</button>
            <button class="my-button1" style="background-color: #fff; color: #03AB96; cursor: pointer;">Regisztráció</button>
        </div>
        <div class="mobile-menu-button" @click="toggleMobileMenu">
          <fa icon="bars" style="color: #fff; width: 20px; height: 20px;" />
          </div>
          

        </div>
      </div>
  </nav>
  <div v-if="isMobileMenuOpen" class="mobile-menu">
          <button class="my-button">Piactér</button>
          <button class="my-button">Elemzések</button>
          <button class="my-button">Pályázatok</button>
          <button class="my-button">Rendvezmények</button>
          <button class="my-button">Híreink</button>
          <button class="my-button">Csatlakozom</button>
          <button class="my-button">Tagjaink</button>
          <button class="my-button">Dokumentumok</button>
          <button class="my-button">Rólunk</button>
          <button class="my-button" style="background-color: #03AB96; color: #fff; cursor: pointer;">Belépés</button>
          <button class="my-button" style="background-color: #fff; color: #03AB96; cursor: pointer;">Regisztráció</button>
        </div>
</template>

<style>
.mobile-menu-button{
  display: none;
}

h1 {
  color: black;
}

img {
  width: 100px;
  height: 100px;
}

nav {
  width: 100%;
  height: 140px;
  display: flex;
  background-color: #666666;
}

.nav-logo {
  width: 10%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.nav-texts {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.nav-upper {
  height: 40px;
  background-color: #000;
  display: flex;
}



body {
  margin: 0;
}



.nav-upper-left {
  width: 30%;
  height: 100%;
  display: flex;
  align-items: center;
  color: gray;
  justify-content: center;
}

.nav-upper-center {
  width: 40%;
  height: 100%;
  display: flex;
  align-items: center;
  color: gray;
  justify-content: flex-end;
}

span {
  font-family: 'Raleway', sans-serif;
  font-size: 12px;
}

.nav-upper-right {
  width: 29%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.nav-upper-right-search {
  display: flex;
  align-items: center;
  padding: 5px;
  margin-left: 20px;
  justify-content: flex-start;
}

.icon-container {
  position: relative;
  display: inline-block;
  margin-right: 10px;
}

.input-field {
  width: 170px;
  height: 27px;
  background-color: #333333;
  border: 0;
  padding-left: 30px;
  color: white;
}

.icon {
  position: absolute;
  top: 50%;
  left: 15px;
  transform: translateY(-50%);
  font-size: 15px;
}

.nav-upper-right-language
{
    margin-left: auto;
    height: 100%;
    display: flex;
    align-items: center;
    font-size: 10px;
}

.nav-upper-right-language1
{
  display: none;
    margin-left: auto;
    height: 100%;
    display: flex;
    align-items: center;
    font-size: 10px;
}

.nav-lower {
  width: 100%;
  height: 80%;
  background-color: #666666;
  font-weight: bold;
  display: flex;
}

.nav-lower-buttons{
    width: 90%;
    height: 100%;
    text-align: center;
    display: flex;
}

.my-button {
    width: 100%; 
    height: 100%;
    background-color: #666666;
    color: white;
    border: none;
    cursor: pointer;
    font-size: 12px;
    transition: background-color 0.3s;
    text-transform: uppercase;
    float: right;
    
}

  .my-button:hover {
    background-color: #03AB96;
  }

  .nav-lower-buttons-1{
    width: 20%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color: #666666;
    align-items:flex-end;
  }

  .my-button1{
    width: 200px;
    height: 50%;
    border: 0;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 16px;
  }

  @media screen and (max-width: 1335px) {

    .nav-upper-center{
      width: 0%;
      display: none;
    }

    .nav-upper-right-language{
      width: 0%;
      display: none;
    }

    .nav-upper-right-search{
      width: 0%;
      display: none;
    }

    .nav-lower-buttons{
      display: none;
    }

    .my-button{
      height: 50px;
    }

    .my-button1{
      display: none;
    }

    .nav-logo{
    display: none;
  }

  .mobile-menu-button {
    width: 100%; 
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-left: 15px;
  }

  .nav-lower-buttons-1{
    display: none;
    
  }

  }

  @media screen and (max-width: 1100px) {
  .nav-upper {
    flex-direction: column; 
  }

  .nav-upper-left, .nav-upper-right {
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
  }

  .nav-upper-center{
    display: none;
  }

  .nav-upper-right-search{
    display: none;
  }

  .nav-upper-right {
    justify-content: center; 
  }

  .nav-upper-right-search {
    margin-left: 0; 
  }

  .nav-lower-buttons, .nav-lower-buttons-1 {
    display: none; 
  }

}


</style>