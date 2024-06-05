<template>

    <div className="container">

        <div className="main">
            <div className="main__container">
                <div className="main__offer">
                    <div className="main__top">
                        <div className="main__line"></div>
                        <p className="main__offer-text">artistic</p>
                        <div className="main__line"></div>

                    </div>
                    <h1 className="main__slogan">Бережный и аккуратный ремонт для вашей ванной </h1>
                </div>
            </div>
        </div>



        <div className="why-us">
            <p className="why-us__prev">Почему выбирают нас </p>
            <p className="why-us__title">Мы работаем только в Санкт-Петербурге. Благодаря этому поддерживаем качество и
                не распылемся</p>
            <div className="why-us__line"></div>

            <div className="why-us__bullits">

                <div className="why-us__bullit">
                    <p className="why-us__item-title">Гарантия </p>
                    <p className="why-us__item-description">
                        Реальная гарантия
                        <b className="why-us__item-main">60 месяцев </b>

                    </p>
                </div>



                <div className="why-us__bullit">
                    <p className="why-us__item-title">Выгода </p>
                    <p className="why-us__item-description">
                        Ремонт ванной
                        от
                        <b className="why-us__item-main"> 27 000 руб.</b>
                    </p>
                </div>

                <div className="why-us__bullit">
                    <p className="why-us__item-title">Скорость </p>
                    <p className="why-us__item-description">
                        Ванна под ключ
                        за
                        <b className="why-us__item-main">12 дней</b>
                    </p>
                </div>

                <div className="why-us__bullit">
                    <p className="why-us__item-title">Опыт </p>
                    <p className="why-us__item-description">
                        Успешно трудимся
                        начиная с
                        <b className="why-us__item-main">2007 года</b>
                    </p>
                </div>






            </div>


            <a href="contact.html" className="why-us__link">
                <p className="why-us__link-text">Оставить заявку</p>
                <img src="../../assets/img/arrow.webp" className="why-us__arrow-img" alt="">
            </a>
        </div>












        <div className="count-form">
            <div className="block__title count-form__block-title">
                <p className="block__title-text count-form__title-text">
                    Расчитайте стоимость ремонта санузла быстро
                    и легко со скидкой <span className="block__title-text-yellow"> 5 000 рублей</span>
                </p>
                <div className="block__title-line count-form__title-line"></div>
            </div>


            <div className="count-form__container">
                <img src="../../assets/img/form-back.png" className="count-form__img" alt="">
                <form action="" className="count-form__form">

                    <div className="count-form__input-block">
                        <p className="count-form__pre-input">Площадь санузла</p>
                        <input type="number" className="count-form__input" placeholder="м2" required>
                    </div>
                    <div className="count-form__input-block">
                        <p className="count-form__pre-input">Имя</p>
                        <input type="text" className="count-form__input" placeholder="Ваше имя     " required>
                    </div>

                    <div className="count-form__input-block">
                        <p className="count-form__pre-input">Телефон</p>
                        <input type="tel" className="count-form__input" placeholder="+ 7(___)___-__-__ " required>
                    </div>

                    <input type="submit" className="count-form__submit button" value="Рассчитать стоимость">
                </form>
            </div>
        </div>




        <div className="specializations">
            <div className="block__title">
                <p className="block__title-text">
                    Виды работ
                </p>
                <div className="block__title-line"></div>
            </div>

            <div className="specializations__wrapper">

                <div className="specializations__item specializations__item1">
                    <div className="specializations__container">
                        <p className="specializations__name">Ремонт санузлов под ключ</p>
                    </div>
                </div>


                <div className="specializations__item specializations__item2">
                    <div className="specializations__container">
                        <p className="specializations__name">Закупка и доставка доваров
                        </p>
                    </div>
                </div>


                <div className="specializations__item specializations__item3">
                    <div className="specializations__container">
                        <p className="specializations__name">Демонтажные работы
                        </p>
                    </div>
                </div>


                <div className="specializations__item specializations__item4">
                    <div className="specializations__container">
                        <p className="specializations__name">Разводка электропроводки
                        </p>
                    </div>
                </div>


                <div className="specializations__item specializations__item5">
                    <div className="specializations__container">
                        <p className="specializations__name">Укладки плитки на стены и пол</p>
                    </div>
                </div>


                <div className="specializations__item specializations__item6">
                    <div className="specializations__container">
                        <p className="specializations__name">Разводка труб
                        </p>
                    </div>
                </div>


                <div className="specializations__item specializations__item7">
                    <div className="specializations__container">
                        <p className="specializations__name">Отделка стен</p>
                    </div>
                </div>


                <div className="specializations__item specializations__item8">
                    <div className="specializations__container">
                        <p className="specializations__name">Выравнивание полов</p>
                    </div>
                </div>


                <div className="specializations__item specializations__item9">
                    <div className="specializations__container">
                        <p className="specializations__name">Отделка потолка</p>
                    </div>
                </div>


                <div className="specializations__item specializations__item10">
                    <div className="specializations__container">
                        <p className="specializations__name">Дизайн проект</p>
                    </div>
                </div>


                <div className="specializations__item specializations__item11">
                    <div className="specializations__container">
                        <p className="specializations__name">Установка бытовой техника</p>
                    </div>
                </div>


                <div className="specializations__item specializations__item12">
                    <div className="specializations__container">
                        <p className="specializations__name">
                            Установка сантехники</p>
                    </div>
                </div>




            </div>
        </div>










        <div className="portfolio">
            <div className="block__title">
                <p className="block__title-text">
                    Примеры работ
                </p>
                <div className="block__title-line"></div>
            </div>

            <div className="portfolio__wrapper">


                <div className="portfolio__item">
                    <div className="portfolio__left">
                        <div className="portfolio__ba">

                            <div className="portfolio__before">
                                <img src="../../assets/img/before1.webp" className="portfolio__ba-img" alt="">
                                <div className="portfolio__ba-container">
                                    До
                                </div>
                            </div>

                            <div className="portfolio__after">
                                <img src="../../assets/img/after1.webp" className="portfolio__ba-img" alt="">
                                <div className="portfolio__ba-container">
                                    После
                                </div>
                            </div>

                            <div className="portfolio__arrows">
                                <img src="../../assets/img/arrowb.webp" className="portfolio__arrow" alt="">
                                <img src="../../assets/img/arrowa.webp" className="portfolio__arrow" alt="">
                            </div>
                        </div>

                        <div className="portfolio__others-img">
                            <img src="../../assets/img/others11.webp" className="portfolio__others-item" alt="">
                            <img src="../../assets/img/others12.webp" className="portfolio__others-item" alt="">
                            <img src="../../assets/img/others13.webp" className="portfolio__others-item" alt="">
                        </div>
                    </div>

                    <div className="portfolio__right">
                        <p className="portfolio__item-title">Ремонт санузла в стиле лофт</p>
                        <div className="portfolio__item-info">

                            <div className="portfolio__item-property">
                                <p className="portfolio__property-title">4,2 m2</p>
                                <p className="portfolio__property-description">Площадь санузла </p>
                            </div>


                            <div className="portfolio__item-property">
                                <p className="portfolio__property-title">15 дней</p>
                                <p className="portfolio__property-description">Сроки ремонта </p>
                            </div>

                        </div>

                        <div className="portfolio__video">
                            <img src="../../assets/img/watch1.webp" className="portfolio__video-back" alt="">
                            <a href="about.html" className="portfolio__item-link">
                                <img src="../../assets/img/playvideo.webp" className="portfolio__play-video" alt="">
                                <p className="portfolio__link-text">Смотреть видео</p>
                            </a>
                        </div>

                        <a href="contact.html" className="button portfolio__button"> Подробнее</a>
                    </div>
                </div>




                <div className="portfolio__item">
                    <div className="portfolio__left">
                        <div className="portfolio__ba">

                            <div className="portfolio__before">
                                <img src="../../assets/img/before2.webp" className="portfolio__ba-img" alt="">
                                <div className="portfolio__ba-container">
                                    До
                                </div>
                            </div>

                            <div className="portfolio__after">
                                <img src="../../assets/img/after2.webp" className="portfolio__ba-img" alt="">
                                <div className="portfolio__ba-container">
                                    После
                                </div>
                            </div>

                            <div className="portfolio__arrows">
                                <img src="../../assets/img/arrowb.webp" className="portfolio__arrow" alt="">
                                <img src="../../assets/img/arrowa.webp" className="portfolio__arrow" alt="">
                            </div>
                        </div>

                        <div className="portfolio__others-img">
                            <img src="../../assets/img/others21.webp" className="portfolio__others-item" alt="">
                            <img src="../../assets/img/others22.webp" className="portfolio__others-item" alt="">
                            <img src="../../assets/img/others23.webp" className="portfolio__others-item" alt="">
                        </div>
                    </div>

                    <div className="portfolio__right">
                        <p className="portfolio__item-title">Ремонт ванной комнаты
                            и санузла</p>
                        <div className="portfolio__item-info">

                            <div className="portfolio__item-property">
                                <p className="portfolio__property-title">5 m2</p>
                                <p className="portfolio__property-description">Площадь санузла </p>
                            </div>


                            <div className="portfolio__item-property">
                                <p className="portfolio__property-title"> 20 дней</p>
                                <p className="portfolio__property-description">Сроки ремонта </p>
                            </div>

                        </div>

                        <div className="portfolio__video">
                            <img src="../../assets/img/watch1.webp" className="portfolio__video-back" alt="">
                            <a href="about.html" className="portfolio__item-link">
                                <img src="../../assets/img/playvideo.webp" className="portfolio__play-video" alt="">
                                <p className="portfolio__link-text">Смотреть видео</p>
                            </a>
                        </div>

                        <a href="contact.html" className="button portfolio__button"> Подробнее</a>
                    </div>
                </div>




                <div className="portfolio__item">
                    <div className="portfolio__left">
                        <div className="portfolio__ba">

                            <div className="portfolio__before">
                                <img src="../../assets/img/before3.webp" className="portfolio__ba-img" alt="">
                                <div className="portfolio__ba-container">
                                    До
                                </div>
                            </div>

                            <div className="portfolio__after">
                                <img src="../../assets/img/after3.webp" className="portfolio__ba-img" alt="">
                                <div className="portfolio__ba-container">
                                    После
                                </div>
                            </div>

                            <div className="portfolio__arrows">
                                <img src="../../assets/img/arrowb.webp" className="portfolio__arrow" alt="">
                                <img src="../../assets/img/arrowa.webp" className="portfolio__arrow" alt="">
                            </div>
                        </div>

                        <div className="portfolio__others-img">
                            <img src="../../assets/img/others31.webp" className="portfolio__others-item" alt="">
                            <img src="../../assets/img/others32.webp" className="portfolio__others-item" alt="">
                            <img src="../../assets/img/others33.webp" className="portfolio__others-item" alt="">
                        </div>
                    </div>

                    <div className="portfolio__right">
                        <p className="portfolio__item-title">Ремонт раздельного санузла</p>
                        <div className="portfolio__item-info">

                            <div className="portfolio__item-property">
                                <p className="portfolio__property-title">4 m2</p>
                                <p className="portfolio__property-description">Площадь санузла </p>
                            </div>


                            <div className="portfolio__item-property">
                                <p className="portfolio__property-title">15 дней</p>
                                <p className="portfolio__property-description">Сроки ремонта </p>
                            </div>

                        </div>

                        <div className="portfolio__video">
                            <img src="../../assets/img/watch1.webp" className="portfolio__video-back" alt="">
                            <a href="about.html" className="portfolio__item-link">
                                <img src="../../assets/img/playvideo.webp" className="portfolio__play-video" alt="">
                                <p className="portfolio__link-text">Смотреть видео</p>
                            </a>
                        </div>

                        <a href="contact.html" className="button portfolio__button"> Подробнее</a>
                    </div>
                </div>




                <div className="portfolio__item">
                    <div className="portfolio__left">
                        <div className="portfolio__ba">

                            <div className="portfolio__before">
                                <img src="../../assets/img/before4.webp" className="portfolio__ba-img" alt="">
                                <div className="portfolio__ba-container">
                                    До
                                </div>
                            </div>

                            <div className="portfolio__after">
                                <img src="../../assets/img/after4.webp" className="portfolio__ba-img" alt="">
                                <div className="portfolio__ba-container">
                                    После
                                </div>
                            </div>

                            <div className="portfolio__arrows">
                                <img src="../../assets/img/arrowb.webp" className="portfolio__arrow" alt="">
                                <img src="../../assets/img/arrowa.webp" className="portfolio__arrow" alt="">
                            </div>
                        </div>

                        <div className="portfolio__others-img">
                            <img src="../../assets/img/others41.webp" className="portfolio__others-item" alt="">
                            <img src="../../assets/img/others42.webp" className="portfolio__others-item" alt="">
                            <img src="../../assets/img/others43.webp" className="portfolio__others-item" alt="">
                        </div>
                    </div>

                    <div className="portfolio__right">
                        <p className="portfolio__item-title">Ремонт совмещенного санузла</p>
                        <div className="portfolio__item-info">

                            <div className="portfolio__item-property">
                                <p className="portfolio__property-title">4 m2</p>
                                <p className="portfolio__property-description">Площадь санузла </p>
                            </div>


                            <div className="portfolio__item-property">
                                <p className="portfolio__property-title">14 дней</p>
                                <p className="portfolio__property-description">Сроки ремонта </p>
                            </div>

                        </div>

                        <div className="portfolio__video">
                            <img src="../../assets/img/watch1.webp" className="portfolio__video-back" alt="">
                            <a href="about.html" className="portfolio__item-link">
                                <img src="../../assets/img/playvideo.webp" className="portfolio__play-video" alt="">
                                <p className="portfolio__link-text">Смотреть видео</p>
                            </a>
                        </div>

                        <a href="contact.html" className="button portfolio__button"> Подробнее</a>
                    </div>
                </div>




                <div className="portfolio__item">
                    <div className="portfolio__left">
                        <div className="portfolio__ba">

                            <div className="portfolio__before">
                                <img src="../../assets/img/before5.webp" className="portfolio__ba-img" alt="">
                                <div className="portfolio__ba-container">
                                    До
                                </div>
                            </div>

                            <div className="portfolio__after">
                                <img src="../../assets/img/after5.webp" className="portfolio__ba-img" alt="">
                                <div className="portfolio__ba-container">
                                    После
                                </div>
                            </div>

                            <div className="portfolio__arrows">
                                <img src="../../assets/img/arrowb.webp" className="portfolio__arrow" alt="">
                                <img src="../../assets/img/arrowa.webp" className="portfolio__arrow" alt="">
                            </div>
                        </div>

                        <div className="portfolio__others-img">
                            <img src="../../assets/img/others51.webp" className="portfolio__others-item" alt="">
                            <img src="../../assets/img/others52.webp" className="portfolio__others-item" alt="">
                            <img src="../../assets/img/others53.webp" className="portfolio__others-item" alt="">
                        </div>
                    </div>

                    <div className="portfolio__right">
                        <p className="portfolio__item-title">Ремонт санузла</p>
                        <div className="portfolio__item-info">

                            <div className="portfolio__item-property">
                                <p className="portfolio__property-title">4,5 m2</p>
                                <p className="portfolio__property-description">Площадь санузла </p>
                            </div>


                            <div className="portfolio__item-property">
                                <p className="portfolio__property-title">15 дней</p>
                                <p className="portfolio__property-description">Сроки ремонта </p>
                            </div>

                        </div>

                        <div className="portfolio__video">
                            <img src="../../assets/img/watch1.webp" className="portfolio__video-back" alt="">
                            <a href="about.html" className="portfolio__item-link">
                                <img src="../../assets/img/playvideo.webp" className="portfolio__play-video" alt="">
                                <p className="portfolio__link-text">Смотреть видео</p>
                            </a>
                        </div>

                        <a href="contact.html" className="button portfolio__button"> Подробнее</a>
                    </div>
                </div>




                <div className="portfolio__item">
                    <div className="portfolio__left">
                        <div className="portfolio__ba">

                            <div className="portfolio__before">
                                <img src="../../assets/img/before6.webp" className="portfolio__ba-img" alt="">
                                <div className="portfolio__ba-container">
                                    До
                                </div>
                            </div>

                            <div className="portfolio__after">
                                <img src="../../assets/img/after6.webp" className="portfolio__ba-img" alt="">
                                <div className="portfolio__ba-container">
                                    После
                                </div>
                            </div>

                            <div className="portfolio__arrows">
                                <img src="../../assets/img/arrowb.webp" className="portfolio__arrow" alt="">
                                <img src="../../assets/img/arrowa.webp" className="portfolio__arrow" alt="">
                            </div>
                        </div>

                        <div className="portfolio__others-img">
                            <img src="../../assets/img/others61.webp" className="portfolio__others-item" alt="">
                            <img src="../../assets/img/others62.webp" className="portfolio__others-item" alt="">
                            <img src="../../assets/img/others63.webp" className="portfolio__others-item" alt="">
                        </div>
                    </div>

                    <div className="portfolio__right">
                        <p className="portfolio__item-title">Ремонт ванной комнаты</p>
                        <div className="portfolio__item-info">

                            <div className="portfolio__item-property">
                                <p className="portfolio__property-title">4,5 m2</p>
                                <p className="portfolio__property-description">Площадь санузла </p>
                            </div>


                            <div className="portfolio__item-property">
                                <p className="portfolio__property-title">16 дней</p>
                                <p className="portfolio__property-description">Сроки ремонта </p>
                            </div>

                        </div>

                        <div className="portfolio__video">
                            <img src="../../assets/img/watch1.webp" className="portfolio__video-back" alt="">
                            <a href="about.html" className="portfolio__item-link">
                                <img src="../../assets/img/playvideo.webp" className="portfolio__play-video" alt="">
                                <p className="portfolio__link-text">Смотреть видео</p>
                            </a>
                        </div>

                        <a href="contact.html" className="button portfolio__button"> Подробнее</a>
                    </div>
                </div>




            </div>
        </div>


        <Calculator/>



    </div>
