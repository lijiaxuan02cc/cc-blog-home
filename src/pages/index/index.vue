<template>
    <div class="page-index">
        <Container></Container>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Container from './components/IndexContainer.vue';
export default defineComponent({
    name: 'PageIndex',
    components: {
        Container
    },
    setup() {
        return {};
    }
});
</script>

<style lang="scss" scoped>
.page-index {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    border: 3px solid #34ff67;
    background-image: url('https://cc-space.oss-cn-beijing.aliyuncs.com/download.jpeg');
    background-size: 100% 100%;
    font-family: 'Comic Sans MS', cursive;
    cursor: url('https://cc-space.oss-cn-beijing.aliyuncs.com/cursor.png'), auto;
    overflow: hidden;
}
.conter-slogan {
    max-width: 1040px;
    max-height: 396px;
}
</style>
