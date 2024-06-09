<template>
  <div className="calculator">
    <div className="block__title ">
      <p className="block__title-text ">
        Расчитайте стоимость ремонта
      </p>
      <div className="block__title-line "></div>
    </div>



    <div className="calculator__bathroom">
      <div className="calculator__bathroom-radio">
        <p className="calculator__item-name">Тип санузла:</p>

        <div className="calculator__radio-content">
          <label className="calculator__item-radio-wrapper">Совмещённый
            <input className="calculator__item-radio" type="radio" checked="checked" name="radio" v-model="bathType"
              value="bathType__combinet">
            <span className="calculator__radio-checkmark"></span>
          </label>
          <label className="calculator__item-radio-wrapper">Раздельный
            <input className="calculator__item-radio" type="radio" name="radio" v-model="bathType"
              value="bathType__separated">
            <span className="calculator__radio-checkmark"></span>
          </label>
        </div>
      </div>

      <div className="calculator__square">
        <p className="calculator__item-name">Площадь: </p>

        <div className="calculator__square-wrapper">
          <input required v-model="bath__square" type="number" name="number" min="0"
            className="calculator__square-input" placeholder="4 м2" value="">

          <div className="calculator__square-arrows">
            <button className="calculator__square-arrow" type="button"
              @click="this.$el.querySelector('[type=number]').stepUp(); bath__square++">
              <svg width="9" height="5" viewBox="0 0 9 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 4L4.5 1L8 4" stroke="#693030" />
              </svg>

            </button>
            <button className="calculator__square-arrow" type="button"
              @click="this.$el.querySelector('[type=number]').stepDown(); if (bath__square > 0) bath__square--">
              <svg width="9" height="5" viewBox="0 0 9 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L4.5 4L8 1" stroke="#693030" />
              </svg>
            </button>
          </div>
        </div>

      </div>

    </div>
    <!-- 
    <h1>{{Number(walls__matherial)  + "    "+ typeof additionalServices+ "    "+typeof floor__matherial+"    "+typeof ceiling__matherial+"    "+typeof bath__square+"    "+typeof bathType}}</h1> -->


    <div className="calculator__walls">

      <div className="calculator__item-wall">
        <p className="calculator__item-name">Материал отделки стен:</p>
        <select v-model="walls__matherial" name="Выберите" id="" className="calculator__select" required>
          <option selected disabled className="calculator__default-option" value="">Выберите</option>
          <option value="200" className="calculator__option">Плитка</option>
          <option value="350" className="calculator__option">Керамогранит</option>
          <option value="550" className="calculator__option">Мозаика</option>

        </select>

      </div>


      <div className="calculator__item-wall">
        <p className="calculator__item-name">Материал отделки пола:</p>
        <select v-model="floor__matherial" name="Выберите" id="" className="calculator__select" required>
          <option selected disabled className="calculator__default-option" value="">Выберите</option>
          <option value="10" className="calculator__option">Плитка</option>
          <option value="25" className="calculator__option">Керамогранит</option>

        </select>

      </div>


      <div className="calculator__item-wall">
        <p className="calculator__item-name">Материал отделки потолка:</p>
        <select v-model="ceiling__matherial" name="Выберите" id="" className="calculator__select" required>
          <option selected disabled className="calculator__default-option" value="">Выберите</option>
          <option value="30" className="calculator__option">Натяжной потолок</option>
          <option value="45" className="calculator__option">Реечный потолок</option>
          <option value="55" className="calculator__option">Панель ПВХ</option>

        </select>

      </div>


    </div>



    <div className="calculator__services">
      <p className="calculator__item-name">Дополнительные услуги:</p>

      <div className="calculator__services-wrapper">
        <label className="calculator__services-item">Подвесной унитаз (инсталляция)
          <input v-model="additionalServices" value="350" type="checkbox" className="calculator__services-check-box">
          <span className="calculator__services-checkmark"></span>
        </label>
        <label className="calculator__services-item">Душевая кабина
          <input v-model="additionalServices" value="500" type="checkbox" className="calculator__services-check-box">
          <span className="calculator__services-checkmark"></span>
        </label>
        <label className="calculator__services-item">Гигиенический душ (биде)
          <input v-model="additionalServices" value="300" type="checkbox" className="calculator__services-check-box">
          <span className="calculator__services-checkmark"></span>
        </label>
        <label className="calculator__services-item">Конструкция из ГКП (ниши/полки)
          <input v-model="additionalServices" value="400" type="checkbox" className="calculator__services-check-box">
          <span className="calculator__services-checkmark"></span>
        </label>
        <label className="calculator__services-item">Теплый пол
          <input v-model="additionalServices" value="150" type="checkbox" className="calculator__services-check-box">
          <span className="calculator__services-checkmark"></span>
        </label>
        <label className="calculator__services-item">Люк “неведимка” под плитку
          <input v-model="additionalServices" value="230" type="checkbox" className="calculator__services-check-box">
          <span className="calculator__services-checkmark"></span>
        </label>
        <label className="calculator__services-item">Водонагреватель
          <input v-model="additionalServices" value="800" type="checkbox" className="calculator__services-check-box">
          <span className="calculator__services-checkmark"></span>
        </label>
      </div>

    </div>






    <div className="calculator__form-wrapper">
      <p className="calculator__form-title">Осталось заполнить форму</p>

      <div className="calculator__content">
        <p className="calculator__form-prev">Вы узнаете стоимость ремонта
          и получите скидку 10 %</p>

        <form action="" className="calculator__form">
          <input v-model="calculator__name" @paste="$event.preventDefault()" required className="calculator__form-input" @keypress="noDigits($event)" type="name"
            placeholder="Ваше имя     ">
          <input v-model="calculator__tel" required className="calculator__form-input" type="tel"
            placeholder="+ 7(___)___-__-__ " name="" id="">

          <input @click="countPrice()" type="button" className="button calculator__button-submit"
            value="Рассчитать стоимость" name="" id="">
        </form>
      </div>
    </div>



    <div className="calculator__error" v-show="error !== ''">

      <div class="calculator__error-container">
        {{ error }}

        <button class="calculator__error-close-button button" @click="error = ''; isScrollAvailable = 'true'">Ок</button>
      </div>

    </div>


    <div @click="showResult = false; isScrollAvailable = true" className="calculator__show-result" v-show="showResult">

      <div @click="$event.stopPropagation();" className="calculator__result-container">
        <p className="calculator__result-title">Добрый день, {{ calculator__name }}, cпасибо за заполнение формы, мы скоро с вами свяжемся! </p>
        Сумма ремонта составляет:<b class="calculator__result-price">{{ additionalServicesTotalPrice }}$</b>
        <br> <br>
        Сумма ремонта со скидкой 10%: <b class="calculator__result-price"> {{ additionalServicesTotalPrice * 0.9 }}$</b>



        <button @click="showResult = false; isScrollAvailable = true" className="calculator__result-close-button">
          <img src="../assets/img/cross.svg" className="calculator__cross-img" alt="">
        </button>
      </div>




    </div>
  </div>
