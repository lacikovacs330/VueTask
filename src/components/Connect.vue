<script>

</script>

<template>
    <div class="connect">
      <h1>Miért érdemes csatlakozni?</h1>
      <div class="normal-member">
        <div class="normal-member-bg">
          <div class="background-image">
            <img class="second-image" src="../assets/MiertErdemesCsatlakozni_BG 1.png" alt="">
          </div>
          <div class="text-overlay">
            <p>Rendes tagnak</p>
            <a style="margin-top: 10px;">Szakmai érdekképviselet</a>
            <a style="margin-top: 10px;">Tanácsadás, know-how átadás</a>
            <a style="margin-top: 10px;">Tanulmányok, elemzések</a>
            <a style="margin-top: 10px;">Szakmai programok, események</a>
            <a style="margin-top: 10px;">Kedvezményes ajánlatok a Társult tagoktól</a>
            <button class="my-button6" style="background-color: #03AB96; color: #fff; margin-top: 10px;">Érdekel</button>
          </div>

        </div>
      </div>
      <div class="prime-member">
    <div class="prime-member-bg">
        <div class="background-image">
            <img class="third-image" src="../assets/MiertErdemesCsatlakozni_BG 2.png" alt="">
        </div>
        <div class="text-overlay1">
            <p>Társult tagnak</p>
            <a style="margin-top: 10px;">Réslzetes információ a hazai szállodapiac<br> helyzetéről, szállodanyitásokról</a>
            <a style="margin-top: 10px;">Részvételi lehetőség az éves közgyűléseken,</a>
            <a style="margin-top: 10px;">Évente a tagokat bemutató kiadványban megjelenés</a>
            <a style="margin-top: 10px;">Hirdetési, kiállítási lehetőség</a>
            <button class="my-button6" style="background-color: #03AB96; color: #fff; margin-top: 10px;">Érdekel</button>
        </div>

  </div>
</div>
    </div>
  </template>
  
  
  


<style>
.connect {
  width: 100%;
  height: 950px;
}

.connect h1 {
  font-weight: normal;
}

.normal-member {
  width: 100%;
  height: 50%;
  position: relative;
}

.normal-member-bg {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  position: absolute;
}

.background-image {
  width: 65%;
  height: 80%;
  background-image: url("../assets/bg001.png");
  position: absolute;
  overflow: visible;
}

.second-image {
  position: absolute;
  left: 0%; 
  top: 30%;
  transform: translate(-50%, -50%);
  width: calc(50%);
  height: calc(363px);
  z-index: 1;
}

.third-image {
  position: absolute;
  left: 100%; 
  top: 30%;
  transform: translate(-50%, -50%);
  width: calc(50%);
  height: calc(363px);
  z-index: 1;
}

.prime-member {
  width: 100%;
  height: 45%;
  position: relative;
}

.prime-member-bg {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start; 
  align-items: flex-end;
  position: absolute;
}

.text-overlay {
  position: absolute;
  left: 60%;
  top: 16%;
  height: 65%;
  display: flex;
  flex-direction: column; 
  align-items: flex-start; 
  justify-content: center;
  padding-left: 10px; 
}

.text-overlay1 {
  position: absolute;
  left: 19%;
  top: 16%;
  height: 65%;
  display: flex;
  flex-direction: column; 
  align-items: flex-start; 
  justify-content: center;
  padding-left: 10px; 
}

.text-overlay p{
  color: #000; 
  font-size: 24px; 
  font-weight: bold;
  margin-bottom: 5px;
  }

  .text-overlay1 p{
  color: #000; 
  font-size: 24px; 
  font-weight: bold;
  margin-bottom: 5px;
  }


.text-overlay1 button{
    border: 0;
    width: 130px;
    height: 40px;
    position: absolute;
    top: 100%;
    cursor: pointer;
}

.text-overlay button{
    border: 0;
    width: 130px;
    height: 40px;
    position: absolute;
    top: 100%;
    cursor: pointer;
}

@media screen and (max-width: 1290px) {
  .text-overlay1{
    left: auto;
  }

  .text-overlay{
    left: auto;
  }
}



@media screen and (max-width: 930px) {
  .second-image,
.third-image {
  width: 100%; 
  max-width: 363px; 
  height: auto; 
}

.text-overlay, .text-overlay1 {
  position: relative; 
  left: 0; 
  top: -20%;
  height: auto; 
}
}

@media screen and (max-width: 894px) {
  .second-image,
  .third-image {
    display: none;
  }

  .background-image {
    width: 100%;
    height: 100%;
    display: flex;
  }

  .text-overlay {
    position: relative; 
    left: -2%;
    top: -40%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .text-overlay1 {
    position: relative;
    left: 0;
    top: -40%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>

