<template>
    <div @click="setVideo('', false)" v-if="isVideoPlaying && videoSrc !== ''" className="video">

        <div @click="stopPropagation($event)" className="video__container">
             <button @click="setVideo('', false)"
                className="video__close-button">
                <img src="../assets/img/cross.svg" className="video__cross-img" alt="">
            </button>
            <iframe className="video__iframe" :src="videoSrc" title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
    </div>
</template>

<script>
export default {
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

    methods: {

        stopPropagation(event) {
            event.stopPropagation();
        }
    }
}
</script>




<style scoped>
.video {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    background: rgba(0, 0, 0, 0.708);
    display: grid;
    z-index: 2;
}

.video__close-button {
    width: 15px;
    height: 15px;
    position: absolute;

    top: -20px;
    right: -20px;
background: none;
border: none;
cursor: pointer;
}

.video__cross-img {
    width: 100%;
    height: 100%;
}

.video__container {
    position: relative;
    align-self: center;
    justify-self: center;
    width: 80%;
    max-width: 800px;
    height: 60%;
    background: white;
    border-radius: 16px;
    /* overflow: hidden; */

    display: flex;
    align-items: center;
    justify-content: center;
}

.video__iframe {
    width: 100%;
    height: 100%;

}
</style>