</template>



<script>


export default {
  data() {
    return {
      bathType: '',
      bath__square: '',
      walls__matherial: '',
      floor__matherial: '',
      ceiling__matherial: '',
      additionalServices: [],
      additionalServicesTotalPrice: 0,
      calculator__name: '',
      calculator__tel: '',

      totalPrice: 0,

      error: '',

      showResult: false,


      isScrollAvailable: true,
      telRegex: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,


    }
  },

  methods: {

    countPrice() {

      if (this.walls__matherial === '' || this.bath__square === '' || this.floor__matherial === '' || this.ceiling__matherial === '' || this.calculator__name === '' || this.calculator__tel === '') {
        this.error = "Необходимо ввести все данные";
        this.isScrollAvailable = false;

        return;

      } else if (!this.telRegex.test(this.calculator__tel)) {
        this.error = "Пожалуйста, введите корректный номер телефона ";
        this.isScrollAvailable = false;
        return;
      }

  



      this.error = '';
      this.additionalServicesTotalPrice = this.additionalServices.reduce((acc, el) => acc + Number(el), 0);


      this.totalPrice = 100 * this.bath__square + Number(this.walls__matherial) + Number(this.floor__matherial * this.bath__square) + Number(this.ceiling__matherial * this.bath__square) + this.additionalServicesTotalPrice;

      this.showResult = true;
      this.isScrollAvailable = false;
    },
    noDigits(event) {
      if ("1234567890".indexOf(event.key) != -1)
        event.preventDefault();
    }




  },
  watch: {
    isScrollAvailable(newValue) {
      if (newValue) {
        document.body.style.overflow = 'scroll'; // Разрешить прокрутку
      } else {
        document.body.style.overflow = 'hidden'; // Запретить прокрутку
      }
    }
  }
}