</template>







<script>
import Calculator from '../../components/Calculator.vue'

export default {
    components: {
        Calculator,
    }

}
</script>








<style scoped>
@import "../../assets/fonts/fonts.css";
@import "../../assets/main.css";





.main {

    background: url(../../assets/img/main-back.webp) no-repeat;
    background-size: cover;
    background-position: center;

}


.main__container {
    padding: 170px 0 300px 0;
    max-width: 1600px;
    margin: auto;
}

.main__offer {
    max-width: 90%;
    width: fit-content;
    margin: auto;
}

.main__top {
    display: flex;
    gap: 20px;
    align-items: center;
    justify-content: center;
    margin: auto;
}

.main__line {
    max-width: 116px;
    width: 100%;
    height: 1px;
    background: #693030;

}

.main__offer-text {
    font-family: 'montserrat', sans-serif;
    font-size: 60px;
    font-weight: 700;
    line-height: 63.54px;
    letter-spacing: 0.17em;
    text-align: center;
    color: #FFFFFF;
    text-transform: uppercase
}

.main__slogan {
    font-family: 'garamond', sans-serif;
    font-size: 45px;
    font-weight: 400;
    line-height: 54.5px;
    text-align: center;
    color: #FFFFFF;
    margin: 20px 0 00 0;

}








