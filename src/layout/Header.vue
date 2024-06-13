<template>

    <header className="header">

        <div className="header__container">
            <router-link className=" header__logo" to="/">
                <img :src="logo" alt="logo" className="header__logo-img">
                <div className="header__logo-text">
                    <p className="header__logo-name">artistic</p>
                    <p className="header__logo-description">Ремонт ванных комнат</p>
                </div>
            </router-link>

            <div className="header__links">
                <router-link className="header__route" to="/">Главная</router-link>
                <a href="#prices" className="header__route" >Цены</a>
                <router-link className="header__route" to="/calculator">Калькулятор ремонта</router-link>
                <router-link className="header__route" to="/examples">Примеры работ</router-link>
                <router-link className="header__route" to="/news">Новости</router-link>
                <router-link className="header__route" to="/testimonails">Отзывы</router-link>
                <a className="header__tel" href="tel:+89500191919">+8(950) 019 - 19 - 19</a>
            </div>

            <div className="header__mobile">
                <a className="header__tel" href="tel:+89500191919">+8(950) 019 - 19 - 19</a>
                <button @click="setBurgerStatus(true)" className="header__burger-button">
                    <img src="./../assets/img/burger-menu.png" className="header__burger-img" alt="">
                </button>
            </div>
        </div>


        <div class="header__burger-open" v-if="isBurgerOpen">
            <button  @click="setBurgerStatus(false)"  className="header__burger-close-button"><img src="./../assets/img/burger-close.png"
                    className="header__burger-close-button-img" alt=""></button>

            <router-link @click="setBurgerStatus(false)" className="header__route" to="/">Главная</router-link>
            <a @click="setBurgerStatus(false)" className="header__route" href="#prices">Цены</a>
            <router-link @click="setBurgerStatus(false)" className="header__route" to="/calculator">Калькулятор ремонта</router-link>
            <router-link @click="setBurgerStatus(false)" className="header__route" to="/examples">Примеры работ</router-link>
            <router-link @click="setBurgerStatus(false)" className="header__route" to="/news">Новости</router-link>
            <router-link @click="setBurgerStatus(false)" className="header__route" to="/testimonails">Отзывы</router-link>
        </div>

    </header>

</template>







<script>
import logoImg from './../assets/img/logo.png';

export default {
    data() {
        return {
            logo: logoImg,
            isBurgerOpen: false
        };
    },
    methods:{
        setBurgerStatus(status){
            this.isBurgerOpen= status;
            return;
        }
    }
}
</script>








<style scoped>
@import "./../assets/fonts/fonts.css";

.header {

    background: #D0B194E5;
    padding: 22px 0;
    position: relative;
}

.header__container {
    max-width: 1600px;
    margin: auto;
    width: 90%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 30px;
}

.header__logo {
    display: flex;
    align-items: center;
    gap: 12px;
}

.header__logo-name {
    font-family: 'Montserrat', sans-serif;
    font-size: 17px;
    font-weight: 600;
    line-height: 18px;
    letter-spacing: 0.085em;
    text-align: left;
    color: #FFFFFF;
    text-transform: uppercase;

}

.header__logo-description {
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    font-weight: 500;
    line-height: 17.07px;
    letter-spacing: -0.015em;
    text-align: left;
    color: #FFFFFF;
    margin: 1px 0 0 0;
    text-wrap: nowrap;
}

.header__route,
.header .header__container .header__links a {
    font-family: 'Montserrat', sans-serif;
    color: #FFFFFF !important;
    font-size: 16px;
    font-weight: 500;
    line-height: 19.5px;
    text-align: left;
    text-decoration: none;

}

.header__container a {
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 12px;
}


.header__links {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    justify-content: end;


}

.router-link-active {
    font-family: 'Montserrat', sans-serif;
    color: #FFFFFF;
    font-size: 16px;
    font-weight: 500;
    line-height: 19.5px;
    text-align: left;
    text-decoration: none;
}



.router-link-exact-active {
    font-family: 'Montserrat', sans-serif;
    color: #FFFFFF;
    font-size: 16px;
    font-weight: 500;
    line-height: 19.5px;
    text-align: left;
    text-decoration: none;
}

.header__tel {
    font-family: 'Montserrat', sans-serif !important;
    font-size: 19px !important;
    font-weight: 700 !important;
    line-height: 23.16px !important;
    letter-spacing: -0.005em !important;
    text-align: left !important;
    color: #FFFFFF !important;
    text-decoration: none !important;
    text-wrap: nowrap;
}

.header__mobile {
    display: none;
}
.header__burger-button {
        background: none;
        border: none;
        outline: none;
    }

.header__burger-open{
    position: fixed;
    width: 100%;
    top: 0;
    height: 100vh;
    background: #bca894c0;

    padding: 33px 15px 0 0;
    display: flex;
    flex-direction: column;
    align-items: end;
    gap: 23px;

    z-index: 5;

}
.header__burger-close-button{
    background: none;
        border: none;
        outline: none;
}

@media(max-width: 769px) {
    .header{
        background: #BAA792;

    }
    .header__container a{
    gap: 5px;
}
    .header__logo-img {
        max-width: 30px;
    }

    .header__logo-name {
        font-size: 12px;
        font-weight: 600;
        line-height: 12.71px;
        letter-spacing: 0.085em;


    }

    .header__logo-description {
        font-size: 8px;
        font-weight: 500;
        line-height: 9.75px;
        letter-spacing: -0.04em;

    }

    .header__links {
        display: none;
    }

    .header__mobile {
        display: flex;
        gap: 8px;
        
        align-items: center;
    }



    .header__tel {
        font-size: 12px !important;
        font-weight: 700 !important;
        line-height: 14.63px !important;
        letter-spacing: -0.005em !important;

    }
}
</style>
