<template>
  <div class="container">
    <div class="image-container">
      <div class="image-wrapper">
        <transition name="fade" mode="out-in">
          <img :key="photos[currentPhotoIndex]" :src="`src/assets/${photos[currentPhotoIndex]}`" alt="image" class="image">
        </transition>
        <div class="overlay">
          <div v-show="currentPhotoIndex === 0" class="image-overlay">
            <h1>ZÖLD SZÁLLODÁK <br> 2023-24-BEN</h1>
            <h3>Az idei pályázaton 18 arany, 19 ezöst és 2 bronz fokozatot <br> adományozott a háromtagú zsűri a pontszámok alapján</h3>
            <button class="my-button2" style="background-color: #03AB96; color: #fff;">Tovább olvasom</button>
          </div>

          <div v-show="currentPhotoIndex === 1" class="image-overlay">
            <h1>Második kép címe</h1>
            <h3>Második kép leírása</h3>
            <button class="my-button2" style="background-color: #03AB96; color: #fff;">Tovább olvasom</button>
          </div>

          <div v-show="currentPhotoIndex === 2" class="image-overlay">
            <h1>Harmadik kép címe</h1>
            <h3>Harmadik kép leírása</h3>
            <button class="my-button2" style="background-color: #03AB96; color: #fff;">Tovább olvasom</button>
          </div>

          <div v-show="currentPhotoIndex === 3" class="image-overlay">
            <h1>Negyedik kép címe</h1>
            <h3>Negyedik kép leírása</h3>
            <button class="my-button2" style="background-color: #03AB96; color: #fff;">Tovább olvasom</button>
          </div>
        </div>
        <div class="circles">
          <div
            v-for="(photo, index) in photos"
            :key="index"
            :class="['circle', { active: index === currentPhotoIndex }]"
            @click="goToImage(index)"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      photos: [
        "Selider_01.png",
        "Selider_01.png", 
        "Selider_01.png", 
        "Selider_01.png"  
      ],
      currentPhotoIndex: 0
    };
  },
  methods: {
    goToImage(index) {
      this.currentPhotoIndex = index;
    },
    startAutoplay() {
      this.interval = setInterval(() => {
        this.currentPhotoIndex = (this.currentPhotoIndex + 1) % this.photos.length;
      }, 4000); 
    },
    stopAutoplay() {
      clearInterval(this.interval);
    }
  },
  mounted() {
    this.startAutoplay(); 
  },
  beforeDestroy() {
    this.stopAutoplay(); 
  }
};
</script>


<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 680px;
}

.image-container {
  width: 100%;
  height: 640px;
  position: relative;
}

.image-wrapper {
  position: relative;
}

.image {
  width: 100%;
  height: 640px;
  object-fit: cover;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); 
}

.image-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  font-size: 24px;
  text-align: center;
}

.circles {
  display: flex;
  position: absolute;
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);
}

.circle {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: transparent; 
  border: 2px solid #ccc; 
  margin: 0 5px;
  cursor: pointer;
}

.circle.active {
  background-color: #fff; 
  border: 2px solid #fff; 
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s; 
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

.image-overlay{
  width: 100%;
  height: 640px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
}

.image-overlay h3, h1 {
color: white;
}

.image-overlay h3{
  font-weight: normal;
}

.my-button2 {
  width:192px;
  height: 55px;
  border: 0;
  text-transform: uppercase;
  font-weight: bold;
  cursor: pointer;
}
</style>
