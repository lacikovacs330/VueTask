<script setup>

</script>



<template>
<div class="footer">

    <div class="footer-first">

        <div class="footer-title">
        <h1 style="margin:0; font-weight: normal;">Elérhetőségek</h1>
        </div>

        <div class="footer-text">
        <h3>Lépjen velünk kapcsolatba</h3>
        </div>

        <div class="footer-contact" style="display: flex; flex-direction: column;">
            <p style="margin:0"><b>NETipar Magyarország Kft</b></p>
            <p style="margin:0;">Székhely: 1162 Budapest, Dobó utca 53</p>
        </div>
        
        <div class="footer-contact-last">
            <p> E-mail: <u>info@</u>netipar.hu <br>Telefon: +36-1-123-4567</p>
        </div>

    </div>

    <div class="footer-second">

        <div class="footer-title">
        <h1 style="margin:0; font-weight: normal;">Közösségi média</h1>
        </div>

        <div class="footer-text">
        <h3>Lépjen velünk kapcsolatba</h3>
        </div>

        <div class="footer-contact">
            <div class="icon10"><fa :icon="['fab', 'linkedin']" style="color: #03AB96; margin-left: 15px;font-size: 40px;" /></div>
            <div class="icon10"><fa :icon="['fab', 'facebook']" style="color: #03AB96;font-size: 40px;" /></div>
        </div>

        <div class="footer-contact-last" style="text-transform: uppercase;font-weight: bold; color: #03AB96; text-align: center;">   
            <div class="text9">ADATVÉDELEM</div>
            <div class="text9">IMPRESSZUM</div>
            <div class="text9">ÁSZF</div>
        </div>

    </div>

    <div class="footer-third">

        <div class="footer-title">
        <h1 style="margin:0; font-weight: normal;">Hírlevél</h1>
        </div>

        <div class="footer-text">
        <h3>Iratkozzon fel, hogy mindig értesüljön <br>a NETipar aktualitás híreiről!</h3>
        </div>

        
        <div class="footer-contact">
            
        </div>

        <div class="footer-contact-last" style="text-transform: uppercase;">
            <button style="width: 200px; height: 45px; border: 0; color: #03AB96; font-weight: bold;">FELIRATKOZOM</button>
        </div>

    </div>

</div>
<div class="footer-low">
    <div class="footer-low-text">
        <a>© 2023 Minden jog fenntartva! NETipar Magyarország Kft.</a>
    </div>
</div>
</template>

<style>

.icon10{
    width: 15%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.text9{
    width: 33.33%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.footer-contact-last{
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.footer-contact{
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.footer-text{
    width: 100%;
    height: 45px;
    display: flex;
    justify-content: center;
    text-align: center;
    
}

.footer-text h3{
    font-weight: normal;
    text-transform: none;
    margin: 0;
}

.footer-title{
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.footer-title h1{
    font-weight: normal;
}

.footer-low{
    width: 100%;
    height: 66px;
    background-color: #333333;
}

.footer-second-social{
    width: 100%;
    height: 55px;
}

.footer-low-text{
    width: 33%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.footer-low-text a{
    font-size: 16px;
    color: #999999;
}

.footer {
    width: 100%;
    height: 334px;
    display: flex;
}

.footer-first{
    width: 33.33%;
    height: 100%;
    background-color: rgba(238, 238, 238, 0.5); 
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.footer-second{
    width: 33.33%;
    height: 100%;
    background-color: #EEEEEE;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.footer-third{
    width: 33.33%;
    height: 100%;
    background-color: #03AB96;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

@media screen and (max-width: 1113px) {
  .footer{
    display: flex;
    flex-direction: column;
    align-items: center;
    height: auto;
  }

  .footer-first{
    width: 100%;
  }

  .footer-second{
    width: 100%;
  }

  .footer-third{
    width: 100%;
  } 
}

@media screen and (max-width: 1245px)
{
    .footer-low-text{
    width: 100%;
    text-align: center;
  }
}

</style>
