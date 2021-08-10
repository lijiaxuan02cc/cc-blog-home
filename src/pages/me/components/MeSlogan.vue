<template>
    <div class="me-slogan">
        <div class="slogan-container">
            <p>生活不是一场战役</p>
            <p>但总有太多的眼睛 在等着看戏</p>
            <p>那我就是要成为他们眼中</p>
            <p>永远都追赶不上的成功案例</p>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'MeSlogan'
});
</script>

<style lang="scss" scoped>
.me-slogan {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 72px;
    letter-spacing: 1.35px;
    line-height: 0.95;
    font-family: 'Comic Sans MS', cursive;
    color: #34ff67;
    height: 90vh;
    .slogan-container {
        margin-top: -100px;
    }
}
</style>