.why-us {
    max-width: 1600px;
    margin: auto;
    width: 90%;
    margin: 0 auto;
    background: #F4E8DA2E;
    border-radius: 0 0 32px 32px;
    padding: 100px 100px 40px 100px;
}

.why-us__prev {

    font-family: 'lato', sans-serif;
    font-size: 17px;
    line-height: 22.1px;
    letter-spacing: 0.04em;
    color: #693030;
    text-transform: uppercase;

}

.why-us__title {
    font-family: 'garamond', sans-serif;
    font-size: 55px;
    color: #2F2F2F;
    font-weight: 400;
    line-height: 55px;
    text-align: left;
    margin: 40px 0 0 0;

}

.why-us__line {
    width: 100%;
    height: 1px;
    background: #693030;
    margin: 70px 0;

}

.why-us__bullits {
    display: grid;
    width: 100%;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));

    gap: 50px;
}

.why-us__bullit {
    max-width: 164px;
}

.why-us__item-title {
    font-family: 'garamond', sans-serif;
    font-size: 40px;
    font-weight: 400;
    line-height: 40px;
    text-align: left;
    color: #2F2F2F;
}

.why-us__item-description {
    font-family: 'lato', sans-serif;
    font-size: 18px;
    font-weight: 400;
    line-height: 27px;
    letter-spacing: 0.01em;
    text-align: left;
    color: #3C3D3D;
    margin: 15px 0 0 0;
}


