<template>
    <div class="index-center">
        <div class="center-content">
            <div class="center-slogan"></div>
            <div class="center-button" @click="openUpperLayer">CLICK TO ENTER THE ARTICLE</div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
    name: 'IndexCenter',
    setup(props, { emit }) {
        const $router = useRouter();
        const openUpperLayer = function () {
            $router.push('/article');
            emit('openUpperLayer');
        };
        return {
            openUpperLayer
        };
    }
});
</script>

<style lang="scss" scoped>
@keyframes buttonAnimate {
    0% {
        color: #34ff67;
    }
    50% {
        color: rgba($color: #458b74, $alpha: 0.5);
    }
    100% {
        color: #34ff67;
    }
}
.index-center {
    width: 97%;
    height: 80%;
    margin: 0 auto;
    // border: 3px solid #333;
    .center-content {
        position: relative;
        display: flex;
        align-items: center;
        flex-direction: column;
        max-width: 1040px;
        width: 80%;
        height: 100%;
        margin: 0 auto;
        // border: 3px solid #fff333;
        overflow: hidden;
    }
    .center-slogan {
        position: absolute;
        top: 50%;
        transform: translate(0, -50%);
        max-height: 396px;
        width: 80%;
        height: 40%;
        // border: 3px solid #fff;
    }
    .center-button {
        position: absolute;
        top: 75%;
        width: 70%;
        padding: 2%;
        border: 2px solid #34ff67;
        font-family: 'Comic Sans MS', cursive;
        font-size: 24px;
        font-weight: 600;
        text-align: center;
        color: #34ff67;
        cursor: url('https://cc-space.oss-cn-beijing.aliyuncs.com/cursor-hand.png') 8 0, auto;
        animation: buttonAnimate ease-in 1.5s infinite;
    }
}
</style>
