<script setup>
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
      </div>
    </div>
  </nav>
</template>

<style>
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

@import url('https://fonts.googleapis.com/css2?family=Quicksand&family=Raleway:wght@100&display=swap');

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
}

.my-button {
    width: 125px; 
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
    align-items:end;
  }

  .my-button1{
    width: 200px;
    height: 50%;
    border: 0;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 16px;
  }
</style>
