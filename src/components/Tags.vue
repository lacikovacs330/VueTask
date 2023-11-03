<template>
    <div class="tags">
      <h1>Exkluzív tagok</h1>
      <div class="exclusive-tag">
        <div class="circle" @click="previousExkluzivImage">
          <span class="arrow-left">&lt;</span>
        </div>
        <img :src="exkluzivImages[exkluzivIndex]" alt="">
        <div class="circle" @click="nextExkluzivImage">
          <span class="arrow-right">&gt;</span>
        </div>
      </div>
  
      <h1>Stratégiai tagok</h1>
      <div class="exclusive-tag">
        <div class="circle" @click="previousStrategiaiImage">
          <span class="arrow-left">&lt;</span>
        </div>
        <img :src="strategiaiImages[strategiaiIndex]" alt="">
        <div class="circle" @click="nextStrategiaiImage">
          <span class="arrow-right">&gt;</span>
        </div>
      </div>
  
      <h1>Normális tagok</h1>
      <div class="exclusive-tag">
        <div class="circle" @click="previousNormalImage">
          <span class="arrow-left">&lt;</span>
        </div>
        <img :src="normalImages[normalIndex]" alt="">
        <div class="circle" @click="nextNormalImage">
          <span class="arrow-right">&gt;</span>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from "vue";
  
  export default {
    setup() {
      const exkluzivIndex = ref(0);
      const strategiaiIndex = ref(0);
      const normalIndex = ref(0);
  
      const exkluzivImages = [
        "src/assets/logok 1.png",
        "src/assets/bg_02 1.png",
        "src/assets/logok 1.png",
      ];
  
      const strategiaiImages = [
        "src/assets/logok 1.png",
        "src/assets/bg_02 1.png",
        "src/assets/logok 1.png",
      ];
  
      const normalImages = [
        "src/assets/logok 1.png",
        "src/assets/bg_02 1.png",
        "src/assets/logok 1.png",
      ];
  
      const nextExkluzivImage = () => {
        exkluzivIndex.value = (exkluzivIndex.value + 1) % exkluzivImages.length;
      };
  
      const previousExkluzivImage = () => {
        exkluzivIndex.value = (exkluzivIndex.value - 1 + exkluzivImages.length) % exkluzivImages.length;
      };
  
      const nextStrategiaiImage = () => {
        strategiaiIndex.value = (strategiaiIndex.value + 1) % strategiaiImages.length;
      };
  
      const previousStrategiaiImage = () => {
        strategiaiIndex.value = (strategiaiIndex.value - 1 + strategiaiImages.length) % strategiaiImages.length;
      };
  
      const nextNormalImage = () => {
        normalIndex.value = (normalIndex.value + 1) % normalImages.length;
      };
  
      const previousNormalImage = () => {
        normalIndex.value = (normalIndex.value - 1 + normalImages.length) % normalImages.length;
      };
  
      return {
        exkluzivIndex,
        strategiaiIndex,
        normalIndex,
        exkluzivImages,
        strategiaiImages,
        normalImages,
        nextExkluzivImage,
        previousExkluzivImage,
        nextStrategiaiImage,
        previousStrategiaiImage,
        nextNormalImage,
        previousNormalImage,
      };
    },
  };
  </script>
  

<style>
.tags {
  width: 100%;
  height: 700px;
}

.tags h1 {
  margin-top: 45px;
  margin-bottom: 50px;
}

.exclusive-tag {
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.exclusive-tag img {
  width: 1120px;
  height: 119px;
}

.arrow-left,
.arrow-right {
  font-size: 24px;
  margin: 0 40px;
  color: #99999980;
  cursor: pointer;
}

.circle {
  width: 50px;
  height: 50px;
  background-color: transparent;
  border-radius: 50%;
  border: 1px solid #FFFFFF;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 40px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
}

@media screen and (max-width: 1181px) {

  .exclusive-tag img{
    width: 100%;
  };
  .arrow-left{
    display: none;
  }
  .arrow-right{
    display: none;
  }

  .circle{
    display: none;
  }
}
</style>
