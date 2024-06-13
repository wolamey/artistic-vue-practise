<template>



    <div className="examples">
        <div className="block__title">
            <p className="block__title-text">
                Примеры работ
            </p>
            <div className="block__title-line"></div>
        </div>


        <div className="examples__wrapper">


            <div className="example__item" v-for="(item, index) in examplesData " :key="index">

                <div className="example__item-text">
                    <p className="example__item-title">{{ item.title }}</p>

                    <div className="example__item-description">
                        <div className="example__item-value">
                            <p className="example__item-value-number">{{ item.square }}м2</p>
                            <p className="example__item-value-name">Площадь санузла </p>
                        </div>
                        <div className="example__item-value">
                            <p className="example__item-value-number">{{ item.day }}дней</p>
                            <p className="example__item-value-name">Время ремонта  </p>
                        </div>
                    </div>
                </div>




                <div className="examples__content">
                    <div className="examples__item-main">
                        <img :src="`src/assets/img/example${index + 1}.png`" alt="" className="examples__item-main-img">



                        <div @click="setVideo(item.videoSrcItem, true)"
                            className="examples__video">
                            <img src="../../assets/img/watch1.webp" className="examples__video-back" alt="">
                            <a href="#" className="examples__item-link">
                                <img src="../../assets/img/playvideo.webp" className="examples__play-video" alt="">
                                <p className="examples__link-text">Смотреть видео</p>
                            </a>
                        </div>
                    </div>


                    <div className="examples__item-gallery">
                        <img v-for="n=1 in 9" :key="n" :src="`src/assets/img/gallery${index+1}${n}.png`" alt="" className="examples__item-gallery-img">
                    </div>
                </div>

            </div>
        </div>
    </div>



</template>



<script>
export default{
    props: {
        videoSrc: {
            type: String,
            required: true
        },
        isVideoPlaying: {
            type: Boolean,
            required: true,

        },
        setVideo: {
            type: Function,
            required: true
        }
    },


    data(){
        return{
            examplesData:[
                {
                    title: 'Ремонт санузла в стиле лофт',
                    square: 4.2,
                    day: 15,
                    videoSrcItem:'https://www.youtube.com/embed/WNgdiARySmY?si=a1jNcAYyYk4_Z-0R'
                },
                {
                    title: 'Ремонт ванной комнаты и санузла',
                    square: 5,
                    day:20 ,
                    videoSrcItem:'https://www.youtube.com/embed/WNgdiARySmY?si=a1jNcAYyYk4_Z-0R'
                },  {
                    title: 'Ремонт совмещенного санузла ',
                    square: 4,
                    day: 14,
                    videoSrcItem:'https://www.youtube.com/embed/WNgdiARySmY?si=a1jNcAYyYk4_Z-0R'
                },  {
                    title: 'Ремонт раздельного санузла',
                    square: 4,
                    day: 15,
                    videoSrcItem:'https://www.youtube.com/embed/WNgdiARySmY?si=a1jNcAYyYk4_Z-0R'
                },  {
                    title: 'Ремонт санузла',
                    square: 4.5,
                    day: 15,
                    videoSrcItem:'https://www.youtube.com/embed/WNgdiARySmY?si=a1jNcAYyYk4_Z-0R'
                },  {
                    title: 'Ремонт ваной комнаты',
                    square: 4.5,
                    day: 16,
                    videoSrcItem:'https://www.youtube.com/embed/WNgdiARySmY?si=a1jNcAYyYk4_Z-0R'
                },  {
                    title: 'Ремонт ваной комнатыв классическом стиле',
                    square:4.2 ,
                    day: 18,
                    videoSrcItem:'https://www.youtube.com/embed/WNgdiARySmY?si=a1jNcAYyYk4_Z-0R'
                },  {
                    title: 'Ремонт  санузла ',
                    square: 3.6,
                    day: 12,
                    videoSrcItem:'https://www.youtube.com/embed/WNgdiARySmY?si=a1jNcAYyYk4_Z-0R'
                },
            ]
        }
    }
}
</script>



<style scoped>
@import "../../assets/fonts/fonts.css";
@import url(../../assets/main.css);




.examples {
  padding: 150px 0 120px 0;
}

.examples__wrapper {
  margin: 100px auto 0 auto;
  max-width: 1290px;
  display: flex;
  flex-direction: column;
  gap: 80px;
}
.example__item {
  background: linear-gradient(
      0deg,
      rgba(248, 217, 188, 0.22),
      rgba(248, 217, 188, 0.22)
    ),
    linear-gradient(270deg, #f2e5d5 0%, rgba(255, 255, 255, 0.99) 112.52%);
    box-shadow: 0px 15px 50px 5px #0000001A;
border-radius: 32px;
padding: 60px;

/* display: grid; */
/* grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); */
}
.example__item-text {
  display: grid;
grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
align-items: center;
gap: 50px;

margin:  0 0 50px 0 ;

}
.example__item-title {
  font-family: 'garamond', sans-serif;
  font-size: 40px;
font-weight: 400;
line-height: 40px;
text-align: left;
color: #2F2F2F;

}
.example__item-description {
  max-width: 360px;
  display: flex;
  align-items: center;
  gap: 33px;
  margin: auto;


}
.example__item-value {
}
.example__item-value-number {
  font-family: 'lato', sans-serif;
  font-size: 20px;
font-weight: 900;
line-height: 30px;
letter-spacing: 0.01em;
text-align: center;
margin: 0 0 5px 0;
color: #3C3D3D;

}
.example__item-value-name {

  font-family: 'lato', sans-serif;
font-size: 20px;
font-weight: 400;
line-height: 30px;
letter-spacing: 0.01em;
text-align: center;
color: #3C3D3DB2;

}
.examples__content {
  display: grid;
grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
gap: 30px;

align-items: center;
}
.examples__item-main {
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
  justify-content: center;
}

.examples__item-main-img{
  width: 100%;
  border-radius: 20px;
}

.examples__item-gallery {
display: grid;
grid-template-columns: repeat(3,1fr);
grid-template-rows: repeat(3,1fr);
gap: 11px;
height: fit-content;
}


.examples__item-gallery-img{

  width: 100%;
  border-radius: 10px;
}


.examples__video {
  position: relative;
  display: grid;
  cursor: pointer;
max-width: 433.87px;
width: 100%;
height: 155px;
overflow: hidden;
border-radius: 10px;

}

.examples__video:hover .examples__item-link {
  scale: 1.1;
}

.examples__video-back {
  width: 100% !important;
}

.examples__item-link {
  transition: 0.3s;
  display: flex;
  gap: 10px;
  align-items: center;
  text-decoration: none;
  position: absolute;
  align-self: center;
  justify-self: center;
  pointer-events: none
}

.examples__link-text {
  font-family: "lato", sans-serif;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: 0.035em;
  text-align: left;
  color: #ffffff;
  text-transform: uppercase;
}


@media(max-width: 768px){
  .example__item-text{
    grid-template-columns: auto;
    gap: 20px;
  }
  .example__item-title{
    text-align: center;
  }
  .examples__content{
    grid-template-columns: auto;

  }
}
@media(max-width: 425px){
  .example__item{
    padding: 30px;
  }
}
@media(max-width: px){}
@media(max-width: px){}
</style>