.why-us__link {
    display: flex;
    gap: 15px;
    align-items: center;
    margin: 30px 0 0 0;
    text-decoration: none;

}

.why-us__link-text {
    font-family: 'lato', sans-serif;
    font-size: 24px;
    font-weight: 400;
    line-height: 36px;
    letter-spacing: 0.01em;
    text-align: left;
    color: #DBAF15;



}


.count-form {
  padding: 150px 0;
  width: 90%;
  max-width: 1600px;
  margin: auto;
}
.count-form__block-title {
  max-width: 1200px;
  margin: auto;
}

.count-form__title-text {
  text-align: left;
}

.count-form__title-line {
  margin: 20px 0 0 0;
  max-width: 711px;
}

.count-form__container {
  position: relative;
  display: grid;
  align-items: center;
  margin: 100px 0 0 0;
}

.count-form__img {
  height: 364.89px;
  width: 70%;
  object-fit: cover;
  object-position: center;
  /* max-width: 815px; */
  position: absolute;
  left: -10%;
  z-index: 0;
}

.count-form__form {
  width: 100%;
  max-width: 973px;
  background: rgb(242, 229, 213);
  background: linear-gradient(
    270deg,
    rgb(242, 229, 213) 65%,
    rgba(21, 0, 87, 0) 100%
  );
  padding: 40px 100px 40px 40px;
  border-radius: 16px;
  align-self: end;
  justify-self: end;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 15px;
}
.count-form__pre-input {
  font-family: "lato", sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 27px;
  letter-spacing: 0.01em;
  text-align: left;
  color: #3c3d3d;
  margin: 0 0 3px 0;
}

