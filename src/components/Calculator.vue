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
                        <input className="calculator__item-radio" type="radio" checked="checked" name="radio">
                        <span className="calculator__radio-checkmark"></span>
                    </label>
                    <label className="calculator__item-radio-wrapper">Раздельный
                        <input className="calculator__item-radio" type="radio" name="radio">
                        <span className="calculator__radio-checkmark"></span>
                    </label>
                </div>  </div>

                <div className="calculator__square">
                    <p className="calculator__item-name">Площадь: </p>

                    <div className="calculator__square-wrapper">
                        <input type="number" name="number" min="0" className="calculator__square-input" placeholder="4 м2" value="">

                        <div className="calculator__square-arrows">
                            <button  className="calculator__square-arrow" type="button" @click="this.$el.querySelector('[type=number]').stepUp();">
                                <svg width="9" height="5" viewBox="0 0 9 5" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 4L4.5 1L8 4" stroke="#693030"/>
</svg>

                            </button>
                            <button  className="calculator__square-arrow" type="button" @click="this.$el.querySelector('[type=number]').stepDown();">
                                <svg width="9" height="5" viewBox="0 0 9 5" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 1L4.5 4L8 1" stroke="#693030"/>
</svg>
 </button>
                        </div>
                    </div>

                </div>
          
        </div>

    </div>
</template>



<script>
export default {}
</script>



<style scoped>
@import "../assets/fonts/fonts.css";
@import "../assets/main.css";






.calculator {
  width: 90%;
  max-width: 1600px;
  margin: auto;
}
.calculator__bathroom {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 70px 0;
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

.calculator__item-radio-wrapper
  .calculator__item-radio:checked
  ~ .calculator__radio-checkmark {
  background-color: white;
}
.calculator__radio-checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

.calculator__item-radio-wrapper
  .calculator__item-radio:checked
  ~ .calculator__radio-checkmark:after {
  display: block;
}

.calculator__item-radio-wrapper .calculator__radio-checkmark:after {
  top: 12%;
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


.calculator__square-arrow{
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
</style>