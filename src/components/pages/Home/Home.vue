<template>

    <div class="container">

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
                <img src="../../../assets/img/arrow.webp" className="why-us__arrow-img" alt="">
            </a>
        </div>
    </div>
</template>







<script>

export default {

}
</script>








<style scoped>
@import "../../../assets/fonts/fonts.css";





.main {

    background: url(../../../assets/img/main-back.webp) no-repeat;
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
    margin: auto;
    width: fit-content;
}

.main__top {
    display: flex;
    gap: 20px;
    align-items: center;
    margin: auto;
    width: fit-content;
}

.main__line {
    width: 116px;
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
</style>