.count-form__input {
  border-radius: 10px;
  background: #ffffff;
  border: none;
  padding: 15px 29px;

  font-family: "lato", sans-serif;
  font-size: 20px;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: 0.01em;
  text-align: left;
  color: #3c3d3d80;
  outline: none;
}

.specializations {
  width: 90%;
  max-width: 1600px;
  margin: auto;
}

.specializations__wrapper {
  max-width: 1171px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 30px;
  margin: 100px auto 0 auto;
}

.specializations__item {
  max-width: 270px;
  width: 100%;
  border-radius: 16px;
  padding: 70px 0;
  display: grid;
  margin: auto;
  height: 100%;
}

.specializations__item1 {
  background: url(../../assets/img/portf_img1.webp) no-repeat;
  background-position: center;
  background-size: cover;
}

.specializations__container {
  width: 100%;
  padding: 16px;
  background: #d0b194e0;
  align-self: center;
}

.specializations__name {
  font-family: "lato", sans-serif;
  font-size: 17px;
  font-weight: 500;
  line-height: 25.5px;
  letter-spacing: 0.01em;
  text-align: center;
  color: #ffffff;
}

.specializations__item2 {
  background: url(../../assets/img/portf_img2.webp) no-repeat;
  background-position: center;
  background-size: cover;
}

