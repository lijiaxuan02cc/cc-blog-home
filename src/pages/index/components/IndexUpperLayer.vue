<template>
    <div class="index-upper-layer">
        <div class="layer-content">
            <router-view></router-view>
        </div>
        <div class="footer-button" @click="footerButtonClick">
            <div>GO BACK</div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'IndexFooter',
    setup(props, { emit }) {
        const footerButtonClick = function () {
            emit('hideUpperLayer');
        };
        return {
            footerButtonClick
        };
    }
});
</script>

<style lang="scss" scoped>
.index-upper-layer {
    height: 100%;
    width: 100%;
    .layer-content {
        height: 100%;
        overflow-y: scroll;
    }
    .footer-button {
        position: fixed;
        bottom: 0px;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 6%;
        background-color: #7df97b;
        overflow: hidden;
        font-size: 30px;
        font-weight: 600;
        cursor: url('https://cc-space.oss-cn-beijing.aliyuncs.com/cursor-hand.png') 8 0, auto;
    }
}
</style>
