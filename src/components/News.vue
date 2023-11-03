<template>
    <div class="news">
      <div class="news-center">
        <div class="news-text">
          <h1>Híreink</h1>
        </div>
        <div class="news-text-image-center">
          <div class="text-image" v-for="(news, index) in newsList" :key="index">
            <div class="image">
              <img :src="news.image" alt="">
            </div>
            <div class="text-title">
              <p>{{ news.title }}</p>
            </div>
            <div class="text-text">
              <p>{{ limitTextLength(news.text, 30) }}</p>
            </div>
            <div class="date-arrow">
              <div class="date">
                <a>{{ news.date }}</a>
              </div>
              <div class="arrow">
                <button>></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="next-button">
            <button class="my-button4" style="background-color: #03AB96; color: #fff;">További hírek</button>
    </div>

  </template>
  
  
  <script>
  export default {
    data() {
      return {
        newsList: [
          {
            image: "src/assets/news_011.png",
            title: "Hamis hotelértékelések – Mit lehet tenni a csalások ellen?",
            text:"A tanulmányok szerint a fogyasztók több mint 90%-át befolyásolják az utazástervezésben az online platformokon posztolt értékelések, így nem meglepő, hogy az ágazat nagy harcot vív a hamis online értékelésekkel, beleértve mindent, a véleményzsarolástól az indokolatlan rágalmazásig és az érdemtelen túlértékelésig.",
            date: "2023 június 29",
          },
          {
            image: "src/assets/news_012.png",
            title: "Jelentős mértékben növekszik a Marriott International",
            text:"A Marriott International közleménye szerint nyolc szállodára vonatkozó megállapodást írtak alá a Rua Al Madinah Holdinggal. A hoteleket az ország szent városában, Medinában fogják felépíteni. ",
            date: "2023 április 26",
          },
          {
            image: "src/assets/news_013.png",
            title: "Elindult a jelentkezés a XXV. Magyar Ingatlanfejlesztési Nívódíj Pályázatra",
            text:"A Nemzetközi Ingatlan Szövetség (FIABCI) Magyar Tagozata idén 25-ik alkalommal  rendezi meg a Magyar Ingatlanfejlesztési Nívódíj Pályázatot.",
            date: "2023 április 25",
          },
          {
            image: "src/assets/news_014.png",
            title: "Kihirdetésre kerültek az Év Szállodái",
            text:"A Magyar Szállodák és Éttermek Szövetsége (MSZÉSZ) három év kihagyás után 2022 végén ismét meghirdette a presztízsértékű Év Szállodája pályázatot a Magyar Turisztikai Ügynökség szakmai partnerségében.",
            date: "2023 március 16",
        },
        ],
      };
    },
    methods: {
      limitTextLength(text, wordLimit) {
        const words = text.split(' ');
        if (words.length > wordLimit) {
          const slicedText = words.slice(0, wordLimit).join(' ') + '...';
          return slicedText;
        } else {
          return text;
        }
      },
    },
  };
  </script>

<style>
.news{
    width: 100%;
    height: 750px;
    display: flex;
    justify-content: center;
    align-items: center;
}

h1 {
    text-transform: uppercase;
    font-weight: normal;
    text-align: center;
}

.news-center{
    width: 70%;
    height: 100%;
    
}

.news-text-image-center{
    width: 100%;
    height: 550px;
    display: flex;
}

.text-image{
    width: 25%;
    height: 100%;
    margin: 0 auto;
    padding: 0 10px; 
}

.text-image img{
    width: 100%;
    height: auto;
}

.text-title{
    width: 100%;
    height: 80px;
}

.text-title p{
    font-size: 20px;
    font-weight: bold;
}

.text-text{
    width: 100%;
    height: 215px;
    font-size: 18px;
}

.date-arrow{
    width: 100%;
    height: 40px;
    display: flex;
}

.date{
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: #999999;
}

.arrow{
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    
}

.arrow button{
    width: 40.82px;
    height: 40.82px;
    background-color: #03AB96;
    border: 0;
    color: #fff;
    font-weight: bold;
    font-size: 15px;
    cursor: pointer;
}

.next-button{
    width: 100%;
    height: 110px;
    display: flex;
    justify-content: center;
}

.my-button4{
    width:9%;
    height: 55px;
    border: 0;
    text-transform: uppercase;
    cursor: pointer;
}



</style>