.specializations__item3 {
  background: url(../../assets/img/portf_img3.webp) no-repeat;
  background-position: center;
  background-size: cover;
}

.specializations__item4 {
  background: url(../../assets/img/portf_img4.webp) no-repeat;
  background-position: center;
  background-size: cover;
}

.specializations__item5 {
  background: url(../../assets/img/portf_img5.webp) no-repeat;
  background-position: center;
  background-size: cover;
}

.specializations__item6 {
  background: url(../../assets/img/portf_img6.webp) no-repeat;
  background-position: center;
  background-size: cover;
}

.specializations__item7 {
  background: url(../../assets/img/portf_img7.webp) no-repeat;
  background-position: center;
  background-size: cover;
}

.specializations__item8 {
  background: url(../../assets/img/portf_img8.webp) no-repeat;
  background-position: center;
  background-size: cover;
}

.specializations__item9 {
  background: url(../../assets/img/portf_img9.webp) no-repeat;
  background-position: center;
  background-size: cover;
}

.specializations__item10 {
  background: url(../../assets/img/portf_img10.webp) no-repeat;
  background-position: center;
  background-size: cover;
}

.specializations__item11 {
  background: url(../../assets/img/portf_img11.webp) no-repeat;
  background-position: center;
  background-size: cover;
}