</script>



<style scoped>
@import "../assets/fonts/fonts.css";
@import "../assets/main.css";







.calculator {
  width: 90%;
  max-width: 1600px;
  margin: auto;
  padding: 0 0 50px 0;
  position: relative;

}

.calculator__bathroom {
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 70px auto;
  gap: 100px;
  flex-wrap: wrap;
}

.calculator__bathroom-radio {
  display: flex;
  align-items: center;
  gap: 50px;
}

.calculator__item-name {
  font-family: "lato", sans-serif;
  font-size: 18px;
  font-weight: 900;
  line-height: 27px;
  letter-spacing: 0.01em;
  text-align: left;
  color: #3c3d3d;
}

.calculator__radio-content {
  display: flex;
  align-items: center;
  gap: 30px;
}

.calculator__item-radio-wrapper {
  font-family: "lato", sans-serif;
  font-size: 18px;
  color: #3c3d3d;
  font-weight: 400;
  line-height: 27px;
  letter-spacing: 0.01em;
  text-align: left;

  display: flex;
  align-items: center;
  position: relative;
  padding-left: 35px;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.calculator__item-radio {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

.calculator__radio-checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: white;
  border-radius: 50%;
  border: 1px solid #693030;
}

.calculator__item-radio-wrapper .calculator__item-radio:checked~.calculator__radio-checkmark {
  background-color: white;
}

.calculator__radio-checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

.calculator__item-radio-wrapper .calculator__item-radio:checked~.calculator__radio-checkmark:after {
  display: block;
}

.calculator__item-radio-wrapper .calculator__radio-checkmark:after {
  top: 2px;
  left: 10%;
  background: #693030;

  width: 80%;
  height: 80%;
  border-radius: 50%;
}

.calculator__square {
  display: flex;
  align-items: center;
  gap: 14px;
}

.calculator__square-wrapper {
  display: flex;
  gap: 12px;
  align-items: center;
}

.calculator__square-input {
  background: #faf4ed;
  border-radius: 8px;
  outline: none;
  border: none;
  padding: 7px 17px;
  font-family: "lato", sans-serif;

  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.01em;
  text-align: left;

  max-width: 170px;
}

.calculator__square-arrows {
  display: flex;
  flex-direction: column;
  gap: 7px;
}


.calculator__square-arrow {
  border: 1px solid #693030;
  background-color: transparent;
  width: 25px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  cursor: pointer;
}

.calculator__square-input::-webkit-outer-spin-button,
.calculator__square-input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  margin: 0;
}



.calculator__walls {
  margin: auto;
  width: 90%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 300px));
  align-items: start;
  justify-content: space-between;
  gap: 20px;
}

.calculator__item-wall {
  display: grid;
  gap: 10px;
}

.calculator__select {
  max-width: 272px;
  font-family: 'lato', sans-serif;
  color: #3C3D3D;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.01em;
  text-align: left;

  border: none;
  padding: 7px 0px 7px 27px;
  border-radius: 8px;
  outline: none;
  appearance: none;
  cursor: pointer;
  background: url(../assets/img/select-arrow.png) no-repeat 96% 10px, linear-gradient(to right,
      #faf4ed 0%,
      #faf4ed 90%,
      #c5b19d 90%,
      #c5b19d 100%);
}

.calculator__default-option {
  font-family: 'lato', sans-serif;
  font-size: 16px;
  color: #3C3D3D99;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.01em;
  text-align: left;

}






.calculator__services {
  width: 90%;
  margin: 63px auto;
}

.calculator__services-wrapper {
  width: 69%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));

  margin: 40px 0 0 0;
  gap: 20px 50px;
}

.calculator__services-item {
  font-family: 'lato', sans-serif;
  font-size: 16px;
  color: #3C3D3D;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.01em;
  text-align: left;



  display: flex;
  align-items: center;
  position: relative;
  padding-left: 45px;
  padding-top: 3px;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.calculator__services-item input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;

  border: 2px solid #C5B19D
}

