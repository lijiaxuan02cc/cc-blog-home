<template>
    <div class="index-upper-layer">
        <div class="layer-content"></div>
        <div class="footer-button" @click="hideUpperLayer"></div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'IndexFooter'
});
</script>

<style lang="scss" scoped>
.index-upper-layer {
    height: 100%;
    width: 100%;
    .layer-content {
        height: 80%;
        overflow-y: scroll;
    }
    .footer-button {
        height: 10%;
        background-color: #7df97b;
        overflow: hidden;
    }
}
</style>
