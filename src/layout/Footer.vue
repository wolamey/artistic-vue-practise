<template>

    <footer className="footer">
        <div className="footer__container">



            <div className="footer__column">
                <router-link className=" footer__logo" to="/">
                
                <div className="footer__logo-text">
                    <p className="footer__logo-name">artistic</p>
                    <p className="footer__logo-description">Ремонт ванных комнат</p>
                </div>
            </router-link>

            </div>




            <div className="footer__column">
                <p className="footer__column-name">главная</p>
                <a href="" className="footer__link">Ремонт ванный комнат</a>
                <a href="" className="footer__link">Наши услуги</a>
                <a href="" className="footer__link">ФОТО РАБОТ</a>
                <a href="" className="footer__link">ВИДЕО РАБОТ</a>


            </div>




            <div className="footer__column">
                <p className="footer__column-name">пОМОЩЬ</p>
                <a href="" className="footer__link">ЦЕНЫ </a>
                <a href="" className="footer__link">БЕСПЛАТНЫЙ ЗАМЕР</a>
                <a href="" className="footer__link">КОНТАКТЫ</a>

            </div>




            <div className="footer__column">

                <p className="footer__name-last">НАШ АДРЕС </p>

                <p className="footer__address">Ремонт санузлов в Санкт-Петербурге</p>
                <p className="footer__time">08.00 - 20.00 Без выходных</p>


                <p className="footer__name-last">МЫ В СОЦСЕТЯХ</p>
                <div className="footer__wrapper">

                    <a href="" className="footer__item-contact">
                        <img src="../assets/img/soc1.png" alt="">
                    </a>
            
                    <a href="" className="footer__item-contact">
                        <img src="../assets/img/soc2.png" alt="">
                    </a>
            
                    <a href="" className="footer__item-contact">
                        <img src="../assets/img/soc3.png" alt="">
                    </a>
            
                    <a href="" className="footer__item-contact">
                        <img src="../assets/img/soc4.png" alt="">
                    </a>
                    
                </div>

            </div>



        </div>

    </footer>
</template>



<script>
import logoImg from './../assets/img/logo.png';

</script>



<style scoped>

@import "./../assets/fonts/fonts.css";
@import url(../assets/main.css);





.footer{
  background: #FDFBF8;
padding: 110px 0;
}

.footer__container{
  width: 90%;
  max-width: 1600px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 40px;
}
.footer__column a{
  text-decoration: none;
}
.footer__logo-name{
  font-family: 'montserrat', sans-serif;
  font-size: 17px;
font-weight: 600;
line-height: 18px;
letter-spacing: 0.085em;
color: #2F2F2F;
text-transform: uppercase;
text-decoration: none;
text-align: left;
margin: 0 0 1px 0;

}
.footer__logo-description{
  font-family: 'montserrat', sans-serif;
font-size: 14px;
font-weight: 500;
line-height: 17.07px;
letter-spacing: -0.015em;
text-align: left;
color: #2F2F2F;

}

.footer__column {
  display: flex;
  flex-direction: column;
}
.footer__column-name {
  font-family: 'lato', sans-serif;
  font-size: 15px;
  margin: 0 0 30px 0;
  text-transform: uppercase;
font-weight: 700;
line-height: 22.5px;
letter-spacing: 0.01em;
text-align: left;

}
.footer__link {
  font-family: 'lato', sans-serif;
font-size: 15px;
color: #000000B2;
font-weight: 400;
line-height: 22.5px;
letter-spacing: 0.01em;
  text-transform: uppercase;
  text-align: left;
margin: 0 0 10px 0;
width: fit-content;
}
.footer__name-last {
  font-family: 'lato', sans-serif;
font-size: 15px;
font-weight: 700;
line-height: 22.5px;
letter-spacing: 0.01em;
  text-transform: uppercase;
  text-align: left;

}
.footer__address {
  font-family: 'lato', sans-serif;
font-size: 15px;
color: #0000006e;
margin: 25px 0 7px 0;
font-weight: 400;
line-height: 22.5px;
letter-spacing: 0.01em;
text-align: left;

}
.footer__time {
  font-family: 'lato', sans-serif;
font-size: 15px;
font-weight: 400;
line-height: 22.5px;
letter-spacing: 0.01em;
text-align: left;
margin: 0  0 50px 0;
color: #00000040;

}
.footer__wrapper {
  display: flex;
  align-items: center;
  gap: 14px;
  margin: 15px 0  0 0;
}
.footer__item-contact {
}
</style>