.calculator__services-checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 30px;
  width: 30px;
  background-color: #fff;
  border: 2px solid #C5B19D;
  border-radius: 5px;
}

.calculator__services-checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

.calculator__services-item input:checked~.calculator__services-checkmark:after {
  display: block;
}

.calculator__services-item .calculator__services-checkmark:after {
  left: 10px;
  top: 6px;
  width: 5px;
  height: 10px;
  border: solid #C5B19D 2px;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}


.calculator__form-wrapper {
  background: #F6EDE3;

  border-radius: 16px;
  padding: 55px 29px 55px 100px;
}

.calculator__form-title {
  font-family: 'garamond', sans-serif;
  font-size: 40px;
  color: #2F2F2F;
  margin: 0 0 25px 0;
  font-weight: 400;
  line-height: 40px;
  text-align: left;

}

.calculator__content {
  display: flex;
  gap: 50px;
  flex-wrap: wrap;
  justify-content: space-between;
}

.calculator__form-prev {
  font-family: 'lato', sans-serif;
  font-size: 18px;
  color: #3C3D3D;
  max-width: 314px;
  font-weight: 400;
  line-height: 27px;
  letter-spacing: 0.01em;
  text-align: left;

}

.calculator__form {
  width: 100%;
  max-width: 735px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 30px;

}

.calculator__form-input {
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

.calculator__button-submit {
  border-radius: 16px;
  padding: 19px 10px;
  max-width: none;
  margin: 0;
  font-weight: 600;
  font-size: 18px;
  min-width: 225px;
}


.calculator__error {


  transition: 0.3s;

  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #00000028;
  display: flex;
  justify-content: center;
  align-items: center;

}


.calculator__error-container {

  padding: 30px;
  background: #d0b194;
  font-family: 'lato', sans-serif;
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.01em;
  text-align: center;
  color: #ffffff;


}

.calculator__error-close-button {
  border-radius: 10px;
  margin: 20px auto 0 auto;

}



.calculator__show-result {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #00000028;
  display: flex;
  justify-content: center;
  align-items: center;

}

.calculator__result-container {
  padding: 40px;
  position: relative;
  background: #d0b194;

  font-family: 'montserrat', sans-serif;
  font-size: 26px;
  font-weight: 400;
  color: #ffffff;
  line-height: 27px;

  letter-spacing: 0.01em;
  text-align: left;

  max-width: 700px;


}

.calculator__result-title {
  font-family: 'garamond', sans-serif;
  font-size: 50px;
  color: #ffffff;
  font-weight: 400;
  line-height: 50px;
  text-align: center;
  margin: 0 0 40px 0;

}

.calculator__result-price {
  margin: 0 0 0 10px;
}

.calculator__result-close-button {
  background-color: transparent;
  border: none;
  outline: none;
  width: 30px;
  height: 30px;
  position: absolute;
  top: -50px;
  right: -50px;
  cursor: pointer;
}

.calculator__cross-img {
  width: 100%;
  height: 100%;
}



@media(max-width:769px) {

  .calculator__bathroom-radio {
    flex-direction: column;
    align-items: start;
    gap: 18px;
  }

  .calculator__radio-content {
    flex-direction: column;
    gap: 10px;
  }

  .calculator__item-radio-wrapper {
    width: 90%;
    margin: auto;
  }

  .calculator__bathroom {
    flex-direction: column;
    align-items: start;
    gap: 15px;
    margin: 50px 0 25px 0;
    width: 90%;
    margin: 50px auto 25px auto;
  }

  .calculator__walls {
    width: 90%;
  }


}

@media(max-width: 426px) {
  .block__title-text {
    font-size: 25px;
    font-weight: 400;
    line-height: 25px;

  }

  .calculator {
    width: 100%;
  }

  .calculator__form-title {
    width: 90%;
    margin: 0 auto 25px auto;
  }

  .calculator__form-prev {
    width: 90%;
    max-width: none;

    margin: auto;
  }

  .calculator__form-wrapper {
    border-radius: 0;
    padding: 0;
    background: #fff;
  }

  .calculator__form {
    background: #F6EDE3;
    padding: 35px;
  }

  .calculator__item-name {
    font-size: 16px;
  }

  .calculator__square-input {
    max-width: 149px;
  }
}
</style>