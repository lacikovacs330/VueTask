<template>
    <div class="introduction">
      <div class="left-image">
        <img src="../assets/bemutatkozas 1.png">
      </div>
      <div class="right-introduction">
        <div class="hello">
          <h1>Bemutatkozás</h1>
        </div>
        <div class="right-introduction-text">
          <a v-if="!editing" class="justifyed-text">{{ introductionStore.originalText }}</a>
          <textarea v-else v-model="introductionStore.editedText" maxlength="350" style="width: 800px; height: 200px; max-height: 200px; overflow-y: auto;" placeholder="Adja meg a szöveget..."></textarea>
        </div>
        <button class="my-button3" :style="{ backgroundColor: editing ? '#03AB96' : '#03AB96', color: editing ? '#fff' : '#fff' }" @click="toggleEditing">
          {{ editing ? 'Mentés' : 'Módositás' }}
        </button>
      </div>
    </div>
  </template>
  
  <script>
  import { useIntroductionStore } from '../stores/introduction';
  
  export default {
    data() {
      return {
        editing: false,
      };
    },
    computed: {
      introductionStore() {
        return useIntroductionStore();
      },
    },
    methods: {
      toggleEditing() {
        this.editing = !this.editing;
        if (!this.editing) {
          this.introductionStore.updateOriginalText(this.introductionStore.editedText);
        }
      },
    },
  };
  </script>

<style>

.hello{
  width: 100%; background-color: white; padding-top: 1px; font-size: 20px; text-transform:uppercase; display: flex; align-items: center; font-weight: normal; 
}

.hello h1{
  font-weight: normal; margin-left: 50px;
}

.justifyed-text{
    text-align: justify;
}

.introduction {
    width: 100%;
    height: 582px;
    background-color: #EEEEEE;
    display: flex;
}

.left-image{
    width: 45%;
    height: 100%;
}

.left-image img{
    width: 100%;
    height: 503px;
}

.right-introduction {
    width: 55%;
    height: 100%;
}

.right-introduction-text {
  max-width: 60%; 
  height: 65%;
  font-size: 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 50px;
  overflow: hidden;
  white-space: normal;
  word-break: break-all; 
  font-weight: normal;
}

.my-button3{
    width: 196.9px;
    height: 55px;
    border: 0;
    margin-left: 50px;
    cursor: pointer;
    font-weight: bold;
    font-size: 14px;
}

.button{
    width: 100%;
    height: 100%;
    }

    @media screen and (max-width: 785px) {
      .introduction{
        display: inline;
      }

      .left-image{
        width: 100%;
      }

      .right-introduction{
        width: 100%;
        background-color: #EEEEEE;
      }

      .hello{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #EEEEEE;
      }

      .hello h1{
        margin-left: 0;
        
      }

      .right-introduction-text{
       max-width: 100%;
       padding: 15px;
      }

      .my-button3{
        display: block;
        margin: 0 auto;
      }

    }
</style>
