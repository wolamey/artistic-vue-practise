<template>

    <div class="contacts">
        <div className="block__title">
            <p className="block__title-text">
                Наши контакты
            </p>
            <div className="block__title-line"></div>
        </div>



        <div className="contacts__container">
            <img src="../../assets/img/contacts_main.png" className="contacts__img" alt="">
            <div className="contacts__form">

                <p class="contacts__call-time">Звоните: 08.00 - 20.00 Без выходных</p>
                <a href="tel:+89500191919" class="contacts__tel">+8(950) 019 - 19 - 19</a>
                <a class="contacts__email" href="mailto:plitka-vanna-spb@yandex.ru">plitka-vanna-spb@yandex.ru</a>

                <button @click="isContactsModalOpen=true" class="button">Обратный звонок</button>

                <a class="contacts__watsapp" href="https://wa.me/89500191919"> Мы в WatsAppp <img
                        src="../../assets/img/whatsapp__contacts.png" alt=""></a>
            </div>
        </div>



        <div v-show="isContactsModalOpen" @click="isContactsModalOpen=false" class="contacts__modal">
            <form action="" @click="$event.stopPropagation(); " className="contacts__modal-form">


                <div className="contacts__modal-input-block">
                    <p className="contacts__modal-pre-input">Имя</p>
                    <input @paste="$event.preventDefault()"  v-model="modalFormName" @keypress="noDigits($event)" type="text"
                        className="contacts__modal-input" placeholder="Ваше имя     "   v-on:keydown.enter.prevent="addCategory"  required>
                </div>

                <div className="contacts__modal-input-block">
                    <p className="contacts__modal-pre-input">Телефон</p>
                    <input  v-on:keydown.enter.prevent="addCategory"  v-model="modalFormNumberTel" type="tel" className="contacts__modal-input"
                        placeholder="+ 7(___)___-__-__ " required>
                </div>

                <input  type="button" @click="modalFormSubmit(); $event.preventDefault()" className="contacts__modal-submit button"
                    value="Рассчитать стоимость">

                    <button @click="isContactsModalOpen=false" class="contacts__modal-close">
                        <img src="../../assets/img/cross.svg" class="contacts__modal-close-img" alt="">
                    </button>
            </form>
        </div>

        <div className="form__error" v-show="error !== ''">

<div class="form__error-container">
    {{ error }}

    <button class="form__error-close-button button" @click="error = ''">Ок</button>
</div>
</div>
    </div>
</template>



<script>
export default {
    data() {
        return {
            isContactsModalOpen: false,
            modalFormName:'',
            modalFormNumberTel:'',
            telRegex: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
            error:''

        }

    },
    methods:{
        modalFormSubmit(){
            if (this.modalFormName === '' || this.modalFormNumberTel === '' ) {
                this.error = 'Введите все данные'
                return
            }
            if (!this.telRegex.test(this.modalFormNumberTel)) {
                this.error = 'Введите корректный номер телефона'
                return

            }
            this.error = 'Спасибо за заполнение формы, мы свяжемся  с вами скоро!'
            this.isContactsModalOpen=false;
        },
        noDigits(event) {
            if ("1234567890".indexOf(event.key) != -1)
                event.preventDefault();
        }

    }

}
</script>



<style scoped>
@import "../../assets/fonts/fonts.css";
@import url(../../assets/main.css);
</style>