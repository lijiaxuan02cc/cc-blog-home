<template>
    <div class="components-call-me-container">
        <a v-for="(item, index) in config" class="components-call-me btn-primary" :href="item.jumpUrl" :key="index">
            <div class="icon-item" :style="{ backgroundImage: 'url(' + item.iconUrl + ')' }"></div>
        </a>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { callMeList } from '../../config/call-me';

export default defineComponent({
    name: 'CallMe',
    setup() {
        const config = ref(callMeList);

        return {
            config
        };
    }
});
</script>

<style lang="scss" scoped>
.components-call-me-container {
    display: flex;
    justify-content: center;
}
.components-call-me {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 42px;
    height: 42px;
    margin: 10px;
    border-radius: 50%;
    padding: 0px;
    .icon-item {
        width: 60%;
        height: 60%;
        background-size: 100% 100%;
    }
}
</style>