.specializations__item12 {
  background: url(../../assets/img/portf_img12.webp) no-repeat;
  background-position: center;
  background-size: cover;
}

.portfolio {
  width: 90%;
  max-width: 1600px;
  margin: auto;
  padding: 120px 0;
}

.portfolio__wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(520px, 1fr));
  max-width: 1429px;

  gap: 30px;
  width: 100%;
  margin: 100px auto 0 auto;
}

.portfolio__item {
  box-shadow: 0px 0px 44px 0px #3c3d3d38;
  padding: 40px 20px;
  border-radius: 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
  max-width: 699px;
  height: 100%;
  margin: auto;
}

.portfolio__left {
  max-width: 379px;
}

.portfolio__ba {
  display: grid;
  position: relative;
  grid-template-columns: 1fr 1fr;
  gap: 3px;
}

.portfolio__before {
  position: relative;
  overflow: hidden;
  border-radius: 16px 0px 0px 16px;
}

.portfolio__ba-img {
  object-fit: cover;
  object-position: center;
}

.portfolio__ba-container {
  position: absolute;
  bottom: 0;
  width: 100%;
  background: #d0b194e0;
  padding: 5px;
  font-family: "lato", sans-serif;
  font-size: 20px;
  font-weight: 500;
  line-height: 30px;
  letter-spacing: 0.01em;
  text-align: center;
  color: #ffffff;
}

.portfolio__after {
  overflow: hidden;
  position: relative;
  border-radius: 0px 16px 16px 0px;
}

.portfolio__arrows {
  position: absolute;
  align-self: center;
  justify-self: center;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.portfolio__others-img {
  margin: 15px 0 0 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}

.portfolio__others-item {
  width: 100%;
}

.portfolio__right {
  max-width: 252.26px;
}

.portfolio__item-title {
  font-family: "garamond", sans-serif;
  font-size: 22px;
  color: #2f2f2f;
  font-weight: 500;
  line-height: 22px;
  text-align: left;
}

.portfolio__item-info {
  display: flex;
  align-items: start;
  justify-content: space-between;
  gap: 15px;
  margin: 30px 0;
}

.portfolio__property-title {
  font-family: "lato", sans-serif;
  font-size: 15px;
  color: #3c3d3d;
  font-weight: 900;
  line-height: 22.5px;
  letter-spacing: 0.01em;
  text-align: left;
}

.portfolio__property-description {
  font-family: "lato", sans-serif;
  font-size: 15px;
  font-weight: 400;
  line-height: 22.5px;
  letter-spacing: 0.01em;
  text-align: left;
  color: #3c3d3d;
}

.portfolio__video {
  position: relative;
  display: grid;
}

.portfolio__video-back {
  width: 100%;
}

.portfolio__item-link {
  display: flex;
  gap: 10px;
  align-items: center;
  text-decoration: none;
  position: absolute;
  align-self: center;
  justify-self: center;
}

.portfolio__link-text {
  font-family: "lato", sans-serif;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: 0.035em;
  text-align: left;
  color: #ffffff;
  text-transform: uppercase;
}

</style>
